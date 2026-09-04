import Cocacolalogo from "../../assets/partners/Cocacolalogo.png";
import chev from "../../assets/partners/chev.png";
import oppo from "../../assets/partners/oppo.png";
import AboAuf from "../../assets/partners/Abu_Auf.png";
import orascom from "../../assets/partners/orascom.png";
import orange from "../../assets/partners/orange.png";
import we from "../../assets/partners/we.png";
import ahli from "../../assets/partners/alahli.png";
import pepsi from "../../assets/partners/pepsi.png";
import shell from "../../assets/partners/shell.png";
import kfc from "../../assets/partners/kfc.png";
import mc from "../../assets/partners/mc.png";
import sam from "../../assets/partners/sam.png";
import deja from "../../assets/partners/dejavu.png";

export default function AllPartners() {
  const partners = [
    {
      img: we,
      title: "WE",
      description: "Egyptian Telecom Company",
    },
    {
      img: Cocacolalogo,
      title: "Coca-Cola",
      description: "Global Beverage Company",
    },
    {
      img: chev,
      title: "Chevrolet",
      description: "Global Automotive Company",
    },
    {
      img: shell,
      title: "Shell",
      description: "Global Petrochemical Company",
    },
    {
      img: orascom,
      title: "Orascom",
      description: "Global Smart Technology Company",
    },
    {
      img: sam,
      title: "Samsung",
      description: "Top Global Tech Brand",
    },
    {
      img: oppo,
      title: "OPPO",
      description: "Top Global Tech Brand",
    },
    {
      img: orange,
      title: "Orange",
      description: "Global Telecom Company",
    },
    {
      img: ahli,
      title: "NBE",
      description: "National Bank of Egypt",
    },
    {
      img: kfc,
      title: "KFC",
      description: "American Multinational Fast Food Restaurant Chain",
    },
    {
      img: mc,
      title: "McDonald's",
      description: "American Multinational Fast Food Restaurant Chain",
    },
    {
      img: pepsi,
      title: "Pepsi",
      description: "Global Beverage Company",
    },
    {
      img: deja,
      title: "Dejavu",
      description: "Egyptian Clothing Brand",
    },
    {
      img: AboAuf,
      title: "Abu Auf",
      description: "Coffee Leader Company",
    },
  ];
  return (
    <section className="flex justify-center">
      <div className="container px-6 py-16 animate__animated animate__fadeIn lg:px-10">
        <h1 className="mb-12 text-center font-Merr text-4xl font-bold text-black md:text-6xl">
          Our Partners
        </h1>

        <div className="grid w-full grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
          {partners.map((partner) => (
            <div key={partner.title} className="flex justify-center">
              <div className="flex w-full max-w-80 flex-col overflow-hidden rounded-xl bg-white">
                <div className="flex h-40 items-center justify-center p-4">
                  <img
                    src={partner.img}
                    alt={partner.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div className="p-1 text-center">
                  <h2 className="text-xl font-bold text-black">
                    {partner.title}
                  </h2>

                  <p className="text-gray-600">{partner.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
