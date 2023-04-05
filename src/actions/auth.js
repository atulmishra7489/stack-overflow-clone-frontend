import  * as api from '../api/index.js'
// import authReducer from '../reducers/auth'
import { setCurrentUser } from './currentUser'

// dispatch() is the method used to dispatch actions and trigger state changes to the store. react-redux is simply trying to give you convenient access to it.
export const signup = (authData, navigate) => async (dispatch) => {
    try {
        // sign up the user..
        const { data } = await api.signUp(authData)
        
        dispatch({ type: 'AUTH', data })
        dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile')) ))
        // toast.success("Signed Up successfully");
        // alert("Signed Up successfully")
        navigate('/')
    } catch (error) {
        console.log(error.response.data)
        console.log("Kya ho gya")
    }
}

export const login = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.logIn(authData)
        dispatch({ type: 'AUTH', data})
        dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile')) ))
        navigate('/')
    } catch (error) {
        console.log(error.response.data)
        console.log(error)
    }
}

/** generate OTP */

// export const generateOTP = (data, navigate) => async(dispatch)=>{
//     try {
//         const {response} = await api.generate_OTP(data);
//         dispatch({ type: 'GENERATE_OTP', response})
//         dispatch(verifyOTP(JSON.parse(localStorage.getItem('Profile'))))
//         navigate('/')
//     }catch (error) {
//             console.log(error.response.data)
//             console.log("Kya ho gya")
//         }
// }
// export const  generateOTP=(username,mobileNumber, navigate) => async (dispatch) => {
//     try {
//         const {data : { code }, status } = await api.generate_OTP({ params : { username, mobileNumber }});
//         dispatch({ type: 'GENERATE_OTP', code})
//         dispatch(verifyOTP(JSON.parse(localStorage.getItem('Profile'))))
//         navigate('/')

//         // // send mail with the OTP
//         // if(status === 201){
//         //     // let { data : { email }} = await getUser({ username });
//         //     let text = `Your  OTP is ${code}. Verify and recover your password.`;
//         //     console.log(text)
//         //     await api.fetchAllUsers()
//         // }
//         // return Promise.resolve(code);
//     } catch (error) {
//         // return Promise.reject({ error });
//         console.log(error)
//     }
// }

/** verify OTP */
// export const  verifyOTP = ({ username, code })=> async (dispatch)=>{
//     try {
//        const { data, status } = await api.verify_OTP({ params : { username, code }})
//        return { data, status }
//     } catch (error) {
//         return Promise.reject(error);
//     }
// }
