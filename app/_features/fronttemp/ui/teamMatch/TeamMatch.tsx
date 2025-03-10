import { AccordionContent, AccordionItem, AccordionTrigger } from "@/app/_common/components/accordion";
import { Matches } from "@/app/_features/fronttemp/api/fronttempApiType";
import { Team } from "@/app/_features/fronttemp/ui/team";
import { Typography } from "@/app/_common/components/typography";
import { cn } from "@/app/_common/utils";
import { TeamItem } from "@/app/_features/fronttemp/ui/teamItem";

type Props = {
  match: Matches["matches"][number];
};

export const MatchItem = ({ match }: Props) => {
  return (
    <AccordionItem className="border-none my-5" key={match.title} value={match.title}>
      <AccordionTrigger>
        <Team name={match.awayTeam.name} />
        <div className="flex flex-col items-center">
          <div className="flex justify-center">
            <Typography className="mx-1" variant="inter20Bold">
              {match.awayScore}
            </Typography>
            :
            <Typography className="mx-1" variant="inter20Bold">
              {match.homeScore}
            </Typography>
          </div>
          <div
            className={cn(
              "block px-6 py-1.5 bg-primary rounded-[4px]",
              match.status === "Finished" && "bg-error-100",
              match.status === "Scheduled" && "bg-orange",
            )}
          >
            <Typography variant="inter12Bold">{match.status}</Typography>
          </div>
        </div>
        <Team name={match.homeTeam.name} className="flex-row-reverse" />
      </AccordionTrigger>
      <AccordionContent className="flex items-center justify-between p-4">
        <TeamItem team={match.homeTeam} />
        <TeamItem team={match.awayTeam} />
      </AccordionContent>
    </AccordionItem>
  );
};
