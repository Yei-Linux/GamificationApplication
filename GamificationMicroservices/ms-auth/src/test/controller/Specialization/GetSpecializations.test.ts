import { RequestsFaker } from "../RequestsFaker";
import { agent as request } from "supertest";
import { serverUp } from "../../..";
import { expect } from "chai";

describe("Get Specializations", () => {
  it("verify_is_specializations_is_returned", (done: any) => {
    request(serverUp)
      .get("/auth/specializations")
      .end((err, res) => {
        expect(res.status).equal(200);
        expect(res.body).to.have.property('data');
        expect(res.body).to.have.property('msg');
        done();
      });
  });
});