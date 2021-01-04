import validator from "validator";
import StringValueObject from "../../../shared/domain/StringValueObject";

class UserPassword extends StringValueObject {
    constructor(value : string) {
        super(value)
    }

    public validatePassword() : boolean {
        return validator.isLength(this._value,{
            min: 5,
            max: 25
        });
    }
}

export default UserPassword;