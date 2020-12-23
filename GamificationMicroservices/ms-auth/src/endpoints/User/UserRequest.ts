import { EUserPosition } from "./UserPositionEnum";

export interface SignUpUserRequest{
    email: string;
    password: string;
    userTypeId: string;
    identifier: string;
    userPosition: EUserPosition;
    fullName: string;
    lastName: string;
    surname: string;
    age: number;
    idiomId: string;
    specializationId: string;
    languageProgrammingId: string;
    collegeId?: string;
}

export interface SignInRequest {
    identifier: string;
    password: string;
    userPosition: EUserPosition;
}