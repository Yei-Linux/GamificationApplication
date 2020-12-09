import { Response } from "../../../../../shared/domain/response/Response";
import { Student } from "../../../../Student/Domain/Student";
import { Tutor } from "../../../../Tutor/Domain/Tutor";

export class SignUserResponse extends Response{
    constructor(public user: Student|Tutor,generalResponse: Response) {
        super(generalResponse._message);
    }
}