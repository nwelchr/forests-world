import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="lg:hidden">{t("WelcomeShort")}</h1>
      <h1 className="hidden lg:block">{t("WelcomeFull")}</h1>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8">
        <section className="max-w-xl">
          <p className="text-center lg:text-justify text-xl">{t("Blurb")}</p>
        </section>
        <div className="">
          <Image
            className="max-w-64 max-h-64 rounded-full border border-dotted border-gray-400 p-1 object-cover"
            src="/assets/images/self.webp"
            alt="Self"
            width={300}
            height={300}
          />
        </div>
      </div>
    </>
  );
};

export default About;
