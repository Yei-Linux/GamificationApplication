import axios from 'axios';
import { getLocalStorageItemValue } from '../helpers/managment-data.helper';

const TOKEN_TEST = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRW1haWwiOiJLYWlsZXkxNEBnbWFpbC5jb20iLCJmdWxsTmFtZSI6IkphZG9uIiwibGFzdE5hbWUiOiJIb2VnZXIiLCJzdXJOYW1lIjoiS2Fzc3Vsa2UiLCJpYXQiOjE2MDk3OTI3OTJ9.a2vjTGLdr0ghjaHLEPRsnPYnvarjwOl8GrEvMNA5NxI";

const axiosAuthMicroservice = axios.create({
    baseURL: 'http://localhost:3003/auth/'
});

const axiosPracticeMicroservice = axios.create({
    baseURL: 'http://localhost:3001/'
});

const axiosClassMicroservice = axios.create({
    baseURL: 'http://localhost:3002/'
});

axiosAuthMicroservice.interceptors.request.use((config : any)=>{
    config.headers.Authorization = `Bearer ${getLocalStorageItemValue("user_info")["token"]}`
    return config;
},(error)=>{
    return Promise.reject(error);
});

axiosPracticeMicroservice.interceptors.request.use((config : any)=>{
    config.headers.Authorization = `Bearer ${getLocalStorageItemValue("user_info")["token"]}`
    return config;
},(error)=>{
    return Promise.reject(error);
});

axiosClassMicroservice.interceptors.request.use((config : any)=>{
    config.headers.Authorization = `Bearer ${getLocalStorageItemValue("user_info")["token"]}`
    return config;
},(error)=>{
    return Promise.reject(error);
});

export { axiosPracticeMicroservice, axiosClassMicroservice, axiosAuthMicroservice}