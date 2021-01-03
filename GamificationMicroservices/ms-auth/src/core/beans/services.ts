import { beans } from ".";
import { CreateStudentClassroomByCourse } from "../../modules/Classroom/Aplication/CreateStudentClassroomByCourse/CreateStudentClassroomByCourse";
import { GetCoursesByStudent } from "../../modules/Course/Application/GetCoursesByStudent";
import { SignInExternalPersonService } from "../../modules/ExternalPerson/Application/SignInExternalPerson/SignInExternalPersonService";
import { SignUpExternalPersonService } from "../../modules/ExternalPerson/Application/SignUpExternalPerson/SignUpExternalPerson";
import { GetSpecializationsService } from "../../modules/Specialization/Application/GetSpecializations/GetSpecializationsService";
import { GetStudentByEmail } from "../../modules/Student/Application/GetStudentByEmail";
import { SignInStudentService } from "../../modules/Student/Application/SignInStudent/SignInStudentService";
import { SignUpStudentService } from "../../modules/Student/Application/SignUpStudent/SignUpStudentService";
import { SignInTutorService } from "../../modules/Tutor/Application/SignInTutor/SignInTutorService";
import { SignUpTutorService } from "../../modules/Tutor/Application/SignUpTutor/SignUpTutorService";
import { SignUpUserService } from "../../modules/User/Application/useCases/SignUpUser/SignUpUserService";
import { AuthMiddleware } from "../middlewares/authMiddleware";

const injectServices = () => {
    beans.bind<GetCoursesByStudent>(GetCoursesByStudent).toSelf();
    beans.bind<GetStudentByEmail>(GetStudentByEmail).toSelf();
    beans.bind<AuthMiddleware>(AuthMiddleware).toSelf();
    beans.bind<GetSpecializationsService>(GetSpecializationsService).toSelf();
    beans.bind<SignUpUserService>(SignUpUserService).toSelf();
    beans.bind<SignUpStudentService>(SignUpStudentService).toSelf();
    beans.bind<SignUpTutorService>(SignUpTutorService).toSelf();
    beans.bind<SignUpExternalPersonService>(SignUpExternalPersonService).toSelf();
    beans.bind<SignInStudentService>(SignInStudentService).toSelf();
    beans.bind<SignInTutorService>(SignInTutorService).toSelf();
    beans.bind<SignInExternalPersonService>(SignInExternalPersonService).toSelf();
    beans.bind<CreateStudentClassroomByCourse>(CreateStudentClassroomByCourse).toSelf();
}

export { injectServices }