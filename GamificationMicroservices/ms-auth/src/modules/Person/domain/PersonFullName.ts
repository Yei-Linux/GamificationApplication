import validator from "validator";
import StringValueObject from "../../../shared/domain/StringValueObject";

class PersonFullName extends StringValueObject {
    constructor(value : string) {
        super(value)
    }
}

export default PersonFullName;