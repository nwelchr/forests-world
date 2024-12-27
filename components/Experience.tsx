"use client";

import React from "react";
import Link from "next/link";
import Badge from "./ui/badge";

const Experience = ({
  role,
  company,
  companyLink,
  dates,
  description,
  technologies,
}: {
  role: string;
  company: string;
  companyLink: string;
  dates: string;
  description: string;
  technologies: string[];
}) => {
  const handleClick = () => {
    if (window.innerWidth >= 1024) {
      window.open(companyLink, "_blank");
    }
  };

  return (
    <div
      className="group/link gap-4 sm:p-4 lg:group-hover:opacity-50 bg-transparent rounded-xl flex flex-row max-sm:flex-col transition-opacity transition-bg duration-500 lg:hover:bg-black/10 lg:hover:!opacity-100 sm:opacity-75 lg:cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex-shrink-0 w-32">
        <span className="text-sm capitalize font-semibold text-gray-600 dark:text-gray-400">
          {dates}
        </span>
      </div>
      <div className="flex flex-col gap-y-2">
        <Link
          className="font-medium lg:group-hover/link:text-teal-700 hover:text-teal-700 dark:lg:group-hover/link:text-teal-400 dark:hover:text-teal-400 transition-color duration-500"
          href={companyLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            {role} - {company}
          </span>
        </Link>
        <p className="text-base font-light">{description}</p>
        <ul className="gap-2 flex flex-wrap mt-4">
          {technologies.map((tech, idx) => (
            <Badge key={idx} term={tech} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;