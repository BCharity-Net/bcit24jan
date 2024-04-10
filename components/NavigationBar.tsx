import Image from "next/image";
import Link from "next/link";
import "../app/globals.css";
import { MdArrowDropDown } from "react-icons/md";
import { useTranslations } from 'next-intl';

export default function NavigationBar() {
  const t = useTranslations('navbar');
  return (
    <header className="overflow-hidden">
        <nav
          className="flex justify-between items-center bg-black text-white p-4 max-w-screen-xl mx-auto"
          style={{ height: "calc(10vh - 10px)" }}
        >
          <div className="flex items-center">
            <Image src="/logo.png" alt="BCharity Logo" width={50} height={50} />
            <span className="font-bold text-xl ml-2">
              {t('bcharity')}
            </span>
          </div>

          <div className="flex">
            <Link
              href="/"
              className="mx-2 text-gray-400 hover:text-white hover:underline"
            >
              {/* Home */}
              {t('nav-home')}
            </Link>
            <Link
              href="/vhrs"
              className="mx-2 text-gray-400 hover:text-white hover:underline"
            >
              {/* VHRs */}
              {t('nav-vhrs')}
            </Link>
            <Link
              href="/groups"
              className="mx-2 text-gray-400 hover:text-white hover:underline"
            >
              {/* Groups */}
              {t('nav-groups')}
            </Link>
            <Link
              href="/explore"
              className="mx-2 text-gray-400 hover:text-white hover:underline"
            >
              {/* Explore */}
              {t('nav-explore')}
            </Link>
            <Link
              href="/fundraisers"
              className="mx-2 text-gray-400 hover:text-white hover:underline"
            >
              {/* Fundraisers */}
              {t('nav-fundraisers')}
            </Link>
            <Link
              href="/more"
              className="mx-2 text-gray-400 hover:text-white hover:underline"
            >
              {/* More */}
              {t('nav-more')}
            </Link>
          </div>
        </nav>
    </header>
  );
}
