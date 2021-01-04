import { RequestsFaker } from "../RequestsFaker";
import { agent as request } from "supertest";
import { serverUp } from "../../..";
import { expect } from "chai";

describe("Get Specializations", () => {
  it("verify_is_specializations_is_returned", (done: any) => {
    request(serverUp)
      .get("/auth/specializations")
      .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRW1haWwiOiJIYWxsZV9WZXVtQHlhaG9vLmNvbSIsImZ1bGxOYW1lIjoiU2hhbm5hIiwibGFzdE5hbWUiOiJIb3BwZSIsInN1ck5hbWUiOiJCZXJnc3Ryb20iLCJpYXQiOjE2MDg4NzE3NzksImV4cCI6MTYwODg3NTM3OX0.8ZJ1YnJgkmtFlqe_crGQiGlQzZL05gYBtd5QlvDYmoI')
      .end((err, res) => {
        expect(res.status).equal(200);
        expect(res.body).to.have.property('data');
        expect(res.body).to.have.property('msg');
        done();
      });
  });
});