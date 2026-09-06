export default function ContactUs() {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div className=" animate__animated animate__fadeIn">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Start Your Billboard Campaign
        </h3>
        <p className="text-gray-200 leading-relaxed">
          Tell us your target cities and budget, and our team will share a
          tailored media plan within one business day.
        </p>
        <h1 className="text-2xl md:text-3xl font-bold mt-5 mb-4">Via Phone</h1>
        <h1 className="text-gray-200 text-xl leading-relaxed">
          <span className="block">
            <a href="tel:22694306" className="hover:text-blue-400 transition">
              <span className="font-bold">Tel:</span> 22694306
            </a>
          </span>
          <span className="block">
            <a
              href="https://wa.me/201289172727"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <span className="font-bold">WhatsApp:</span> 01289172727
            </a>
          </span>
          <span className="block">
            <a
              href="mailto:hollywood_adv@yahoo.com"
              className="hover:text-blue-400 transition"
            >
              <span className="font-bold">Email:</span> hollywood_adv@yahoo.com
            </a>
          </span>
        </h1>
      </div>

      <form className="bg-white text-black p-6 md:p-8 rounded-2xl shadow-xl w-full  animate__animated animate__fadeIn">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 ">Via Form</h1>
        <div className="mb-4">
          <label className="block mb-2 font-medium" htmlFor="name">
            Company Name
          </label>
          <input
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="name"
            type="text"
            placeholder=" Company Name"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium" htmlFor="number">
            Mobile
          </label>
          <input
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="number"
            type="text"
            placeholder="Phone Number"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-medium" htmlFor="cities">
            Target Zones
          </label>
          <input
            className="w-full border border-gray-300 rounded-lg  px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="cities"
            type="text"
            placeholder="Mehwar / Salah salem / etc..."
          />
        </div>

        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
          type="button"
        >
          Request Proposal
        </button>
      </form>
    </div>
  );
}
