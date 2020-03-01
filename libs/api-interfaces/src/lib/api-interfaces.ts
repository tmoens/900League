export interface Message {
  message: string;
}

export interface IPlayer2Team {
  playerId: string;
  teamId: string;
  rating: number;
  ratingRationale: string;
}

export enum FixtureState {
  SCHEDULED = 'scheduled',
  COMPLETED = 'completed',
}

export interface IFixture {
  id: string;
  date: Date;
  location: string;
  state: string;
}

export interface IPlayer {
  id: string;
  firstName: string;
  lastName: string;
  pdgaNumber: number;
}

export interface ITeam2Fixture {
  teamId: string;
  fixtureId: string;
  role: string;
  points: number;
}

export interface ITeam {
  id: string;
  name: string;
  shortName: string;
}

export interface FixtureDTO extends IFixture {
  homeTeam: ITeam;
  awayTeam: ITeam;
  homePoints: number;
  awayPoints: number;
}

export enum FixtureRoles {
  HOME = 'home',
  AWAY = 'away',
}

export interface TeamPlayerDTO extends IPlayer2Team{
  player: IPlayer;
}

export interface TeamDTO extends ITeam {
  roster: TeamPlayerDTO[];
  schedule: ITeam2Fixture[];
}

export interface StandingsRowDTO {
  teamName: string;
  teamId: string;
  pointsFor: number;
  pointsAgainst: number;
  numberPlayed: number;
  rating: number;
}

