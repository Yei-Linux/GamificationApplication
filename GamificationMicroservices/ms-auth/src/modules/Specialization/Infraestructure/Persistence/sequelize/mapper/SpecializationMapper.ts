import { GetSpecializationServiceResponse } from "../../../../Application/GetSpecializations/GetSpecializationsServiceResponse";
import { Specialization } from "../../../../Domain/Specialization";
import specializationDescription from "../../../../Domain/SpecializationDescription";
import SpecializationId from "../../../../Domain/SpecializationId";
import SpecializationName from "../../../../Domain/SpecializationName";
import SpecializationModel from "../SpecializationModel";

export class SpecializationMapper {
  static convertSpecializationModelToSpecializations(
    specializationsModel: SpecializationModel[]
  ): Specialization[] {
    return specializationsModel.map((specializationModel: SpecializationModel) => {
      return Specialization.create(
        new SpecializationId(specializationModel.specializationId),
        new SpecializationName(specializationModel.specializationName),
        new specializationDescription(specializationModel.specializationDescription)
      );
    });
  }

  static convertSpecializationsToSpecializationService(
    specializations: Specialization[]
  ) : GetSpecializationServiceResponse[] {
    return specializations.map((specialization: Specialization) => {
        return {
            specializationId: specialization._specializationId._value,
            specializationName: specialization._specializationName._value,
            specializationDescription: specialization._specializationDescription._value
        }
      });
  }
}
