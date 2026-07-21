const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/**
 * Track every page navigation
 */
export const trackPageView = (url: string) => {
  window.gtag?.("config", GA_ID, {
    page_path: url,
  });

  window.fbq?.("track", "PageView");
};

/**
 * Homepage / Pricing / How it Works
 */
export const trackViewContent = (page: string) => {
  window.gtag?.("event", "view_content", {
    page_name: page,
  });

  window.fbq?.("track", "ViewContent", {
    content_name: page,
  });
};

/**
 * WhatsApp Click
 */
export const trackWhatsappClick = (location: string) => {
  window.gtag?.("event", "whatsapp_click", {
    location,
  });

  window.fbq?.("trackCustom", "WhatsAppClick", {
    location,
  });
};

/**
 *
 * Telegram Click
 */
export const trackTelegramClick = (location: string) => {
  window.gtag?.("event", "telegram_click", {
    location,
  });

  window.fbq?.("trackCustom", "TelegramClick", {
    location,
  });
};
/**
 * Lead
 */
export const trackLead = () => {
  window.gtag?.("event", "generate_lead");

  window.fbq?.("track", "Lead");
};

/**
 * Google Form
 */
export const trackGoogleFormClick = () => {
  window.gtag?.("event", "google_form_click");

  window.fbq?.("trackCustom", "GoogleFormClick");
};
