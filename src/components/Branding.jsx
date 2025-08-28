import React from 'react';
import whellies01 from "../assets/whellies01.png";
import newspaper02 from "../assets/newspaper02.png";
import makerek from "../assets/makerek.png";
import newspaper from "../assets/newspaper.png";
import rider01 from "../assets/rider01.png";
import AnimatedBtn from "./shared/AnimatedBtn";

const Branding = () => {
  const cards = [
   
     {
      img: newspaper,
      title: "The Newspaper Project",
      desc: "A big vision transformed into a design-led impactful identity.",
      span: 2,
    },
     {
      img: makerek,
      title: "MegaCorp Branding",
      desc: "We needed a unique brand to compete against established products. Delivered in spades.",
    },
     {
      img: whellies01,
      title: "Make Ideas Happen",
      desc: "A local paper with big ideas needed a sharp new brand to inspire readers.",
    },
    {
      img: newspaper02,
      title: "Design Matters",
      desc: "Advice and support were second to none. Always willing to help and deliver solutions.",
    },
   
   
    {
      img: rider01,
      title: "Ride Bold",
      desc: "An adventurous project bringing bold ideas to life.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className={`relative group overflow-hidden ${
            card.span ? "lg:col-span-2" : ""
          }`}
        >
          <img
            src={card.img}
            alt={card.title}
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          {/* Text Content */}
          <div className="absolute bottom-0 left-0 w-full p-5 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="font-semibold text-lg">{card.title}</h3>
            <p className="text-sm mt-2">{card.desc}</p>
            <div className="font-semibold mt-3">
              <AnimatedBtn
                to={"#"}
                textColor="white"
                text={"Full project"}
                lineColor={"bg-white"}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Branding;
