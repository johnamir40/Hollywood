import ContactUs from "../components/contact-components/ContactUs";
import VisitUs from "../components/contact-components/VisitUs";
import Footer from "../components/main-components/Footer";
import Header from "../components/main-components/Header";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col items-center overflow-hidden   bg-linear-to-br from-[#020617] via-[#0b2f6b] to-[#3b82f6] text-white px-4 py-12  ">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl font-bold  animate__animated animate__fadeIn ">
            Contact Us
          </h2>
          <ContactUs />
          <VisitUs />
        </div>
      </div>
      {/* <Contact /> */}
    </div>
  );
}
