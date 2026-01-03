// Service area configuration
// In production, this would come from an admin panel/CMS

export const SERVICE_AREA_CONFIG = {
  centrePostcode: "LS16",
  centreLat: 53.8566, // Approximate coordinates for LS16
  centreLon: -1.6024,
  radiusMiles: 22.5,
  // Outcode allow list (empty = allow all except blocked)
  allowedOutcodes: [] as string[],
  // Outcode block list
  blockedOutcodes: [] as string[],
};

// Helper function to extract outcode from postcode
export function extractOutcode(postcode: string): string {
  if (!postcode) return "";
  const cleaned = postcode.trim().toUpperCase().replace(/\s+/g, "");
  // Extract first part (outcode) - e.g., "LS16" from "LS16 5AB" or "LS165AB"
  const match = cleaned.match(/^([A-Z]{1,2}\d{1,2})/);
  return match ? match[1] : "";
}

// Check if postcode is in service area
export function isInServiceArea(postcode: string): {
  inArea: boolean;
  reason: string;
} {
  const outcode = extractOutcode(postcode);
  
  if (!outcode) {
    return { inArea: false, reason: "Invalid postcode format" };
  }

  // Check blocked list first
  if (SERVICE_AREA_CONFIG.blockedOutcodes.length > 0) {
    if (SERVICE_AREA_CONFIG.blockedOutcodes.includes(outcode)) {
      return { inArea: false, reason: "Postcode area not served" };
    }
  }

  // Check allowed list if it exists
  if (SERVICE_AREA_CONFIG.allowedOutcodes.length > 0) {
    if (!SERVICE_AREA_CONFIG.allowedOutcodes.includes(outcode)) {
      return { inArea: false, reason: "Postcode area not served" };
    }
  }

  // Check radius (simplified - in production, use proper geocoding)
  // For now, we'll use a simple outcode-based check
  // LS postcodes are generally within 22.5 miles of LS16
  const lsPostcodes = ["LS1", "LS2", "LS3", "LS4", "LS5", "LS6", "LS7", "LS8", "LS9", "LS10", "LS11", "LS12", "LS13", "LS14", "LS15", "LS16", "LS17", "LS18", "LS19", "LS20", "LS21", "LS22", "LS23", "LS24", "LS25", "LS26", "LS27", "LS28", "LS29"];
  const nearbyPostcodes = ["BD", "HD", "WF", "HG", "YO"]; // Bradford, Huddersfield, Wakefield, Harrogate, York
  
  if (outcode.startsWith("LS") && lsPostcodes.some(p => outcode.startsWith(p))) {
    return { inArea: true, reason: "" };
  }
  
  // Check nearby areas (simplified)
  if (nearbyPostcodes.some(prefix => outcode.startsWith(prefix))) {
    // For nearby areas, we'll allow but show banner
    return { inArea: true, reason: "nearby" };
  }

  // Default: not in area
  return { inArea: false, reason: "Outside service area" };
}

