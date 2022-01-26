import Link from "next/link";
import React from "react";

const MenuItem = ({ name = "", active = "" }) => {
  return (
    <Link href="/">
      <a
        className={`py-2 px-4 inline-block transition-all ${
          active
            ? "bg-green-600 text-white rounded-full hover:bg-green-700"
            : ""
        }`}
      >
        {name}
      </a>
    </Link>
  );
};

export default MenuItem;
