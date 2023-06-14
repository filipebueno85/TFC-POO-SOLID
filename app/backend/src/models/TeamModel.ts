import { NewEntity } from '../Interfaces';
import { ITeam } from '../Interfaces/teams/ITeam';
import { ITeamModel } from '../Interfaces/teams/ITeamModel';
import SequelizeTeam from '../database/models/SequelizeTeam';

export default class TeamModel implements ITeamModel {
  private model = SequelizeTeam;

  async findAll(): Promise<ITeam[]> {
    const allTeams = await this.model.findAll();
    return allTeams.map(({ id, teamName }) =>
      ({ id, teamName }));
  }

  async findById(id: ITeam['id']): Promise<ITeam | null> {
    const team = await this.model.findByPk(id);
    if (team == null) return null;

    const { teamName }: ITeam = team;
    return { id, teamName };
  }

  async create(team: NewEntity<ITeam>): Promise<ITeam> {
    const newTeam = await this.model.create(team);
    const { id, teamName }: ITeam = newTeam;
    return { id, teamName };
  }
}
