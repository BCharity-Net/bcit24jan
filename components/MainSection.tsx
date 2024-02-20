import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const MainSection = () => {
  const { t } = useTranslation(["common", "home"]);
  return (
    <section
      className="relative flex items-center justify-between text-white mt-10 mb-20 max-w-screen-xl mx-auto"
      style={{ backgroundColor: "transparent" }}
    >
      <div className="z-10 w-full md:w-1/2">
        <h1 className="text-7xl font-bold">
          {/* Page Title */}
          {t("home:home-page-title")}
        </h1>
        <p className="mt-4 mb-6">
          {/* Page Subtitle */}
          {t("home:home-page-subtitle")}
        </p>
        <div className="flex flex-col md:flex-row">
          <Link
            href="/login"
            className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 mr-2 mb-2 md:mb-0"
          >
            {/* Login Button */}
            {t("common:account-login")}
          </Link>
          <Link
            href="/discussions"
            className="inline-block bg-transparent border-2 border-white text-white py-2 px-4 rounded hover:bg-white hover:text-black"
          >
            {/* Discussions Button */}
            {t("common:discussions")}
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
