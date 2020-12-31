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
import { ExamModel } from '../../../Exam/Infraestructure/Persistence/sequelize/ExamModel';
  @Table({
    tableName: 'levels',
  })
  export class LevelModel extends Model<LevelModel> {
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
      field: 'image_url',
      type: DataType.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    })
    imageUrl: string;

    @HasMany(() => ExamModel)
    exams: ExamModel[];

    @CreatedAt public createdAt: Date;

    @UpdatedAt public updatedAt: Date;

    @DeletedAt public deletedAt: Date;
  }
