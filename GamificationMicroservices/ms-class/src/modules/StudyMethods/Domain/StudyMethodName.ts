import validator from "validator";
import StringValueObject from "../../../shared/domain/StringValueObject";

class StudyMethodName extends StringValueObject {
    constructor(value : string) {
        super(value)
    }
}

export default StudyMethodName;