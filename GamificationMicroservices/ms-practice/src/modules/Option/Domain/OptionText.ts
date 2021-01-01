import validator from "validator";
import StringValueObject from "../../../shared/domain/StringValueObject";

class OptionText extends StringValueObject {
    constructor(value : string) {
        super(value)
    }
}

export default OptionText;