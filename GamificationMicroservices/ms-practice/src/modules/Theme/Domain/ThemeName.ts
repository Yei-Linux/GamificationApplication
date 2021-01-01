import validator from "validator";
import StringValueObject from "../../../shared/domain/StringValueObject";

class ThemeName extends StringValueObject {
    constructor(value : string) {
        super(value)
    }
}

export default ThemeName;