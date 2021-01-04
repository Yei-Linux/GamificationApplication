import { Inject, Injectable, Logger } from "@nestjs/common";
import { StudentAnswer } from "../Domain/StudentAnswer";
import { StudentExam } from "../Domain/StudentExam";
import StudentExamId from "../Domain/StudentExamId";
import { StudentExamRepository } from "../Domain/StudentExamRepository";
import { StudentAnswersByExamMapper } from "./sequelize/mapper/StudentAnswersByExamMapper";
import { StudentAnswerModel } from "./sequelize/StudentAnswerModel";
import { StudentExamModel } from "./sequelize/StudentExamModel";

@Injectable()
export class PostgressStudentExamRepository implements StudentExamRepository {
  constructor(
    @Inject('StudentExamModel') private readonly studentExamModel: typeof StudentExamModel,
    @Inject('StudentAnswerModel') private readonly studentAsnwerModel: typeof StudentAnswerModel,
  ) {}
    async insertStudentExamRepository(studentExam: StudentExam): Promise<StudentExam> {
        Logger.log("Insert student exam")
        let studentExamInserted= await StudentExamModel.create({
            userEmail: studentExam._email._value,
            retry: studentExam._retry._value
        })
        Logger.log(`Exam ${JSON.stringify(studentExamInserted)} inserted`)
        return StudentAnswersByExamMapper.convertStudentExamModelToStudentExam(studentExamInserted);
    }

    async insertStudentAnswersOfExamRepository(studentAnswersOfExam: StudentAnswer): Promise<void> {
        Logger.log(`Student answer to insert: ${JSON.stringify(studentAnswersOfExam)}`)
        let studentAnswerInserted= await StudentAnswerModel.create({
            studentAnswerText: studentAnswersOfExam._answerText._value,
            duration: studentAnswersOfExam._duration._value,
            questionExamId: studentAnswersOfExam._questionExamId._value,
            optionId: studentAnswersOfExam._optionId._value,
            studentExamId: studentAnswersOfExam._studentExamId._value
        })
        Logger.log(`Answer Student ${JSON.stringify(studentAnswerInserted)} inserted`)
    }
}