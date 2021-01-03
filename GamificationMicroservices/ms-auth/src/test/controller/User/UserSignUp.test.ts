import { agent as request } from "supertest";
import { serverUp } from "../../..";
import { EUserPosition } from "../../../endpoints/User/UserPositionEnum";
import { SignUpUserResponse } from "../../../endpoints/User/UserResponse";
import { RequestsFaker } from "../RequestsFaker";

describe("SignUp User", () => {
  it("verify_is_student_is_created", (done: any) => {
    let studentRandomFaker = RequestsFaker.generateSignUpUserRequest(
      "STUDENT",
      "8d12e6e3-e364-4231-9990-b794ebea38c6",
      "078069b1-d276-4fe0-94d3-d111a05d9583",
      "8dba6cd4-69d1-4a71-bce2-9c68e7579c98",
      "e5065254-9f3c-4d89-bf8e-977dfdb16019",
      null,
      "12345678",
      ["901a2cf7-c4df-4d02-bc80-8a5a38a1970b","511a2cf7-c4df-4d02-bc80-8a5a38a1970b"]
    );

    let studentResponsExpected : SignUpUserResponse = {
      identifier: studentRandomFaker.identifier,
      userPosition: EUserPosition.STUDENT
    }

    request(serverUp)
      .post("/auth/users/sign-up")
      .send(studentRandomFaker)
      .expect(200)
      .expect(studentResponsExpected,done);
  });

  it("verify_is_tutor_is_created", (done: any) => {
    let tutorRandomFaker = RequestsFaker.generateSignUpUserRequest(
      "TUTOR",
      "8d12e6e3-e364-4231-9990-b794ebea38c6",
      "078069b1-d276-4fe0-94d3-d111a05d9583",
      "8dba6cd4-69d1-4a71-bce2-9c68e7579c98",
      null,
      "8be31cfa-87f7-4b76-8688-5f953a8d396e",
      "12345678"
    );

    let tutorResponsExpected : SignUpUserResponse = {
      identifier: tutorRandomFaker.identifier,
      userPosition: EUserPosition.TUTOR
    }

    request(serverUp)
      .post("/auth/users/sign-up")
      .send(tutorRandomFaker)
      .expect(200)
      .expect(tutorResponsExpected,done);
  });

  it("verify_is_external_person_is_created", (done: any) => {
    let externalPersonRandomFaker = RequestsFaker.generateSignUpUserRequest(
      "EXTERNAL",
      "8d12e6e3-e364-4231-9990-b794ebea38c6",
      "078069b1-d276-4fe0-94d3-d111a05d9583",
      "8dba6cd4-69d1-4a71-bce2-9c68e7579c98",
      "e5065254-9f3c-4d89-bf8e-977dfdb16019",
      null,
      "12345678"
    );

    let tutorResponsExpected : SignUpUserResponse = {
      userPosition: EUserPosition.EXTERNAL
    }

    request(serverUp)
      .post("/auth/users/sign-up")
      .send(externalPersonRandomFaker)
      .expect(200)
      .expect(tutorResponsExpected,done);
  });
});