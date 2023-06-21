import { ILeaderboardEntry } from '../Interfaces/landerboard/ILeaderbord';
import LeaderboardAwayService from './LeaderAwayboardService';
import LeaderboardHomeService from './LeaderboardHomeService';

export default class LeaderboardAllService {
  private leaderboardHomeService: LeaderboardHomeService;
  private leaderboardAwayService: LeaderboardAwayService;

  constructor() {
    this.leaderboardHomeService = new LeaderboardHomeService();
    this.leaderboardAwayService = new LeaderboardAwayService();
  }

  public async getAllLeaderboard(): Promise<ILeaderboardEntry[]> {
    const homeLeaderboard = await this.leaderboardHomeService.getLeaderBoardHome();
    const awayLeaderboard = await this.leaderboardAwayService.getLeaderBoardAway();

    const mergedLeaderboard = LeaderboardAllService
      .mergeLeaderboards(homeLeaderboard, awayLeaderboard);

    return mergedLeaderboard;
  }

  private static mergeLeaderboards(
    homeLeaderboard: ILeaderboardEntry[],
    awayLeaderboard: ILeaderboardEntry[],
  ): ILeaderboardEntry[] {
    const mergedLeaderboard: { [teamName: string]: ILeaderboardEntry } = {};

    homeLeaderboard.forEach((entry) => {
      mergedLeaderboard[entry.name] = entry;
    });

    awayLeaderboard.forEach((entry) => {
      const mergedEntry = mergedLeaderboard[entry.name];
      if (mergedEntry) {
        mergedLeaderboard[entry.name] = LeaderboardAllService.updateMergedEntry(mergedEntry, entry);
      } else {
        mergedLeaderboard[entry.name] = entry;
      }
    });

    return Object.values(mergedLeaderboard);
  }

  private static updateMergedEntry(
    mergedEntry: ILeaderboardEntry,
    entry: ILeaderboardEntry,
  ): ILeaderboardEntry {
    const updatedEntry: ILeaderboardEntry = {
      ...mergedEntry,
      totalPoints: mergedEntry.totalPoints + entry.totalPoints,
      totalGames: mergedEntry.totalGames + entry.totalGames,
      totalVictories: mergedEntry.totalVictories + entry.totalVictories,
      totalDraws: mergedEntry.totalDraws + entry.totalDraws,
      totalLosses: mergedEntry.totalLosses + entry.totalLosses,
      goalsFavor: mergedEntry.goalsFavor + entry.goalsFavor,
      goalsOwn: mergedEntry.goalsOwn + entry.goalsOwn,
      goalsBalance: mergedEntry.goalsBalance + entry.goalsBalance,
      efficiency: +(((mergedEntry.totalPoints + entry.totalPoints) / ((mergedEntry
        .totalGames + entry.totalGames) * 3)) * 100).toFixed(2),
    };

    return updatedEntry;
  }
}
