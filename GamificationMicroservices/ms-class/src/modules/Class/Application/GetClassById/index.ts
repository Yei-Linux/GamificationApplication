import { Injectable } from "@nestjs/common";
import ClassId from "../../Domain/ClassId";
import { PostgressClassRepository } from "../../Infraestructure/Persistence/PostgressClassRepository";

interface IGetClassService {
    handle(classId : ClassId): Promise<any>;
  }

  @Injectable()
  export class GetClassService implements IGetClassService {
      constructor(private readonly classRepository: PostgressClassRepository) {}

      async handle(classId: ClassId): Promise<any> {
          let classFound : any = await this.classRepository.getClassById(classId);
          return classFound;
      }
  }
