import IntValueObject from "src/shared/domain/IntValueObject";
import validator from "validator";

class QuestionDuration extends IntValueObject {
    constructor(value : number) {
        super(value)
    }
}

export default QuestionDuration;