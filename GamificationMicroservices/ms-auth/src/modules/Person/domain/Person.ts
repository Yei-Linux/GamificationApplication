import PersonAge from "./PersonAge";
import PersonFullName from "./PersonFullName";
import PersonId from "./PersonId";
import PersonIdentifier from "./PersonIdentifier";
import PersonLastName from "./PersonLastName";
import PersonSurName from "./PersonSurName";

export class Person {
    constructor(
      private personId: PersonId,
      private fullName: PersonFullName,
      private lastName: PersonLastName,
      private surName: PersonSurName,
      private age: PersonAge,
      private identifier: PersonIdentifier
    ) {}

    get _personId(): PersonId {
      return this.personId;
    }

    get _fullName(): PersonFullName {
      return this.fullName;
    }

    get _lastName(): PersonLastName {
      return this.lastName;
    }

    get _surName(): PersonSurName {
      return this.surName;
    }

    get _age(): PersonAge {
      return this.age;
    }

    get _identifier(): PersonIdentifier {
      return this.identifier;
    }

    public static createPerson(personId : PersonId, fullName : PersonFullName, lastName : PersonLastName, surName : PersonSurName, age : PersonAge, identifier : PersonIdentifier) {
      let person : Person = new Person(personId, fullName, lastName, surName, age, identifier);
      return person;
    }
}
