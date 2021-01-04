import { AxiosResponse } from "axios";
import { axiosClassMicroservice } from "../config/axios";
import { RoadMapRequest, RoadMapResponse } from "../models/roadmap";

export const getRoadMapByStudent = async (roadMapRequest : RoadMapRequest) : Promise<RoadMapResponse[]> => {
    let response : AxiosResponse = await axiosClassMicroservice.get("/roadmap/student",{data: {roadMapRequest}});
    return response.data;
}