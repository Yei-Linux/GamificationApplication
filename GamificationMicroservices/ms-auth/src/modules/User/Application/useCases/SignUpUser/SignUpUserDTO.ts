import { EUserPosition } from "../../../../../shared/domain/enums/UserPositionEnum";

export interface SignUpUserDTO{
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
}