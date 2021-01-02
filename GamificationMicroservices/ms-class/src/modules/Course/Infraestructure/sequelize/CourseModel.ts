import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  HasMany,
} from 'sequelize-typescript';
import { ThemeModel } from '../../../Theme/Infraestructure/sequelize/ThemeModel';

@Table({
  tableName: 'courses',
})
export class CourseModel extends Model<CourseModel> {
  @Column({
    field: 'id',
    type: DataType.UUID,
    allowNull: true,
    primaryKey: true,
  })
  public id: string;

  @Column({
    field: 'course_name',
    type: DataType.STRING(100),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  name: string;

  @Column({
    field: 'semester',
    type: DataType.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  semester: number;

  @Column({
    field: 'tutor_id',
    type: DataType.UUID,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  tutorId: string;

  @Column({
    field: 'language_programming_id',
    type: DataType.UUID,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  languageProgrammingId: string;

  @HasMany(() => ThemeModel)
  themes: ThemeModel[];

  @CreatedAt public createdAt: Date;

  @UpdatedAt public updatedAt: Date;

  @DeletedAt public deletedAt: Date;
}
