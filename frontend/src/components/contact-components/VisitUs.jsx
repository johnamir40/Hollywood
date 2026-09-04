export default function VisitUs() {
  return (
    <div className="space-y-8">
      <div className=" text-white py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side (Info) */}
          <div className="space-y-6  animate__animated animate__fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold">Visit Us</h2>

            <p className="text-gray-300 text-lg">
              Come visit our office or reach out using the details below.
            </p>

            <div className="space-y-3 text-lg">
              <p>
                <span className="font-bold">Address:</span> 169 El-Orouba, Al
                Matar, El Nozha, Cairo Governorate
              </p>
            </div>

            <a
              href="https://www.google.com/maps?q=169+El-Orouba+El+Nozha+Cairo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition"
            >
              Open in Google Maps
            </a>
          </div>

          {/* Right Side (Map) */}
          <div className="  rounded-2xl overflow-hidden shadow-2xl border border-white/10  animate__animated animate__fadeIn ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3451.744986245547!2d31.3513082!3d30.101489!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145815f8807ec14d%3A0xc45918b625f3ff03!2sHollywood%20Advertising%20Co.!5e0!3m2!1sen!2seg!4v1783938663736!5m2!1sen!2seg"
              className="w-full h-80 md:h-100 border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
