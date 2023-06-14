import { Request, Response } from 'express';
import MatchesService from '../services/MatcheService';

export default class MatchesController {
  private _matchesService: MatchesService;

  constructor() {
    this._matchesService = new MatchesService();
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

  // public async getById(req: Request, res: Response) {
  //   const { id } = req.params;

  //   const serviceResponse = await this._matchesService.findById(+id);
  //   if (serviceResponse.status !== 'SUCCESSFUL') {
  //     return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  //   }
  //   return res.status(200).json(serviceResponse.data);
  // }

  public async create(req: Request, res: Response) {
    const serviceResponse = await this._matchesService.create(req.body);
    return res.status(201).json(serviceResponse);
  }
}
