import axios from 'axios';

const axiosPracticeMicroservice = axios.create({
    baseURL: 'http://localhost:3002/'
});

const axiosClassMicroservice = axios.create({
    baseURL: 'http://localhost:3001/'
});

axiosPracticeMicroservice.interceptors.request.use((config : any)=>{
    config.headers.Authorization = `Bearer ${localStorage.getItem('user_info')}`
    return config;
},(error)=>{
    return Promise.reject(error);
});

axiosClassMicroservice.interceptors.request.use((config : any)=>{
    config.headers.Authorization = `Bearer ${localStorage.getItem('user_info')}`
    return config;
},(error)=>{
    return Promise.reject(error);
});

export { axiosPracticeMicroservice, axiosClassMicroservice }