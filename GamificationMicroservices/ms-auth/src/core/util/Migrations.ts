'use strict';

import { associateCollegeModel, initializingCollegeModel } from "../../modules/College/Infraestructure/Persistence/CollegeModel";
import { associateCollegeType, initializingCollegeTypeModel } from "../../modules/College/Infraestructure/Persistence/CollegeTypeModel";
import { associateCourse, initializingCourseModel } from "../../modules/Course/Infraestructure/Persistence/CourseModel";
import { associateExternalPerson, initializingExternalPersonModel } from "../../modules/ExternalPerson/Infraestucture/Persistence/ExternalPersonModel";
import { associateSpecialization, initializingSpecializationModel } from "../../modules/Specialization/Infraestructure/Persistence/SpecializationModel";
import { associateStudent, initializingStudentModel } from "../../modules/Student/Infraestructure/Persistence/sequelize/StudentModel";
import { associateTutor, initializingTutorModel } from "../../modules/Tutor/Infraestructure/Persistence/TutorModel";
import { associateUser, initializingUserModel } from "../../modules/User/Infraestructure/Persistence/sequelize/UserModel";
import { associateUserType, initializingUserTypeModel, } from "../../modules/User/Infraestructure/Persistence/sequelize/UserTypeModel";
import { associateEnvironmentStudentCourse, initializingEnvironmentStudentCourseModel } from "../../shared/infraestructure/Persistence/EnvironmentStudentCourseModel";
import { associateIdiom, initializingIdiomModel } from "../../shared/infraestructure/Persistence/IdiomModel";
import { associateLanguageProgramming, initializingLanguageProgrammingModel } from "../../shared/infraestructure/Persistence/LanguageProgrammingModel";
import { associatePerson, initializingPersonModel } from "../../shared/infraestructure/Persistence/PersonModel";
import { beans, Database } from "../beans";
import DEPENDENCY_TYPES from "../beans/ioc-types";

const initializingSchemas = () => {
    initializingUserTypeModel();
    initializingUserModel();
    initializingCollegeModel();
    initializingCollegeTypeModel();
    initializingCourseModel();
    initializingExternalPersonModel();
    initializingSpecializationModel();
    initializingStudentModel();
    initializingTutorModel();
    initializingEnvironmentStudentCourseModel();
    initializingIdiomModel();
    initializingLanguageProgrammingModel();
    initializingPersonModel();
    const { sequelize }  = beans.get<Database>(DEPENDENCY_TYPES.Sequelize);
    sequelize.sync();
}

const creatingAssociations = () => {
    associateUserType();
    associateUser();
    associateCollegeModel();
    associateCollegeType();
    associateCourse();
    associateExternalPerson();
    associateSpecialization();
    associateStudent();
    associateTutor();
    associateEnvironmentStudentCourse();
    associateIdiom();
    associateLanguageProgramming();
    associatePerson();
}

export const runMigrations = () => {
    initializingSchemas();
    creatingAssociations();
}
