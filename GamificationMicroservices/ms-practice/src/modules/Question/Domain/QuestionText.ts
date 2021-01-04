import validator from "validator";
import StringValueObject from "../../../shared/domain/StringValueObject";

class QuestionText extends StringValueObject {
    constructor(value : string) {
        super(value)
    }
}

export default QuestionText;