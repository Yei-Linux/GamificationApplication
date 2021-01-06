import { AxiosResponse } from "axios";
import { axiosClassMicroservice } from "../config/axios";
import { PostRoadMapStudentRequest, RoadMapRequest, RoadMapResponse } from "../models/roadmap";

export const getRoadMapByStudent = async (roadMapRequest : RoadMapRequest) : Promise<RoadMapResponse[]> => {
    let response : AxiosResponse = await axiosClassMicroservice.get("roadmap/student",{params: roadMapRequest});
    return response.data.data;
}

export const insertRoadMapStudent = async (roadMapStudentRequest : PostRoadMapStudentRequest) =>{
    let response : AxiosResponse = await axiosClassMicroservice.post("roadmap/student",roadMapStudentRequest);
    return response;
}