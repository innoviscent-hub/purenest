// ============================================================
// CONTROLLER LAYER — Navigation, scroll, form logic
// ============================================================

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const handleNavClick = (navigate, path, setMenuOpen) => {
  navigate(path);
  if (setMenuOpen) setMenuOpen(false);
  scrollToTop();
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
    const apiBase = window.location.origin.includes('localhost') ? 'http://localhost:5000' : '';
    const response = await fetch(`${apiBase}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fields),
    });

    const data = await response.json();

    if (response.ok) {
      setSubmitted(true);
      return true; // Indicates success so component can reset fields
    } else {
      if (setSubmitError) setSubmitError(data.error || 'Failed to send inquiry.');
      return false;
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    if (setSubmitError) setSubmitError('Failed to connect to the server. Please try again later.');
    return false;
  } finally {
    if (setIsLoading) setIsLoading(false);
  }
};

export const getServiceById = (services, id) =>
  services.find((s) => s.id === id) || null;
