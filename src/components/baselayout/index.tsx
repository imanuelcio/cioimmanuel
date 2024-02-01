import Link from "next/link";
import React from "react";

type TBaseLayout = {
  children?: React.ReactNode;
};
const BaseLayout = ({ children }: TBaseLayout) => {
  return (
    <div className="bg-black h-[100vh] font-mono">
      <div className="flex flex-col px-20 w-full">
        <nav className="flex justify-around w-full py-5 text-white">
          <ul className="flex w-full flex-row justify-between place-items-center h-full">
            <p>
              <span className="font-bold text-slate-400 border-b-2 text-xl">
                Cio Immanuel
              </span>
              | Portofolio
            </p>
            <div className="flex">
              <li className="cursor-pointer px-5 py-1 hover:bg-white hover:text-black rounded hover:transition-all">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="cursor-pointer px-5 py-1 hover:bg-white hover:text-black rounded hover:transition-all">
                <Link href={"/skill"}>Skills</Link>
              </li>
              <li className="cursor-pointer px-5 py-1 hover:bg-white hover:text-black rounded hover:transition-all">
                <Link href={"/about"}>About</Link>
              </li>
            </div>
          </ul>
        </nav>
        <p className="text-white">{children}</p>
      </div>
    </div>
  );
};

export default BaseLayout;
