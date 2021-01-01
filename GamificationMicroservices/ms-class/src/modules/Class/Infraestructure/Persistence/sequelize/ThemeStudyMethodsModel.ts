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
import { StudentRoadMapModel } from '../../../../RoadMap/Infraestructure/Persistence/sequelize/StudentRoadMapModel';
import { StudyMethodsModel } from '../../../../StudyMethods/Infraestructure/Persistence/sequelize/StudyMethodsModel';
import { ThemeModel } from '../../../../Theme/Infraestructure/sequelize/ThemeModel';
@Table({
  tableName: 'theme_study_methods_detail',
})
export class ThemeStudyMethodsModel extends Model<ThemeStudyMethodsModel> {
  @Column({
    field: 'id',
    type: DataType.UUID,
    allowNull: true,
    primaryKey: true,
  })
  public id: string;

  @ForeignKey(() => ThemeModel)
  @Column({
    field: 'theme_id',
    type: DataType.UUID,
    allowNull: true,
  })
  themeId: string;

  @ForeignKey(() => StudyMethodsModel)
  @Column({
    field: 'study_method_id',
    type: DataType.UUID,
    allowNull: true,
  })
  studyMethodId: string;

  @Column({
    field: 'content_class',
    type: DataType.JSON,
    allowNull: true,
  })
  contentClass: any;

  @BelongsTo(() => ThemeModel)
  theme: ThemeModel;

  @BelongsTo(() => StudyMethodsModel)
  studyMethod: StudyMethodsModel;

  @HasMany(() => StudentRoadMapModel)
  studentRoadmaps: StudentRoadMapModel[];

  @CreatedAt public createdAt: Date;

  @UpdatedAt public updatedAt: Date;

  @DeletedAt public deletedAt: Date;
}
