import { Container } from 'inversify';
import { CreateStudentClassroomByCourse } from '../../modules/Classroom/Aplication/CreateStudentClassroomByCourse/CreateStudentClassroomByCourse';
import { GetCoursesByStudent } from '../../modules/Course/Application/GetCoursesByStudent';
import { SignInExternalPersonService } from '../../modules/ExternalPerson/Application/SignInExternalPerson/SignInExternalPersonService';
import { SignUpExternalPersonService } from '../../modules/ExternalPerson/Application/SignUpExternalPerson/SignUpExternalPerson';
import { GetSpecializationsService } from '../../modules/Specialization/Application/GetSpecializations/GetSpecializationsService';
import { GetStudentByEmail } from '../../modules/Student/Application/GetStudentByEmail';
import { SignInStudentService } from '../../modules/Student/Application/SignInStudent/SignInStudentService';
import { SignUpStudentService } from '../../modules/Student/Application/SignUpStudent/SignUpStudentService';
import { SignInTutorService } from '../../modules/Tutor/Application/SignInTutor/SignInTutorService';
import { SignUpTutorService } from '../../modules/Tutor/Application/SignUpTutor/SignUpTutorService';
import { SignUpUserService } from '../../modules/User/Application/useCases/SignUpUser/SignUpUserService';
import { AuthMiddleware } from '../middlewares/authMiddleware';
import Database from '../util/Database';
import { Logger } from '../util/Logger';
import DEPENDENCY_TYPES from './ioc-types';

const beans = new Container();

beans.bind<Database>(DEPENDENCY_TYPES.Sequelize).to(Database).inSingletonScope();
beans.bind<Logger>(DEPENDENCY_TYPES.Logger).to(Logger).inSingletonScope();

export { beans, Logger, Database };