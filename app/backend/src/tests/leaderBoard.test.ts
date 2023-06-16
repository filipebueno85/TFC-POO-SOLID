import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

chai.use(chaiHttp);
const { expect } = chai;

describe('LeaderBoard Test', () => {
  describe('Test route /leaderboard/home', function () {
    it('shoud return leaderboardHome', async function () {

      const { status, body } = await chai.request(app).get('/leaderboard/home');
      expect(status).to.be.equal(200);
      expect(body).to.deep.equal([
        {
          "name": "Santos",
          "totalPoints": 9,
          "totalGames": 3,
          "totalVictories": 3,
          "totalDraws": 0,
          "totalLosses": 0,
          "goalsFavor": 9,
          "goalsOwn": 3,
          "goalsBalance": 6,
          "efficiency": 100
        },
        {
          "name": "Corinthians",
          "totalPoints": 9,
          "totalGames": 3,
          "totalVictories": 3,
          "totalDraws": 0,
          "totalLosses": 0,
          "goalsFavor": 8,
          "goalsOwn": 2,
          "goalsBalance": 6,
          "efficiency": 100
        },
        {
          "name": "Palmeiras",
          "totalPoints": 7,
          "totalGames": 3,
          "totalVictories": 2,
          "totalDraws": 1,
          "totalLosses": 0,
          "goalsFavor": 10,
          "goalsOwn": 5,
          "goalsBalance": 5,
          "efficiency": 77.78
        },
        {
          "name": "Grêmio",
          "totalPoints": 6,
          "totalGames": 2,
          "totalVictories": 2,
          "totalDraws": 0,
          "totalLosses": 0,
          "goalsFavor": 4,
          "goalsOwn": 1,
          "goalsBalance": 3,
          "efficiency": 100
        },
        {
          "name": "Real Brasília",
          "totalPoints": 6,
          "totalGames": 2,
          "totalVictories": 2,
          "totalDraws": 0,
          "totalLosses": 0,
          "goalsFavor": 2,
          "goalsOwn": 0,
          "goalsBalance": 2,
          "efficiency": 100
        },
        {
          "name": "São Paulo",
          "totalPoints": 4,
          "totalGames": 2,
          "totalVictories": 1,
          "totalDraws": 1,
          "totalLosses": 0,
          "goalsFavor": 4,
          "goalsOwn": 1,
          "goalsBalance": 3,
          "efficiency": 66.67
        },
        {
          "name": "Internacional",
          "totalPoints": 4,
          "totalGames": 3,
          "totalVictories": 1,
          "totalDraws": 1,
          "totalLosses": 1,
          "goalsFavor": 4,
          "goalsOwn": 6,
          "goalsBalance": -2,
          "efficiency": 44.44
        },
        {
          "name": "Botafogo",
          "totalPoints": 4,
          "totalGames": 3,
          "totalVictories": 1,
          "totalDraws": 1,
          "totalLosses": 1,
          "goalsFavor": 2,
          "goalsOwn": 4,
          "goalsBalance": -2,
          "efficiency": 44.44
        },
        {
          "name": "Ferroviária",
          "totalPoints": 3,
          "totalGames": 2,
          "totalVictories": 1,
          "totalDraws": 0,
          "totalLosses": 1,
          "goalsFavor": 3,
          "goalsOwn": 2,
          "goalsBalance": 1,
          "efficiency": 50
        },
        {
          "name": "Napoli-SC",
          "totalPoints": 2,
          "totalGames": 2,
          "totalVictories": 0,
          "totalDraws": 2,
          "totalLosses": 0,
          "goalsFavor": 2,
          "goalsOwn": 2,
          "goalsBalance": 0,
          "efficiency": 33.33
        },
        {
          "name": "Cruzeiro",
          "totalPoints": 1,
          "totalGames": 2,
          "totalVictories": 0,
          "totalDraws": 1,
          "totalLosses": 1,
          "goalsFavor": 2,
          "goalsOwn": 3,
          "goalsBalance": -1,
          "efficiency": 16.67
        },
        {
          "name": "Flamengo",
          "totalPoints": 1,
          "totalGames": 2,
          "totalVictories": 0,
          "totalDraws": 1,
          "totalLosses": 1,
          "goalsFavor": 1,
          "goalsOwn": 2,
          "goalsBalance": -1,
          "efficiency": 16.67
        },
        {
          "name": "Minas Brasília",
          "totalPoints": 1,
          "totalGames": 3,
          "totalVictories": 0,
          "totalDraws": 1,
          "totalLosses": 2,
          "goalsFavor": 3,
          "goalsOwn": 6,
          "goalsBalance": -3,
          "efficiency": 11.11
        },
        {
          "name": "Avaí/Kindermann",
          "totalPoints": 1,
          "totalGames": 3,
          "totalVictories": 0,
          "totalDraws": 1,
          "totalLosses": 2,
          "goalsFavor": 3,
          "goalsOwn": 7,
          "goalsBalance": -4,
          "efficiency": 11.11
        },
        {
          "name": "São José-SP",
          "totalPoints": 0,
          "totalGames": 3,
          "totalVictories": 0,
          "totalDraws": 0,
          "totalLosses": 3,
          "goalsFavor": 2,
          "goalsOwn": 5,
          "goalsBalance": -3,
          "efficiency": 0
        },
        {
          "name": "Bahia",
          "totalPoints": 0,
          "totalGames": 3,
          "totalVictories": 0,
          "totalDraws": 0,
          "totalLosses": 3,
          "goalsFavor": 0,
          "goalsOwn": 4,
          "goalsBalance": -4,
          "efficiency": 0
        }
      ]);
    });
  });
  describe('Test route /leaderboard/away', function () {
    it('shoud return leaderboardaway', async function () {
      const { status, body } = await chai.request(app).get('/leaderboard/away');

      expect(status).to.be.equal(200);
      expect(body).to.deep.equal([
        {
          "name": "Palmeiras",
          "totalPoints": 6,
          "totalGames": 2,
          "totalVictories": 2,
          "totalDraws": 0,
          "totalLosses": 0,
          "goalsFavor": 7,
          "goalsOwn": 0,
          "goalsBalance": 7,
          "efficiency": 100
        },
        {
          "name": "Corinthians",
          "totalPoints": 6,
          "totalGames": 3,
          "totalVictories": 2,
          "totalDraws": 0,
          "totalLosses": 1,
          "goalsFavor": 6,
          "goalsOwn": 2,
          "goalsBalance": 4,
          "efficiency": 66.67
        },
        {
          "name": "Internacional",
          "totalPoints": 6,
          "totalGames": 3,
          "totalVictories": 2,
          "totalDraws": 0,
          "totalLosses": 1,
          "goalsFavor": 4,
          "goalsOwn": 2,
          "goalsBalance": 2,
          "efficiency": 66.67
        },
        {
          "name": "São José-SP",
          "totalPoints": 6,
          "totalGames": 2,
          "totalVictories": 2,
          "totalDraws": 0,
          "totalLosses": 0,
          "goalsFavor": 3,
          "goalsOwn": 1,
          "goalsBalance": 2,
          "efficiency": 100
        },
        {
          "name": "São Paulo",
          "totalPoints": 4,
          "totalGames": 3,
          "totalVictories": 1,
          "totalDraws": 1,
          "totalLosses": 1,
          "goalsFavor": 5,
          "goalsOwn": 5,
          "goalsBalance": 0,
          "efficiency": 44.44
        },
        {
          "name": "Ferroviária",
          "totalPoints": 4,
          "totalGames": 3,
          "totalVictories": 1,
          "totalDraws": 1,
          "totalLosses": 1,
          "goalsFavor": 4,
          "goalsOwn": 5,
          "goalsBalance": -1,
          "efficiency": 44.44
        },
        {
          "name": "Real Brasília",
          "totalPoints": 4,
          "totalGames": 3,
          "totalVictories": 1,
          "totalDraws": 1,
          "totalLosses": 1,
          "goalsFavor": 3,
          "goalsOwn": 4,
          "goalsBalance": -1,
          "efficiency": 44.44
        },
        {
          "name": "Grêmio",
          "totalPoints": 4,
          "totalGames": 3,
          "totalVictories": 1,
          "totalDraws": 1,
          "totalLosses": 1,
          "goalsFavor": 5,
          "goalsOwn": 7,
          "goalsBalance": -2,
          "efficiency": 44.44
        },
        {
          "name": "Flamengo",
          "totalPoints": 4,
          "totalGames": 3,
          "totalVictories": 1,
          "totalDraws": 1,
          "totalLosses": 1,
          "goalsFavor": 1,
          "goalsOwn": 3,
          "goalsBalance": -2,
          "efficiency": 44.44
        },
        {
          "name": "Avaí/Kindermann",
          "totalPoints": 3,
          "totalGames": 2,
          "totalVictories": 1,
          "totalDraws": 0,
          "totalLosses": 1,
          "goalsFavor": 1,
          "goalsOwn": 1,
          "goalsBalance": 0,
          "efficiency": 50
        },
        {
          "name": "Cruzeiro",
          "totalPoints": 3,
          "totalGames": 3,
          "totalVictories": 1,
          "totalDraws": 0,
          "totalLosses": 2,
          "goalsFavor": 6,
          "goalsOwn": 7,
          "goalsBalance": -1,
          "efficiency": 33.33
        },
        {
          "name": "Santos",
          "totalPoints": 2,
          "totalGames": 2,
          "totalVictories": 0,
          "totalDraws": 2,
          "totalLosses": 0,
          "goalsFavor": 3,
          "goalsOwn": 3,
          "goalsBalance": 0,
          "efficiency": 33.33
        },
        {
          "name": "Bahia",
          "totalPoints": 2,
          "totalGames": 2,
          "totalVictories": 0,
          "totalDraws": 2,
          "totalLosses": 0,
          "goalsFavor": 2,
          "goalsOwn": 2,
          "goalsBalance": 0,
          "efficiency": 33.33
        },
        {
          "name": "Minas Brasília",
          "totalPoints": 1,
          "totalGames": 2,
          "totalVictories": 0,
          "totalDraws": 1,
          "totalLosses": 1,
          "goalsFavor": 1,
          "goalsOwn": 3,
          "goalsBalance": -2,
          "efficiency": 16.67
        },
        {
          "name": "Botafogo",
          "totalPoints": 0,
          "totalGames": 2,
          "totalVictories": 0,
          "totalDraws": 0,
          "totalLosses": 2,
          "goalsFavor": 1,
          "goalsOwn": 4,
          "goalsBalance": -3,
          "efficiency": 0
        },
        {
          "name": "Napoli-SC",
          "totalPoints": 0,
          "totalGames": 3,
          "totalVictories": 0,
          "totalDraws": 0,
          "totalLosses": 3,
          "goalsFavor": 1,
          "goalsOwn": 10,
          "goalsBalance": -9,
          "efficiency": 0
        }
      ]);
    });

    describe('Test route /leaderboard', function () {
      it('should return all leaderboards', async function () {
        const { status, body } = await chai.request(app).get('/leaderboard');
  
        expect(status).to.be.equal(200);
        expect(body).to.deep.equal([
          {
            "name": "Corinthians",
            "totalPoints": 15,
            "totalGames": 6,
            "totalVictories": 5,
            "totalDraws": 0,
            "totalLosses": 1,
            "goalsFavor": 14,
            "goalsOwn": 4,
            "goalsBalance": 10,
            "efficiency": 83.33
          },
          {
            "name": "Palmeiras",
            "totalPoints": 13,
            "totalGames": 5,
            "totalVictories": 4,
            "totalDraws": 1,
            "totalLosses": 0,
            "goalsFavor": 17,
            "goalsOwn": 5,
            "goalsBalance": 12,
            "efficiency": 86.67
          },
          {
            "name": "Santos",
            "totalPoints": 11,
            "totalGames": 5,
            "totalVictories": 3,
            "totalDraws": 2,
            "totalLosses": 0,
            "goalsFavor": 12,
            "goalsOwn": 6,
            "goalsBalance": 6,
            "efficiency": 73.33
          },
          {
            "name": "Grêmio",
            "totalPoints": 10,
            "totalGames": 5,
            "totalVictories": 3,
            "totalDraws": 1,
            "totalLosses": 1,
            "goalsFavor": 9,
            "goalsOwn": 8,
            "goalsBalance": 1,
            "efficiency": 66.67
          },
          {
            "name": "Real Brasília",
            "totalPoints": 10,
            "totalGames": 5,
            "totalVictories": 3,
            "totalDraws": 1,
            "totalLosses": 1,
            "goalsFavor": 5,
            "goalsOwn": 4,
            "goalsBalance": 1,
            "efficiency": 66.67
          },
          {
            "name": "Internacional",
            "totalPoints": 10,
            "totalGames": 6,
            "totalVictories": 3,
            "totalDraws": 1,
            "totalLosses": 2,
            "goalsFavor": 8,
            "goalsOwn": 8,
            "goalsBalance": 0,
            "efficiency": 55.56
          },
          {
            "name": "São Paulo",
            "totalPoints": 8,
            "totalGames": 5,
            "totalVictories": 2,
            "totalDraws": 2,
            "totalLosses": 1,
            "goalsFavor": 9,
            "goalsOwn": 6,
            "goalsBalance": 3,
            "efficiency": 53.33
          },
          {
            "name": "Ferroviária",
            "totalPoints": 7,
            "totalGames": 5,
            "totalVictories": 2,
            "totalDraws": 1,
            "totalLosses": 2,
            "goalsFavor": 7,
            "goalsOwn": 7,
            "goalsBalance": 0,
            "efficiency": 46.67
          },
          {
            "name": "São José-SP",
            "totalPoints": 6,
            "totalGames": 5,
            "totalVictories": 2,
            "totalDraws": 0,
            "totalLosses": 3,
            "goalsFavor": 5,
            "goalsOwn": 6,
            "goalsBalance": -1,
            "efficiency": 40
          },
          {
            "name": "Flamengo",
            "totalPoints": 5,
            "totalGames": 5,
            "totalVictories": 1,
            "totalDraws": 2,
            "totalLosses": 2,
            "goalsFavor": 2,
            "goalsOwn": 5,
            "goalsBalance": -3,
            "efficiency": 33.33
          },
          {
            "name": "Cruzeiro",
            "totalPoints": 4,
            "totalGames": 5,
            "totalVictories": 1,
            "totalDraws": 1,
            "totalLosses": 3,
            "goalsFavor": 8,
            "goalsOwn": 10,
            "goalsBalance": -2,
            "efficiency": 26.67
          },
          {
            "name": "Avaí/Kindermann",
            "totalPoints": 4,
            "totalGames": 5,
            "totalVictories": 1,
            "totalDraws": 1,
            "totalLosses": 3,
            "goalsFavor": 4,
            "goalsOwn": 8,
            "goalsBalance": -4,
            "efficiency": 26.67
          },
          {
            "name": "Botafogo",
            "totalPoints": 4,
            "totalGames": 5,
            "totalVictories": 1,
            "totalDraws": 1,
            "totalLosses": 3,
            "goalsFavor": 3,
            "goalsOwn": 8,
            "goalsBalance": -5,
            "efficiency": 26.67
          },
          {
            "name": "Bahia",
            "totalPoints": 2,
            "totalGames": 5,
            "totalVictories": 0,
            "totalDraws": 2,
            "totalLosses": 3,
            "goalsFavor": 2,
            "goalsOwn": 6,
            "goalsBalance": -4,
            "efficiency": 13.33
          },
          {
            "name": "Minas Brasília",
            "totalPoints": 2,
            "totalGames": 5,
            "totalVictories": 0,
            "totalDraws": 2,
            "totalLosses": 3,
            "goalsFavor": 4,
            "goalsOwn": 9,
            "goalsBalance": -5,
            "efficiency": 13.33
          },
          {
            "name": "Napoli-SC",
            "totalPoints": 2,
            "totalGames": 5,
            "totalVictories": 0,
            "totalDraws": 2,
            "totalLosses": 3,
            "goalsFavor": 3,
            "goalsOwn": 12,
            "goalsBalance": -9,
            "efficiency": 13.33
          }
        ]);
      });
    });
  });
});