import IntValueObject from "../../../shared/domain/IntValueObject";
import validator from "validator";

class QuestionPoint extends IntValueObject {
    constructor(value : number) {
        super(value)
    }
}

export default QuestionPoint;