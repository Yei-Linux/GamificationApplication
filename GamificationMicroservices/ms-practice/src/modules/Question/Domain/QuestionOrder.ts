import IntValueObject from "../../../shared/domain/IntValueObject";
import validator from "validator";

class QuestionOrder extends IntValueObject {
    constructor(value : number) {
        super(value)
    }
}

export default QuestionOrder;