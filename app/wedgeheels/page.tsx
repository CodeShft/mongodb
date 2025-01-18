"use client";

const WedgeHeels = () => {
  const cards = Array.from({ length: 12 }, (_, index) => index + 1);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4">
      {cards.map((index) => (
        <div
          key={index}
          className="bg-gray-200 border border-gray-300 rounded-lg p-3 flex flex-col items-center"
        >
          <div className="w-full h-32 bg-gray-300 mb-4 rounded"></div>
          <h3 className="text-lg font-semibold text-gray-700">
            Wedge Heels {index}
          </h3>
          <p className="text-sm text-gray-500">
            Detail for Wedge Heels {index}
          </p>
        </div>
      ))}
    </div>
  );
};

export default WedgeHeels;
