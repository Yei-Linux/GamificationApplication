import { Model, DataTypes, Association } from "sequelize";
import { uuid } from "uuidv4";
import { beans, Database } from "../../../core/beans";
import DEPENDENCY_TYPES from "../../../core/beans/ioc-types";
import CourseModel from "../../../modules/Course/Infraestructure/Persistence/CourseModel";
import ExternalPersonModel from "../../../modules/ExternalPerson/Infraestucture/Persistence/ExternalPersonModel";
import StudentModel from "../../../modules/Student/Infraestructure/Persistence/StudentModel";
const dbInstance = beans.get<Database>(DEPENDENCY_TYPES.Sequelize);
const { sequelize } = dbInstance;

export default class LanguageProgrammingModel extends Model {
  public languageProgrammingId: string;
  public LanguageProgrammingName: string;
  public LanguageProgrammingDescription: string;
  public readonly students?: StudentModel[];
  public readonly externalPersons?: ExternalPersonModel[];
  public readonly courses?: CourseModel[];
  public static associations: {
    students: Association<LanguageProgrammingModel, StudentModel>;
    externalPersons: Association<LanguageProgrammingModel, ExternalPersonModel>;
    courses: Association<LanguageProgrammingModel, CourseModel>;
  };
}

export const initializingLanguageProgrammingModel = () => {
  LanguageProgrammingModel.init(
    {
      languageProgrammingId: {
        field: "id",
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
      languageProgrammingName: {
        field: "language_prog_name",
        type: DataTypes.STRING(100),
        allowNull: false,
        primaryKey: false,
        validate: {
          notEmpty: true,
        },
      },
      LanguageProgrammingDescription: {
        field: "language_prog_description",
        type: DataTypes.STRING(100),
        allowNull: false,
        primaryKey: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      tableName: "languages_programming",
      timestamps: true,
      hooks: {
        beforeCreate: (model,options) => {
          model.languageProgrammingId = uuid();
        }
      }
    }
  );
}

export const associateLanguageProgramming = (): void => {
  LanguageProgrammingModel.hasMany(StudentModel, {
    foreignKey: "languageProgrammingId",
    as: "students",
  });
  LanguageProgrammingModel.hasMany(ExternalPersonModel, {
    foreignKey: "languageProgrammingId",
    as: "externalPersons",
  });
  LanguageProgrammingModel.hasMany(CourseModel, {
    foreignKey: "languageProgrammingId",
    as: "courses",
  });
};
