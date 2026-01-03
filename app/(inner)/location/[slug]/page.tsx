'use client'
import LocationLayout from "@/components/location-based-page/location-layout";
import { use } from "react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const page = ({ params }: PageProps) => {
  const loc = use(params);
  const location = loc?.slug.replace("-", " ");
  
  return (
    <>
      <LocationLayout location={location} />
    </>
  )
}

export default page

