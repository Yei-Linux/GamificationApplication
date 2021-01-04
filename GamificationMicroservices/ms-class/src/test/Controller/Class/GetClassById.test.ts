import { Test, TestingModule } from '@nestjs/testing';
import { agent as request } from 'supertest';
import { expect } from 'chai';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../../../app.module';
import { RequestsFaker } from '../RequestFaker';

describe('GetClass by id', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('get_class_content_by_id', (done: any) => {
    request(app.getHttpServer())
      .get('/class/c89be434-aeab-4bf1-a3b8-f3cc965e46ef')
      .end((err, res) => {
        if (err) return done(err);
        console.log(res.body);
        expect(res.status).equal(200);
        expect(res.body).to.have.property('data');
        done();
      });
  });
});
