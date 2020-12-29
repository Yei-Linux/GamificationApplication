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
import { OptionModel } from 'src/modules/Option/Infraestructure/sequelize/OptionModel';
import { QuestionsExamModel } from 'src/shared/infraestructure/sequelize/QuestionsExamModel';

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
      field: 'user_email',
      type: DataType.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    })
    userEmail: string;

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

    @BelongsTo(() => QuestionsExamModel)
    questionExam: QuestionsExamModel;
    @BelongsTo(() => OptionModel)
    option: OptionModel;

    @CreatedAt public createdAt: Date;

    @UpdatedAt public updatedAt: Date;

    @DeletedAt public deletedAt: Date;
  }
