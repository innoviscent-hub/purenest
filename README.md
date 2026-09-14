# PureNest Cleaning & Facility Services

PureNest is a professional facility management website designed for commercial, corporate, and institutional sectors in Auckland, New Zealand. Built with a premium aesthetic, this application provides an interactive showcase of services, completed projects, institutional compliance standards, and automated contact pipelines.

---

## 🚀 Key Features

- **Modern Responsive UI**: Clean, high-end design using custom HSL colors, smooth transitions, glassmorphic accents, and responsive layout grids.
- **Dynamic Routing**: Built as a React Single Page Application (SPA) using [react-router-dom](https://reactrouter.com/).
- **Page-Level SEO & Metadata**: Dynamically generated head tags, Open Graph (OG) tags, Twitter cards, and Schema.org JSON-LD structured data via a reusable [SEO component](file:///C:/Users/SpiderEL/Desktop/Projects/purenest/src/components/SEO.js).
- **Analytics Integration**: Google Analytics 4 (GA4) tracking integrated via a dedicated [AnalyticsTracker](file:///C:/Users/SpiderEL/Desktop/Projects/purenest/src/components/AnalyticsTracker.js).
- **Dual Form Submission Options**: Supports both native serverless Netlify Forms and an Express.js backend API with Nodemailer (Gmail SMTP).
- **Deployment-Ready**: Fully configured configurations for both Netlify (`netlify.toml` / `_redirects`) and Vercel (`vercel.json`).

---

## 📂 Project Structure

```text
purenest/
├── backend/                  # Node.js API Backend
│   ├── controllers/          # Express route controllers
│   │   └── contactController.js  # NodeMailer SMTP email sender
│   ├── routes/               # Express routing
│   │   └── contact.js        # /api/contact routes
│   ├── package.json          # Backend dependencies (express, nodemailer, cors, dotenv)
│   └── server.js             # Main server entrypoint (configured for standalone & Vercel)
├── public/                   # Public static assets
│   ├── _redirects            # Netlify redirection configuration
│   ├── index.html            # Main HTML template (includes hidden Netlify form)
│   ├── robots.txt            # Search engine crawl rules
│   └── sitemap.xml           # XML sitemap for SEO indexability
├── src/                      # React Frontend Source
│   ├── assets/               # Local images & graphic assets
│   ├── components/           # Reusable UI & Logic Components
│   │   ├── AnalyticsTracker.js # GA4 tracking wrapper
│   │   ├── ContactForm.js    # Contact form UI & client controllers
│   │   ├── Footer.js / CSS   # Shared footer
│   │   ├── Hero.js           # Visual page introductions
│   │   ├── Navbar.js / CSS   # Header navigation
│   │   ├── Requirements.js   # Compliance requirements section
│   │   ├── SEO.js            # SEO head manager
│   │   ├── Services.js       # Homepage services summary section
│   │   └── Testimonials.js   # Client reviews slider
│   ├── controllers/          # Frontend logic controllers
│   │   └── appController.js  # Navigation, scroll controls, and submission handlers
│   ├── models/               # Shared static data & content models
│   │   └── dataModel.js      # Company metadata, services list, testimonials, etc.
│   ├── pages/                # Main site page views
│   │   ├── AboutPage.js      # Company background, legacy, stats
│   │   ├── ContactPage.js    # Direct information & interactive form
│   │   ├── ServicesPage.js   # In-depth service breakdowns
│   │   └── TenderPage.js     # Completed projects list & portfolio details
│   ├── App.js                # Core App component & client routers
│   ├── index.css             # Global styles, variables, & utility classes
│   └── index.js              # React client entry point
├── netlify.toml              # Netlify build & redirect routing config
└── vercel.json               # Vercel serverless build & routing configuration
```

---

## 🛠️ Local Development & Setup

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v16+ recommended).

### 1. Frontend Setup

Navigate to the project root directory and run the following:

```bash
# Install frontend dependencies
npm install

# Start the frontend dev server (runs on http://localhost:3000)
npm start

# Build production bundle
npm run build
```

### 2. Backend Setup (Optional / for Vercel SMTP APIs)

To run the standalone Express backend server locally:

```bash
# Navigate to the backend folder
cd backend

# Install backend dependencies
npm install

# Create a .env file and define variables:
# PORT=5000
# EMAIL_USER=your_gmail_username@gmail.com
# EMAIL_PASS=your_gmail_app_password

# Run the server (runs on http://localhost:5000)
node server.js
```

---

## 📬 Contact Form & Submission Architecture

The contact form is built to handle data securely and is designed with dual capabilities:

### Method A: Netlify Forms (Default Frontend Submission)
As defined in [appController.js](file:///C:/Users/SpiderEL/Desktop/Projects/purenest/src/controllers/appController.js), form submissions are intercepted and POSTed directly to `/` with url-encoded parameter formatting:
```javascript
fetch('/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: encode({ 'form-name': 'contact', 'bot-field': '', ...fields }),
})
```
Netlify detects the `data-netlify="true"` attribute inside the hidden HTML form in `public/index.html` and processes submissions automatically.

### Method B: Vercel serverless API (Express Backend)
If deployed on Vercel, the configuration in `vercel.json` maps incoming requests to `/api/(.*)` directly to the Express application at `backend/server.js`.
The `/api/contact` route accepts JSON payloads:
```json
{
  "name": "Client Name",
  "email": "client@company.com",
  "phone": "022 088 9959",
  "company": "Company Name",
  "message": "Project Details..."
}
```
And triggers [contactController.js](file:///C:/Users/SpiderEL/Desktop/Projects/purenest/backend/controllers/contactController.js), sending emails using Nodemailer SMTP transport settings:
- **Host**: `smtp.gmail.com`
- **Port**: `465` (SSL secure connection)
- **Authentication**: Email User & App-specific password

---

## ☁️ Deployment

### Deploying to Netlify

1. Connect your repository to Netlify.
2. Set the build parameters:
   - **Build Command**: `CI=false npm run build`
   - **Publish Directory**: `build`
3. Netlify automatically handles routing redirects via [netlify.toml](file:///C:/Users/SpiderEL/Desktop/Projects/purenest/netlify.toml) and [public/_redirects](file:///C:/Users/SpiderEL/Desktop/Projects/purenest/public/_redirects).

### Deploying to Vercel

1. Install the Vercel CLI (`npm install -g vercel`) or connect the project via the Vercel dashboard.
2. Deploy by running `vercel` in the project root.
3. Configure the environment variables in your Vercel Project settings:
   - `EMAIL_USER`: Your target notification Gmail address.
   - `EMAIL_PASS`: Gmail App Password (NOT your regular password).
4. Vercel automatically deploys the frontend as a static site and `backend/server.js` as an API serverless function per the instructions in [vercel.json](file:///C:/Users/SpiderEL/Desktop/Projects/purenest/vercel.json).
