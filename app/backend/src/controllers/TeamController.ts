import { Request, Response } from 'express';
import TeamService from '../services/TeamSevice';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class TeamController {
  private _teamService: TeamService;

  constructor() {
    this._teamService = new TeamService();
  }

  public async getAllTeams(_req: Request, res: Response) {
    const serviceResponse = await this._teamService.getAllTeams();

    return res.status(200).json(serviceResponse.data);
  }

  public async getTeamById(req: Request, res: Response) {
    const { id } = req.params;

    const serviceResponse = await this._teamService.getTeamById(+id);
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    return res.status(200).json(serviceResponse.data);
  }
}
