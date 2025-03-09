import { forwardRef, SVGProps } from "react";
import * as icons from "./indexIcons";

interface IconProps extends SVGProps<SVGSVGElement> {
  iconId: keyof typeof icons;
}

export const Icon = forwardRef<SVGSVGElement, IconProps>(({ iconId, ...props }, ref) => {
  const IconComponent = icons[iconId];

  if (!IconComponent) return null;

  return <IconComponent {...props} ref={ref} />;
});

Icon.displayName = "Icon";
