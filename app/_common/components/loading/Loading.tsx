import React from "react";
import { cn } from "@/app/_common/utils";

export const Loading = () => {
  return (
    <div
      className={cn("fixed left-0 top-0 w-full h-full z-50 bg-dark-card-300/50", "flex justify-center items-center")}
    >
      <div className={"loader"} />
    </div>
  );
};
