import unvibe from "../assets/unvibe.png";
import Internship from "../assets/Internship.png";
import TezBozor from "../assets/TezBozor.png";
import Portfolio from "../assets/Portfolio.png";
import soft from "../assets/soft.png";
import jsbasic from "../assets/Jsbasic.png";
import jsintermediate from "../assets/jsintermediate.png";
import node from "../assets/node.png";

export default function Projects() {
  const projects = [
    {
      name: "TezBozor E-commerce",
      desc: "Node.js API + React frontend bilan yaratilgan onlayn do‘kon",
      link: "",
      img: TezBozor,
    },
    {
      name: "Unvibe",
      desc: "Back-end + Front-end admin dashboard + student pages",
      link: "https://newuu.uz/",
      img: unvibe,
    },
    {
      name: "Internship",
      desc: "for MARS internship students",
      link: "https://interns-lovat.vercel.app/",
      img: Internship,
    },
    {
      name: "Portfolio Website",
      desc: "Shaxsiy portfoliom",
      link: "#",
      img: Portfolio,
    },
  ];

  const certificates = [
    {
      img: soft,
      name: "HackerRank",
      desc: "Front-end Software engineer certificate",
      link: "https://www.hackerrank.com/certificates/iframe/d22259420867",
    },
    {
      img: jsbasic,
      name: "HackerRank",
      desc: "Front-end Javascript basics certificate",
      link: "https://www.hackerrank.com/certificates/iframe/63d5ca9cc5b9",
    },
      {
      img: jsintermediate,
      name: "HackerRank",
      desc: "Front-end Javascript intermediate certificate",
      link: "https://www.hackerrank.com/certificates/iframe/2e85bb751599",
    },
      {
      img: node,
      name: "HackerRank",
      desc: "Backend node.js",
      link: "https://www.hackerrank.com/certificates/iframe/2e85bb751599",
    },
   
  ];

  return (
    <div className="max-w-6xl mx-auto py-10 space-y-12">
      {/* Projects Section */}
      <section>
        <h2 className="text-3xl font-bold text-primary mb-6">My real projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {projects.map((p) => (
            <div key={p.name} className="card bg-base-200 shadow-lg p-4 hover:scale-105 transition-transform duration-300">
              {p.img && (
                <figure>
                  <img src={p.img} alt={p.name} className="w-full h-40 object-cover mb-4 rounded" />
                </figure>
              )}
              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className="text-sm text-gray-500">{p.desc}</p>
              <a href={p.link} className="btn btn-primary mt-3" target="_blank">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Certificates Section */}
      <section>
        <h2 className="text-3xl font-bold text-primary mb-6">My certificates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {certificates.map((c, index) => (
            <div key={c.name + index} className="card bg-base-200 shadow-lg p-4 hover:scale-105 transition-transform duration-300">
              {c.img && (
                <figure>
                  <img src={c.img} alt={c.name} className="w-full h-40 object-cover mb-4 rounded" />
                </figure>
              )}
              <h3 className="text-xl font-bold">{c.name}</h3>
              <p className="text-sm text-gray-500">{c.desc}</p>
              <a href={c.link} className="btn btn-primary mt-3" target="_blank">
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
  