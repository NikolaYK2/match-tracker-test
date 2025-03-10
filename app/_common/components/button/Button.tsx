import { ComponentPropsWithoutRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/app/_common/utils";

type Variant = "primary" | "link";
type Props = {
  variant?: Variant;
  fullWidth?: boolean;
  asChild?: boolean;
} & ComponentPropsWithoutRef<"button">;
export const Button = ({ variant = "primary", fullWidth = false, asChild, className, ...props }: Props) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      {...props}
      className={cn("text-light px-[40px] py-5 disabled:opacity-[0.4]", variant, fullWidth && "w-full", className)}
    />
  );
};
