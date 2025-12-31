'use client'
import LocationLayout from "@/components/location-based-page/location-layout";
import { use } from "react";
const page =  ({params}) => {
    const loc = use(params);
    const location = loc?.slug.replace("-", " ");
    // const location = params?.slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    
  return (
    <>
        <LocationLayout location={location} />
    </>
  )
}

export default page