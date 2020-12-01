import { Container } from 'inversify';
import { Logger } from '../util/Logger';
import DEPENDENCY_TYPES from './dependencyTypes';

const beans = new Container();

beans.bind<Logger>(DEPENDENCY_TYPES.Logger).to(Logger).inSingletonScope();

export { beans, Logger };