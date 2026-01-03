// Analytics utility functions with consent checking

/**
 * Check if user has given consent for analytics
 */
export const hasConsent = (): boolean => {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("cookie-consent") === "accepted";
};

/**
 * Track event only if consent is given
 */
export const trackEvent = (
  eventName: string,
  params?: Record<string, any>
): void => {
  if (typeof window === "undefined") return;
  
  // Only track if consent is given
  if (!hasConsent()) {
    console.log(`[Analytics] Event blocked (no consent): ${eventName}`, params);
    return;
  }

  if ((window as any).gtag) {
    (window as any).gtag("event", eventName, params);
  } else {
    console.warn(`[Analytics] gtag not available for event: ${eventName}`);
  }
};

