import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" passHref>
      <div className="flex items-center justify-center text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight cursor-pointer">
        <div
          className="relative bg-gradient-to-r from-orange-400 via-yellow-500 to-red-600 text-white px-4 py-2 sm:px-5 sm:py-3 shadow-xl"
          style={{
            clipPath:
              "polygon(50% 0%, 60% 15%, 80% 15%, 100% 30%, 90% 50%, 100% 70%, 80% 85%, 60% 85%, 50% 95%, 40% 85%, 20% 85%, 0% 70%, 10% 50%, 0% 30%, 20% 15%, 40% 15%)",
          }}
        >
          <span className="text-gray-200 text-2xl sm:text-3xl font-extrabold tracking-tight">
            Click
            <span className="text-gray-900 px-1 py-1 rounded-md text-base sm:text-xl">
              .com
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
