import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";
import Navbar from "@/components/Navbar/Navbar";
import BentoHero from "@/components/BentoHero/BentoHero";
import Marquee from "@/components/Marquee/Marquee";
import Services from "@/components/Services/Services";
import KPI from "@/components/KPI/KPI";
import Testimonials from "@/components/Testimonials/Testimonials";
import Globe from "@/components/Globe/Globe";
import Flower from "@/components/Flower/Flower";
import Projects from "@/components/Projects/Projects";
import Subscribe from "@/components/Subscribe/Subscribe";
import Footer from "@/components/Footer/Footer";
import AIChat from "@/components/AIChat/AIChat";

export default function Home() {
  return (
    <main>
      <LoadingScreen />
      <Navbar />
      <BentoHero />
      <Marquee />
      <div className="normal-padding" />
      <Services />
      <div className="normal-padding" />
      <KPI />
      <div className="normal-padding" />
      <Testimonials />
      <div className="normal-padding" />
      <Globe />
      <Flower />
      <Projects />
      <div className="normal-padding" />
      <Subscribe />
      <div className="normal-padding" />
      <Footer />
      <AIChat />
    </main>
  );
}
