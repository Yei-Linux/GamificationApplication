import { EUserPosition } from "../../../../../endpoints/User/UserPositionEnum";

export interface SignInUserDTO{
    email: string;
    password: string;
    identification: string;
    userPosition: EUserPosition;
}