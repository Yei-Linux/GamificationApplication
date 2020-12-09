import 'reflect-metadata';
import { injectable } from 'inversify'
import * as Sequelize from 'sequelize'
import { database } from '../../config/database'
import { applicationSettings } from '../../config/application'

@injectable()
export default class Database {
  private db: Sequelize.Sequelize;

  constructor() {
    const { environment } = applicationSettings;
    const envOptions = database[environment];
    const dbDefaults = {
      logging: false
    };

    const databaseOptions = Object.assign({}, envOptions , dbDefaults);
    this.db = new Sequelize.Sequelize(databaseOptions);
  }

  get sequelize(): Sequelize.Sequelize {
    return this.db;
  }

  transaction() {
    return this.db.transaction();
  }
}