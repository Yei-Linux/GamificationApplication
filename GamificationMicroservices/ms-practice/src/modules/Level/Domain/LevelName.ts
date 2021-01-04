import validator from "validator";
import StringValueObject from "../../../shared/domain/StringValueObject";

class LevelName extends StringValueObject {
    constructor(value : string) {
        super(value)
    }
}

export default LevelName;