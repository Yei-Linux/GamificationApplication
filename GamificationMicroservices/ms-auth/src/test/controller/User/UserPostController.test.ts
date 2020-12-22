import { agent as request } from "supertest";
import { serverUp } from "../../..";
import { EUserPosition } from "../../../endpoints/User/UserPositionEnum";
import { SignUpUserResponse } from "../../../endpoints/User/UserResponse";
import { RequestsFaker } from "../RequestsFaker";

describe("SignUp User", () => {
  it("verify_is_controller_up", (done: any) => {
    request(serverUp)
      .get("/auth/users")
      .expect(200)
      .expect({ message: "test" }, done);
  });

  it("verify_is_student_is_created", (done: any) => {
    let studentRandomFaker = RequestsFaker.generateSignUpUserRequest(
      "STUDENT",
      "405681e7-ed13-43bc-a07c-ecb52304c562",
      "30ddcf32-f118-4116-b64d-ccaac44dfcd1",
      "dd9035e8-48ec-4f02-a9c1-6fa6b926bd46",
      "5b0927a1-04a0-4d78-a26c-dde9caba070e"
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
  });
});
