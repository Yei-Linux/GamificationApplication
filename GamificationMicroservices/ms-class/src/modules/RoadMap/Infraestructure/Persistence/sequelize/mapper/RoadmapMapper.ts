import { ClassMapper } from "../../../../../Class/Infraestructure/Persistence/sequelize/mapper/ClassMapper";
import { GetRoadMapResponse } from "../../../../Application/GetRoadMap/response";
import { RoadMap } from "../../../../Domain/RoadMap";
import RoadMapEmail from "../../../../Domain/RoadMapEmail";
import RoadMapId from "../../../../Domain/RoadMapId";
import RoadMapOrder from "../../../../Domain/RoadMapOrder";
import { StudentRoadMapModel } from "../StudentRoadMapModel";

export class RoadmapMapper {
    static convertModelToDomain(roadMapModel: StudentRoadMapModel): RoadMap {
      return RoadMap.create(
        new RoadMapId(roadMapModel.id),
        new RoadMapEmail(roadMapModel.userEmail),
        roadMapModel.themeStudyMethod ? ClassMapper.convertModelToDomain(roadMapModel.themeStudyMethod) : null,
        new RoadMapOrder(roadMapModel.order),
        roadMapModel.wasView
      );
    }

    static convertArrayModelToArrayDomain(roadMapModels: StudentRoadMapModel[]): RoadMap[] {
        return roadMapModels.map((roadMapModel : StudentRoadMapModel) =>{
            return RoadmapMapper.convertModelToDomain(roadMapModel);
        });
    }

    static convertDomainToUseCaseGetRoadMap(roadMaps : RoadMap[]) : GetRoadMapResponse[] {
        return roadMaps.map((roadMap : RoadMap) =>{
            return {
                id: roadMap._id._value,
                order: roadMap._order._value,
                wasView: roadMap._wasView,
                class: roadMap._classStudy ? ClassMapper.convertDomainToResponse(roadMap._classStudy) : null
            }
        });
    }
  }