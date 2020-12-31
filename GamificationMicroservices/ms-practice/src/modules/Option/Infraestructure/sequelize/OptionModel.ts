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
    HasMany,
  } from 'sequelize-typescript';
import { QuestionModel } from '../../../Question/Infraestructure/sequelize/QuestionModel';
import { StudentAnswerModel } from '../../../StudentAnswer/Infraestructure/sequelize/StudentAnswerModel';

  @Table({
    tableName: 'options',
  })
  export class OptionModel extends Model<OptionModel> {
    @Column({
      field: 'id',
      type: DataType.UUID,
      allowNull: true,
      primaryKey: true,
    })
    public id: string;

    @Column({
      field: 'text',
      type: DataType.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    })
    text: string;

    @Column({
      field: 'is_answer',
      type: DataType.BOOLEAN,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    })
    isAnswer: boolean;

    @ForeignKey(() => QuestionModel)
    @Column({
      field: 'question_id',
      type: DataType.UUID,
      allowNull: true,
    })
    questionId: string;

    @BelongsTo(() => QuestionModel)
    question: QuestionModel;

    @HasMany(() => StudentAnswerModel)
    studentAnswers: StudentAnswerModel[];

    @CreatedAt public createdAt: Date;

    @UpdatedAt public updatedAt: Date;

    @DeletedAt public deletedAt: Date;
  }
