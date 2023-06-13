import SequelizeTeam from '../database/models/SequelizeTeam';
import { ITeam } from '../Interfaces/teams/ITeam';

export default class TeamModel  {
  private model = SequelizeTeam;

  async findAll(): Promise<ITeam[]> {
    const allTeams = await this.model.findAll();
    return allTeams.map(({ id, teamName}) => 
    ({ id, teamName }));
  }

  async findById(id: ITeam['id']): Promise<ITeam | null> {
    const team = await this.model.findByPk(id);
    if (team == null) return null;

    const { teamName }: ITeam = team;
    return { id, teamName };
  }
}
