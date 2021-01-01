import IntValueObject from "../../../shared/domain/IntValueObject";
import validator from "validator";

class StudentExamRetry extends IntValueObject {
    constructor(value : number) {
        super(value)
    }
}

export default StudentExamRetry;