import axios from 'axios'
import { commonrequest } from './ApiCall'

// baseURL: 'https://stack-overflow-api-9nep.onrender.com'
const base_URL = 'https://stack-overflow-api-9nep.onrender.com'
const API = axios.create({ baseURL: 'https://stack-overflow-api-9nep.onrender.com'})

API.interceptors.request.use((req) => {
    if(localStorage.getItem('Profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req;
})

export const sentOtpFunction = async(data)=>{
        return await commonrequest("POST",`${base_URL}/user/generateOTP`,data)
}
export const userVerify = async(data)=>{
    return await commonrequest("POST",`${base_URL}/user/verifyOTP`,data)
}

export const logIn = (authData) => API.post('/user/login', authData);
export const signUp = (authData) => API.post('/user/signup', authData);

// export const generate_OTP = (data) => API.post('/user/generateOTP', data);
// export const verify_OTP = (username,code) => API.get('/user/verifyOTP', { params : { username, code }});

export const postQuestion = (questionData) => API.post('/questions/Ask', questionData)
export const getAllQuestions = () => API.get('/questions/get');
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`)
export const voteQuestion = (id, value, userId) => API.patch(`/questions/vote/${id}`, { value, userId})

export const postAnswer = (id, noOfAnswers, answerBody, userAnswered, userId ) => API.patch(`/answer/post/${id}`, { noOfAnswers, answerBody, userAnswered, userId })
export const deleteAnswer = (id, answerId, noOfAnswers) => API.patch(`/answer/delete/${id}`, { answerId, noOfAnswers})

export const fetchAllUsers = () => API.get('/user/getAllUsers');
export const updateProfile = (id, updateData) => API.patch(`/user/update/${id}`, updateData)