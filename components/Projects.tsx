"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import Project from "@/components/Project";

const projects = [
  {
    image: "/assets/images/visio.webp",
    name: "Visio",
    descriptionKey: "Visio",
    liveLink: "https://visio-virid-phi.vercel.app/",
    githubLink: "https://github.com/nwelchr/visio",
    technologies: [
      "Next.js",
      "TypeScript",
      "Express",
      "MongoDB",
      "Mongoose",
      "OpenAI",
      "DALL-E",
      "Cloudinary",
      "Render",
      "Vercel",
    ],
  },
  {
    image: "/assets/images/livedocs.webp",
    name: "LiveDocs App",
    descriptionKey: "LiveDocs",
    liveLink: "https://realtime-docs-theta.vercel.app/",
    githubLink: "https://github.com/nwelchr/realtime-docs",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Shadcn",
      "Clerk",
      "Liveblocks",
      "Vercel",
    ],
  },
  {
    image: "/assets/images/bop.webp",
    name: "Spotify Clone - Bop",
    descriptionKey: "Bop",
    liveLink: "https://bop-aa-b461179cab20.herokuapp.com/#/",
    githubLink: "https://github.com/nwelchr/bop",
    technologies: [
      "React",
      "Redux",
      "Ruby on Rails",
      "Express",
      "Postgres",
      "Heroku",
    ],
  },
  {
    image: "/assets/images/power-of-friendship.webp",
    name: "The Power of Friendship",
    descriptionKey: "ThePowerOfFriendship",
    liveLink: "https://nwelchr.github.io/The-Power-of-Friendship/",
    githubLink: "https://github.com/nwelchr/The-Power-of-Friendship",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    image: "/assets/images/project-phantom.webp",
    name: "Project Phantom",
    descriptionKey: "ProjectPhantom",
    liveLink: "https://phantomvrtranslate.github.io/website/",
    githubLink: "https://github.com/PhantomVRTranslate/PhantomVR",
    technologies: ["React VR", "NPM"],
  },
  {
    image: "/assets/images/synergia.webp",
    name: "Synergia",
    descriptionKey: "Synergia",
    liveLink: "https://synergiaihr.com/",
    technologies: [],
  },
  {
    image: "/assets/images/verbling.webp",
    name: "Verbling Challenge",
    descriptionKey: "Verbling",
    liveLink: "https://nwelchr.github.io/verbling-challenge/",
    githubLink: "https://github.com/nwelchr/verbling-challenge",
    technologies: ["React", "Context API"],
  },
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-wrap justify-center gap-8 group">
      {projects.map(
        ({
          image,
          descriptionKey,
          liveLink,
          githubLink,
          name,
          technologies,
        }) => (
          <Project
            key={descriptionKey}
            image={image}
            description={t(descriptionKey)}
            liveLink={liveLink}
            githubLink={githubLink}
            name={name}
            technologies={technologies}
          />
        )
      )}
    </div>
  );
};

export default Projects;