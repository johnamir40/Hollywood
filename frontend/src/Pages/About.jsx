import AboutSection from "../components/about-components/AboutSection";
import AllPartners from "../components/about-components/AllPartners";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* About Section */}
      <AboutSection />

      {/* Partners Section */}
      <AllPartners />
    </div>
  );
}
