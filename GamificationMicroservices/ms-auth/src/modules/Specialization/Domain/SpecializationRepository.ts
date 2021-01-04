import { Specialization } from "./Specialization";

export interface SpecializationRepository {
    getSpecializations(): Promise<Specialization[]>
}