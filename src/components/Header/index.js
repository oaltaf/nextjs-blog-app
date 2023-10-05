import React from "react";
import Logo from "./logo";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full p-4 px-10 flex items-center justify-between">
      <Logo />
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/menu">Menu</Link>
      </nav>
    </header>
  );
};

export default Header;
