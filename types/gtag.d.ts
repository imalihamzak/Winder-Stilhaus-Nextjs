// Google Analytics (GA4) and GTM TypeScript declarations
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string | Date | object,
      config?: {
        [key: string]: any;
      }
    ) => void;
    dataLayer?: any[];
  }
}

export {};

