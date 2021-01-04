abstract class StringValueObject {
    private value : string;

    constructor(value : string) {
        this.value = value;
    }

    get _value() {
        return this.value;
    }
}

export default StringValueObject;