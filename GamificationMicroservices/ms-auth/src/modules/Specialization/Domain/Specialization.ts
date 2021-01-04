import SpecializationDescription from "./SpecializationDescription";
import SpecializationId from "./SpecializationId";
import SpecializationName from "./SpecializationName";

export class Specialization {
  constructor(
    private specializationId: SpecializationId,
    private specializationName: SpecializationName,
    private specializationDescription: SpecializationDescription
  ) {}

  get _specializationId(): SpecializationId {
    return this.specializationId;
  }

  get _specializationName(): SpecializationName {
    return this.specializationName;
  }

  get _specializationDescription(): SpecializationDescription {
    return this.specializationDescription;
  }

  public static create(
    specializationId: SpecializationId,
    specializationName: SpecializationName,
    specializationDescription: SpecializationDescription
  ): Specialization {
    let specialization: Specialization = new Specialization(specializationId, specializationName,specializationDescription);
    return specialization;
  }
}
