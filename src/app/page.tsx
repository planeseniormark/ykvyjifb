import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import BentoHero from "@/components/BentoHero";
import ClientsMarquee from "@/components/ClientsMarquee";
import Services from "@/components/Services";
import KPI from "@/components/KPI";
import Portfolio from "@/components/Portfolio";
import AIChatSection from "@/components/AIChatSection";
import FlowerSection from "@/components/FlowerSection";
import ReferralProgram from "@/components/ReferralProgram";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <BentoHero />
        <ClientsMarquee />
        <div className="normal-padding" />
        <Services />
        <div className="normal-padding" />
        <KPI />
        <div className="normal-padding" />
        <Portfolio />
        <div className="normal-padding" />
        <AIChatSection />
        <div className="normal-padding" />
        <FlowerSection />
        <div className="normal-padding" />
        <ReferralProgram />
        <div className="normal-padding" />
        <Subscribe />
        <div className="normal-padding" />
        <Footer />
      </main>
      <ChatWidget />
    </>
  );
}
