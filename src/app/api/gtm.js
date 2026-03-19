export const trackEvent = (eventName, eventData) => {
  // Verificamos se a dataLayer existe para evitar erros
  if (window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventData,
    });
  } else {
    console.warn("GTM dataLayer não encontrado.");
  }
};