import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
} from 'sequelize-typescript';
import { ExamModel } from 'src/modules/Exam/Infraestructure/Persistence/sequelize/ExamModel';
import { QuestionsExamModel } from 'src/shared/infraestructure/sequelize/QuestionsExamModel';
import { QuestionTypeModel } from './QuestionTypeModel';

@Table({
  tableName: 'questions',
})
export class QuestionModel extends Model<QuestionModel> {
  @Column({
    field: 'id',
    type: DataType.UUID,
    allowNull: true,
    primaryKey: true,
  })
  public id: string;

  @Column({
    field: 'text',
    type: DataType.STRING(1000),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  text: string;

  @Column({
    field: 'description',
    type: DataType.STRING(100),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  description: string;

  @Column({
    field: 'duration',
    type: DataType.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  duration: number;

  @Column({
    field: 'points',
    type: DataType.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  points: number;

  @ForeignKey(() => QuestionTypeModel)
  @Column({
    field: 'question_type_id',
    type: DataType.UUID,
    allowNull: true,
  })
  questionTypeId: string;

  @BelongsTo(() => QuestionTypeModel)
  questionType: QuestionTypeModel;

  @BelongsToMany(() => ExamModel, () => QuestionsExamModel)
  questionsExams: QuestionsExamModel[];

  @CreatedAt public createdAt: Date;

  @UpdatedAt public updatedAt: Date;

  @DeletedAt public deletedAt: Date;
}
