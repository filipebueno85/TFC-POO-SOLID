import { FindOptions } from 'sequelize';
import { NewEntity } from '../Interfaces';
import { IMatche } from '../Interfaces/matches/IMatche';
import { IMatcheModel } from '../Interfaces/matches/IMatcheModel';
import SequelizeMatches from '../database/models/SequelizeMatches';

export default class MatchesModel implements IMatcheModel {
  private model = SequelizeMatches;

  // async findOne(queryOptions: FindOptions<any>): Promise<IMatche[]> {
  //   const dbData = await this.model.findOne(queryOptions);
  //   return dbData;
  // }

  async findAll(queryOptions: FindOptions): Promise<IMatche[]> {
    const dbData = await this.model.findAll(queryOptions);
    return dbData;
  }

  // async findById(queryOptions: IMatche['id']): Promise<IMatche | null> {
  //   const match = await this.model.findByPk(queryOptions);
  //   if (!match) return null;
  //   return match;
  // }

  async update(id: number, data: Partial<IMatche>): Promise<void> {
    await this.model.update(data, { where: { id } });
  }

  // Omit<InferCreationAttributes<SequelizeMatches,
  // { omit: never; }>, 'id'>
  async create(matches: NewEntity<IMatche>): Promise<IMatche> {
    const newMatch = await this.model.create(matches);
    return newMatch;
  }
}
