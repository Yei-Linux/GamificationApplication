import { Test, TestingModule } from '@nestjs/testing';
import { agent as request } from 'supertest';
import { expect } from 'chai';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../../../app.module';
import { RequestsFaker } from '../RequestFaker';

describe('Insert Student Answers Of Exam', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('verify_is_student_answer_will_save', (done: any) => {
    let studentAnswerOneRandomFaker = RequestsFaker.generateInsertStudentAnswers("test",10,"8137a803-3795-4bce-b64b-9d91196f053d","d0a42915-ba06-4e87-ad23-d3be9963376f");
    let studentAnswerTwoRandomFaker = RequestsFaker.generateInsertStudentAnswers("test2",15,"8bf026c7-c027-4033-b525-f0281c251d7a","a565329b-5f2e-4f59-ad9a-e503ec948a75");
    let studentExamRandomFaker = RequestsFaker.generateInsertStudentExam("jesus@gmail.com",1,[studentAnswerOneRandomFaker,studentAnswerTwoRandomFaker]);

    request(app.getHttpServer())
      .post('/exams/answersStudent')
      .send(studentExamRandomFaker)
      .end((err, res) => {
        if (err) return done(err);
        console.log(res.body);
        expect(res.status).equal(201);
        expect(res.body).to.have.property('data');
        done();
      });
  });
});
