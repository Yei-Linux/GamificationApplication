import StudyMethodId from "../../StudyMethods/Domain/StudyMethodId";
import ThemeId from "../../Theme/Domain/ThemeId";
import ClassId from "./ClassId";
import { ClassStudy } from "./ClassStudy";

export interface ClassRepository {
    getClassById(classId: ClassId) : Promise<ClassStudy>;
    getClassByFilters(themeId: ThemeId, studyMethodId: StudyMethodId) : Promise<ClassStudy>;
}