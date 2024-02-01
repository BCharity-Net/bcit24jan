import Image from "next/image";
import Link from "next/link";
import "../app/globals.css";
import { MdArrowDropDown } from "react-icons/md";
import { useTranslation } from 'next-i18next';

export default function NavigationBar() {
  const { t } = useTranslation(['common', 'navbar']);
  return (
    <header className="overflow-hidden">
        <nav
          className="flex justify-between items-center bg-black text-white p-4 max-w-screen-xl mx-auto"
          style={{ height: "calc(10vh - 10px)" }}
        >
          <div className="flex items-center">
            <Image src="/logo.png" alt="BCharity Logo" width={50} height={50} />
            <span className="font-bold text-xl ml-2">
              {t('common:bcharity')}
            </span>
          </div>

          <div className="flex">
            <Link
              href="/"
              className="mx-2 text-gray-400 hover:text-white hover:underline"
            >
              {/* Home */}
              {t('navbar:nav-home')}
            </Link>
            <Link
              href="/vhrs"
              className="mx-2 text-gray-400 hover:text-white hover:underline"
            >
              {/* VHRs */}
              {t('navbar:nav-vhrs')}
            </Link>
            <Link
              href="/groups"
              className="mx-2 text-gray-400 hover:text-white hover:underline"
            >
              {/* Groups */}
              {t('navbar:nav-groups')}
            </Link>
            <Link
              href="/explore"
              className="mx-2 text-gray-400 hover:text-white hover:underline"
            >
              {/* Explore */}
              {t('navbar:nav-explore')}
            </Link>
            <Link
              href="/fundraisers"
              className="mx-2 text-gray-400 hover:text-white hover:underline"
            >
              {/* Fundraisers */}
              {t('navbar:nav-fundraisers')}
            </Link>
            <Link
              href="/more"
              className="mx-2 text-gray-400 hover:text-white hover:underline"
            >
              {/* More */}
              {t('navbar:nav-more')}
            </Link>
          </div>
        </nav>
    </header>
  );
}
