"use client";
import React from "react";

const stilettos = () => {
  const cards = [
    {
      image:
        "https://ae01.alicdn.com/kf/S4ccb1bf665e146fbbf6f2138a61de2e3o.jpg",
      name: "Shiny Blue",
    },
    {
      image:
        "https://www.aooar.com/cdn/shop/products/2_8e3e7971-71ce-4c02-89e9-454ed8ee1971_300x300.jpg?v=1619335962",
      name: "Matte Blue",
    },
    {
      image:
        "https://productimages.hepsiburada.net/s/46/375-375/10859982389298.jpg",
      name: "Salmon Color",
    },
    {
      image:
        "https://i5.walmartimages.com/seo/Women-s-Red-Pointed-Toe-High-Heels-Sexy-Soft-Sole-Slip-On-Stiletto-Heels-Party-Dress-Shoes_03448892-5f80-4b2f-afa9-01c6b4c33a6a.92271ada650d114733955e14ce4037e1.jpeg?odnHeight=264&odnWidth=264&odnBg=FFFFFF",
      name: "Shiny Red",
    },
    {
      image:
        "https://www.shutterstock.com/image-photo/pair-black-suede-high-heel-600nw-2239493375.jpg",
      name: "Plain Black",
    },
    {
      image:
        "https://cdn.staticans.com/image/tr:e-sharpen-01,h-1440,w-1920,cm-pad_resize/data/Regal-Shoes/10-may-2023/9093386_3.jpg",
      name: "Sparkling",
    },
    {
      image:
        "https://media.dunelondon.com/image/upload/b_rgb:FFFFFF,c_pad,dpr_2.0,f_auto,g_center,h_500,q_auto,w_500/t_dl_medium_square2/c_pad,h_500,w_500/v1/products/AMINA-0085503940053221_Side?pgw=1",
      name: "Pink",
    },
    {
      image:
        "https://productimages.hepsiburada.net/s/46/375-375/10859971772466.jpg",
      name: "Cotton Candy",
    },
    {
      image: "https://m.media-amazon.com/images/I/61xRHj2SRWL.jpg",
      name: "Elegant Red",
    },
    {
      image: "https://m.media-amazon.com/images/I/51KTJMLsKZL._AC_UY900_.jpg",
      name: "Purple",
    },
    {
      image:
        "https://slimages.macysassets.com/is/image/MCY/products/8/optimized/24939518_fpx.tif?qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=jpeg&wid=342&hei=417",
      name: "Shiny Gray",
    },
    {
      image:
        "https://s.alicdn.com/@sc04/kf/Hecf8be006e0f421b8ed4fb28fddaa63eK.jpg_720x720q50.jpg",
      name: "Emerald",
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
                alt={`Stiletto ${index + 1}`}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
              />
            </div>
            <h3 className="text-xs font-semibold text-gray-700 mt-1.5">
              {card.name}
            </h3>
            <p className="text-[9px] text-gray-500">Detail for {card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default stilettos;
