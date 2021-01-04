import { RequestsFaker } from "../RequestsFaker";
import { agent as request } from "supertest";
import { serverUp } from "../../..";
import { expect } from "chai";

describe("GetCoursesByStudent", () => {
  it("verify_is_courses_is_returned", (done: any) => {
    request(serverUp)
      .get("/auth/courses/student")
      .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRW1haWwiOiJLYWlsZXkxNEBnbWFpbC5jb20iLCJmdWxsTmFtZSI6IkphZG9uIiwibGFzdE5hbWUiOiJIb2VnZXIiLCJzdXJOYW1lIjoiS2Fzc3Vsa2UiLCJpYXQiOjE2MDk3OTI3OTJ9.a2vjTGLdr0ghjaHLEPRsnPYnvarjwOl8GrEvMNA5NxI')
      .end((err, res) => {
        console.log(err);
        if (err) return done(err);
        console.log(res.body);
        expect(res.status).equal(200);
        done();
      });
  });
});