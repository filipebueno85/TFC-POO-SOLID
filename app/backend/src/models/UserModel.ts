import { InferCreationAttributes } from 'sequelize';
import { IUser } from '../Interfaces/users/IUser';
import { IUserModel } from '../Interfaces/users/IUserModel';
import SequelizeUser from '../database/models/SequelizeUser';

export default class UserModel implements IUserModel {
  private model = SequelizeUser;

  async findAll(): Promise<IUser[]> {
    const dbData = await this.model.findAll();
    return dbData.map(({ id, email, password, role }) => (
      { id, email, password, role }
    ));
  }

  async findById(id: IUser['id']): Promise<IUser | null> {
    const user = await this.model.findByPk(id);
    if (!user) return null;
    const { email, password, role } = user;
    return { id, email, password, role };
  }

  async findByEmail(email: IUser['email']): Promise<IUser | null> {
    const user = await this.model.findOne({ where: { email } });
    if (!user) return null;
    const { id, password, role } = user;
    return { id, email, password, role };
  }

  async create(user: Omit<InferCreationAttributes<SequelizeUser,
  { omit: never; }>, 'id'>): Promise<IUser> {
    const newUser = await this.model.create(user);
    const { id, email, password, role } = newUser;
    return { id, email, password, role };
  }
}
