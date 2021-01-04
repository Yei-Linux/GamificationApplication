import { Model, DataTypes, Association } from "sequelize";
import { beans, Database } from "../../../../core/beans";
import DEPENDENCY_TYPES from "../../../../core/beans/ioc-types";
import TutorModel from "../../../Tutor/Infraestructure/Persistence/sequelize/TutorModel";
import CollegeTypeModel from "./CollegeTypeModel";
import { uuid } from "uuidv4";

const dbInstance = beans.get<Database>(DEPENDENCY_TYPES.Sequelize);
const { sequelize } = dbInstance;

export default class CollegeModel extends Model {
  public collegeId: string;
  public collegeName: string;
  public collegeDescription: string;
  public collegeTypeId: string;
  public readonly collegeType?: CollegeTypeModel;
  public readonly tutors?: TutorModel[];
  public static associations: {
    collegeType: Association<CollegeModel, CollegeTypeModel>;
    tutors: Association<CollegeModel, TutorModel>;
  };
}

export const initializingCollegeModel = () => {
  CollegeModel.init(
    {
      collegeId: {
        field: "id",
        type: DataTypes.UUID,
        allowNull: true,
        primaryKey: true
      },
      collegeName: {
        field: "college_name",
        type: DataTypes.STRING(100),
        allowNull: false,
        primaryKey: false,
        validate: {
          notEmpty: true,
        },
      },
      collegeDescription: {
        field: "college_description",
        type: DataTypes.STRING(100),
        allowNull: false,
        primaryKey: false,
        validate: {
          notEmpty: true,
        },
      },
      collegeTypeId: {
        field: "college_type_id",
        type: DataTypes.UUID,
        allowNull: false
      },
    },
    {
      sequelize,
      tableName: "colleges",
      timestamps: true,
      hooks: {
        beforeCreate: (model,options) => {
          model.collegeId = uuid();
        }
      }
    }
  );
}

export const associateCollegeModel = (): void => {
  CollegeModel.belongsTo(CollegeTypeModel, { foreignKey: "collegeTypeId", targetKey: "collegeTypeId" });
  CollegeModel.hasMany(TutorModel, {
      foreignKey: "collegeId",
      as: "tutors"
  });
};
