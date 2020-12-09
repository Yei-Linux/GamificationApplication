import { Model, DataTypes, Association } from "sequelize";
import { uuid } from "uuidv4";
import { beans, Database } from "../../../../core/beans";
import DEPENDENCY_TYPES from "../../../../core/beans/ioc-types";
import PersonModel from "../../../../shared/infraestructure/Persistence/PersonModel";
import UserTypeModel from "./UserTypeModel";
const dbInstance = beans.get<Database>(DEPENDENCY_TYPES.Sequelize);
const { sequelize } = dbInstance;

export default class UserModel extends Model {
  public userId: string;
  public email: string;
  public password: string;
  public userTypeId: string;
  public readonly userType?: UserTypeModel;
  public readonly person?: PersonModel;
  public static associations: {
    userType: Association<UserModel, UserTypeModel>;
    person: Association<UserModel, PersonModel>;
  };
}

export const initializingUserModel = () => {
  UserModel.init(
    {
      userId: {
        field: "id",
        type: DataTypes.UUID,
        allowNull: true,
        primaryKey: true,
      },
      email: {
        field: "email",
        type: DataTypes.STRING(100),
        allowNull: false,
        primaryKey: false,
        validate: {
          notEmpty: true,
        },
      },
      password: {
        field: "password",
        type: DataTypes.STRING(200),
        allowNull: false,
        primaryKey: false,
        validate: {
          notEmpty: true,
        },
      },
      userTypeId: {
        field: "user_type_id",
        type: DataTypes.UUID,
        allowNull: false
      },
    },
    {
      sequelize,
      tableName: "users",
      timestamps: true,
      hooks: {
        beforeCreate: (model,options) => {
          model.userId = uuid();
        }
      }
    }
  );
}

export const associateUser = (): void => {
  UserModel.belongsTo(UserTypeModel, { foreignKey: "userTypeId", targetKey: "userTypeId" });
  UserModel.hasOne(PersonModel, {
    foreignKey: "userId",
    as: "person",
  });
};
