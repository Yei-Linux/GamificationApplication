import { GetRoadMapRequest, RoadMapRequest } from "../../endpoints/RoadMap/RoadMapRequest"

export class RequestsFaker {
    public static generatePostRoadMapStudentRequest(studentEmail : string, roadMap : RoadMapRequest[]) {
        return {
            studentEmail,
            roadMap
        }
    }

    public static generateRoadMaps(themeId: string,studyMethodId: string, order: number ) : RoadMapRequest{
        return {
            themeId,
            studyMethodId,
            order
        }
    }

    public static generateGetRoadMapRequest(studentEmail: string, courseId: string) : GetRoadMapRequest{
        return {
            studentEmail,
            courseId
        }
    }
}