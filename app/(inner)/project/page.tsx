import ProjectPageClient from "./project-client";

export const metadata = {
  title: "Portfolio | Winder&Stilhaus",
  description: "View our portfolio of premium interior design and renovation projects across West Yorkshire. Luxury kitchens, bathrooms, and full-home transformations.",
  alternates: {
    canonical: "/project",
  },
};

export default function ProjectPage() {
  return <ProjectPageClient />;
}

