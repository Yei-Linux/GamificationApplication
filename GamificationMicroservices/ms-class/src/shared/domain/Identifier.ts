import validator from "validator";

abstract class Identifier {
    private value : string;

    constructor(value : string) {
        this.value = value;
    }

    get _value() {
        return this.value;
    }

    public validateIdentifier() :boolean {
        return validator.isUUID(this.value)
    }
}

export default Identifier;