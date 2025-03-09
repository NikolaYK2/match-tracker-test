import { fronttempApi } from "@/app/_features/fronttemp/api";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/_common/components/accordion";
import { Typography } from "@/app/_common/components/typography";
import { cn } from "@/app/_common/utils";
import { Team } from "@/app/_features/fronttemp/ui/team";
import { TeamItem } from "@/app/_features/fronttemp/ui/teamItem";
import { Card } from "@/app/_common/components/card";
import { Icon } from "@/app/_common/components/icons";
import { Button } from "@/app/_common/components/button";

export default async function Home() {
  const { data } = await fronttempApi.getFronttemp();

  return (
    <section>
      <section className={"flex justify-between items-center mt-[53px] flex-wrap"}>
        <Typography variant={"tacticSans"}>Match Tracker</Typography>

        <Card className={"flex max-w-[480px] py-4 px-7 justify-between ml-auto mr-3"}>
          <Icon className={"text-error-100 bg-dark-card-300"} iconId={"Vector"} />
          <Typography>Ошибка: не удалось загрузить информацию</Typography>
        </Card>

        <Button className={"flex items-center py-3.5"}>
          <Typography variant={"inter18Bold"}>Обновить</Typography>
          <div className={"relative w-5 ml-3"}>
            <Icon className={"translate-y-[2px] translate-x-[-3px]"} iconId={"Union"} />
            <Icon className={"text-light/50 rotate-180 translate-y-[-2px]"} iconId={"Union"} />
          </div>
        </Button>
      </section>

      <Accordion type={"single"} collapsible>
        {data.matches.map((item) => (
          <AccordionItem className={"border-none my-5"} key={item.title} value={item.title}>
            <AccordionTrigger>
              <Team name={item.awayTeam.name} />
              <div className={"flex flex-col item-center"}>
                <div className={"flex justify-center"}>
                  <Typography className={"mx-1"} variant={"inter20Bold"}>
                    {item.awayScore}
                  </Typography>
                  :
                  <Typography className={"mx-1"} variant={"inter20Bold"}>
                    {item.homeScore}
                  </Typography>
                </div>
                <div
                  className={cn(
                    "block px-6 py-1.5 bg-primary rounded-[4px]",
                    item.status === "Finished" && "bg-error-100",
                  )}
                >
                  <Typography variant={"inter12Bold"}>{item.status}</Typography>
                </div>
              </div>
              <Team name={item.homeTeam.name} className={"flex-row-reverse"} />
            </AccordionTrigger>
            <AccordionContent className={"flex items-center justify-between"}>
              <TeamItem team={item.homeTeam} />
              <TeamItem team={item.awayTeam} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
