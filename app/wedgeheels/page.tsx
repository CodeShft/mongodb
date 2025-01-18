"use client";
import React from "react";

const WedgeHeels: React.FC = () => {
  const cards = [
    {
      image:
        "https://www.cicinia.com/cdn/shop/files/1_43281156-235b-4f6d-8f33-e8af0f3c0140.jpg?v=1713260350",
      name: "Dream Red",
    },
    {
      image:
        "https://cdn.cimri.io/image/1200x1200/gzhmman-high-heels-kama-burnu-acik-pu-black-platform-kadin-sandalet_882828062.jpg",
      name: "Cool Black",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRjpTYeZIW6GeSynRHCP1QXV-ZFUJ9vjXxog&s",
      name: "Shade of Black",
    },
    {
      image:
        "https://5.imimg.com/data5/LS/GX/MY-5862168/pink-fancy-party-wear-wedges-heels-for-women-500x500.png",
      name: "Barbie Pink",
    },
    {
      image:
        "https://image.made-in-china.com/202f0j00sYcoLHJlrnpq/10-Cm-Wedge-High-Heels-Female-Shoes-New-Pointy-Patent-Leather-All-Matching-Wedge-Heel-Pump-Shoes-for-Women.webp",
      name: "Cool Lime",
    },
    {
      image:
        "https://target.scene7.com/is/image/Target/GUEST_c132610b-8a24-497b-8d01-369b6c9cab68?wid=488&hei=488&fmt=pjpeg",
      name: "Sparkling",
    },
    {
      image:
        "https://images.vestiairecollective.com/images/resized/w=1246,q=75,f=auto,/produit/purple-leather-bottega-veneta-heels-44767604-1_2.jpg",
      name: "Snake Purple",
    },
    {
      image: "https://m.media-amazon.com/images/I/71Bze5n-XTL._AC_UY300_.jpg",
      name: "Purple Life",
    },
    {
      image:
        "https://terrydehavilland.com/wp-content/uploads/2024/04/IMG_9541.jpg",
      name: "Elegant Blue",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2022/4/KU/LB/PB/151158092/san126-gy-1--500x500.jpg",
      name: "White",
    },
    {
      image:
        "https://i.pinimg.com/originals/a7/6a/6c/a76a6c10f2dade4606d2ab0a61a691e3.jpg",
      name: "Yellow",
    },
    {
      image:
        "https://dorotheas-closet-vintage.myshopify.com/cdn/shop/products/2023-Rainbow-Super-High-Heels-Wedges-Sandals-Leisure-Party-Colorful-Espadrille-Sandal-Straw-Platform-Shoes-For.jpg_640x640_fee30e35-2309-470c-b12b-234ac1cadef1.jpg?v=1690927218&width=1445",
      name: "Rainbow",
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
                alt={`Wedge Heel: ${card.name}`}
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

export default WedgeHeels;
