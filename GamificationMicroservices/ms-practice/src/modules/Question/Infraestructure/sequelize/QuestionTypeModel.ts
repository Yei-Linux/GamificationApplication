import {
    Table,
    Column,
    Model,
    DataType,
    CreatedAt,
    UpdatedAt,
    DeletedAt,
    HasMany,
    BeforeCreate,
  } from 'sequelize-typescript';
import { uuid } from 'uuidv4';
import { QuestionModel } from './QuestionModel';

  @Table({
    tableName: 'question_types',
  })
  export class QuestionTypeModel extends Model<QuestionTypeModel> {
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

    @HasMany(() => QuestionModel)
    questions: QuestionModel[];

    @BeforeCreate
    static addUUID(instance: QuestionTypeModel) {
      instance.id = uuid();
    }

    @CreatedAt public createdAt: Date;

    @UpdatedAt public updatedAt: Date;

    @DeletedAt public deletedAt: Date;
  }
