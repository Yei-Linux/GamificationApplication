import { RequestsFaker } from "../RequestsFaker";
import { agent as request } from "supertest";
import { serverUp } from "../../..";
import { expect } from "chai";

describe("SignInUser", () => {
  it("verify_is_student_is_login", (done: any) => {
    let studentRandomFaker = RequestsFaker.generateSignInUserRequest(
      "7mk7shjk",
      "12345678",
      "STUDENT"
    );

    let studentResponseExpected = {
      personInformation: {
        email: "Jeramy.Dickinson87@gmail.com",
        fullName: "Marguerite",
        lastName: "Schultz",
        surName: "Heidenreich",
      },
    };

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

  it("verify_is_student_is_not_login", (done: any) => {
    let studentRandomFaker = RequestsFaker.generateSignInUserRequest(
      "7mk7shjk",
      "123456789",
      "STUDENT"
    );

    let studentResponseExpected = {
      personInformation: {
        email: "Jeramy.Dickinson87@gmail.com",
        fullName: "Marguerite",
        lastName: "Schultz",
        surName: "Heidenreich",
      },
    };

    request(serverUp)
      .post("/auth/users/sign-in")
      .send(studentRandomFaker)
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });;
  });
});
