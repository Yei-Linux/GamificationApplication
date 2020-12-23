import { Model, DataTypes, Association } from "sequelize";
import { uuid } from "uuidv4";
import { beans, Database } from "../../../../core/beans";
import DEPENDENCY_TYPES from "../../../../core/beans/ioc-types";
import EnvironmentStudentCourseModel from "../../../../shared/infraestructure/Persistence/EnvironmentStudentCourseModel";
import LanguageProgrammingModel from "../../../../shared/infraestructure/Persistence/LanguageProgrammingModel";
import TutorModel from "../../../Tutor/Infraestructure/Persistence/sequelize/TutorModel";
const dbInstance = beans.get<Database>(DEPENDENCY_TYPES.Sequelize);

const { sequelize } = dbInstance;

export default class CourseModel extends Model {
  public courseId: string;
  public courseName: string;
  public semester: number;
  public tutorId: string;
  public languageProgrammingId: string;
  public readonly tutor?: TutorModel;
  public readonly languageProgramming?: LanguageProgrammingModel;
  public readonly environments?: EnvironmentStudentCourseModel;
  public static associations: {
    tutor: Association<CourseModel, TutorModel>;
    languageProgramming: Association<CourseModel, LanguageProgrammingModel>;
    environments: Association<CourseModel, EnvironmentStudentCourseModel>;
  };
}

export const initializingCourseModel = () => {
  CourseModel.init(
    {
      courseId: {
        field: "id",
        type: DataTypes.UUID,
        allowNull: true,
        primaryKey: true,
      },
      courseName: {
        field: "course_name",
        type: DataTypes.STRING(100),
        allowNull: false,
        primaryKey: false,
        validate: {
          notEmpty: true,
        },
      },
      tutorId: {
        field: "tutor_id",
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
      tableName: "courses",
      timestamps: true,
      hooks: {
        beforeCreate: (model,options) => {
          model.courseId = uuid();
        }
      }
    }
  );
}

export const associateCourse = (): void => {
  CourseModel.belongsTo(TutorModel, { foreignKey: "tutorId", targetKey: "tutorId" });
  CourseModel.belongsTo(LanguageProgrammingModel, { foreignKey: "languageProgrammingId", targetKey: "languageProgrammingId" });
  CourseModel.hasMany(EnvironmentStudentCourseModel, {
    foreignKey: "courseId",
    as: "environments",
  });
};
