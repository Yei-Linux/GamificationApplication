import { Test, TestingModule } from '@nestjs/testing';
import { agent as request } from 'supertest';
import { expect } from 'chai';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../../../app.module';
import { RequestsFaker } from '../RequestFaker';

describe('GetExam', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('verify_is_exam_retur_exams', (done: any) => {
    let examRandomFaker = RequestsFaker.generateGetExamByThemeAndType(
      '73b34ecc-a367-42ef-bb66-1071da349fcb',
      '9f8cd945-b262-427b-a81c-881f38801cc7',
      '0eea4bc2-cdd5-4617-a7c7-ab605fcd06d8',
    );

    request(app.getHttpServer())
      .post('/exams')
      .send(examRandomFaker)
      .end((err, res) => {
        if (err) return done(err);
        console.log(res.body);
        expect(res.status).equal(200);
        expect(res.body).to.have.property('data');
        done();
      });
  });
});
