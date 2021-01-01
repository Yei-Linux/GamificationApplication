import validator from "validator";
import StringValueObject from "../../../shared/domain/StringValueObject";

class StudentExamEmail extends StringValueObject {
    constructor(value : string) {
        super(value)
    }
}

export default StudentExamEmail;