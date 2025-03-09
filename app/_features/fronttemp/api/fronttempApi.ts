import { Matches, Response } from "@/app/_features/fronttemp/api/fronttempApiType";
import { instance } from "@/app/_appRoot/instance";

export const fronttempApi = {
  async getFronttemp(): Promise<Response<Matches>> {
    const res = await fetch(`${instance}/fronttemp`);
    return await res.json();
  },
};
