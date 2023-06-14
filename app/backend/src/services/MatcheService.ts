// import sequelize = require('sequelize');
// import { ServiceResponse } from '../Interfaces/ServiceResponse';
// import { IMatche } from '../Interfaces/matches/IMatche';
// import { IMatcheModel } from '../Interfaces/matches/IMatcheModel';
// import SequelizeTeam from '../database/models/SequelizeTeam';
// import MatchesModel from '../models/MatchesModel';

// export default class MatchesService {
//   private _matchModel: IMatcheModel;

//   constructor(matchModel = new MatchesModel()) {
//     this._matchModel = matchModel;
//   }

//   async findAll(inProgress?: boolean): Promise<ServiceResponse<IMatche[]>> {
//     const dbData = await this.matches(inProgress);
//     return {
//       status: 'SUCCESSFUL',
//       data: dbData,
//     };
//   }

//   private async matches(inProgress?: boolean): Promise<IMatche[]> {
//     const queryOptions: sequelize.FindOptions = {
//       include: [
//         { model: SequelizeTeam,
//           as: 'homeTeam',
//           attributes: { exclude: ['id'] },
//         },
//         {
//           model: SequelizeTeam,
//           as: 'awayTeam',
//           attributes: { exclude: ['id'] },
//         },
//       ],
//     };

//     if (typeof inProgress === 'boolean') {
//       queryOptions.where = { inProgress };
//     }

//     const dbData = await this._matchModel.findAll(queryOptions);
//     return dbData;
//   }
import * as sequelize from 'sequelize';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { IMatche } from '../Interfaces/matches/IMatche';
import { IMatcheModel } from '../Interfaces/matches/IMatcheModel';
import SequelizeTeam from '../database/models/SequelizeTeam';
import MatchesModel from '../models/MatchesModel';

export default class MatchesService {
  private _matchModel: IMatcheModel;

  constructor(matchModel = new MatchesModel()) {
    this._matchModel = matchModel;
  }

  async findAll(inProgress?: boolean): Promise<ServiceResponse<IMatche[]>> {
    const dbData = await this.matches(inProgress);
    return {
      status: 'SUCCESSFUL',
      data: dbData,
    };
  }

  private async matches(inProgress?: boolean): Promise<IMatche[]> {
    const queryOptions: sequelize.FindOptions = {
      include: [
        { model: SequelizeTeam,
          as: 'homeTeam',
          attributes: { exclude: ['id'] },
        },
        {
          model: SequelizeTeam,
          as: 'awayTeam',
          attributes: { exclude: ['id'] },
        },
      ],
    };

    if (typeof inProgress === 'boolean') {
      queryOptions.where = { inProgress };
    }

    const dbData = await this._matchModel.findAll(queryOptions);
    return dbData;
  }

  async update(id: number): Promise<void> {
    const data = { inProgress: false };
    await this._matchModel.update(id, data);
  }

  async updateGoals(id: number, homeTeamGoals: number, awayTeamGoals: number): Promise<void> {
    const data = { homeTeamGoals, awayTeamGoals };
    await this._matchModel.update(id, data);
  }

  // async create(match: Omit<InferCreationAttributes<SequelizeMatches>, 'id'>): Promise<IMatche> {
  //   const newMatch = await this._matchModel.create(match);
  //   const {
  //     id,
  //     homeTeamId,
  //     homeTeamGoals,
  //     awayTeamId,
  //     awayTeamGoals,
  //     inProgress,
  //   } = newMatch;
  //   return {
  //     id,
  //     homeTeamId,
  //     homeTeamGoals,
  //     awayTeamId,
  //     awayTeamGoals,
  //     inProgress,
  //     homeTeam: { teamName: this.getTeamName(homeTeam, 'teamName') },
  //     awayTeam: { teamName: this.getTeamName(awayTeam, 'teamName') },
  //   };
  // }
}
