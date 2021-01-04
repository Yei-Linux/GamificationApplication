import validator from "validator";
import StringValueObject from "../../../shared/domain/StringValueObject";

class TutorCode extends StringValueObject {
    constructor(value : string) {
        super(value)
    }

    public validateTutorCode() : boolean{
        return validator.isLength(this._value,{
            min: 8,
            max: 15
        });
    }
}

export default TutorCode;