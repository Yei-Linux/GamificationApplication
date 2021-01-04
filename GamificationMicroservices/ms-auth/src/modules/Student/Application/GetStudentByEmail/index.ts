import { inject, injectable } from "inversify";
import UserEmail from "../../../User/Domain/UserEmail";
import { Student } from "../../Domain/Student";
import { PostgressStudentRepository } from "../../Infraestructure/Persistence/PostgressStudentRepository";

interface IGetStudentByEmail {
  handle(studentEmail: UserEmail): Promise<Student>;
}

@injectable()
export class GetStudentByEmail implements IGetStudentByEmail {
  protected studentRepository: PostgressStudentRepository;
  constructor(
    @inject(PostgressStudentRepository)
    studentRepository: PostgressStudentRepository
  ) {
    this.studentRepository = studentRepository;
  }
  async handle(studentEmail: UserEmail): Promise<Student> {
    try {
      return await this.studentRepository.getStudentByEmail(studentEmail);
    } catch (error) {
      throw new Error("Student not found");
    }
  }
}
