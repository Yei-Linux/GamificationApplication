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
import { ThemeStudyMethodsModel } from '../../../../../shared/infraestructure/sequelize/ThemeStudyMethodsModel';
@Table({
  tableName: 'students_roadmap',
})
export class StudentRoadMapModel extends Model<StudentRoadMapModel> {
  @Column({
    field: 'id',
    type: DataType.UUID,
    allowNull: true,
    primaryKey: true,
  })
  public id: string;

  @Column({
    field: 'user_email',
    type: DataType.STRING(200),
    allowNull: true,
  })
  userEmail: string;

  @ForeignKey(() => ThemeStudyMethodsModel)
  @Column({
    field: 'theme_study_methods_id',
    type: DataType.UUID,
    allowNull: true,
  })
  themeStudyMehodsId: string;

  @Column({
    field: 'order',
    type: DataType.INTEGER,
    allowNull: true,
  })
  order: number;

  @Column({
    field: 'was_view',
    type: DataType.BOOLEAN,
    allowNull: true,
  })
  wasView: boolean;

  @BelongsTo(() => ThemeStudyMethodsModel)
  themeStudyMethod: ThemeStudyMethodsModel;

  @CreatedAt public createdAt: Date;

  @UpdatedAt public updatedAt: Date;

  @DeletedAt public deletedAt: Date;
}
