
import Navigation from "@/components/SC-Navigation";
import Hero from "@/components/SC-Hero";
import Features from "@/components/SC-Features";
import CodeEditor from "@/components/SC-CodeEditor";
import TechnicalInsights from "@/components/SC-TechnicalInsights";
import Resources from "@/components/SC-Resources";
import Footer from "@/components/SC-Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Hero />
      <Features />
      <CodeEditor />
      <TechnicalInsights />
      <Resources />
      <Footer />
    </div>
  );
};

export default Index;
