import validator from "validator";
import StringValueObject from "../../../shared/domain/StringValueObject";

class QuestionDescription extends StringValueObject {
    constructor(value : string) {
        super(value)
    }
}

export default QuestionDescription;