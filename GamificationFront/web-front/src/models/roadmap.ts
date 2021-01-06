export interface RoadMapRequest {
    studentEmail: string;
    courseId: string;
}

export interface RoadMapResponse {
    id: string;
    order: number;
    wasView: boolean;
    class: ClassResponse;
}

export interface ThemeResponse {
    id: string;
    name: string;
    description: string;
}

export interface ClassResponse {
    id: string;
    theme: ThemeResponse;
    content: any;
}

export interface InsertRoadMapRequest {
    themeId: string;
    studyMethodId: string;
    order: number;
}

export interface PostRoadMapStudentRequest {
    studentEmail: string;
    roadMap: InsertRoadMapRequest[];
}
