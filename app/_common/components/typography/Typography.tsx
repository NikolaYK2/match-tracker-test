import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/app/_common/utils/cn";

type Variant =
  | "tacticSans"
  | "inter12Bold"
  | "inter16Bold"
  | "inter18Bold"
  | "inter18Reg"
  | "inter20Bold"
  | "medium"
  | "base";

type Props = {
  asChild?: boolean;
  variant?: Variant;
} & ComponentPropsWithoutRef<"p">;

export const Typography = forwardRef<ComponentRef<"p">, Props>(
  ({ asChild, variant = "robotoBold16", className, ...props }, ref) => {
    const Component = asChild ? Slot : "p";

    return <Component ref={ref} {...props} className={cn("text-light", variant, className)} />;
  },
);

Typography.displayName = "Typography";
