import { ThemeResponse } from "../../../../shared/application/response";

export interface GetClassByIdResponse {
    id: string;
    theme: ThemeResponse;
    content: any;
}