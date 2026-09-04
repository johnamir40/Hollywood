import FeaturedLocations from "../components/home-components/FeaturedLocations";
import HeroSection from "../components/home-components/HeroSection";
import HowWorks from "../components/home-components/HowWorks";
import PartnersHome from "../components/home-components/PartnersHome";
import StartCampaign from "../components/home-components/StartCampaign";
import WhyHollywood from "../components/home-components/WhyHollywood";

export default function Homepage() {
  return (
    <main className="min-h-screen w-full overflow-x-clip bg-[#f7faff] text-[#0b1f3c]">
      {/* Hero Section */}
      <HeroSection />
      {/* Featured Locations — white */}
      <FeaturedLocations />
      {/* Our Partners — takes the old How It Works light-blue background */}
      <PartnersHome />
      {/* How It Works — takes the next section's white background */}
      <HowWorks />
      {/* Why Hollywood — shifts to the light-blue background */}
      <WhyHollywood />
      {/* Final CTA — white */}
      <StartCampaign />
    </main>
  );
}
