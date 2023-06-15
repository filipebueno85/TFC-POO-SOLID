import * as chai from 'chai';
import * as sinon from 'sinon';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import SequelizeUser from '../database/models/SequelizeUser';
import JWT from '../utils/JWT';

chai.use(chaiHttp);

const { expect } = chai;

describe('LoginTest', () => {
  it('should return all users', async function() {
    sinon.stub(SequelizeUser, 'findAll').resolves([
      {
        "id": 1,
        "email": "admin@admin.com",
        "role": "admin"
      },
      {
        "id": 2,
        "email": "user@user.com",
        "role": "user"
      },
    ] as any);

    const { status, body } = await chai.request(app).get('/users');

    expect(status).to.equal(200);
    expect(body).to.deep.equal([
      {
        "id": 1,
        "email": "admin@admin.com",
        "role": "admin"
      },
      {
        "id": 2,
        "email": "user@user.com",
        "role": "user"
      },
    ]);
  });

  it('should return a user by id', async function() {
    sinon.stub(SequelizeUser, 'findByPk').resolves({
      "id": 1,
      "email": "admin@admin.com",
      "role": "admin"
    } as any);

    const { status, body } = await chai.request(app).get('/users/1');

    expect(status).to.equal(200);
    expect(body).to.deep.equal({
      "id": 1,
      "email": "admin@admin.com",
      "role": "admin"
    });
  })

  it('should return error if dont exists id', async function() {
    sinon.stub(SequelizeUser, 'findByPk').resolves(null);

    const { status, body } = await chai.request(app).get('/users/55');

    expect(status).to.equal(404);
    expect(body).to.deep.equal({ message: 'User not found' });
  });

  it('should return a message when user is not found', async function() {
    sinon.stub(SequelizeUser, 'findByPk').resolves(null);

    const { status, body } = await chai.request(app).get('/users/1');

    expect(status).to.equal(404);
    expect(body.message).to.equal('User not found');
  });

  it('should create a user', async function() {
    sinon.stub(SequelizeUser, 'create').resolves({
      id: 5,
      username: 'filipe',
      email: 'filipe@filipe.com',
      role: 'user',
      password: 'ajajajaaj'
    } as any);
    sinon.stub(SequelizeUser, 'findOne').resolves(null);
    sinon.stub(JWT, 'verify').resolves();

    const { id, username, email, role, password  } = {
      id: 5,
      username: 'filipe',
      email: 'filipe@filipe.com',
      role: 'user',
      password: 'ajajajaaj'
    };

    const { status, body } = await chai.request(app).post('/users').set('authorization', 'validToken').send({ username, email, role, password });

    expect(status).to.be.equal(201);
    expect(body).to.deep.equal({ id, email, role  });
  });

  it('should not create a user without a token', async function() {
    const { status, body } = await chai.request(app).post('/users');

    expect(status).to.equal(401);
    expect(body.message).to.equal('Token not found');
  });

  it('should not create a user with an invalid token', async function() {
    const { status, body } = await chai.request(app)
      .post('/users')
      .set('authorization', 'invalidToken');

    expect(status).to.equal(401);
    expect(body.message).to.equal('Token must be a valid token');
  });

  it('shouldn not create a user with an already existent email', async function() {
    sinon.stub(JWT, 'verify').resolves();
    sinon.stub(SequelizeUser, 'findOne').resolves( {id: 5,
      username: 'filipe',
      email: 'filipe@filipe.com',
      role: 'user',
      password: 'ajajajaaj'
    } as any);

    const { status, body } = await chai.request(app).post('/users')
      .set('authorization', 'validToken')
      .send({id: 5,
        username: 'filipe',
        email: 'filipe@filipe.com',
        role: 'user',
        password: 'ajajajaaj'
      });

    expect(status).to.equal(409);
    expect(body.message).to.equal('User already exists');
  });

  afterEach(sinon.restore);
});

describe('Login Test', function() {
  it('shouldn not login with an invalid body data', async function() {
    const { status, body } = await chai.request(app).post('/login')
      .send({});

    expect(status).to.equal(400);
    expect(body).to.be.deep.equal({ message: 'All fields must be filled' });
  });

  it('shouldn nott login with an invalid email', async function() {
    const { status, body } = await chai.request(app).post('/login')
      .send({ email: 'invalid_email_', password: 'daadaadad' });

    expect(status).to.equal(401);
    expect(body).to.be.deep.equal({ message: 'Invalid email or password' });
  });

  it('shouldn not login with an invalid password', async function() {
    const { status, body } = await chai.request(app).post('/login')
      .send({ email: 'filipe@filipe.com', password: 'ddd' });

    expect(status).to.equal(401);
    expect(body).to.be.deep.equal({ message: 'Invalid email or password' });
  });

  it('shouldn not login when user is not found', async function() {
    sinon.stub(SequelizeUser, 'findOne').resolves(null);

    const { status, body } = await chai.request(app)
      .post('/login')
      .send({ email: 'filipe@filipe.com', password: 'dadaddaad'});
    expect(status).to.equal(401);
    expect(body).to.be.deep.equal({ message: 'Invalid email or password' });
  });

  // it('should return a token when login is done', async function() {
  //   sinon.stub(SequelizeUser, 'findOne').resolves({id: 5,
  //     username: 'Admin',
  //     email: 'admin@admin.com',
  //     role: 'admin',
  //     password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
  //   } as any);
  //   sinon.stub(JWT, 'sign').returns('validToken');

  //   const { status, body } = await chai.request(app)
  //     .post('/login')
  //     .send({ email: 'admin@admin.com', password: 'secret_admin' });

  //   expect(status).to.equal(200);
  //   expect(body).to.have.key('token');
  // });

  // it('should return invalid data when user password is wrong', async function() {
  //   sinon.stub(SequelizeUser, 'findOne').resolves({
  //     email: 'filipe@filipe.com',
  //     ppassword: 'aaaaaaddd'
  //   } as any);
  //   sinon.stub(JWT, 'sign').returns('validToken');

  //   const { status, body } = await chai.request(app)
  //     .post('/login')
  //     .send({
  //       email: 'filipe@filipe.com',
  //       password: "ssssssssss"
  //     });

  //   expect(status).to.equal(400);
  //   expect(body.message).to.equal('Invalid email or password');
  // });
  /**
   * Exemplo do uso de stubs com tipos
   */

  // let chaiHttpResponse: Response;

  // before(async () => {
  //   sinon
  //     .stub(Example, "findOne")
  //     .resolves({
  //       ...<Seu mock>
  //     } as Example);
  // });

  // after(()=>{
  //   (Example.findOne as sinon.SinonStub).restore();
  // })

  // it('...', async () => {
  //   chaiHttpResponse = await chai
  //      .request(app)
  //      ...

  //   expect(...)
  // });

  afterEach(sinon.restore);
});