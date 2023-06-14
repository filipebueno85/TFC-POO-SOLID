import { NewEntity } from '../Interfaces';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { ITeam } from '../Interfaces/teams/ITeam';
import { ITeamModel } from '../Interfaces/teams/ITeamModel';
import TeamModel from '../models/TeamModel';

export default class TeamService {
  private _teamModel: ITeamModel;

  constructor(teamModel = new TeamModel()) {
    this._teamModel = teamModel;
  }

  public async getAllTeams(): Promise<ServiceResponse<ITeam[]>> {
    const allTeams = await this._teamModel.findAll();
    return { status: 'SUCCESSFUL', data: allTeams };
  }

  public async getTeamById(id: number): Promise<ServiceResponse<ITeam>> {
    const team = await this._teamModel.findById(id);
    if (!team) return { status: 'NOT_FOUND', data: { message: `Team ${id} not found!` } };
    return { status: 'SUCCESSFUL', data: team };
  }

  public async createTeam(team: NewEntity<ITeam>): Promise<ServiceResponse<ITeam>> {
    const newTeam = await this._teamModel.create(team);
    return { status: 'SUCCESSFUL', data: newTeam };
  }
}
