import { Request, Response } from 'express';
import LeaderboardAwayService from '../services/LeaderAwayboardService';
import LeaderboardService from '../services/LeaderboardService';

export default class LeaderboardController {
  private leaderboardService: LeaderboardService;
  private leaderboardAwayService: LeaderboardAwayService;

  constructor() {
    this.leaderboardService = new LeaderboardService();
    this.leaderboardAwayService = new LeaderboardAwayService();
  }

  public async getLeaderBoardHome(_req: Request, res: Response) {
    const serviceResponse = await this.leaderboardService.getLeaderBoardHome();
    const order = serviceResponse.sort((a, b) => b.totalPoints - a.totalPoints
    || b.totalVictories - a.totalVictories || b.goalsBalance - a.goalsBalance
    || b.goalsFavor - a.goalsFavor || b.goalsOwn - a.goalsOwn
    || b.efficiency - a.efficiency || b.totalGames - a.totalGames || b.totalLosses - a.totalLosses);
    return res.status(200).json(order);
  }

  public async getLeaderBoardAway(_req: Request, res: Response) {
    const serviceResponseAway = await this.leaderboardAwayService.getLeaderBoardAway();
    const orderAway = serviceResponseAway.sort((a, b) => b.totalPoints - a.totalPoints
    || b.totalVictories - a.totalVictories || b.goalsBalance - a.goalsBalance
    || b.goalsFavor - a.goalsFavor || b.goalsOwn - a.goalsOwn
    || b.efficiency - a.efficiency || b.totalGames - a.totalGames);
    return res.status(200).json(orderAway);
  }
}
