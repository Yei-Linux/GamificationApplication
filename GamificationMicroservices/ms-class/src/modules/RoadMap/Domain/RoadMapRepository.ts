import ClassId from "../../Class/Domain/ClassId";
import CourseId from "../../Course/Domain/CourseId";
import { RoadMap } from "./RoadMap";
import RoadMapEmail from "./RoadMapEmail";
import RoadMapOrder from "./RoadMapOrder";

export interface RoadMapRepository {
    getRoadMapByStudent(userEmail: RoadMapEmail, courseId: CourseId): Promise<RoadMap[]>;
    insertRoadMapByStudent(userEmail: RoadMapEmail,classId: ClassId,order: RoadMapOrder) : Promise<any>;
}