export const emailJSConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

export const validateEmailJSConfig = () => {
  const { serviceId, templateId, publicKey } = emailJSConfig;
  
  if (!serviceId || !templateId || !publicKey) {
    console.error('Missing EmailJS configuration. Please check your .env file.');
    return false;
  }
  
  return true;
};
