import IntValueObject from "../../../shared/domain/IntValueObject";
import validator from "validator";

class StudentAnswerDuration extends IntValueObject {
    constructor(value : number) {
        super(value)
    }
}

export default StudentAnswerDuration;