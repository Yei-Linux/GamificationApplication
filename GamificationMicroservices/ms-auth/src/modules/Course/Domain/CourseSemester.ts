import validator from "validator";
import IntValueObject from "../../../shared/domain/IntValueObject";

class CourseSemester extends IntValueObject {
    constructor(value : number) {
        super(value)
    }

    public validateNumberSemester() : boolean {
        return this._value > 0 && this._value <11;
    }
}

export default CourseSemester;