import { Test, TestingModule } from '@nestjs/testing';
import { agent as request } from 'supertest';
import { expect } from 'chai';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../../../app.module';
import { RequestsFaker } from '../RequestFaker';

describe('InsertRoadmap by Student', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('insert_roadmap_by_student_with_theme', (done: any) => {
    let roadMapFakerOne = RequestsFaker.generateRoadMaps("73b34ecc-a367-42ef-bb66-1071da349fcb","d5b57645-870c-43f4-baab-c982bf6c7426",1);
    let roadMapFakerTwo = RequestsFaker.generateRoadMaps("5f01aa13-0eb1-4a87-a5e9-15e1a531fcbe","d5b57645-870c-43f4-baab-c982bf6c7426",2);
    let roadMapStudentFaker = RequestsFaker.generatePostRoadMapStudentRequest("jesus@gmail.com",[roadMapFakerOne,roadMapFakerTwo]);

    request(app.getHttpServer())
      .post('/roadmap')
      .send(roadMapStudentFaker)
      .end((err, res) => {
        if (err) return done(err);
        console.log(res.body);
        expect(res.status).equal(200);
        expect(res.body).to.have.property('data');
        done();
      });
  });
});
