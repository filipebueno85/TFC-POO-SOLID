import { ILeaderboardEntry, ITeamStats } from '../Interfaces/landerboard/ILeaderbord';
import { IMatche } from '../Interfaces/matches/IMatche';
import { IMatcheModel } from '../Interfaces/matches/IMatcheModel';
import SequelizeTeam from '../database/models/SequelizeTeam';
import MatchesModel from '../models/MatchesModel';

export default class LeaderboardService {
  private matchesModel: IMatcheModel;

  constructor(matchesModel: IMatcheModel = new MatchesModel()) {
    this.matchesModel = matchesModel;
  }

  public async getLeaderBoardHome(): Promise<ILeaderboardEntry[]> {
    const queryOptions = await this.matchesModel.findAll({
      where: { inProgress: false },
      include: [
        {
          model: SequelizeTeam,
          as: 'homeTeam',
          attributes: { exclude: ['id'] },
        },
        {
          model: SequelizeTeam,
          as: 'awayTeam',
          attributes: { exclude: ['id'] },
        },
      ],
    });

    const leaderboard = LeaderboardService.buildLeaderboard(queryOptions);

    return Object.values(leaderboard);
  }

  private static buildLeaderboard(matches: IMatche[]): { [teamName: string]: ILeaderboardEntry } {
    const leaderboard: { [teamName: string]: ILeaderboardEntry } = {};
    matches.forEach((match) => {
      const homeTeam = match.homeTeam?.teamName;
      if (homeTeam !== undefined && !leaderboard[homeTeam]) {
        leaderboard[homeTeam] = LeaderboardService.createTeamObject(homeTeam);
      }
      LeaderboardService.updateTeamStats(leaderboard, homeTeam, match);
    });
    return leaderboard;
  }

  private static updateTeamStats(
    leaderboard: { [teamName: string]: ILeaderboardEntry },
    homeTeam: string | undefined,
    match: IMatche,
  ) {
    if (homeTeam !== undefined) {
      const team = leaderboard[homeTeam];
      team.totalGames += 1;
      team.totalPoints += LeaderboardService.calculatePoints(match);
      team.totalVictories += LeaderboardService.isVictory(match) ? 1 : 0;
      team.totalDraws += LeaderboardService.isDraw(match) ? 1 : 0;
      team.totalLosses += LeaderboardService.isLoss(match) ? 1 : 0;
      team.goalsFavor += match.homeTeamGoals;
      team.goalsOwn += match.awayTeamGoals;
      team.efficiency = +((team.totalPoints / (team.totalGames * 3)) * 100).toFixed(2);
      team.goalsBalance = team.goalsFavor - team.goalsOwn;
    }
  }

  private static createTeamObject(teamName: string): ITeamStats {
    return {
      name: teamName,
      totalPoints: 0,
      totalGames: 0,
      totalVictories: 0,
      totalDraws: 0,
      totalLosses: 0,
      goalsFavor: 0,
      goalsOwn: 0,
      goalsBalance: 0,
      efficiency: 0,
    };
  }

  private static calculatePoints(match: IMatche): number {
    if (match.homeTeamGoals > match.awayTeamGoals) {
      return 3;
    } if (match.homeTeamGoals === match.awayTeamGoals) {
      return 1;
    }

    return 0;
  }

  private static isVictory(match: IMatche): boolean {
    return match.homeTeamGoals > match.awayTeamGoals;
  }

  private static isDraw(match: IMatche): boolean {
    return match.homeTeamGoals === match.awayTeamGoals;
  }

  private static isLoss(match: IMatche): boolean {
    return match.homeTeamGoals < match.awayTeamGoals;
  }
}
