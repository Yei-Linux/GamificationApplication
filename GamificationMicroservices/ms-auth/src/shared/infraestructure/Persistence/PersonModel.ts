import { Model, DataTypes, Association } from "sequelize";
import { uuid } from "uuidv4";
import { beans, Database } from "../../../core/beans";
import DEPENDENCY_TYPES from "../../../core/beans/ioc-types";
import ExternalPersonModel from "../../../modules/ExternalPerson/Infraestucture/Persistence/sequelize/ExternalPersonModel";
import SpecializationModel from "../../../modules/Specialization/Infraestructure/Persistence/SpecializationModel";
import StudentModel from "../../../modules/Student/Infraestructure/Persistence/sequelize/StudentModel";
import TutorModel from "../../../modules/Tutor/Infraestructure/Persistence/sequelize/TutorModel";
import  UserModel from "../../../modules/User/Infraestructure/Persistence/sequelize/UserModel";
import IdiomModel from "./IdiomModel";
const dbInstance = beans.get<Database>(DEPENDENCY_TYPES.Sequelize);
const { sequelize } = dbInstance;

export default class PersonModel extends Model {
  public personId: string;
  public fullName: string;
  public lastName: string;
  public surName: string;
  public age: number;
  public userId: string;
  public idiomId: string;
  public specializationId: string;
  public readonly user?: UserModel;
  public readonly idiom?: IdiomModel;
  public readonly specializations?: IdiomModel;
  public readonly externalPerson?: ExternalPersonModel;
  public readonly student?: StudentModel;
  public readonly tutor?: TutorModel;
  public static associations: {
    user: Association<PersonModel, UserModel>;
    idiom: Association<PersonModel, IdiomModel>;
    specializations: Association<PersonModel, SpecializationModel>;
    externalPerson: Association<PersonModel, ExternalPersonModel>;
    student: Association<PersonModel, StudentModel>;
    tutor: Association<PersonModel, TutorModel>;
  };
}

export const initializingPersonModel = () => {
  PersonModel.init(
    {
      personId: {
        field: "id",
        type: DataTypes.UUID,
        allowNull: true,
        primaryKey: true,
      },
      fullName: {
        field: "full_name",
        type: DataTypes.STRING(100),
        allowNull: false,
        primaryKey: false,
        validate: {
          notEmpty: true,
        },
      },
      lastName: {
        field: "last_name",
        type: DataTypes.STRING(100),
        allowNull: false,
        primaryKey: false,
        validate: {
          notEmpty: true,
        },
      },
      surName: {
        field: "sur_name",
        type: DataTypes.STRING(100),
        allowNull: false,
        primaryKey: false,
        validate: {
          notEmpty: true,
        },
      },
      age: {
        field: "age",
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      userId: {
        field: "user_id",
        type: DataTypes.UUID,
        allowNull: false
      },
      idiomId: {
        field: "idiom_id",
        type: DataTypes.UUID,
        allowNull: false
      },
      specializationId: {
        field: "specialization_id",
        type: DataTypes.UUID,
        allowNull: false
      },
    },
    {
      sequelize,
      tableName: "persons",
      timestamps: true,
      hooks: {
        beforeCreate: (model,options) => {
          model.personId = uuid();
        }
      }
    }
  );
}

export const associatePerson = (): void => {
  PersonModel.belongsTo(UserModel, { foreignKey: "userId", targetKey: "userId" });
  PersonModel.belongsTo(IdiomModel, { foreignKey: "idiomId", targetKey: "idiomId" });
  PersonModel.belongsTo(SpecializationModel, { foreignKey: "specializationId", targetKey: "specializationId" });
  PersonModel.hasOne(ExternalPersonModel, {
    foreignKey: "personId",
    as: "externalPerson"
  });
  PersonModel.hasOne(StudentModel, {
    foreignKey: "personId",
    as: "student"
  });
  PersonModel.hasOne(TutorModel, {
    foreignKey: "personId",
    as: "tutor"
  });
};
