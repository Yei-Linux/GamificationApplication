import validator from "validator";
import StringValueObject from "../../../shared/domain/StringValueObject";

class StudyMethodDescription extends StringValueObject {
    constructor(value : string) {
        super(value)
    }
}

export default StudyMethodDescription;