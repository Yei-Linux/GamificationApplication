import IntValueObject from "../../../shared/domain/IntValueObject";
import validator from "validator";

class QuestionDifficulty extends IntValueObject {
    constructor(value : number) {
        super(value)
    }
}

export default QuestionDifficulty;