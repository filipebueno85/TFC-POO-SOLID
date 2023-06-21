import { Request, Response } from 'express';
import MatchesService from '../services/MatcheService';
import TeamService from '../services/TeamSevice';

export default class MatchesController {
  private _matchesService: MatchesService;
  private _teamService: TeamService;

  constructor() {
    this._matchesService = new MatchesService();
    this._teamService = new TeamService();
  }

  public async getAll(req: Request, res: Response) {
    const { inProgress } = req.query;
    if (inProgress) {
      const serviceResponse = await this._matchesService.findAll(inProgress === 'true');
      return res.status(200).json(serviceResponse.data);
    }
    const serviceResponse = await this._matchesService.findAll();
    return res.status(200).json(serviceResponse.data);
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params;
    await this._matchesService.update(+id);
    return res.status(200).json({ message: 'Finished' });
  }

  public async updateGoals(req: Request, res: Response) {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    await this._matchesService.updateGoals(+id, +homeTeamGoals, +awayTeamGoals);
    return res.status(200).json({ message: 'Updated' });
  }
  
  public async create(req: Request, res: Response) {
    const serviceResponse = await this._matchesService.create(req.body);

    if (serviceResponse.status === 'NOT_FOUND') {
      return res.status(404).json(
        serviceResponse.data,
      );
    }
    return res.status(201).json(serviceResponse.data);
  }
}
