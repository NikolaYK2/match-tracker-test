import React from "react";
import { Card } from "@/app/_common/components/card";
import { Typography } from "@/app/_common/components/typography";
import { Team } from "@/app/_features/fronttemp/api/fronttempApiType";
import { getItem } from "@/app/_features/fronttemp/ui/teamItem/lib";

export type ResultTeam = "Points" | "Место" | "Всего убийств" | "";
const RESULT_TEAM: ResultTeam[] = ["Points", "Место", "Всего убийств"];

type Props = {
  team: Team;
};
export const TeamItem = ({ team }: Props) => {
  return (
    <section className={"flex flex-col w-full flex-[0_1_49%]"}>
      <section className={"flex w-full flex-wrap"}>
        {team.players.map((player) => (
          <Card className={"flex flex-[1_1_30%] justify-between items-center m-1"} key={player.username}>
            <Typography variant={"inter16Bold"}>{player.username}</Typography>
            <Typography className={"text-light-dark min-w-[85px]"} variant={"base"}>
              Убийств: <span className={"medium text-light ml-1"}>{player.kills}</span>
            </Typography>
          </Card>
        ))}
      </section>
      <Card className={"flex justify-between m-1"}>
        {RESULT_TEAM.map((item) => (
          <Typography className={"text-light-dark"} key={item} variant={"base"}>
            {item} <span className={"medium text-light mx-1"}>{getItem(item, team)}</span>
          </Typography>
        ))}
      </Card>
    </section>
  );
};
