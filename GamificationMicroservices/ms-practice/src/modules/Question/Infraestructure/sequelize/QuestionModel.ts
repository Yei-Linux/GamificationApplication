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
  HasMany,
  BeforeCreate,
} from 'sequelize-typescript';
import { uuid } from 'uuidv4';
import { QuestionsExamModel } from '../../../../shared/infraestructure/sequelize/QuestionsExamModel';
import { ExamModel } from '../../../Exam/Infraestructure/Persistence/sequelize/ExamModel';
import { OptionModel } from '../../../Option/Infraestructure/sequelize/OptionModel';
import { ThemeModel } from '../../../Theme/Infraestructure/sequelize/ThemeModel';
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
    field: 'title',
    type: DataType.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  title: string;

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
    field: 'order',
    type: DataType.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  order: number;

  @Column({
    field: 'points',
    type: DataType.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  points: number;

  @Column({
    field: 'difficulty',
    type: DataType.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  difficulty: number;

  @ForeignKey(() => QuestionTypeModel)
  @Column({
    field: 'question_type_id',
    type: DataType.UUID,
    allowNull: true,
  })
  questionTypeId: string;

  @ForeignKey(() => ThemeModel)
  @Column({
    field: 'theme_id',
    type: DataType.UUID,
    allowNull: true,
  })
  themeId: string;

  @BelongsTo(() => ThemeModel)
  theme: ThemeModel;

  @BelongsTo(() => QuestionTypeModel)
  questionType: QuestionTypeModel;

  @HasMany(() => OptionModel)
  options: OptionModel[];

  @HasMany(() => QuestionsExamModel)
  questions: QuestionsExamModel[];

  @BeforeCreate
  static addUUID(instance: QuestionModel) {
    instance.id = uuid();
  }

  @CreatedAt public createdAt: Date;

  @UpdatedAt public updatedAt: Date;

  @DeletedAt public deletedAt: Date;
}
