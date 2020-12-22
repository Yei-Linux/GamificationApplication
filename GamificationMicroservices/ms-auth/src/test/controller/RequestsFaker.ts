import { EUserPosition } from "../../endpoints/User/UserPositionEnum";
import { SignUpUserRequest } from "../../endpoints/User/UserRequest";

import faker from "faker";

export class RequestsFaker {
    public static generateSignUpUserRequest(userPosition : string,userTypeId : string, idiomId : string , specializationId : string, languageProgrammingId : string) :SignUpUserRequest {
        return {
            email: faker.internet.email(),
            password: faker.hacker.phrase(),
            userTypeId: userTypeId,
            identifier: faker.random.alphaNumeric(8),
            userPosition: EUserPosition[userPosition],
            fullName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            surname: faker.name.lastName(),
            age: faker.random.number(99),
            idiomId: idiomId,
            specializationId: specializationId,
            languageProgrammingId: languageProgrammingId,
        }
    }
}