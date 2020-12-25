import { RequestsFaker } from "../RequestsFaker";
import { agent as request } from "supertest";
import { serverUp } from "../../..";
import { expect } from "chai";

describe("SignInUser", () => {
  it("verify_is_tutor_is_login", (done: any) => {
    let tutorRandomFaker = RequestsFaker.generateSignInUserRequest(
      "4igyq8ir",
      "12345678",
      "TUTOR"
    );

    request(serverUp)
      .post("/auth/users/sign-in")
      .send(tutorRandomFaker)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        console.log(res.body);
        expect(res.body).to.have.property('token');
        expect(res.body).to.have.property('personInformation');
        done();
      });
  });

  it("verify_is_external_person_is_login", (done: any) => {
    let externalPersonRandomFaker = RequestsFaker.generateSignInUserRequest(
      "Damaris.White22@hotmail.com",
      "12345678",
      "EXTERNAL"
    );

    request(serverUp)
      .post("/auth/users/sign-in")
      .send(externalPersonRandomFaker)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.have.property('token');
        expect(res.body).to.have.property('personInformation');
        done();
      });
  });

  it("verify_is_student_is_login", (done: any) => {
    let studentRandomFaker = RequestsFaker.generateSignInUserRequest(
      "7mk7shjk",
      "12345678",
      "STUDENT"
    );

    request(serverUp)
      .post("/auth/users/sign-in")
      .send(studentRandomFaker)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.have.property('token');
        expect(res.body).to.have.property('personInformation');
        done();
      });
  });

  it("verify_is_student_is_not_login_by_incorrect_password", (done: any) => {
    let studentRandomFaker = RequestsFaker.generateSignInUserRequest(
      "7mk7shjk",
      "123456789",
      "STUDENT"
    );

    request(serverUp)
      .post("/auth/users/sign-in")
      .send(studentRandomFaker)
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  it("verify_is_student_is_not_login_by_incorrect_code", (done: any) => {
    let studentRandomFaker = RequestsFaker.generateSignInUserRequest(
      "7mk7shjkk",
      "12345678",
      "STUDENT"
    );

    request(serverUp)
      .post("/auth/users/sign-in")
      .send(studentRandomFaker)
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});
