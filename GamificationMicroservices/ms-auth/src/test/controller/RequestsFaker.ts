import { EUserPosition } from "../../endpoints/User/UserPositionEnum";
import { SignInRequest, SignUpUserRequest } from "../../endpoints/User/UserRequest";

import faker from "faker";

export class RequestsFaker {
    public static generateSignUpUserRequest(userPosition : string,userTypeId : string, idiomId : string , specializationId : string, languageProgrammingId : string,collegeId: string, password: string,coursesId: string[] = []) :SignUpUserRequest {
        return {
            email: faker.internet.email(),
            password: password,
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
            collegeId: collegeId,
            coursesId: coursesId,
        }
    }

    public static generateSignInUserRequest(identifier : string, password : string,userPosition: string) : SignInRequest {
        return {
            identifier: identifier,
            password: password,
            userPosition: EUserPosition[userPosition]
        }
    }
}