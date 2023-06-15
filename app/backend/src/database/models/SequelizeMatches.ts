import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import db from '.';
import SequelizeTeam from './SequelizeTeam';

class SequelizeMatches extends Model<InferAttributes<SequelizeMatches>,
InferCreationAttributes<SequelizeMatches>> {
  declare id: CreationOptional<number>;

  declare homeTeamId: number;

  declare homeTeamGoals: number;

  declare awayTeamGoals: number;

  declare awayTeamId: number;

  declare inProgress: boolean;
}

SequelizeMatches.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  homeTeamId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'home_team_id',
    // references: {
    //   model: 'teams',
    //   key: 'id',
    // },
  },
  homeTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'home_team_goals',
  },
  awayTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'away_team_goals',
  },
  awayTeamId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'away_team_id',
    // references: {
    //   model: 'teams',
    //   key: 'id',
    // },
  },
  inProgress: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    field: 'in_progress',
  },
}, {
  sequelize: db,
  underscored: true,
  modelName: 'matches',
  timestamps: false,
});

SequelizeTeam.hasMany(SequelizeMatches, {
  // foreignKey: 'homeTeamId',
  foreignKey: 'home_team_id',
  as: 'homeTeam',
});
SequelizeMatches.belongsTo(SequelizeTeam, {
  // foreignKey: 'homeTeamId',
  foreignKey: 'home_team_id',
  as: 'homeTeam',
});

SequelizeTeam.hasMany(SequelizeMatches, {
  foreignKey: 'away_team_id',
  as: 'awayTeam',
});
SequelizeMatches.belongsTo(SequelizeTeam, {
  foreignKey: 'away_team_id',
  as: 'awayTeam',
});

export default SequelizeMatches;
