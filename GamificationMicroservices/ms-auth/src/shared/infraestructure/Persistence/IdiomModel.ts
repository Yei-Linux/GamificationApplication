import { Model, DataTypes, Association } from "sequelize";
import { uuid } from "uuidv4";
import { beans, Database } from "../../../core/beans";
import DEPENDENCY_TYPES from "../../../core/beans/ioc-types";
import PersonModel from "./PersonModel";
const dbInstance = beans.get<Database>(DEPENDENCY_TYPES.Sequelize);
const { sequelize } = dbInstance;

export default class IdiomModel extends Model {
  public idiomId: string;
  public idiomName: string;
  public readonly persons?: PersonModel[];
  public static associations: {
    persons: Association<IdiomModel, PersonModel>;
  };
}

export const initializingIdiomModel = () => {
  IdiomModel.init(
    {
      idiomId: {
        field: "id",
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        validate: {
          notEmpty: true,
        },
      },
      idiomName: {
        field: "idiom_name",
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
      tableName: "idioms",
      timestamps: true,
      hooks: {
        beforeCreate: (model,options) => {
          model.idiomId = uuid();
        }
      }
    }
  );
}

export const associateIdiom = (): void => {
  IdiomModel.hasMany(PersonModel, {
    foreignKey: "idiomId",
    as: "persons",
  });
};
