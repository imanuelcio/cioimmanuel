"use client";
import BaseLayout from "@/components/baselayout";
import Image from "next/image";
import React, { FC, ReactElement } from "react";
import Marquee from "react-fast-marquee";
import HTML from "../../../public/html.png";
import CSS from "../../../public/css.png";
import Javascript from "../../../public/js.png";
import Reactjs from "../../../public/react.png";
import Nextjs from "../../../public/next.png";
// import Tailwind from "../../../public/tailwind.png";

const Skill: FC = (): ReactElement => {
  return (
    <BaseLayout>
      <div className="flex justify-center place-items-center bg-gray-900 py-5 rounded-md">
        <Marquee speed={200}>
          <div className="flex space-x-20 w-full">
            <Image
              className="object-cover w-full"
              src={HTML}
              alt="logo"
              width={150}
              height={100}
            />
            <Image
              className="object-cover w-full"
              src={CSS}
              alt="logo"
              width={150}
              height={100}
            />
            <Image
              className="object-cove w-full"
              src={Javascript}
              alt="logo"
              width={150}
              height={100}
            />
            <Image
              className="object-cover w-full"
              src={Reactjs}
              alt="logo"
              width={150}
              height={100}
            />
            <Image src={Nextjs} alt="logo" width={200} height={100} />
          </div>
        </Marquee>
      </div>
    </BaseLayout>
  );
};

export default Skill;
