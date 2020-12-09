import { Model, DataTypes, Association } from "sequelize";
import { uuid } from "uuidv4";
import { beans, Database } from "../../../../core/beans";
import DEPENDENCY_TYPES from "../../../../core/beans/ioc-types";
import EnvironmentStudentCourseModel from "../../../../shared/infraestructure/Persistence/EnvironmentStudentCourseModel";
import LanguageProgrammingModel from "../../../../shared/infraestructure/Persistence/LanguageProgrammingModel";
import PersonModel from "../../../../shared/infraestructure/Persistence/PersonModel";
const dbInstance = beans.get<Database>(DEPENDENCY_TYPES.Sequelize);
const { sequelize } = dbInstance;

export default class StudentModel extends Model {
  public studentId: string;
  public studentCode: string;
  public personId: string;
  public languageProgrammingId: string;
  public readonly person?: PersonModel;
  public readonly language?: LanguageProgrammingModel;
  public readonly environments?: EnvironmentStudentCourseModel;
  public static associations: {
    person: Association<StudentModel, PersonModel>;
    language: Association<StudentModel, LanguageProgrammingModel>;
    environments: Association<StudentModel, EnvironmentStudentCourseModel>;
  };
}

export const initializingStudentModel = () => {
  StudentModel.init(
    {
      studentId: {
        field: "id",
        type: DataTypes.UUID,
        allowNull: true,
        primaryKey: true,
      },
      studentCode: {
        field: "student_code",
        type: DataTypes.STRING(8),
        allowNull: false,
        primaryKey: false,
        validate: {
          notEmpty: true,
        },
      },
      personId: {
        field: "person_id",
        type: DataTypes.UUID,
        allowNull: false
      },
      languageProgrammingId: {
        field: "language_programming_id",
        type: DataTypes.UUID,
        allowNull: false
      },
    },
    {
      sequelize,
      tableName: "students",
      timestamps: true,
      hooks: {
        beforeCreate: (model,options) => {
          model.studentId = uuid();
        }
      }
    }
  );
}

export const associateStudent = (): void => {
  StudentModel.belongsTo(PersonModel, { foreignKey: "personId", targetKey: "personId" });
  StudentModel.belongsTo(LanguageProgrammingModel, { foreignKey: "languageProgrammingId", targetKey: "languageProgrammingId"  });
  StudentModel.hasMany(EnvironmentStudentCourseModel, {
    foreignKey: "studentId",
    as: "environments",
  });
};
