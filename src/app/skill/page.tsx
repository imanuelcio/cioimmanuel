"use client";
import BaseLayout from "@/components/baselayout";
import React, { FC, ReactElement } from "react";

const Skill: FC = (): ReactElement => {
  const apaaja = ["1", "2", "3"];
  return (
    <BaseLayout>
      <div className="flex justify-center">
        {apaaja.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </BaseLayout>
  );
};

export default Skill;
