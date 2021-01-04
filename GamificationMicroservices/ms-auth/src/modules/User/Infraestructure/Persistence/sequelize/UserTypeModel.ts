import { Model, DataTypes, Association } from "sequelize";
import { uuid } from "uuidv4";
import { beans, Database } from "../../../../../core/beans";
import DEPENDENCY_TYPES from "../../../../../core/beans/ioc-types";
import  UserModel from "./UserModel";
const dbInstance = beans.get<Database>(DEPENDENCY_TYPES.Sequelize);
const { sequelize } = dbInstance;

export default class UserTypeModel extends Model {
  public userTypeId: string;
  public userTypeName: string;
  public readonly users?: UserModel[];
  public static associations: {
    users: Association<UserTypeModel, UserModel>;
  };
}

export const initializingUserTypeModel = () => {
  UserTypeModel.init(
    {
      userTypeId: {
        field: "id",
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        validate: {
          notEmpty: true,
        },
      },
      userTypeName: {
        field: "user_typename",
        type: DataTypes.STRING(20),
        allowNull: false,
        primaryKey: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      tableName: "user_types",
      timestamps: true,
      hooks: {
        beforeCreate: (model,options) => {
          model.userTypeId = uuid();
        }
      }
    }
  );
}

export const associateUserType = (): void => {
  UserTypeModel.hasMany(UserModel, {
    foreignKey: "userTypeId",
    as: "users",
  });
}
