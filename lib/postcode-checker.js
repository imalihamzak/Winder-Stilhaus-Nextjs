// Service Area Configuration
// Centre: LS16 (Leeds, UK)
// Radius: 22.5 miles

// Admin-configurable settings
export const SERVICE_AREA_CONFIG = {
  centrePostcode: "LS16", // Central postcode
  radiusMiles: 22.5, // Service radius in miles
  
  // Allow list: Always allow these outcodes (first 3-4 characters)
  allowList: ["LS16", "LS17", "LS18", "LS19", "LS20", "LS21", "LS22", "LS23", "LS24", "LS25", "LS26", "LS27", "LS28", "LS29", "HG1", "HG2", "HG3", "BD1", "BD2", "BD3", "BD4", "BD5", "BD6", "BD7", "BD8", "BD9", "BD10", "BD11", "BD12", "BD13", "BD14", "BD15", "BD16", "BD17", "BD18", "BD19", "BD20", "BD21", "BD22", "BD23", "BD24", "WF1", "WF2", "WF3", "WF4", "WF5", "WF6", "WF7", "WF8", "WF9", "WF10", "WF11", "WF12", "WF13", "WF14", "WF15", "WF16", "WF17", "WF18", "WF19", "WF20", "HX1", "HX2", "HX3", "HX4", "HX5", "HX6", "HX7"],
  
  // Block list: Always block these outcodes
  blockList: [],
};

// Extract outcode from full postcode (e.g., "LS16 5AB" -> "LS16")
export function extractOutcode(postcode) {
  if (!postcode) return null;
  
  // Remove spaces and convert to uppercase
  const cleaned = postcode.replace(/\s+/g, "").toUpperCase();
  
  // UK postcode format: A9 9AA or A99 9AA or AA9 9AA or AA99 9AA
  // Outcode is the first part (before the space or last 3 characters)
  const match = cleaned.match(/^([A-Z]{1,2}\d{1,2})/);
  return match ? match[1] : null;
}

// Check if postcode is in allow list
export function isInAllowList(postcode) {
  const outcode = extractOutcode(postcode);
  if (!outcode) return false;
  
  return SERVICE_AREA_CONFIG.allowList.some(allowed => 
    outcode.startsWith(allowed) || allowed.startsWith(outcode)
  );
}

// Check if postcode is in block list
export function isInBlockList(postcode) {
  const outcode = extractOutcode(postcode);
  if (!outcode) return false;
  
  return SERVICE_AREA_CONFIG.blockList.some(blocked => 
    outcode.startsWith(blocked) || blocked.startsWith(outcode)
  );
}

// Calculate distance between two UK postcodes (requires postcode lookup API)
// This is a placeholder - in production, use a service like:
// - postcodes.io (free UK postcode API)
// - Google Geocoding API
// - Ordnance Survey API
export async function calculateDistance(postcode1, postcode2) {
  // For now, return a mock function
  // In production, you would:
  // 1. Lookup coordinates for both postcodes
  // 2. Calculate distance using Haversine formula
  
  // Example using postcodes.io (free UK API):
  /*
  try {
    const [res1, res2] = await Promise.all([
      fetch(`https://api.postcodes.io/postcodes/${encodeURIComponent(postcode1)}`),
      fetch(`https://api.postcodes.io/postcodes/${encodeURIComponent(postcode2)}`)
    ]);
    
    const [data1, data2] = await Promise.all([res1.json(), res2.json()]);
    
    if (data1.status !== 200 || data2.status !== 200) {
      return null;
    }
    
    const lat1 = data1.result.latitude;
    const lon1 = data1.result.longitude;
    const lat2 = data2.result.latitude;
    const lon2 = data2.result.longitude;
    
    // Haversine formula
    const R = 3959; // Earth radius in miles
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    
    return distance;
  } catch (error) {
    console.error("Error calculating distance:", error);
    return null;
  }
  */
  
  // For now, return null (will be implemented with API)
  return null;
}

// Check if postcode is within service area
export async function isWithinServiceArea(postcode) {
  // First check block list
  if (isInBlockList(postcode)) {
    return { inArea: false, reason: "blocked" };
  }
  
  // Then check allow list
  if (isInAllowList(postcode)) {
    return { inArea: true, reason: "allow_list" };
  }
  
  // Then check distance from centre
  const distance = await calculateDistance(postcode, SERVICE_AREA_CONFIG.centrePostcode);
  
  if (distance === null) {
    // If distance calculation fails, check if outcode matches centre outcode
    const outcode = extractOutcode(postcode);
    const centreOutcode = extractOutcode(SERVICE_AREA_CONFIG.centrePostcode);
    
    if (outcode === centreOutcode) {
      return { inArea: true, reason: "same_outcode" };
    }
    
    // If we can't calculate distance, return unknown (soft-gate)
    return { inArea: null, reason: "unknown", distance: null };
  }
  
  const inArea = distance <= SERVICE_AREA_CONFIG.radiusMiles;
  
  return {
    inArea,
    reason: inArea ? "within_radius" : "outside_radius",
    distance: Math.round(distance * 10) / 10, // Round to 1 decimal
  };
}

// Simplified check using outcode matching (for immediate implementation)
export function quickCheck(postcode) {
  const outcode = extractOutcode(postcode);
  if (!outcode) return { inArea: false, reason: "invalid" };
  
  // Check block list first
  if (isInBlockList(postcode)) {
    return { inArea: false, reason: "blocked" };
  }
  
  // Check allow list
  if (isInAllowList(postcode)) {
    return { inArea: true, reason: "allow_list" };
  }
  
  // Check if same outcode as centre (LS16)
  if (outcode === "LS16") {
    return { inArea: true, reason: "centre" };
  }
  
  // If not in lists and not centre, return unknown (soft-gate)
  return { inArea: null, reason: "unknown" };
}

