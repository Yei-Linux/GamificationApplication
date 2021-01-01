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
import { ThemeStudyMethodsModel } from '../../../../shared/infraestructure/sequelize/ThemeStudyMethodsModel';
import { CourseModel } from '../../../Course/Infraestructure/sequelize/CourseModel';

  @Table({
    tableName: 'themes',
  })
  export class ThemeModel extends Model<ThemeModel> {
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

    @ForeignKey(() => CourseModel)
    @Column({
      field: 'course_id',
      type: DataType.UUID,
      allowNull: true,
    })
    courseId: string;

    @BelongsTo(() => CourseModel)
    course: CourseModel;

    @HasMany(() => ThemeStudyMethodsModel)
    themesStudyMethod: ThemeStudyMethodsModel[];

    @CreatedAt public createdAt: Date;

    @UpdatedAt public updatedAt: Date;

    @DeletedAt public deletedAt: Date;
  }
