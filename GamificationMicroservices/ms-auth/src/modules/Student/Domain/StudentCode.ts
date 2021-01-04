import validator from "validator";
import StringValueObject from "../../../shared/domain/StringValueObject";

class StudentCode extends StringValueObject {
    constructor(value : string) {
        super(value)
    }

    public validateStudentCode() : boolean{
        return validator.isLength(this._value,{
            min: 8,
            max: 15
        });
    }
}

export default StudentCode;