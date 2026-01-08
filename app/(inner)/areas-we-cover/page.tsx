import AreasWeCoverClient from "./areas-we-cover-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Areas We Cover | Winder&Stilhaus",
  description: "Premium interior design and renovation services across West Yorkshire. Serving Leeds, Harrogate, Ilkley, York corridor, Bradford, Huddersfield, and Wakefield.",
  alternates: {
    canonical: "/areas-we-cover",
  },
};

export default function AreasWeCoverPage() {
  return <AreasWeCoverClient />;
}

