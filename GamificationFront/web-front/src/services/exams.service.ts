import { AxiosResponse } from "axios"
import { axiosPracticeMicroservice } from "../config/axios"
import { GetCourseByStudentResponse } from "../models/courses";
import { GetExamRequest, PostStudentAnswersOfExamRequest } from "../models/exams";

export const insertAnswerStudentOfExam = async ( answersStudent: PostStudentAnswersOfExamRequest ) : Promise<any> => {
    let response : AxiosResponse = await axiosPracticeMicroservice.post("exams/answersStudent",answersStudent);
    return response;
}

export const getQuestionsExam = async (queryExamFilter : GetExamRequest) : Promise<any> => {
    let response : AxiosResponse = await axiosPracticeMicroservice.get("exams/findByFilter",{params: queryExamFilter});
    return response.data.data;
}