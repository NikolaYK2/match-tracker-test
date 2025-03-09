import { Team } from "@/app/_features/fronttemp/api/fronttempApiType";
import { ResultTeam } from "@/app/_features/fronttemp/ui/teamItem";

export const getItem = (teamResult: ResultTeam, team: Team) => {
  switch (teamResult) {
    case "Points":
      return team.points;
    case "Место":
      return team.place;
    case "Всего убийств":
      return team.total_kills;
    default:
      return "";
  }
};
