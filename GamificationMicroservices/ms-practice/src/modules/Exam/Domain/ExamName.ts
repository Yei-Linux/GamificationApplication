import validator from "validator";
import StringValueObject from "../../../shared/domain/StringValueObject";

class ExamName extends StringValueObject {
    constructor(value : string) {
        super(value)
    }
}

export default ExamName;