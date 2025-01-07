const Logo = () => {
  return (
    <div className="flex items-center justify-center text-2xl md:text-3xl font-extrabold tracking-tight">
      <div
        className="relative bg-gradient-to-r from-orange-400 via-yellow-500 to-red-600 text-white px-5 py-3 shadow-xl"
        style={{
          clipPath:
            "polygon(50% 0%, 60% 15%, 80% 15%, 100% 30%, 90% 50%, 100% 70%, 80% 85%, 60% 85%, 50% 95%, 40% 85%, 20% 85%, 0% 70%, 10% 50%, 0% 30%, 20% 15%, 40% 15%)",
        }}
      >
        <span className="text-black text-4xl font-extrabold tracking-tight">
          Click
          <span className="text-gray-900 px-1 py-1 rounded-md text-xl">
            .com
          </span>
        </span>
      </div>
    </div>
  );
};

export default Logo;
