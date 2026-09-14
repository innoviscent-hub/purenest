// Post-build step: crawls the built SPA with a headless browser and writes
// the fully-rendered HTML (content + react-helmet-async head tags) back to
// disk per route, so crawlers get real markup instead of the empty shell.
const path = require('path');
const fs = require('fs');
const http = require('http');
const puppeteer = require('puppeteer');

const routes = [
  '/',
  '/commercial',
  '/domestic-cleaning',
  '/domestic-cleaning/services',
  '/services',
  '/projects',
  '/about',
  '/contact',
];

const buildDir = path.join(__dirname, '..', 'build');
const PORT = 45678;

const MIME = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
};

function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const urlPath = decodeURIComponent(req.url.split('?')[0]);
      let filePath = path.join(buildDir, urlPath);

      const serveFile = (fp) => {
        fs.readFile(fp, (err, data) => {
          if (err) {
            res.writeHead(404);
            res.end('Not found');
            return;
          }
          res.writeHead(200, { 'Content-Type': MIME[path.extname(fp)] || 'application/octet-stream' });
          res.end(data);
        });
      };

      if (path.extname(urlPath) && fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        serveFile(filePath);
      } else {
        // SPA fallback, mirrors the Netlify /* -> /index.html redirect
        serveFile(path.join(buildDir, 'index.html'));
      }
    });
    server.listen(PORT, () => resolve(server));
  });
}

async function prerender() {
  if (!fs.existsSync(buildDir)) {
    console.error('build/ not found — run `npm run build` first.');
    process.exit(1);
  }

  const server = await startServer();
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    for (const route of routes) {
      const page = await browser.newPage();
      const url = `http://localhost:${PORT}${route}`;
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

      const html = await page.content();
      await page.close();

      // Write flat "<route>.html" files (not "<route>/index.html") so Netlify's
      // static-asset server serves them directly at the exact route path. A
      // directory + index.html pair instead triggers Netlify's pretty-URL
      // trailing-slash redirect (/about -> /about/) ahead of any custom
      // redirect rule, adding an avoidable hop for every crawler and visitor.
      const outFile = route === '/'
        ? path.join(buildDir, 'index.html')
        : path.join(buildDir, `${route.replace(/^\//, '')}.html`);
      fs.mkdirSync(path.dirname(outFile), { recursive: true });
      fs.writeFileSync(outFile, html);
      console.log(`Prerendered ${route} -> ${path.relative(buildDir, outFile)}`);
    }
  } finally {
    await browser.close();
    server.close();
  }
}

prerender().catch((err) => {
  console.error(err);
  process.exit(1);
});
