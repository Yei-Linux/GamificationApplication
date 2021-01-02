import { StudyMethod } from "../../StudyMethods/Domain/StudyMethods";
import { Theme } from "../../Theme/Domain/Theme";
import ClassId from "./ClassId";

export class ClassStudy {
    constructor(
      private id: ClassId,
      private theme: Theme,
      private studyMethod: StudyMethod,
      private content: any
    ) {}

    get _id(): ClassId {
      return this.id;
    }

    get _theme(): Theme {
      return this.theme;
    }

    get _studyMethod(): StudyMethod {
      return this.studyMethod;
    }

    get _content(): any {
        return this.content;
    }

    public static create(
        id: ClassId,
        theme: Theme,
        studyMethod: StudyMethod,
        content: any,
    ): ClassStudy {
        let classStudy : ClassStudy = new ClassStudy(id,theme,studyMethod,content);
        return classStudy;
    }
  }
