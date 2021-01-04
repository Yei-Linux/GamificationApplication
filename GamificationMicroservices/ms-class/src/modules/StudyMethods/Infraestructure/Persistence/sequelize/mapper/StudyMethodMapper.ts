import StudyMethodDescription from "../../../../Domain/StudyMethodDescription";
import StudyMethodId from "../../../../Domain/StudyMethodId";
import StudyMethodName from "../../../../Domain/StudyMethodName";
import { StudyMethod } from "../../../../Domain/StudyMethods";
import { StudyMethodsModel } from "../StudyMethodsModel";

export class StudyMethodMapper {
    static convertModelToDomain(studyMethod: StudyMethodsModel): StudyMethod {
      return StudyMethod.create(
        new StudyMethodId(studyMethod.id),
        new StudyMethodName(studyMethod.name),
        new StudyMethodDescription(studyMethod.description)
      );
    }
  }
