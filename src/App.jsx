import { companyInfo } from "./data/companyInfo";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { FloatingActions } from "./components/FloatingActions";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { MarketsSection } from "./components/MarketsSection";
import { ServicesSection } from "./components/ServicesSection";

function App() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <MarketsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingActions whatsappUrl={companyInfo.whatsappUrl} />
    </div>
  );
}

export default App;
