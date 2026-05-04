import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DashboardMockup from "@/components/DashboardMockup";
import HowItWorks from "@/components/HowItWorks";
import FeaturesBento from "@/components/FeaturesBento";
import FeaturesGrid from "@/components/FeaturesGrid";
import Comparison from "@/components/Comparison";
import Testimonials from "@/components/Testimonials";
import VideoTestimonial from "@/components/VideoTestimonial";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden relative">
      <Navbar />
      <Hero />
      
      {/* Dashboard Section */}
      <div className="pb-20">
        <DashboardMockup />
        <HowItWorks />
        <FeaturesBento />
        <FeaturesGrid />
        <Comparison />
        <Testimonials />
        <VideoTestimonial />
        <Pricing />
        <FAQ />
        <Blog />
        <FinalCTA />
      </div>
      <Footer />
    </main>
  );
}
