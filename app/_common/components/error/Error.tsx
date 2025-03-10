import React, { useEffect } from "react";
import { Card } from "@/app/_common/components/card";
import { Icon } from "@/app/_common/components/icons";
import { Typography } from "@/app/_common/components/typography";
import { Button } from "@/app/_common/components/button";
import { cn } from "@/app/_common/utils";

type Props = {
  message: string;
  setError: (message: string) => void;
  className?: string;
};
export const Error = ({ message, setError, className }: Props) => {
  const handleClick = () => {
    setError("");
  };
  useEffect(() => {
    const id = setTimeout(() => setError(""), 3000);
    return () => clearTimeout(id);
  }, [message]);

  if (message === "") return null;
  return (
    <Button className={cn("p-0", className)} variant={"link"} onClick={handleClick}>
      <Card className={"flex max-w-[480px] py-4 px-7 justify-between mr-3"}>
        <Icon className={"text-error-100 bg-dark-card-300 mr-3"} iconId={"Vector"} />
        <Typography>Ошибка: {message}</Typography>
      </Card>
    </Button>
  );
};
