import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects({ isDark }) {
  const projects = [
    {
      name: "TezBozor E-commerce",
      desc: "Node.js API + React frontend bilan yaratilgan onlayn do‘kon",
      link: "https://tezbor.uz/ru",
      img: "/assets/TezBozor.png",
    },
    {
      name: "Unvibe",
      desc: "Back-end + Front-end admin dashboard + student pages",
      link: "https://newuu.uz/",
      img: "/assets/Unvibe.png",
    },
    {
      name: "GacAion market",
      desc: "react + node js ",
      link: "https://gacaionshop.vercel.app/",
      img: "/assets/Gac.png",
    },
    {
      name: "Portfolio Website",
      desc: "Shaxsiy portfoliom",
      link: "https://myrezume.onrender.com",
      img: "/assets/Portfolio.png",
    },
  ];

  const certificates = [
    {
      img: "/assets/soft.png",
      name: "HackerRank",
      desc: "Front-end Software engineer certificate",
      link: "https://www.hackerrank.com/certificates/iframe/d22259420867",
    },
    {
      img: "/assets/coursera.png",
      name: "Aileaders",
      desc: "Coursera Investment Risk Management Certificate",
      link: "https://coursera.org/share/51f3c4af2b0aaf131c5539e0c2642c57",
    },
    {
      img: "/assets/Google.png",
      name: "Google Cloud",
      desc: "Google Cloud Introduction to Generative AI Certificate",
      link: "https://coursera.org/share/5423be09af8d3d54d3c748f8fa6f02e0",
    },
    {
      img: "/assets/Node.png",
      name: "HackerRank",
      desc: "Backend node.js",
      link: "https://www.hackerrank.com/certificates/iframe/2e85bb751599",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      {/* Projects section */}
      <div>
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`flex flex-col rounded-xl shadow-lg overflow-hidden transition hover:-translate-y-1 hover:shadow-xl ${
                isDark ? "bg-base-100" : "bg-base-200"
              }`}
            >
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="flex flex-col justify-between flex-1 p-4">
                <div>
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <p className="text-sm opacity-80">{project.desc}</p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-primary hover:underline"
                >
                  View <FaExternalLinkAlt size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificates section */}
      <div>
        <h2 className="text-3xl font-bold mb-6 text-center">Certificates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, i) => (
            <div
              key={i}
              className={`flex flex-col rounded-xl shadow-lg overflow-hidden transition hover:-translate-y-1 hover:shadow-xl ${
                isDark ? "bg-base-100" : "bg-base-200"
              }`}
            >
              <img
                src={cert.img}
                alt={cert.name}
                className="w-full h-48 object-contain bg-white"
              />
              <div className="flex flex-col justify-between flex-1 p-4">
                <div>
                  <h3 className="text-xl font-semibold">{cert.name}</h3>
                  <p className="text-sm opacity-80">{cert.desc}</p>
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-primary hover:underline"
                >
                  View <FaExternalLinkAlt size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
