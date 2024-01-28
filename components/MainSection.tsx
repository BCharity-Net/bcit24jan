import Link from "next/link";
import Image from "next/image";

const MainSection = () => {
  return (
    <section
      className="relative flex items-center justify-between text-white mt-10 mb-20 max-w-screen-xl mx-auto"
      style={{ backgroundColor: "transparent" }}
    >
      <div className="z-10 w-full md:w-1/3">
        <h1 className="text-7xl font-bold">BCharity Baas</h1>
        <p className="mt-4 mb-6">
          Next generation group-driven composable, decentralized, and
          permissionless public good sector Web3 built on blockchains.
        </p>
        <div className="flex flex-col md:flex-row">
          <Link
            href="/login"
            className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 mr-2 mb-2 md:mb-0"
          >
            Login
          </Link>
          <Link
            href="/discussions"
            className="inline-block bg-transparent border-2 border-white text-white py-2 px-4 rounded hover:bg-white hover:text-black"
          >
            Discussions
          </Link>
        </div>
      </div>
      <div className="hidden md:block md:absolute md:inset-y-0 md:right-0 md:w-1/3">
        <Image
          src="/bg-hero.png"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
    </section>
  );
};

export default MainSection;
