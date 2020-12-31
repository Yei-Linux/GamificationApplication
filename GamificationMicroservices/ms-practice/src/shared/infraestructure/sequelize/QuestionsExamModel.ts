import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  HasMany,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { ExamModel } from '../../../modules/Exam/Infraestructure/Persistence/sequelize/ExamModel';
import { QuestionModel } from '../../../modules/Question/Infraestructure/sequelize/QuestionModel';
import { StudentAnswerModel } from '../../../modules/StudentAnswer/Infraestructure/sequelize/StudentAnswerModel';
@Table({
  tableName: 'questions_exam',
})
export class QuestionsExamModel extends Model<QuestionsExamModel> {
  @Column({
    field: 'id',
    type: DataType.UUID,
    allowNull: true,
    primaryKey: true,
  })
  public id: string;

  @ForeignKey(() => ExamModel)
  @Column({
    field: 'exam_id',
    type: DataType.UUID,
    allowNull: true,
  })
  examId: number;

  @ForeignKey(() => QuestionModel)
  @Column({
    field: 'question_id',
    type: DataType.UUID,
    allowNull: true,
  })
  questionId: number;

  @BelongsTo(() => ExamModel)
  exam: ExamModel;

  @BelongsTo(() => QuestionModel)
  questions: QuestionModel;

  @HasMany(() => StudentAnswerModel)
  studentAnswers: StudentAnswerModel[];

  @CreatedAt public createdAt: Date;

  @UpdatedAt public updatedAt: Date;

  @DeletedAt public deletedAt: Date;
}
