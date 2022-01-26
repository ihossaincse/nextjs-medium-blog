import Image from "next/image";
import Link from "next/link";
import React from "react";
import MenuItem from "./MenuItem";

const menu = ["Our story", "Membership", "Write", "Sign In"];

const Header = () => {
  return (
    <header className="bg-white border-b-2 border-black">
      <div className="flex flex-col items-center justify-between p-5 mx-auto max-w-7xl md:flex-row">
        <div className="">
          <Link href="/">
            <a>
              <Image
                src="/images/logo.png"
                alt="logo"
                width={160}
                height={30}
                objectFit="contain"
              />
            </a>
          </Link>
        </div>
        <div className="">
          <ul className="flex flex-col items-center md:flex-row">
            {menu.map((item) => (
              <li key={Math.random()}>
                <MenuItem name={item} active="" />
              </li>
            ))}
            <li className="">
              <MenuItem name="Get started" active="active" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
