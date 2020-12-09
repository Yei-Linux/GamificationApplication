import { injectable } from "inversify";
import { SignInUserDTO } from "./SignInUserDTO";
import { SignUserResponse } from "./SingInUserResponse";

interface ISignInUserService {
    validateUser() : boolean;
    signInUser(user: SignInUserDTO) : SignUserResponse;
}

@injectable()
export class SingInUserService implements ISignInUserService{
    validateUser(): boolean {
        throw new Error("Method not implemented.");
    }
    signInUser(user: SignInUserDTO): SignUserResponse {

        throw new Error("Method not implemented.");
    }
}