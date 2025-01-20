"use client";
import React from "react";

const blockwheels = () => {
  const cards = [
    {
      image:
        "https://aprajitatoor.com/wp-content/uploads/2022/05/round-block-heel-pastel-side.jpg",
      name: "Pink Panther",
    },
    {
      image:
        "https://aprajitatoor.com/wp-content/uploads/2021/03/Hues-Rings-Block-Heels.jpg",
      name: "Colorful Life",
    },
    {
      image:
        "https://www.bellabelleshoes.com/cdn/shop/products/bella-belle-shoes-fabiola-blush-block-heel-sandals-with-pearls-3_720x.jpg?v=1665065714",
      name: "White Bride",
    },
    {
      image:
        "https://i.etsystatic.com/17546273/r/il/50ea29/5243901896/il_570xN.5243901896_676c.jpg",
      name: "Blue Sky",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQCBOBKiZVQTcOmi1e72ZaHPwcPQochaa3FTMQXGGy2dhEAqbLfUGUZdR0pekNniYwJmU&usqp=CAU",
      name: "Black Beauty",
    },
    {
      image:
        "https://i5.walmartimages.com/asr/c9cb4a06-ed26-45f2-a1af-f353e5ccba58.a8a574b4a0054ff7e89ea83a9f39df54.png?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      name: "Sparkling Gold",
    },
    {
      image:
        "https://5thave-img-cdn.beyondstyle.us/pf/327d9754-892a-3d61-b2c9-c01419de6056.jpg?x-oss-process=style/s1",
      name: "Pink Rose",
    },
    {
      image:
        "https://i5.walmartimages.com/asr/b3d9d243-e873-43bf-bfe0-6638dba67bcf.fbe320f375e3f0dcf72135141b0cb15f.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      name: "Purple Rain",
    },
    {
      image:
        "https://www.xylondon.com/cdn/shop/files/akl-3_multi_1_533x.jpg?v=1704903598",
      name: "Orange River",
    },
    {
      image:
        "https://ragesa.co.za/cdn/shop/files/L_HEELS_32_Y3SLXAA34SUMS_1_800x.jpg?v=1695821181",
      name: "Brownie",
    },
    {
      image:
        "https://i5.walmartimages.com/asr/ebfa5b91-ba47-4b1e-9255-508b4bc944c1.ebc86b49c55f76251e50d1f0ee9f6dcc.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      name: "Yellow Sun",
    },
    {
      image:
        "https://i5.walmartimages.com/asr/802a0449-ec86-46c0-b0d4-915d51117667_1.398e47d50db94af815ecf3a55a305291.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      name: "Red Cherry",
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
                alt={`Block Heel ${index + 1}`}
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

export default blockwheels;
