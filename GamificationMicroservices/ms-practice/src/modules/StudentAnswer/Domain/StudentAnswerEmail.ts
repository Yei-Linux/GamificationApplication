import validator from "validator";
import StringValueObject from "../../../shared/domain/StringValueObject";

class StudentAnswerEmail extends StringValueObject {
    constructor(value : string) {
        super(value)
    }
}

export default StudentAnswerEmail;