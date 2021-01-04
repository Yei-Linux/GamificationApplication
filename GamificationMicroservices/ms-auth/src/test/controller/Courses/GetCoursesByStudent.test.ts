import { RequestsFaker } from "../RequestsFaker";
import { agent as request } from "supertest";
import { serverUp } from "../../..";
import { expect } from "chai";

describe("GetCoursesByStudent", () => {
  it("verify_is_courses_is_returned", (done: any) => {
    request(serverUp)
      .get("/auth/courses/student")
      .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRW1haWwiOiJLYWlsZXkxNEBnbWFpbC5jb20iLCJmdWxsTmFtZSI6IkphZG9uIiwibGFzdE5hbWUiOiJIb2VnZXIiLCJzdXJOYW1lIjoiS2Fzc3Vsa2UiLCJpYXQiOjE2MDkxMTI2NzcsImV4cCI6MTYwOTExNjI3N30.nemEGKhO9cN01-426-ZvfdVZOeZhuoXYEhOaSJvWU3A')
      .end((err, res) => {
        if (err) return done(err);
        console.log(res.body);
        expect(res.status).equal(200);
        done();
      });
  });
});