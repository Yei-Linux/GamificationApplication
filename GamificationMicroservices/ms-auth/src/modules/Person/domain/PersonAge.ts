import validator from "validator";
import IntValueObject from "../../../shared/domain/IntValueObject";

class PersonAge extends IntValueObject {
    constructor(value : number) {
        super(value)
    }

    public validateSizeAge() : boolean{
        return validator.isLength(this._value.toString(),{
            min: 1,
            max: 2
        });
    }

    public validateNumberAge() : boolean {
        return this._value > 0 && this._value <100;
    }
}

export default PersonAge;