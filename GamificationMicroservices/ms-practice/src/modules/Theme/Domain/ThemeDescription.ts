import validator from "validator";
import StringValueObject from "../../../shared/domain/StringValueObject";

class ThemeDescription extends StringValueObject {
    constructor(value : string) {
        super(value)
    }
}

export default ThemeDescription;