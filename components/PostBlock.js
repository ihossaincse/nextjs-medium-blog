import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/sanity";

const PostBlock = ({ slug, title, description, mainImage }) => {
  return (
    <Link href={`/post/${slug}`}>
      <a className="overflow-hidden transition-all border-2 border-gray-200 rounded-md hover:opacity-80">
        <div className="relative w-full h-52">
          <Image
            src={urlFor(mainImage).url()}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="px-4 py-2">
          <h2 className="font-semibold">{title}</h2>
          <p className="">{description}</p>
        </div>
      </a>
    </Link>
  );
};

export default PostBlock;
