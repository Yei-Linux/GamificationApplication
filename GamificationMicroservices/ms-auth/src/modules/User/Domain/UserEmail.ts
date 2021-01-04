import validator from "validator";
import StringValueObject from "../../../shared/domain/StringValueObject";

class UserEmail extends StringValueObject {
    constructor(value : string) {
        super(value)
    }

    public validateEmail() : boolean{
        return validator.isEmail(this._value);
    }
}

export default UserEmail;