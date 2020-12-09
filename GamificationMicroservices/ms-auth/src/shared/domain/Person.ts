export class Person {
  constructor(
    public personId: string,
    public fullName: string,
    public lastName: string,
    public surName: string,
    public age: number,
    public identifier: string
  ) {}

  get _personId(): string {
    return this.personId;
  }

  get _fullName(): string {
    return this.fullName;
  }

  get _lastName(): string {
    return this.lastName;
  }

  get _surName(): string {
    return this.surName;
  }

  get _age(): number {
    return this.age;
  }

  get _identifier(): string {
    return this.identifier;
  }
}
