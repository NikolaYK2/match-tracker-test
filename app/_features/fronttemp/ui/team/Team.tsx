import React from "react";
import { Icon } from "@/app/_common/components/icons";
import { Typography } from "@/app/_common/components/typography";
import { cn } from "@/app/_common/utils";

type Props = {
  name: string;
  className?: string;
};
export const Team = ({ name, className }: Props) => {
  return (
    <section className={cn("flex items-center", className)}>
      <Icon iconId={"Item"} />
      <Typography className={"mr-4"} variant={"inter16Bold"}>
        {name}
      </Typography>
    </section>
  );
};
