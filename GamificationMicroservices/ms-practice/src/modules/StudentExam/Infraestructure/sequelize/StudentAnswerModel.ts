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
    BeforeCreate,
  } from 'sequelize-typescript';
import { uuid } from 'uuidv4';
import { QuestionsExamModel } from '../../../../shared/infraestructure/sequelize/QuestionsExamModel';
import { OptionModel } from '../../../Option/Infraestructure/sequelize/OptionModel';
import { StudentExamModel } from './StudentExamModel';

  @Table({
    tableName: 'student_answers',
  })
  export class StudentAnswerModel extends Model<StudentAnswerModel> {
    @Column({
      field: 'id',
      type: DataType.UUID,
      allowNull: true,
      primaryKey: true,
    })
    public id: string;

    @Column({
      field: 'student_answer_text',
      type: DataType.STRING(1000),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    })
    studentAnswerText: string;

    @Column({
      field: 'duration',
      type: DataType.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    })
    duration: number;

    @ForeignKey(() => QuestionsExamModel)
    @Column({
      field: 'question_exam_id',
      type: DataType.UUID,
      allowNull: true,
    })
    questionExamId: string;

    @ForeignKey(() => OptionModel)
    @Column({
      field: 'option_id',
      type: DataType.UUID,
      allowNull: true,
    })
    optionId: string;

    @ForeignKey(() => StudentExamModel)
    @Column({
      field: 'student_exam_id',
      type: DataType.UUID,
      allowNull: true,
    })
    studentExamId: string;

    @BelongsTo(() => QuestionsExamModel)
    questionExam: QuestionsExamModel;
    @BelongsTo(() => OptionModel)
    option: OptionModel;
    @BelongsTo(() => StudentExamModel)
    studentExam: StudentExamModel;

    @BeforeCreate
    static addUUID(instance: StudentAnswerModel) {
      instance.id = uuid();
    }

    @CreatedAt public createdAt: Date;

    @UpdatedAt public updatedAt: Date;

    @DeletedAt public deletedAt: Date;
  }
