import { ILeaderboardEntry } from './ILeaderbord';

export interface ILeaderbordModel {
  findAll(): Promise<ILeaderboardEntry[]>,
}
