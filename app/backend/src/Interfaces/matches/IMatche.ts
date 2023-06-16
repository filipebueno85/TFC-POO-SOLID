import { Identifiable } from '..';
import { ITeam } from '../teams/ITeam';

export interface IMatche extends Identifiable {
  homeTeamId: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
  awayTeamId: number;
  inProgress: boolean;
  homeTeam?: ITeam;
  awayTeam?: ITeam;
}

export interface IMatchCreate extends Identifiable {
  homeTeamId: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
  awayTeamId: number;
  // inProgress: boolean;
}

// export interface IMatcheGet extends IMatche {
//   homeTeam: ITeam;
//   awayTeam: ITeam;
// }

export type IMatchCreateResponse = IMatchCreate;
