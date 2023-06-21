import { Request, Response } from 'express';
import LeaderboardAwayService from '../services/LeaderAwayboardService';
import LeaderboardAllService from '../services/LeaderboardAllService';
import LeaderboardHomeService from '../services/LeaderboardHomeService';

export default class LeaderboardController {
  private leaderboardService: LeaderboardHomeService;
  private leaderboardAwayService: LeaderboardAwayService;
  private leaderboardAllService: LeaderboardAllService;

  constructor() {
    this.leaderboardService = new LeaderboardHomeService();
    this.leaderboardAwayService = new LeaderboardAwayService();
    this.leaderboardAllService = new LeaderboardAllService();
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

  public async getAllLeaderboard(_req: Request, res: Response) {
    const serviceResponse = await this.leaderboardAllService.getAllLeaderboard();
    const order = serviceResponse.sort((a, b) => b.totalPoints - a.totalPoints
    || b.totalVictories - a.totalVictories || b.goalsBalance - a.goalsBalance
    || b.goalsFavor - a.goalsFavor || b.goalsOwn - a.goalsOwn
    || b.efficiency - a.efficiency || b.totalLosses - a.totalLosses
    || b.totalGames - a.totalGames);
    return res.status(200).json(order);
  }
}
