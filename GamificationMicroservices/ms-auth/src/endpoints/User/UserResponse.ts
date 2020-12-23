import { EUserPosition } from "./UserPositionEnum";

export interface SignUpUserResponse {
    identifier?: string;
    userPosition: EUserPosition;
}

interface PersonInformation {
    fullName: string;
    lastName: string;
    surName: string;
}

interface PlayerGameInformation {
    level: string;
    badge: string;
}

export interface SignInUserResponse {
    token: string;
    personInformation: PersonInformation;
}