import Image from "next/image";
import Link from "next/link";
import "../app/globals.css";
import { MdArrowDropDown } from "react-icons/md";

export default function NavigationBar() {
  return (
    <main className="overflow-hidden">
      <nav
        className="flex justify-between items-center bg-black text-white p-4 max-w-screen-xl mx-auto"
        style={{ height: "calc(10vh - 10px)" }}
      >
        <div className="flex items-center">
          <Image src="/logo.png" alt="BCharity Logo" width={50} height={50} />
          <span className="font-bold text-xl ml-2">BCharity</span>
        </div>

        <div className="flex">
          <Link
            href="/"
            className="mx-2 text-gray-400 hover:text-white hover:underline"
          >
            Home
          </Link>
          <Link
            href="/vhrs"
            className="mx-2 text-gray-400 hover:text-white hover:underline"
          >
            VHRs
          </Link>
          <Link
            href="/groups"
            className="mx-2 text-gray-400 hover:text-white hover:underline"
          >
            Groups
          </Link>
          <Link
            href="/explore"
            className="mx-2 text-gray-400 hover:text-white hover:underline"
          >
            Explore
          </Link>
          <Link
            href="/fundraisers"
            className="mx-2 text-gray-400 hover:text-white hover:underline"
          >
            Fundraisers
          </Link>
          <Link
            href="/more"
            className="mx-2 text-gray-400 hover:text-white hover:underline"
          >
            More ▼
          </Link>
        </div>
      </nav>
    </main>
  );
}
