import { ReactNode } from "react";
import SharedHeader from "@/components/SharedHeader";
import FooterSection from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import ClickToCall from "@/components/ClickToCall";
import MobileStickyBar from "@/components/MobileStickyBar";

interface LayoutProps {
  children: ReactNode;
}

const layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main id="main-content" className="bg-white min-h-screen">
        <SharedHeader />
        <div className="bg-white pt-20 sm:pt-24">
        {children}
        </div>
        <FooterSection />
        <StickyCTA />
        <ClickToCall />
        <MobileStickyBar />
      </main>
    </>
  )
}

export default layout

