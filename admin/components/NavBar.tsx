"use client";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="w-full">
      <nav
        className="max-w-[1440px] mx-auto flex justify-between items-center
        sm:px-16 px-6 py-4"
      >
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.jpg"
            alt="CarHut Logo"
            width={180}
            height={20}
            className="object-contain"
          />
        </Link>
        <button disabled={false} type="button" className="text-cyan-700 font-semibold">
          <span className={`flex-1`}>Admin</span>
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
