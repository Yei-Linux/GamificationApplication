import { AxiosResponse } from "axios"
import { axiosAuthMicroservice } from "../config/axios"
import { GetCourseByStudentResponse } from "../models/courses";

export const getCoursesByStudent = async () : Promise<GetCourseByStudentResponse[]> => {
    let response : AxiosResponse = await axiosAuthMicroservice.get("courses/student");
    return response.data.data;
}