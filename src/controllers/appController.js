// ============================================================
// CONTROLLER LAYER — Navigation, scroll, form logic
// ============================================================

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const handleNavClick = (navigate, path, setMenuOpen) => {
  navigate(path);
  if (setMenuOpen) setMenuOpen(false);
  if (!path.includes('#')) {
    scrollToTop();
  } else {
    const id = path.split('#')[1];
    if (id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};

export const validateContactForm = (fields) => {
  const errors = {};
  if (!fields.name || fields.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }
  if (!fields.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!fields.phone || fields.phone.trim().length < 7) {
    errors.phone = "Please enter a valid contact number.";
  }
  if (!fields.company || fields.company.trim().length < 2) {
    errors.company = "Please enter your company name.";
  }
  if (!fields.message || fields.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }
  return errors;
};

const encode = (data) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');

export const handleFormSubmit = async (fields, setErrors, setSubmitted, setIsLoading, setSubmitError) => {
  const errors = validateContactForm(fields);
  if (Object.keys(errors).length > 0) {
    setErrors(errors);
    return false;
  }
  setErrors({});

  if (setIsLoading) setIsLoading(true);
  if (setSubmitError) setSubmitError('');

  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', 'bot-field': '', ...fields }),
    });

    if (!response.ok) {
      throw new Error(`Submission failed (Status ${response.status}). Please try again.`);
    }

    setSubmitted(true);
    return true;
  } catch (error) {
    console.error('Error submitting form:', error);
    if (setSubmitError) setSubmitError(error.message || 'Something went wrong. Please check your connection.');
    return false;
  } finally {
    if (setIsLoading) setIsLoading(false);
  }
};

export const getServiceById = (services, id) =>
  services.find((s) => s.id === id) || null;
