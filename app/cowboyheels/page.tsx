"use client";
import React from "react";

const cowboyheels: React.FC = () => {
  const cards = [
    {
      image:
        "https://www.plein.com/on/demandware.static/-/Sites-plein-master-catalog/default/dw9029b8c4/images/large/A19S-WSE0376-PLE009N_0201_ses.jpg",
      name: "Bitter",
    },
    {
      image:
        "https://davidkoma.com/cdn/shop/products/DAVIDKOMARE23DKBOOTS06White_01_1024x1024.jpg?v=1679067536",
      name: "White Snow",
    },
    {
      image:
        "https://static.ticimax.cloud/cdn-cgi/image/width=-,quality=85/42407/uploads/urunresimleri/buyuk/kinsey-kovboy-bot-beyaz-06f-b1.jpg",
      name: "Black & White",
    },
    {
      image:
        "https://images.vestiairecollective.com/images/resized/w=1024,h=1024,q=75,f=auto,/produit/34515198-1_2.jpg",
      name: "Barbie Cowboy",
    },
    {
      image:
        "https://www.irregularchoice.com/cdn/shop/products/4217-13C-1-Guiding-Light-Irregular-Choice-Pink-Green-Glitter-Cowboy-Western-Style-Cuban-Heel-Short-Boots_11678f63-2284-42e2-bdf7-c26c35ba14ab_200x200.jpg?v=1705335786",
      name: "Butterfly",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8D0ODWnhCHMyYfa4Nng9TyvpARbzhnTyG4w&s",
      name: "Old but Gold",
    },
    {
      image:
        "https://cdn.laredoute.com/cdn-cgi/image/width=650,height=650,fit=pad,dpr=1/products/d/4/4/d444b83c1f8ca8d18f0f9ebee2ffae10.jpg",
      name: "Brown Eye",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1HoPrEJipgTyLBIA9BsZWaxf5AClJ09AIyg&s",
      name: "Pink Gum",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsJ3-X342fv5SXgTXthnNS2c_66XkD9UGg9A&s",
      name: "Blue Owl",
    },
    {
      image:
        "https://i.pinimg.com/736x/58/0a/07/580a07900910a1a1c0fe672d8d3875df.jpg",
      name: "Rock Star",
    },
    {
      image:
        "https://i5.walmartimages.com/seo/Dingo-Womens-Fine-N-Dandy-Fringe-Studded-Snip-Toe-Casual-Boots-Ankle-Mid-Heel-2-3_936ce384-bde2-46a1-91fe-2c9a97c6f3c5.bbb58248c27f9e9d2c8c6aa85387fe2f.jpeg",
      name: "Yellow Stone",
    },
    {
      image:
        "https://5thave-img-cdn.beyondstyle.us/pf/bb8a7c37-13c4-372a-aa16-b77dd2e2f312.jpg?x-oss-process=style/s1",
      name: "Orange Juice",
    },
  ];

  return (
    <div className="max-h-screen overflow-auto p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2.5">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white border border-gray-400 rounded-lg p-1 flex flex-col items-center transform transition-transform duration-300 hover:scale-95"
          >
            <div className="w-full relative pb-[90%]">
              <img
                src={card.image}
                alt={`Cowboy Heel: ${card.name}`}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
              />
            </div>
            <h3 className="text-sm font-semibold text-gray-700 mt-2">
              {card.name}
            </h3>
            <p className="text-[11px] text-gray-500">Detail for {card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default cowboyheels;
