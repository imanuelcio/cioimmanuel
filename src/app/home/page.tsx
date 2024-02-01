"use client";
import BaseLayout from "@/components/baselayout";
import React, { FC, ReactElement } from "react";
import Logo from "@/assets/master-logo.png";
import Image from "next/image";
import IconLinkend from "@/assets/ic-linked.svg";
import IconInstagram from "@/assets/ic-insta.svg";
import Link from "next/link";

const Beranda: FC = (): ReactElement => {
  return (
    <BaseLayout>
      <div className="w-full h-full">
        <div className="space-y-10 justify-center w-full">
          <div className="flex pt-10">
            <h1 className="text-2xl">
              Hi! im Cio immanuel, Some one that has ability to love learning
              Coding
            </h1>
          </div>
          <div className="flex flex-row justify-between w-[100%] gap-10">
            <div className="h-full">
              <Image src={Logo} alt="Logo" width={350} height={100} />
            </div>
            <div className="flex flex-col w-full space-y-4">
              <h1 className="font-bold text-2xl border-b">Biography</h1>
              <h1 className="pt-4">
                My Full name is Cionta Immanuel Kaban, I live in Depok City,
                Indonesia
              </h1>
              <h1>I Interested to be a Software Engineer</h1>
            </div>
            <div className="w-full">
              <h1 className="font-bold text-2xl border-b">
                Lets Connect on Social Media!
              </h1>
              <div className="flex flex-row pt-4">
                <Link
                  href={
                    "https://www.linkedin.com/in/cionta-immanuel-kaban-8b9403270/"
                  }
                  target="_blank"
                >
                  <Image src={IconLinkend} alt="linked" />
                </Link>
                <Link
                  href={"https://www.instagram.com/imanuelcio"}
                  target="_blank"
                >
                  <Image src={IconInstagram} alt="instagram" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <h1 className="font-bold text-2xl border-b pt-10">Project</h1>
        <div className="grid grid-cols-2 place-items-center pt-12">
          <div className="flex flex-row space-x-10">
            <Image src={Logo} alt="Logo" width={100} height={100} />
            <div className="space-y-3">
              <h1 className="text-2xl font-semibold">Youtube Clone</h1>
              <h1 className="w-[400px]">
                This project created with ReactJs CRA. Consume public API from
                restapi.com
              </h1>
            </div>
          </div>
          <div className="flex flex-row space-x-10">
            <Image src={Logo} alt="Logo" width={100} height={100} />
            <div className="space-y-3">
              <h1 className="text-2xl font-semibold">
                Todo List with Rest API
              </h1>
              <h1 className="w-[400px]">
                This project created with ReactJs CRA with local JSON server.
              </h1>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </BaseLayout>
  );
};

export default Beranda;
