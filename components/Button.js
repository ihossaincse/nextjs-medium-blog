import Link from "next/link";
import React from "react";

const Button = ({ text = "Button", url = "#" }) => {
  return (
    <Link href={url}>
      <a className="inline-block px-5 py-2 bg-white border-2 border-black rounded-full">
        {text}
      </a>
    </Link>
  );
};

export default Button;
