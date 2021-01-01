export interface GetRoadMapRequest {
    studentEmail: string;
    courseId: string;
}

export interface RoadMapRequest {
    themeId: string;
    studyMethodId: string;
    order: number;
}

export interface PostRoadMapStudentRequest {
    studentEmail: string;
    roadMap: RoadMapRequest[];
}