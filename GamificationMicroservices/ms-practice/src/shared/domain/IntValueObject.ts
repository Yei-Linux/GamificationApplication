abstract class IntValueObject {
    private value : number;

    constructor(value : number) {
        this.value = value;
    }

    get _value() {
        return this.value;
    }
}

export default IntValueObject