import { Container } from 'inversify';
import Database from '../util/Database';
import { Logger } from '../util/Logger';
import DEPENDENCY_TYPES from './ioc-types';

const beans = new Container();

beans.bind<Database>(DEPENDENCY_TYPES.Sequelize).to(Database).inSingletonScope();
beans.bind<Logger>(DEPENDENCY_TYPES.Logger).to(Logger).inSingletonScope();

export { beans, Logger, Database };