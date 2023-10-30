"use client";
import BaseLayout from "@/components/baselayout";
import React, { FC, ReactElement } from "react";
import Logo from "@/assets/master-logo.png";
import Image from "next/image";
const Beranda: FC = (): ReactElement => {
  return (
    <BaseLayout>
      <div className="w-full h-screen">
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
              <p className="font-bold text-2xl border-b">Biography</p>
              <p className="pt-4">
                My Full name is Cionta Immanuel Kaban, I live in Depok City,
                Indonesia
              </p>
              <p>I Interested to be a Software Engineer</p>
            </div>
            <div className="w-full">
              <p className="font-bold text-2xl border-b">
                Lets Connect on Social Media!
              </p>
              <p>4</p>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Beranda;
