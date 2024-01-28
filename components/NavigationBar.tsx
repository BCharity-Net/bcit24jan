import Image from "next/image";
import Link from "next/link";
import '../app/globals.css';

export default function NavigationBar() {
  return (
    <main className="overflow-hidden">
      <nav className="flex justify-between items-center bg-black text-white p-4">
        <div className="flex items-center">
          <Image src="/logo.jpg" alt="BCharity Logo" width={100} height={50} />
          <span className="font-bold text-xl ml-2">BCharity</span>
        </div>

        <div className="flex">
          <Link href="/" className="mx-2 hover:underline">
            Home
          </Link>
          <Link href="/vhrs" className="mx-2 hover:underline">
            VHRs
          </Link>
          <Link href="/groups" className="mx-2 hover:underline">
            Groups
          </Link>
          <Link href="/explore" className="mx-2 hover:underline">
            Explore
          </Link>
          <Link href="/fundraisers" className="mx-2 hover:underline">
            Fundraisers
          </Link>
          <Link href="/more" className="mx-2 hover:underline">
            More
          </Link>
        </div>
      </nav>
    </main>
  );
}
