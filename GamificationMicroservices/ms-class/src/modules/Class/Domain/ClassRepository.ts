import StudyMethodId from "../../StudyMethods/Domain/StudyMethodId";
import ThemeId from "../../Theme/Domain/ThemeId";
import ClassId from "./ClassId";

export interface ClassRepository {
    getClassById(classId: ClassId) : Promise<any>;
    getClassByFilters(themeId: ThemeId, studyMethodId: StudyMethodId) : Promise<any>;
}