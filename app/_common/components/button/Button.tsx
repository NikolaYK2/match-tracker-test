import { ComponentPropsWithoutRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/app/_common/utils";

type Variant = "primary";
type Props = {
  variant?: Variant;
  fullWidth?: boolean;
  asChild?: boolean;
} & ComponentPropsWithoutRef<"button">;
export const Button = ({ variant = "primary", fullWidth = false, asChild, className, ...props }: Props) => {
  const Comp = asChild ? Slot : "button";

  return <Comp {...props} className={cn("text-light", variant, fullWidth && "w-full", className)} />;
};
