import jwt from "jsonwebtoken";
import { applicationSettings } from "../config/application";
import { authentication } from "../config/authentication";
interface PayloadToken {
    userEmail: string;
    fullName: string;
    lastName: string;
    surName: string;
}

export class JWToken {
    private expiresIn : number;
    private secretKey : string;
    constructor(private payload, private token) {
        this.payload = payload;
        this.token = token;
        this.expiresIn = authentication[applicationSettings.environment]["signOptions"]["expiresIn"];
        this.secretKey = authentication[applicationSettings.environment]["jwtSignature"];
    }

    public static create(payload : PayloadToken, token : string = "") {
        return new JWToken(payload,token);
    }

    public formatToken() : JWToken{
        this.token = this.token.split(' ')[1];
        return this;
    }

    public async generateJWT() {
        let token = await jwt.sign(this.payload,this.secretKey,{
            expiresIn: this.expiresIn
        });
        return token;
    }

    public validateJWT() : any{
        try {
            let tokenDecrypt = jwt.verify(this.token,this.secretKey);
            return tokenDecrypt;
        } catch (error) {
            return null;
        }
    }
}