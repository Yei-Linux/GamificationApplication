import { Injectable } from "@nestjs/common";
import ClassId from "../../Domain/ClassId";
import { ClassStudy } from "../../Domain/ClassStudy";
import { PostgressClassRepository } from "../../Infraestructure/Persistence/PostgressClassRepository";
import { ClassMapper } from "../../Infraestructure/Persistence/sequelize/mapper/ClassMapper";
import { GetClassByIdResponse } from "./response";

interface IGetClassService {
    handle(classId : string): Promise<GetClassByIdResponse>;
  }

  @Injectable()
  export class GetClassService implements IGetClassService {
      constructor(private readonly classRepository: PostgressClassRepository) {}

      async handle(classId: string): Promise<GetClassByIdResponse> {
          try {
            let classFound : ClassStudy = await this.classRepository.getClassById(new ClassId(classId));
            return ClassMapper.convertDomainToUseCaseGetClassById(classFound);
          } catch (error) {
              throw new Error(error);
          }
      }
  }
