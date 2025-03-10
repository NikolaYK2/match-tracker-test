import { Button } from "@/app/_common/components/button";
import { Typography } from "@/app/_common/components/typography";
import { Icon } from "@/app/_common/components/icons";
import { cn } from "@/app/_common/utils";

type Props = {
  onClick: () => void;
  loading: boolean;
};

export const RefreshButton = ({ onClick, loading }: Props) => (
  <Button className="flex items-center py-3.5" onClick={onClick} disabled={loading}>
    <Typography variant="inter18Bold">{loading ? "Обновление..." : "Обновить"}</Typography>
    <div className={cn("relative w-5 ml-3", loading && "animate-spin-slow")}>
      <Icon className="translate-y-[2px] translate-x-[-3px]" iconId="Union" />
      <Icon className="text-light/50 rotate-180 translate-y-[-2px]" iconId="Union" />
    </div>
  </Button>
);
