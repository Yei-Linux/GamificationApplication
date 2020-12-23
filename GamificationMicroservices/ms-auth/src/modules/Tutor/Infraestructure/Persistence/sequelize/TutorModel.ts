import { Model, DataTypes, Association } from "sequelize";
import { uuid } from "uuidv4";
import { beans, Database } from "../../../../../core/beans";
import DEPENDENCY_TYPES from "../../../../../core/beans/ioc-types";
import PersonModel from "../../../../../shared/infraestructure/Persistence/PersonModel";
import CollegeModel from "../../../../College/Infraestructure/Persistence/CollegeModel";
import CourseModel from "../../../../Course/Infraestructure/Persistence/CourseModel";
const dbInstance = beans.get<Database>(DEPENDENCY_TYPES.Sequelize);
const { sequelize } = dbInstance;

export default class TutorModel extends Model {
  public tutorId: string;
  public tutorCode: string;
  public collegeId: string;
  public personId: string;
  public readonly person?: PersonModel;
  public readonly college?: CollegeModel;
  public readonly courses?: CourseModel[];
  public static associations: {
    person: Association<TutorModel, PersonModel>;
    college: Association<TutorModel, CollegeModel>;
    courses: Association<TutorModel, CourseModel>;
  };
}

export const initializingTutorModel = () => {
  TutorModel.init(
    {
      tutorId: {
        field: "id",
        type: DataTypes.UUID,
        allowNull: true,
        primaryKey: true,
      },
      tutorCode: {
        field: "tutor_code",
        type: DataTypes.STRING(8),
        allowNull: false,
        primaryKey: false,
        validate: {
          notEmpty: true,
        },
      },
      collegeId: {
        field: "college_id",
        type: DataTypes.UUID,
        allowNull: false
      },
      personId: {
        field: "person_id",
        type: DataTypes.UUID,
        allowNull: false
      },
    },
    {
      sequelize,
      tableName: "tutors",
      timestamps: true,
      hooks: {
        beforeCreate: (model,options) => {
          model.tutorId = uuid();
        }
      }
    }
  );
}

export const associateTutor = (): void => {
  TutorModel.belongsTo(PersonModel, { foreignKey: "personId", targetKey: "personId" });
  TutorModel.belongsTo(CollegeModel, { foreignKey: "collegeId", targetKey: "collegeId" });
  TutorModel.hasMany(CourseModel, {
    foreignKey: "tutorId",
    as: "courses"
  });
};
