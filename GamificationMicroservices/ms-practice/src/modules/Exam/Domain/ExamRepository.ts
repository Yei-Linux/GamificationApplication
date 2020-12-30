import ThemeId from "src/modules/Theme/Domain/ThemeId";

export interface ExamRepository {
    getExamByTheme(themeId: ThemeId) : Promise<any>;
}