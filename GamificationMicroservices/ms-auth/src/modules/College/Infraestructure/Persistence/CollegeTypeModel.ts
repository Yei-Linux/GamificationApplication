import { Model, DataTypes, Association } from "sequelize";
import { uuid } from "uuidv4";
import { beans, Database } from "../../../../core/beans";
import DEPENDENCY_TYPES from "../../../../core/beans/ioc-types";
import CollegeModel from "./CollegeModel";
const dbInstance = beans.get<Database>(DEPENDENCY_TYPES.Sequelize);
const { sequelize } = dbInstance;

export default class CollegeTypeModel extends Model {
  public collegeTypeId: string;
  public collegeTypeName: string;
  public readonly colleges?: CollegeModel[];
  public static associations: {
      colleges: Association<CollegeTypeModel,CollegeModel>
  }
}

export const initializingCollegeTypeModel = () => {
  CollegeTypeModel.init(
    {
      collegeTypeId: {
        field: "id",
        type: DataTypes.UUID,
        allowNull: true,
        primaryKey: true,
      },
      collegeTypeName: {
        field: "college_type_name",
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: false,
      }
    },
    {
      sequelize,
      tableName: "college_types",
      timestamps: true,
      hooks: {
        beforeCreate: (model,options) => {
          model.collegeTypeId = uuid();
        }
      }
    }
  );
}

export const associateCollegeType = (): void => {
    CollegeTypeModel.hasMany(CollegeModel, {
        foreignKey: "collegeTypeId",
        as: "colleges"
    });
};
