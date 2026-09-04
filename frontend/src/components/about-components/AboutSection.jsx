import logo from "../../assets/logo.png";

export default function AboutSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-10 px-6 pt-17 text-black animate__animated animate__fadeIn lg:flex-row lg:gap-30 lg:px-10">
      <img
        src={logo}
        alt="Hollywood Ads"
        className="h-40 w-auto object-contain md:h-60"
      />

      <div className="max-w-4xl">
        <h1 className="mb-5 font-Merr text-4xl font-bold md:text-5xl">
          About Us
        </h1>

        <p className="font-hand text-xl font-semibold leading-relaxed animate__animated animate__fadeIn sm:text-2xl md:text-[1.65rem]">
          Since 1994, Hollywood Advertising – Art Production is an Egyptian
          company that has been delivering high-impact advertising solutions
          that elevate brands and strengthen their market presence. Specializing
          in billboard campaigns, indoor and outdoor media, and visual brand
          promotion, we combine creativity, strategy, and experience to produce
          advertising that stands out. From our location at 169 El Orouba
          Street, in front of the Military Academy, Heliopolis, we have grown to
          become one of the most recognized advertising companies in Egypt,
          earning the trust of our major clients through excellence,
          professionalism, and lasting results.
        </p>
      </div>
    </section>
  );
}
