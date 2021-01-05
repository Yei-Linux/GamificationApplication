import { Test, TestingModule } from '@nestjs/testing';
import { agent as request } from 'supertest';
import { expect } from 'chai';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../../../app.module';
import { RequestsFaker } from '../RequestFaker';

describe('GetRoadmap by Student', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('get_roadmap_by_student', (done: any) => {
    let roadMapRequestFaker = RequestsFaker.generateGetRoadMapRequest("jesus@gmail.com","511a2cf7-c4df-4d02-bc80-8a5a38a1970b");
    request(app.getHttpServer())
      .get('/roadmap/student')
      .send(roadMapRequestFaker)
      .end((err, res) => {
        if (err) return done(err);
        console.log(res.body);
        expect(res.status).equal(200);
        expect(res.body).to.have.property('data');
        done();
      });
  });
});
