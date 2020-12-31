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
} from 'sequelize-typescript';
import { QuestionsExamModel } from '../../../../../shared/infraestructure/sequelize/QuestionsExamModel';
import { LevelModel } from '../../../../Level/Infraestructure/sequelize/LevelModel';
import { QuestionModel } from '../../../../Question/Infraestructure/sequelize/QuestionModel';
import { ThemeModel } from '../../../../Theme/Infraestructure/sequelize/ThemeModel';
import { ExamTypeModel } from './ExamTypeModel';

@Table({
  tableName: 'exams',
})
export class ExamModel extends Model<ExamModel> {
  @Column({
    field: 'id',
    type: DataType.UUID,
    allowNull: true,
    primaryKey: true,
  })
  public id: string;

  @Column({
    field: 'name',
    type: DataType.STRING(100),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  name: string;

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
    allowNull: true,
  })
  order: number;

  @ForeignKey(() => ExamTypeModel)
  @Column({
    field: 'exam_type_id',
    type: DataType.UUID,
    allowNull: true,
  })
  examTypeId: string;

  @ForeignKey(() => LevelModel)
  @Column({
    field: 'level_id',
    type: DataType.UUID,
    allowNull: true,
  })
  levelId: string;

  @ForeignKey(() => ThemeModel)
  @Column({
    field: 'theme_id',
    type: DataType.UUID,
    allowNull: true,
  })
  themeId: string;

  @BelongsTo(() => ExamTypeModel)
  examType: ExamTypeModel;
  @BelongsTo(() => LevelModel)
  level: LevelModel;
  @BelongsTo(() => ThemeModel)
  theme: ThemeModel;

  @HasMany(() => QuestionsExamModel)
  questionsByExam: QuestionsExamModel[];

  @CreatedAt public createdAt: Date;

  @UpdatedAt public updatedAt: Date;

  @DeletedAt public deletedAt: Date;
}
