"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

const Project = ({
  description,
  image,
  liveLink,
  githubLink,
}: {
  description: string;
  image: string;
  liveLink?: string;
  githubLink?: string;
}) => {
  return (
    <div className="bg-black/20 rounded-xl p-8 w-80 flex flex-col items-center text-center">
      <Image
        loading="lazy"
        className="w-full h-48 object-cover rounded-xl"
        src={image}
        alt={description}
        width={300}
        height={192}
        layout="intrinsic"
      />
      <p className="mt-4 text-base font-light">{description}</p>
      <ul className="flex gap-4 mt-4">
        {liveLink && (
          <li className="relative">
            <Link
              className="font-medium text-lg"
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </Link>
          </li>
        )}
        {githubLink && (
          <li className="relative">
            <Link
              className="font-medium text-lg"
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Project;
