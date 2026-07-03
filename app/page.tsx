import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import VideoMenu from "@/components/landing/VideoMenu";
import GroupOrders from "@/components/landing/GroupOrders";
import AdminPreview from "@/components/landing/AdminPreview";
import Integration from "@/components/landing/Integration";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Hero */}
        <Hero />
        {/* 2. How it works */}
        <HowItWorks />
        {/* 3. Features */}
        <Features />
        {/* 4. Video Menu (10 dishes) */}
        <VideoMenu />
        {/* 5. Group Orders */}
        <GroupOrders />
        {/* 6. Admin Panel Preview */}
        <AdminPreview />
        {/* 7. iiko Integration */}
        <Integration />
        {/* 8. Testimonials */}
        <Testimonials />
        {/* 9. Pricing */}
        <Pricing />
        {/* 10. CTA */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}
