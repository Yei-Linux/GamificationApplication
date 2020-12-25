import express from "express";
import { injectable } from "inversify";
import { BaseMiddleware } from "inversify-express-utils";
import { JWToken } from "../util/JWToken";

@injectable()
export class AuthMiddleware extends BaseMiddleware {
    public handler(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        let tokenRequest = req.header('Authorization');
        let tokenValidated = JWToken.create(null,tokenRequest).formatToken().validateJWT();
        if(tokenValidated) {
            next();
        }else {
            res.status(401).json({"message": "Not authorized"});
        }
    }
}