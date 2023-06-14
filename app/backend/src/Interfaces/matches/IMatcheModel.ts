import { FindOptions } from 'sequelize';
import { ID, NewEntity } from '..';
import { IMatche } from './IMatche';

export type IMatcheModel = ICRUDModel<IMatche>;

export interface ICRUDModelCreator<T> {
  create(data: NewEntity<T>): Promise<T>,
}

export interface ICRUDModelReader<T> {
  findAll(queryOptions: FindOptions): Promise<T[]>,
  update(id: ID, data: Partial<T>): Promise<void>,
  // findById(id: ID): Promise<T | null>,
}

export interface ICRUDModel<T>
  extends ICRUDModelCreator<T>, ICRUDModelReader<T> {}
