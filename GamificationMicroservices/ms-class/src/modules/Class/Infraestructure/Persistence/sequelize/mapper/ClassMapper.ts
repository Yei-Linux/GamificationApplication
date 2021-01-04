import { ClassResponse } from "../../../../../../shared/application/response";
import { StudyMethodMapper } from "../../../../../StudyMethods/Infraestructure/Persistence/sequelize/mapper/StudyMethodMapper";
import { ThemeMapper } from "../../../../../Theme/Infraestructure/sequelize/mapper/ThemeMapper";
import { GetClassByFilterResponse } from "../../../../Application/GetClassByFilters/response";
import { GetClassByIdResponse } from "../../../../Application/GetClassById/response";
import ClassId from "../../../../Domain/ClassId";
import { ClassStudy } from "../../../../Domain/ClassStudy";
import { ThemeStudyMethodsModel } from "../ThemeStudyMethodsModel";

export class ClassMapper {
    static convertModelToDomain(classModel: ThemeStudyMethodsModel): ClassStudy {
      return ClassStudy.create(
        new ClassId(classModel.id),
        classModel.theme ? ThemeMapper.convertModelToDomain(classModel.theme) : null,
        classModel.studyMethod ? StudyMethodMapper.convertModelToDomain(classModel.studyMethod) : null,
        classModel.contentClass
      );
    }

    static convertArrayModelToArrayDomain(classModels: ThemeStudyMethodsModel[]) : ClassStudy[] {
        return classModels.map((classModel : ThemeStudyMethodsModel) => {
            return ClassMapper.convertModelToDomain(classModel);
        });
    }

    static convertDomainToUseCaseGetClassById(classStudy: ClassStudy) : GetClassByIdResponse {
        return {
            id: classStudy._id._value,
            theme: ThemeMapper.convertDomainToResponse(classStudy._theme),
            content: classStudy._content
        }
    }

    static convertDomainToUseCaseGetClassByFilters(classStudy: ClassStudy) : GetClassByFilterResponse{
        return {
            id: classStudy._id._value,
            theme: ThemeMapper.convertDomainToResponse(classStudy._theme),
            content: classStudy._content
        }
    }

    static convertDomainToResponse(classStudy: ClassStudy) : ClassResponse{
        return {
            id: classStudy._id._value,
            theme: ThemeMapper.convertDomainToResponse(classStudy._theme),
            content: classStudy._content
        }
    }
  }
