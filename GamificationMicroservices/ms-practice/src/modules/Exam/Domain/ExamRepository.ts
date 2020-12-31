import LevelId from "../../Level/Domain/LevelId";
import ThemeId from "../../Theme/Domain/ThemeId";
import { Exam } from "./Exam";
import ExamTypeId from "./ExamTypeId";

export interface ExamRepository {
    getExamByTheme(themeId: ThemeId, examTypeId: ExamTypeId, levelId : LevelId) : Promise<Exam>;
}