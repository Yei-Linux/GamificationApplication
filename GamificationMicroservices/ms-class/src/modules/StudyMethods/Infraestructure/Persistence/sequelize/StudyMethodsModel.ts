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
  tableName: 'study_methods',
})
export class StudyMethodsModel extends Model<StudyMethodsModel> {
  @Column({
    field: 'id',
    type: DataType.UUID,
    allowNull: true,
    primaryKey: true,
  })
  public id: string;

  @Column({
    field: 'name',
    type: DataType.STRING(200),
    allowNull: true
  })
  name: string;

  @Column({
    field: 'description',
    type: DataType.STRING(200),
    allowNull: true
  })
  description: string;

  @HasMany(() => ThemeStudyMethodsModel)
  themesStudyMethod: ThemeStudyMethodsModel[];

  @CreatedAt public createdAt: Date;

  @UpdatedAt public updatedAt: Date;

  @DeletedAt public deletedAt: Date;
}
