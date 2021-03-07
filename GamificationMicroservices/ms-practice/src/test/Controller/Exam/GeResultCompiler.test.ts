import { Test, TestingModule } from '@nestjs/testing';
import { agent as request } from 'supertest';
import { expect } from 'chai';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../../../app.module';

describe('Get Result Compiler', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('get_success_result_compiler_of_problem_with_js', (done: any) => {
    const codeResultRequest = {
      code:
        '\nfunction add(a, b) {\n  return a + b;\n}\n\nconst x = add(1, 2);\n',
      language: 'JS',
    };

    request(app.getHttpServer())
      .post('/exams/compiler')
      .send(codeResultRequest)
      .end((err, res) => {
        if (err) return done(err);
        console.log(res.body);
        expect(res.status).equal(200);
        done();
      });
  });

  it('get_success_result_compiler_of_problem_with_python', (done: any) => {
    const codeResultRequest = {
      code: 'x=1+1;print(x)',
      language: 'PY',
    };

    request(app.getHttpServer())
      .post('/exams/compiler')
      .send(codeResultRequest)
      .end((err, res) => {
        if (err) return done(err);
        console.log(res.body);
        expect(res.status).equal(200);
        done();
      });
  });

  it('get_error_result_compiler_of_problem_with_python', (done: any) => {
    const codeResultRequest = {
      code: 'x=1+1;pint(x)',
      language: 'PY',
    };

    request(app.getHttpServer())
      .post('/exams/compiler')
      .send(codeResultRequest)
      .end((err, res) => {
        if (err) return done(err);
        console.log(res.body);
        expect(res.status).equal(500);
        done();
      });
  });

  it('get_error_result_compiler_of_problem_with_js', (done: any) => {
    const codeResultRequest = {
      code:
        '\nfuncti add(a, b) {\n  return a + b;\n}\n\nconst x = add(1, 2);\n',
      language: 'JS',
    };

    request(app.getHttpServer())
      .post('/exams/compiler')
      .send(codeResultRequest)
      .end((err, res) => {
        if (err) return done(err);
        console.log(res.body);
        expect(res.status).equal(500);
        done();
      });
  });
});
