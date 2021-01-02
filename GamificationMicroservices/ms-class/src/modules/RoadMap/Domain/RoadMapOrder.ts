import IntValueObject from "../../../shared/domain/IntValueObject";
import validator from "validator";

class RoadMapOrder extends IntValueObject {
    constructor(value : number) {
        super(value)
    }

    public validateSize() : boolean{
        return validator.isLength(this._value.toString(),{
            min: 1
        });
    }
}

export default RoadMapOrder;