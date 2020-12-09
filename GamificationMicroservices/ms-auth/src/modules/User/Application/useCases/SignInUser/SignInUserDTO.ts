import { EUserPosition } from "../../../../../shared/domain/enums/UserPositionEnum";

export interface SignInUserDTO{
    email: string;
    password: string;
    identification: string;
    userPosition: EUserPosition;
}