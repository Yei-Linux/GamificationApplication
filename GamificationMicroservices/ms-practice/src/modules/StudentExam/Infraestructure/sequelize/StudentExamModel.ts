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
import { StudentExamModule } from '../../studentExam.module';
import { StudentAnswerModel } from './StudentAnswerModel';

  @Table({
    tableName: 'student_exams',
  })
  export class StudentExamModel extends Model<StudentExamModel> {
    @Column({
      field: 'id',
      type: DataType.UUID,
      allowNull: true,
      primaryKey: true,
    })
    public id: string;

    @Column({
      field: 'user_email',
      type: DataType.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    })
    userEmail: string;

    @Column({
        field: 'retry',
        type: DataType.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
    })
    retry: number;

    @HasMany(() => StudentAnswerModel)
    studentAnswers: StudentAnswerModel[];

    @BeforeCreate
    static addUUID(instance: StudentExamModel) {
      instance.id = uuid();
    }

    @CreatedAt public createdAt: Date;

    @UpdatedAt public updatedAt: Date;

    @DeletedAt public deletedAt: Date;
  }
