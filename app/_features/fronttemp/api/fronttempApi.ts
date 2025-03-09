import { Match, Response } from "@/app/_features/fronttemp/api/fronttempApiType";
import { instance } from "@/app/_appRoot/instance";

export const fronttempApi = {
  async getFronttemp(): Promise<Response<Match>> {
    const res = await fetch(`${instance}/fronttemp`);
    return await res.json();
  },
};
