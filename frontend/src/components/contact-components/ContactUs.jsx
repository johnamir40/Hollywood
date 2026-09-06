import { useFormik } from "formik";
import * as Yup from "yup";

export default function ContactUs() {
  const formik = useFormik({
    initialValues: {
      companyName: "",
      mobile: "",
      targetZones: "",
      billboardNumber: "",
    },

    validationSchema: Yup.object({
      companyName: Yup.string().required("Company name is required"),

      mobile: Yup.string()
        .required("Mobile number is required")
        .matches(/^[0-9+\-()\s]+$/, "Mobile number contains invalid characters")
        .test("valid-phone-length", "Enter a valid mobile number", (value) => {
          if (!value) return false;

          const digitsOnly = value.replace(/\D/g, "");

          return digitsOnly.length >= 11 && digitsOnly.length <= 15;
        }),

      targetZones: Yup.string().required("Target zone is required"),

      billboardNumber: Yup.number()
        .typeError("Billboard number must be a number")
        .integer("Billboard number must be an integer")
        .positive("Billboard number must be greater than 0")
        .nullable()
        .transform((value, originalValue) =>
          originalValue === "" ? null : value,
        ),
    }),
    onSubmit: (values) => {
      const message = `
New Proposal Request

Company Name: ${values.companyName}
Mobile: ${values.mobile}
Target Zones: ${values.targetZones}
Billboard Number: ${values.billboardNumber || "Not specified"}
    `.trim();

      const whatsappNumber = "201289172727";

      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message,
      )}`;

      window.open(whatsappUrl, "_blank");
    },
  });

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

        <div className="text-gray-200 text-xl leading-relaxed space-y-2">
          <a
            href="tel:+20222694306"
            className="block w-fit cursor-pointer underline underline-offset-4 decoration-gray-500 hover:text-blue-400 hover:decoration-blue-400 transition"
          >
            <span className="font-bold">Tel:</span> 02 22694306
          </a>

          <a
            href="https://wa.me/201289172727"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-fit cursor-pointer underline underline-offset-4 decoration-gray-500 hover:text-green-400 hover:decoration-green-400 transition"
          >
            <span className="font-bold">WhatsApp:</span> 01289172727
          </a>

          <a
            href="mailto:hollywood_adv@yahoo.com"
            className="block w-fit cursor-pointer underline underline-offset-4 decoration-gray-500 hover:text-blue-400 hover:decoration-blue-400 transition"
          >
            <span className="font-bold">Email:</span> hollywood_adv@yahoo.com
          </a>
        </div>
      </div>

      <form
        onSubmit={formik.handleSubmit}
        className="bg-white text-black p-6 md:p-8 rounded-2xl shadow-xl w-full animate__animated animate__fadeIn"
      >
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Via Form</h1>

        {/* Company Name */}
        <div className="mb-4">
          <label className="block mb-2 font-medium" htmlFor="companyName">
            Company Name
          </label>

          <input
            id="companyName"
            name="companyName"
            type="text"
            placeholder="Company Name"
            value={formik.values.companyName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 ${
              formik.touched.companyName && formik.errors.companyName
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-blue-500"
            }`}
          />

          {formik.touched.companyName && formik.errors.companyName && (
            <p className="mt-1 text-sm text-red-500">
              {formik.errors.companyName}
            </p>
          )}
        </div>

        {/* Mobile */}
        <div className="mb-4">
          <label className="block mb-2 font-medium" htmlFor="mobile">
            Mobile
          </label>

          <input
            id="mobile"
            name="mobile"
            type="tel"
            placeholder="Phone Number"
            value={formik.values.mobile}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 ${
              formik.touched.mobile && formik.errors.mobile
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-blue-500"
            }`}
          />

          {formik.touched.mobile && formik.errors.mobile && (
            <p className="mt-1 text-sm text-red-500">{formik.errors.mobile}</p>
          )}
        </div>

        {/* Target Zones + Billboard Number */}
        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Target Zones */}
          <div>
            <label className="block mb-2 font-medium" htmlFor="targetZones">
              Target Zones
            </label>

            <input
              id="targetZones"
              name="targetZones"
              type="text"
              placeholder="Mehwar / Salah Salem / etc..."
              value={formik.values.targetZones}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 ${
                formik.touched.targetZones && formik.errors.targetZones
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />

            {formik.touched.targetZones && formik.errors.targetZones && (
              <p className="mt-1 text-sm text-red-500">
                {formik.errors.targetZones}
              </p>
            )}
          </div>

          {/* Billboard Number */}
          <div>
            <label className="block mb-2 font-medium" htmlFor="billboardNumber">
              Billboard Number
            </label>

            <input
              id="billboardNumber"
              name="billboardNumber"
              type="number"
              min="1"
              step="1"
              placeholder="e.g. 12"
              value={formik.values.billboardNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 ${
                formik.touched.billboardNumber && formik.errors.billboardNumber
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />

            {formik.touched.billboardNumber &&
              formik.errors.billboardNumber && (
                <p className="mt-1 text-sm text-red-500">
                  {formik.errors.billboardNumber}
                </p>
              )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Request Proposal
        </button>
      </form>
    </div>
  );
}
