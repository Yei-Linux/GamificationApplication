import { Model, DataTypes, Association } from "sequelize";
import { uuid } from "uuidv4";
import { beans, Database } from "../../../../../core/beans";
import DEPENDENCY_TYPES from "../../../../../core/beans/ioc-types";
import PersonModel from "../../../../../shared/infraestructure/Persistence/PersonModel";
const dbInstance = beans.get<Database>(DEPENDENCY_TYPES.Sequelize);
const { sequelize } = dbInstance;

export default class SpecializationModel extends Model {
  public specializationId: string;
  public specializationName: string;
  public specializationDescription: string;
  public readonly persons?: PersonModel[];
  public static associations: {
    persons: Association<SpecializationModel, PersonModel>;
  };
}

export const initializingSpecializationModel = () => {
  SpecializationModel.init(
    {
      specializationId: {
        field: "id",
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        validate: {
          notEmpty: true,
        },
      },
      specializationName: {
        field: "specialization_name",
        type: DataTypes.STRING(100),
        allowNull: false,
        primaryKey: false,
        validate: {
          notEmpty: true,
        },
      },
      specializationDescription: {
        field: "specialization_description",
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
      tableName: "specializations",
      timestamps: true,
      hooks: {
        beforeCreate: (model,options) => {
          model.specializationId = uuid();
        }
      }
    }
  );
}

export const associateSpecialization= (): void => {
  SpecializationModel.hasMany(PersonModel, {
    foreignKey: "specializationId",
    as: "persons",
  });
};
