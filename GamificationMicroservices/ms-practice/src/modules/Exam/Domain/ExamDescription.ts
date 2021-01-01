import validator from "validator";
import StringValueObject from "../../../shared/domain/StringValueObject";

class ExamDescription extends StringValueObject {
    constructor(value : string) {
        super(value)
    }
}

export default ExamDescription;