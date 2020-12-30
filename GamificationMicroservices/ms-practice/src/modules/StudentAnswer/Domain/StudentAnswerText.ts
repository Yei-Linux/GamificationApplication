import validator from "validator";
import StringValueObject from "../../../shared/domain/StringValueObject";

class StudentAnswerText extends StringValueObject {
    constructor(value : string) {
        super(value)
    }
}

export default StudentAnswerText;