import { ClassResponse } from "../../../../shared/application/response";

export interface GetRoadMapResponse {
    id: string;
    order: number;
    wasView: boolean;
    class: ClassResponse;
}