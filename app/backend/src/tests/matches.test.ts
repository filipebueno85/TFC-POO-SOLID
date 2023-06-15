import * as chai from 'chai';
import * as sinon from 'sinon';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import SequelizeMatches from '../database/models/SequelizeMatches';
import SequelizeTeam from '../database/models/SequelizeTeam';
import JWT from '../utils/JWT';

chai.use(chaiHttp);

const { expect } = chai;

describe('Matches Test', () => {
  it('should return all Matches', async function() {
    sinon.stub(SequelizeMatches, 'findAll').resolves([
      {
        "id": 1,
        "homeTeamId": 16,
        "homeTeamGoals": 1,
        "awayTeamGoals": 1,
        "awayTeamId": 8,
        "inProgress": false,
        "home_team_id": 16,
        "away_team_id": 8,
        "homeTeam": {
          "teamName": "São Paulo"
        },
        "awayTeam": {
          "teamName": "Grêmio"
        }
      },
      {
        "id": 2,
        "homeTeamId": 9,
        "homeTeamGoals": 1,
        "awayTeamGoals": 1,
        "awayTeamId": 14,
        "inProgress": false,
        "home_team_id": 9,
        "away_team_id": 14,
        "homeTeam": {
          "teamName": "Internacional"
        },
        "awayTeam": {
          "teamName": "Santos"
        }
      },
      {
        "id": 3,
        "homeTeamId": 4,
        "homeTeamGoals": 3,
        "awayTeamGoals": 0,
        "awayTeamId": 11,
        "inProgress": false,
        "home_team_id": 4,
        "away_team_id": 11,
        "homeTeam": {
          "teamName": "Corinthians"
        },
        "awayTeam": {
          "teamName": "Napoli-SC"
        }
      },
      {
        "id": 4,
        "homeTeamId": 3,
        "homeTeamGoals": 0,
        "awayTeamGoals": 0,
        "awayTeamId": 2,
        "inProgress": false,
        "home_team_id": 3,
        "away_team_id": 2,
        "homeTeam": {
          "teamName": "Botafogo"
        },
        "awayTeam": {
          "teamName": "Bahia"
        }
      },
      {
        "id": 5,
        "homeTeamId": 7,
        "homeTeamGoals": 1,
        "awayTeamGoals": 1,
        "awayTeamId": 10,
        "inProgress": false,
        "home_team_id": 7,
        "away_team_id": 10,
        "homeTeam": {
          "teamName": "Flamengo"
        },
        "awayTeam": {
          "teamName": "Minas Brasília"
        }
      },
      {
        "id": 6,
        "homeTeamId": 5,
        "homeTeamGoals": 1,
        "awayTeamGoals": 1,
        "awayTeamId": 13,
        "inProgress": false,
        "home_team_id": 5,
        "away_team_id": 13,
        "homeTeam": {
          "teamName": "Cruzeiro"
        },
        "awayTeam": {
          "teamName": "Real Brasília"
        }
      },
      {
        "id": 7,
        "homeTeamId": 12,
        "homeTeamGoals": 2,
        "awayTeamGoals": 2,
        "awayTeamId": 6,
        "inProgress": false,
        "home_team_id": 12,
        "away_team_id": 6,
        "homeTeam": {
          "teamName": "Palmeiras"
        },
        "awayTeam": {
          "teamName": "Ferroviária"
        }
      },
      {
        "id": 8,
        "homeTeamId": 15,
        "homeTeamGoals": 0,
        "awayTeamGoals": 1,
        "awayTeamId": 1,
        "inProgress": false,
        "home_team_id": 15,
        "away_team_id": 1,
        "homeTeam": {
          "teamName": "São José-SP"
        },
        "awayTeam": {
          "teamName": "Avaí/Kindermann"
        }
      },
      {
        "id": 9,
        "homeTeamId": 1,
        "homeTeamGoals": 0,
        "awayTeamGoals": 3,
        "awayTeamId": 12,
        "inProgress": false,
        "home_team_id": 1,
        "away_team_id": 12,
        "homeTeam": {
          "teamName": "Avaí/Kindermann"
        },
        "awayTeam": {
          "teamName": "Palmeiras"
        }
      },
      {
        "id": 10,
        "homeTeamId": 2,
        "homeTeamGoals": 0,
        "awayTeamGoals": 2,
        "awayTeamId": 9,
        "inProgress": false,
        "home_team_id": 2,
        "away_team_id": 9,
        "homeTeam": {
          "teamName": "Bahia"
        },
        "awayTeam": {
          "teamName": "Internacional"
        }
      },
    ] as any);

    const { status, body } = await chai.request(app).get('/matches');

    expect(status).to.equal(200);
    expect(body).to.deep.equal([
      {
        "id": 1,
        "homeTeamId": 16,
        "homeTeamGoals": 1,
        "awayTeamGoals": 1,
        "awayTeamId": 8,
        "inProgress": false,
        "home_team_id": 16,
        "away_team_id": 8,
        "homeTeam": {
          "teamName": "São Paulo"
        },
        "awayTeam": {
          "teamName": "Grêmio"
        }
      },
      {
        "id": 2,
        "homeTeamId": 9,
        "homeTeamGoals": 1,
        "awayTeamGoals": 1,
        "awayTeamId": 14,
        "inProgress": false,
        "home_team_id": 9,
        "away_team_id": 14,
        "homeTeam": {
          "teamName": "Internacional"
        },
        "awayTeam": {
          "teamName": "Santos"
        }
      },
      {
        "id": 3,
        "homeTeamId": 4,
        "homeTeamGoals": 3,
        "awayTeamGoals": 0,
        "awayTeamId": 11,
        "inProgress": false,
        "home_team_id": 4,
        "away_team_id": 11,
        "homeTeam": {
          "teamName": "Corinthians"
        },
        "awayTeam": {
          "teamName": "Napoli-SC"
        }
      },
      {
        "id": 4,
        "homeTeamId": 3,
        "homeTeamGoals": 0,
        "awayTeamGoals": 0,
        "awayTeamId": 2,
        "inProgress": false,
        "home_team_id": 3,
        "away_team_id": 2,
        "homeTeam": {
          "teamName": "Botafogo"
        },
        "awayTeam": {
          "teamName": "Bahia"
        }
      },
      {
        "id": 5,
        "homeTeamId": 7,
        "homeTeamGoals": 1,
        "awayTeamGoals": 1,
        "awayTeamId": 10,
        "inProgress": false,
        "home_team_id": 7,
        "away_team_id": 10,
        "homeTeam": {
          "teamName": "Flamengo"
        },
        "awayTeam": {
          "teamName": "Minas Brasília"
        }
      },
      {
        "id": 6,
        "homeTeamId": 5,
        "homeTeamGoals": 1,
        "awayTeamGoals": 1,
        "awayTeamId": 13,
        "inProgress": false,
        "home_team_id": 5,
        "away_team_id": 13,
        "homeTeam": {
          "teamName": "Cruzeiro"
        },
        "awayTeam": {
          "teamName": "Real Brasília"
        }
      },
      {
        "id": 7,
        "homeTeamId": 12,
        "homeTeamGoals": 2,
        "awayTeamGoals": 2,
        "awayTeamId": 6,
        "inProgress": false,
        "home_team_id": 12,
        "away_team_id": 6,
        "homeTeam": {
          "teamName": "Palmeiras"
        },
        "awayTeam": {
          "teamName": "Ferroviária"
        }
      },
      {
        "id": 8,
        "homeTeamId": 15,
        "homeTeamGoals": 0,
        "awayTeamGoals": 1,
        "awayTeamId": 1,
        "inProgress": false,
        "home_team_id": 15,
        "away_team_id": 1,
        "homeTeam": {
          "teamName": "São José-SP"
        },
        "awayTeam": {
          "teamName": "Avaí/Kindermann"
        }
      },
      {
        "id": 9,
        "homeTeamId": 1,
        "homeTeamGoals": 0,
        "awayTeamGoals": 3,
        "awayTeamId": 12,
        "inProgress": false,
        "home_team_id": 1,
        "away_team_id": 12,
        "homeTeam": {
          "teamName": "Avaí/Kindermann"
        },
        "awayTeam": {
          "teamName": "Palmeiras"
        }
      },
      {
        "id": 10,
        "homeTeamId": 2,
        "homeTeamGoals": 0,
        "awayTeamGoals": 2,
        "awayTeamId": 9,
        "inProgress": false,
        "home_team_id": 2,
        "away_team_id": 9,
        "homeTeam": {
          "teamName": "Bahia"
        },
        "awayTeam": {
          "teamName": "Internacional"
        }
      },
    ]);
  });

  it('should return all Matches inProgress true', async function() {
    sinon.stub(SequelizeMatches, 'findAll').resolves( [
      {
        "id": 41,
        "homeTeamId": 16,
        "homeTeamGoals": 2,
        "awayTeamId": 9,
        "awayTeamGoals": 0,
        "inProgress": true,
        "homeTeam": {
          "teamName": "São Paulo"
        },
        "awayTeam": {
          "teamName": "Internacional"
        }
      },
      {
        "id": 42,
        "homeTeamId": 6,
        "homeTeamGoals": 1,
        "awayTeamId": 1,
        "awayTeamGoals": 0,
        "inProgress": true,
        "homeTeam": {
          "teamName": "Ferroviária"
        },
        "awayTeam": {
          "teamName": "Avaí/Kindermann"
        }
      }
    ]as any);

    const { status, body } = await chai.request(app).get('/matches').query({ inProgress: true });

    expect(status).to.equal(200);
    expect(body).to.deep.equal([
      {
        "id": 41,
        "homeTeamId": 16,
        "homeTeamGoals": 2,
        "awayTeamId": 9,
        "awayTeamGoals": 0,
        "inProgress": true,
        "homeTeam": {
          "teamName": "São Paulo"
        },
        "awayTeam": {
          "teamName": "Internacional"
        }
      },
      {
        "id": 42,
        "homeTeamId": 6,
        "homeTeamGoals": 1,
        "awayTeamId": 1,
        "awayTeamGoals": 0,
        "inProgress": true,
        "homeTeam": {
          "teamName": "Ferroviária"
        },
        "awayTeam": {
          "teamName": "Avaí/Kindermann"
        }
      }
    ]);
  });

  it('should return all Matches inProgress false', async function() {
    sinon.stub(SequelizeMatches, 'findAll').resolves( [
      {
        "id": 1,
        "homeTeamId": 16,
        "homeTeamGoals": 1,
        "awayTeamId": 8,
        "awayTeamGoals": 1,
        "inProgress": false,
        "homeTeam": {
          "teamName": "São Paulo"
        },
        "awayTeam": {
          "teamName": "Grêmio"
        }
      },
      {
        "id": 2,
        "homeTeamId": 9,
        "homeTeamGoals": 1,
        "awayTeamId": 14,
        "awayTeamGoals": 1,
        "inProgress": false,
        "homeTeam": {
          "teamName": "Internacional"
        },
        "awayTeam": {
          "teamName": "Santos"
        }
      }
    ] as any);

    const { status, body } = await chai.request(app).get('/matches').query({ inProgress: false });

    expect(status).to.equal(200);
    expect(body).to.deep.equal([
      {
        "id": 1,
        "homeTeamId": 16,
        "homeTeamGoals": 1,
        "awayTeamId": 8,
        "awayTeamGoals": 1,
        "inProgress": false,
        "homeTeam": {
          "teamName": "São Paulo"
        },
        "awayTeam": {
          "teamName": "Grêmio"
        }
      },
      {
        "id": 2,
        "homeTeamId": 9,
        "homeTeamGoals": 1,
        "awayTeamId": 14,
        "awayTeamGoals": 1,
        "inProgress": false,
        "homeTeam": {
          "teamName": "Internacional"
        },
        "awayTeam": {
          "teamName": "Santos"
        }
      }
    ]);
  });

  it('should update matches by id', async function() {

    sinon.stub(SequelizeMatches, 'update').resolves([1]);
  
    sinon.stub(JWT, 'verify').resolves();
  
    const { status, body } = await chai.request(app)
      .patch('/matches/1')
      .set('Authorization', 'token-valid')
      .send({
        homeTeamGoals: 3,
        awayTeamGoals: 1
      });

    expect(status).to.equal(200);
  
    expect(body).to.deep.equal({ message: 'Updated' });
  });

  it('should create a new match', async function() {
    sinon.stub(JWT, 'verify').resolves();

    const findByPkStub = sinon.stub(SequelizeTeam, 'findByPk');
    findByPkStub.withArgs(16).resolves(new SequelizeTeam({ id: 16, teamName: 'Corinthians' }));
    findByPkStub.withArgs(8).resolves(new SequelizeTeam({ id: 8, teamName: 'Flamengo' }));
    findByPkStub.withArgs(999).resolves(null);

    const createdMatch = new SequelizeMatches({
      id: 1,
      homeTeamId: 16,
      homeTeamGoals: 2,
      awayTeamId: 8,
      awayTeamGoals: 2,
      inProgress: true,
    });

    sinon.stub(SequelizeMatches, 'create').resolves(createdMatch);

    const { status, body } = await chai.request(app)
      .post('/matches')
      .set('Authorization', 'token-valid')
      .send({homeTeamId: 16,
        awayTeamId: 8,
        homeTeamGoals: 2,
        awayTeamGoals: 2,})

    expect(status).to.equal(201);
    expect(body).to.deep.equal({
      id: 1,
      homeTeamId: 16,
      homeTeamGoals: 2,
      awayTeamId: 8,
      awayTeamGoals: 2,
      inProgress: true,
    });
  });

  it('should return an error if homeTeamId and awayTeamId are equal', async function() {
    sinon.stub(JWT, 'verify').resolves();

    const { status, body } = await chai.request(app)
      .post('/matches')
      .set('Authorization', 'token-valid')
      .send({
        homeTeamId: 16,
        awayTeamId: 16,
        homeTeamGoals: 2,
        awayTeamGoals: 2,
      });

    expect(status).to.equal(422);
    expect(body).to.deep.equal({ message: 'It is not possible to create a match with two equal teams' });
  });

  it('should return an error if homeTeamId or awayTeamId do not exist', async function() {
    sinon.stub(JWT, 'verify').resolves();

    sinon.stub(SequelizeTeam, 'findByPk')
      .withArgs(16)
      .resolves(new SequelizeTeam({ id: 16, teamName: 'Corinthians' }))
      .withArgs(8)
      .resolves(null);

    const { status, body } = await chai.request(app)
      .post('/matches')
      .set('Authorization', 'token-valid')
      .send({
        homeTeamId: 16,
        awayTeamId: 8,
        homeTeamGoals: 2,
        awayTeamGoals: 2,
      });

    expect(status).to.equal(404);
    expect(body).to.deep.equal({ message: 'There is no team with such id!' });
  });

  afterEach(sinon.restore);
});
