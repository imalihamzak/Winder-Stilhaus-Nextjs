export interface PricingData {
  postcode?: string;
  houseNumber?: string;
  sizeSource?: string | null;
  gia?: string;
  bedroomSize?: string; // "1", "2", "3", "4", "5+"
  project?: string; // "kitchen", "bathroom", "interior-package"
  propertyEra?: string; // "pre-1945", "1945-1999", "2000+"
  finishTier?: string; // "standard", "premium", "luxury"
  complexity?: string; // "standard", "reconfigure", "structural"
  mepIntensity?: string; // "light", "medium", "heavy"
  options?: string[]; // Array of selected adders
  propertyType?: string;
  area?: string;
  rooms?: string;
  level?: string;
  customFurniture?: boolean;
  smartLighting?: boolean;
  minBudget?: string;
  maxBudget?: string;
  timeline?: string;
}

export interface ServiceAreaConfig {
  centrePostcode: string;
  radiusMiles: number;
  allowedOutcodes: string[];
  blockedOutcodes: string[];
}

export interface PricingStepProps {
  data: PricingData;
  setData: (data: PricingData) => void;
  next: () => void;
  back?: () => void;
}

