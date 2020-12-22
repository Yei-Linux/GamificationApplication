import { EUserPosition } from "./UserPositionEnum";

export interface SignUpUserResponse{
    identifier: string;
    userPosition: EUserPosition;
}