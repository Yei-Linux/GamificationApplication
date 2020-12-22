import { Model, DataTypes, Association } from "sequelize";
import { uuid } from "uuidv4";
import { beans, Database } from "../../../core/beans";
import DEPENDENCY_TYPES from "../../../core/beans/ioc-types";
import CourseModel from "../../../modules/Course/Infraestructure/Persistence/CourseModel";
import StudentModel from "../../../modules/Student/Infraestructure/Persistence/sequelize/StudentModel";
const dbInstance = beans.get<Database>(DEPENDENCY_TYPES.Sequelize);
const { sequelize } = dbInstance;

export default class EnvironmentStudentCourseModel extends Model {
  public environmentStudentCourseId: string;
  public courseId: string;
  public studentId: string;
  public readonly course?: CourseModel;
  public readonly student?: StudentModel;
  public static associations: {
    course: Association<EnvironmentStudentCourseModel, CourseModel>;
    student: Association<EnvironmentStudentCourseModel, StudentModel>;
  };
}

export const initializingEnvironmentStudentCourseModel = () => {
  EnvironmentStudentCourseModel.init(
    {
      environmentStudentCourseId: {
        field: "id",
        type: DataTypes.UUID,
        allowNull: true,
        primaryKey: true,
      },
      courseId: {
        field: "course_id",
        type: DataTypes.UUID,
        allowNull: false
      },
      studentId: {
        field: "student_id",
        type: DataTypes.UUID,
        allowNull: false
      },
    },
    {
      sequelize,
      tableName: "environment_student_courses",
      timestamps: true,
      hooks: {
        beforeCreate: (model,options) => {
          model.environmentStudentCourseId = uuid();
        }
      }
    }
  );
}

export const associateEnvironmentStudentCourse= (): void => {
    EnvironmentStudentCourseModel.belongsTo(CourseModel, { foreignKey: "courseId", targetKey: "courseId" });
    EnvironmentStudentCourseModel.belongsTo(StudentModel, { foreignKey: "studentId", targetKey: "studentId" });
};
