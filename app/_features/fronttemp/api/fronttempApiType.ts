export type Player = {
  username: string;
  kills: number;
};

export type Team = {
  name: string;
  place: number;
  players: Player[];
  points: number;
  total_kills: number;
};

export type Match = {
  awayScore: number;
  awayTeam: Team;
  homeScore: number;
  homeTeam: Team;
  time: string;
};

export type Response<T> = {
  data: T;
};
