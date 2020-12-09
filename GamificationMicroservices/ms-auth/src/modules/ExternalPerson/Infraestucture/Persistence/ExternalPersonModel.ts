import { Model, DataTypes, Association } from "sequelize";
import { uuid } from "uuidv4";
import { beans, Database } from "../../../../core/beans";
import DEPENDENCY_TYPES from "../../../../core/beans/ioc-types";
import LanguageProgrammingModel from "../../../../shared/infraestructure/Persistence/LanguageProgrammingModel";
import PersonModel from "../../../../shared/infraestructure/Persistence/PersonModel";
const dbInstance = beans.get<Database>(DEPENDENCY_TYPES.Sequelize);
const { sequelize } = dbInstance;

export default class ExternalPersonModel extends Model {
  public externalId: string;
  public personId: string;
  public languageProgrammingId: string;
  public readonly person?: PersonModel;
  public readonly language?: PersonModel;
  public static associations: {
    person: Association<ExternalPersonModel, PersonModel>;
    language: Association<ExternalPersonModel, LanguageProgrammingModel>;
  };
}

export const initializingExternalPersonModel = () => {
  ExternalPersonModel.init(
    {
      externalId: {
        field: "id",
        type: DataTypes.UUID,
        allowNull: true,
        primaryKey: true,
      },
      personId: {
        field: "person_id",
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
      tableName: "external_persons",
      timestamps: true,
      hooks: {
        beforeCreate: (model,options) => {
          model.externalId = uuid();
        }
      }
    }
  );
}

export const associateExternalPerson = (): void => {
  ExternalPersonModel.belongsTo(PersonModel, { foreignKey: "personId", targetKey: "personId"  });
  ExternalPersonModel.belongsTo(LanguageProgrammingModel, { foreignKey: "languageProgrammingId", targetKey: "languageProgrammingId" });
};
