import React, { ReactNode } from "react";
import { cn } from "@/app/_common/utils";

type Props = {
  children: ReactNode;
  className?: string;
};
export const Card = ({ children, className }: Props) => {
  return <section className={cn("bg-dark-card-100 py-2 px-6", className)}>{children}</section>;
};
