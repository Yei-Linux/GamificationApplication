import ClassId from "../../Class/Domain/ClassId";
import CourseId from "../../Course/Domain/CourseId";
import RoadMapEmail from "./RoadMapEmail";
import RoadMapOrder from "./RoadMapOrder";

export interface RoadMapRepository {
    getRoadMapByStudent(userEmail: RoadMapEmail, courseId: CourseId): Promise<any>;
    insertRoadMapByStudent(userEmail: RoadMapEmail,classId: ClassId,order: RoadMapOrder) : Promise<any>;
}