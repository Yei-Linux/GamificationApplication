import validator from "validator";
import StringValueObject from "../../../shared/domain/StringValueObject";

class CourseName extends StringValueObject {
    constructor(value : string) {
        super(value)
    }
}

export default CourseName;