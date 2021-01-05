import { beans } from ".";
import { PostgressClassroomRepository } from "../../modules/Classroom/Infraestructure/PostgressClassRoomRepository";
import { PostgressCourseRepository } from "../../modules/Course/Infraestructure/Persistence/PostgressCourseRepository";
import { PostgressExternalPersonRepository } from "../../modules/ExternalPerson/Infraestucture/Persistence/PostgressExternalPersonRepository";
import { PostgressSpecializationRepository } from "../../modules/Specialization/Infraestructure/Persistence/PostgressSpecializationRepository";
import { PostgressStudentRepository } from "../../modules/Student/Infraestructure/Persistence/PostgressStudentRepository";
import { PostgressTutorRepository } from "../../modules/Tutor/Infraestructure/Persistence/PostgressTutorRepository";
import { PostgressUserRepository } from "../../modules/User/Infraestructure/Persistence/PostgressUserRepository";

const injectRepositories = () =>{
    beans.bind<PostgressClassroomRepository>(PostgressClassroomRepository).toSelf();
    beans.bind<PostgressCourseRepository>(PostgressCourseRepository).toSelf();
    beans.bind<PostgressExternalPersonRepository>(PostgressExternalPersonRepository).toSelf();
    beans.bind<PostgressSpecializationRepository>(PostgressSpecializationRepository).toSelf();
    beans.bind<PostgressStudentRepository>(PostgressStudentRepository).toSelf();
    beans.bind<PostgressTutorRepository>(PostgressTutorRepository).toSelf();
    beans.bind<PostgressUserRepository>(PostgressUserRepository).toSelf();
}

export { injectRepositories }