import {
  FiArrowRight,
  FiCheckCircle,
  FiFileText,
  FiImage,
  FiMapPin,
} from "react-icons/fi";

export default function HowWorks() {
  const steps = [
    {
      number: "01",
      icon: FiMapPin,
      title: "Choose a Location",
      description:
        "Explore our available advertising locations and choose the most suitable area for your campaign.",
    },
    {
      number: "02",
      icon: FiImage,
      title: "Send Your Brand Details",
      description:
        "Share your product information, campaign goals, preferred location, and advertising format.",
    },
    {
      number: "03",
      icon: FiFileText,
      title: "Receive Your Proposal",
      description:
        "Our team prepares a professional proposal tailored to your campaign and business requirements.",
    },
  ];
  return (
    <section className="relative flex min-h-[calc(100dvh-76px)] items-center overflow-hidden bg-white px-6 py-16 lg:px-10 lg:py-10">
      <div className="absolute left-1/2 top-0 h-72 w-2/3 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[130px]" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
            Simple Process
          </p>

          <h2 className="font-Merr text-4xl font-bold text-[#0b1f3c] md:text-5xl">
            How It Works
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-600 lg:text-lg">
            Launch your advertising campaign through a simple and professional
            process.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative overflow-hidden rounded-3xl border border-blue-100 bg-white p-7 shadow-[0_15px_45px_rgba(37,99,235,0.07)] transition duration-500 hover:-translate-y-2 hover:border-blue-300 hover:shadow-[0_25px_55px_rgba(37,99,235,0.14)] lg:p-8"
              >
                <div className="absolute -right-7 -top-8 text-[7rem] font-bold text-blue-600/4">
                  {step.number}
                </div>

                <div className="relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-blue-600 to-blue-400 text-2xl text-white shadow-lg shadow-blue-600/20 transition duration-500 group-hover:rotate-3 group-hover:scale-110">
                    <Icon />
                  </div>

                  <span className="text-sm font-bold tracking-[0.2em] text-blue-600">
                    STEP {step.number}
                  </span>

                  <h3 className="mt-3 text-2xl font-bold text-[#0b1f3c]">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
