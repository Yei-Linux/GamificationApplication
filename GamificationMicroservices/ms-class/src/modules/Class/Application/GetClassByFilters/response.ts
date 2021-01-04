import { ThemeResponse } from "../../../../shared/application/response";

export interface GetClassByFilterResponse {
    id: string;
    theme: ThemeResponse;
    content: any;
}