"use client";
import React from "react";

const booties = () => {
  const cards = [
    {
      image:
        "https://cdn.shopify.com/s/files/1/0753/7914/7034/files/GS1492404-SND_1l.jpg?v=1734110281&width=380",
      name: "Moonlight",
    },
    {
      image:
        "https://s.alicdn.com/@sc04/kf/H8ec699385eb74e42a2c7a6a238083c19Z.jpg_720x720q50.jpg",
      name: "Grey Cloud",
    },
    {
      image:
        "https://cdn.derimarket.net/upload/images/Cool-Moon-Hakiki-Deri-Ici-Kurklu-Bayan-Kar-Botu-251050_1567509910454_xml2.jpg",
      name: "Light Glow",
    },
    {
      image:
        "https://www.villagekids.co.uk/cdn/shop/files/SQUAREBANNER_11_33f75d5a-d3e4-4081-98f0-2804489261d5_1080x.jpg",
      name: "Mocha",
    },
    {
      image:
        "https://www.koifootwear.com/cdn/shop/files/Kawaii_Sasquatch_Fluffy_Snow_Boots_-_Pink3.jpg?v=1734434711",
      name: "Fur Monster",
    },
    {
      image:
        "https://cantyboots.com/cdn/shop/files/ef8b0ee9f82bd1a16ba330b128be82e3_600x.jpg?v=1735930122",
      name: "Jeans",
    },
    {
      image:
        "https://www.modainpelle.com/images/taysha-purple-snake-alcantara-p12525-81642_thumb.jpg",
      name: "Purple Mulberry",
    },
    {
      image:
        "https://i5.walmartimages.com/seo/Womens-Black-Patent-Ankle-Length-Go-Go-Boots-size-7_0ee623eb-095d-44b1-b058-8b84cddfc31f_1.053d47c0add1d8719e430725f85416f3.jpeg?odnHeight=432&odnWidth=320&odnBg=FFFFFF",
      name: "Black Seal",
    },
    {
      image:
        "https://di2ponv0v5otw.cloudfront.net/posts/2024/02/22/65d7907b6cb77770ae3ca438/m_65d79080253a8c09287fdeaf.jpeg",
      name: "Star Light",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/413VB4JM94L._AC_QL92_SH45_UL240_SR240,220_.jpg",
      name: "Brown Sugar",
    },
    {
      image:
        "https://hunterboots.com/cdn/shop/files/womens-original-tall-gloss-rain-boots-military-red-484242.jpg?v=1714345436",
      name: "Rainy Day",
    },
    {
      image:
        "https://static.glami.com.tr/img/800x800bt/214944144-inuikii-kadin-kar-botu-bej.jpg",
      name: "White Flag",
    },
  ];

  return (
    <div className="max-h-screen overflow-auto p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white border border-gray-400 rounded-lg p-1 flex flex-col items-center transform transition-transform duration-300 hover:scale-95"
          >
            <div className="w-full relative pb-[90%]">
              <img
                src={card.image}
                alt={`Bootie ${index + 1}`}
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

export default booties;
