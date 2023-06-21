import { ID, NewEntity } from '.';

export interface ICRUDModelCreator<T> {
  create(data: NewEntity<T>): Promise<T>,
}

export interface ICRUDModelReader<T> {
  findAll(): Promise<T[]>,
  findById(id: ID): Promise<T | null>,
}

export interface ICRUDModel<T>
  extends ICRUDModelCreator<T>, ICRUDModelReader<T> {}
