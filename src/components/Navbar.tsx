import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white">
      <div className="flex items-center justify-between w-full max-w-[1130px] py-[22px] mx-auto">
        <Link href="/">
          <Image
            src="/assets/images/logos/logo.svg"
            alt="logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "auto" }}
          />
        </Link>
        <ul className="flex items-center gap-[50px] w-fit">
          <li>
            <Link href="/">Browse</Link>
          </li>
          <li>
            <Link href="/">Popular</Link>
          </li>
          <li>
            <Link href="/">Categories</Link>
          </li>
          <li>
            <Link href="/">Events</Link>
          </li>
          <li>
            <Link href="/">My Booking</Link>
          </li>
        </ul>
        <a
          href="#"
          className="flex items-center gap-[10px] rounded-full border border-[#000929] py-3 px-5"
        >
          <Image
            src="/assets/images/icons/call.svg"
            alt="icon"
            width={0}
            height={0}
            sizes="100vw"
            className="w-6 h-6"
          />
          <span className="font-semibold">Contact Us</span>
        </a>
      </div>
    </nav>
  );
}
