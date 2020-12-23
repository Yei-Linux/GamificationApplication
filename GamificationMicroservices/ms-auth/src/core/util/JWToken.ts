import jwt from "jsonwebtoken";
import { applicationSettings } from "../../config/application";
import { authentication } from "../../config/authentication";

export class JWToken {
    private expiresIn : number;
    private secretKey : string;
    constructor(private payload) {
        this.payload = payload;
        this.expiresIn = authentication[applicationSettings.environment]["signOptions"]["expiresIn"];
        this.secretKey = authentication[applicationSettings.environment]["jwtSignature"];
    }

    public static create(payload : any) {
        return new JWToken(payload);
    }

    public async generateJWT() {
        let token = await jwt.sign(this.payload,this.secretKey,{
            expiresIn: this.expiresIn
        });
        return token;
    }
}