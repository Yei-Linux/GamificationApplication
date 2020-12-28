import { RequestsFaker } from "../RequestsFaker";
import { agent as request } from "supertest";
import { serverUp } from "../../..";
import { expect } from "chai";

describe("SecurityAuth", () => {
  it("verify_is_auth_token_invalid", (done: any) => {
    request(serverUp)
      .get("/auth/specializations")
      .set('Authorization', 'Bearer holaeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRW1haWwiOiJIYWxsZV9WZXVtQHlhaG9vLmNvbSIsImZ1bGxOYW1lIjoiU2hhbm5hIiwibGFzdE5hbWUiOiJIb3BwZSIsInN1ck5hbWUiOiJCZXJnc3Ryb20iLCJpYXQiOjE2MDg3ODIxMzUsImV4cCI6MTYwODc4NTczNX0.wyTHJWtYf5lxrlPd6lv03ceuEfzAqAP_DoDW9q0yFYg')
      .end((err, res) => {
        expect(res.status).equal(401);
        done();
      });
  });
  it("verify_is_auth_token_valid", (done: any) => {
    request(serverUp)
      .get("/auth/specializations")
      .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRW1haWwiOiJIYWxsZV9WZXVtQHlhaG9vLmNvbSIsImZ1bGxOYW1lIjoiU2hhbm5hIiwibGFzdE5hbWUiOiJIb3BwZSIsInN1ck5hbWUiOiJCZXJnc3Ryb20iLCJpYXQiOjE2MDg4NjUwNDgsImV4cCI6MTYwODg2ODY0OH0.4ladPBOrI78KdNxybTOty6yjBYbOQeWkWuL-o197J7Q')
      .end((err, res) => {
        expect(res.status).equal(200);
        done();
      });
  });
});