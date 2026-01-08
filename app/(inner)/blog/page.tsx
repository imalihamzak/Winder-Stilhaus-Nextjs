import BlogPageClient from "./blog-client";

export const metadata = {
  title: "Resource Hub | Winder&Stilhaus",
  description: "Practical local guides, renovation costs, and regulatory information for West Yorkshire. Everything you need to know about planning and executing your home renovation project.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return <BlogPageClient />;
}

