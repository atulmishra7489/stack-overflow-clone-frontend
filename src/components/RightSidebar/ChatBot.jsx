import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {useLocation,NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { generateOTP } from '../../actions/auth';
import { sentOtpFunction, userVerify } from "../../api/index"
import './RightSidebar.css'

import OtpAuthenticate from '../../pages/Auth/OtpAuthenticate';

const ChatBot = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [error, setError] = useState(null);
  const [spiner, setSpiner] = useState(false);

  const dispatch = useDispatch()
  const User = useSelector((state) => (state.currentUserReducer))
  const navigate = useNavigate();
  const location = useLocation();
  
  // sendotp

  const handleClick =(e)=>{
    navigate('/authenticate')
  }
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   dispatch(generateOTP({ username: User.result.name, mobileNumber }, navigate))
  //   try {
  //     // const response = await axios.post('/api/auth/send-otp', { mobileNumber });
  //     setShowOtpForm(true);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };

  // console.log(location)
  // const LoginUser = async (e) => {
  //   e.preventDefault();

  //   if (otp === "") {
  //     toast.error("Enter Your Otp")
  //   } else if (!/[^a-zA-Z]/.test(otp)) {
  //     toast.error("Enter Valid Otp")
  //   } else if (otp.length < 6) {
  //     toast.error("Otp Length minimum 6 digit")
  //   } else {
  //     const data = {
  //       otp, email: email
  //     }
  //     console.log(email)
  //     const response = await userVerify(data);
  //     console.log(response)
  //     if (response.status === 200) {
  //       // localStorage.setItem("userdbtoken", response.data.userToken);
  //       toast.success(response.data.message);
  //       setTimeout(() => {
  //         navigate("/dashboard")
  //       }, 5000)
  //     } else {
  //       toast.error(response.response.data.error)
  //     }
  //   }
  // }

  // const handleOtpSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     // const response = await axios.post('/api/auth/verify-otp', { mobileNumber, otp });
  //     // Save the user's access token to local storage or cookies
  //     // localStorage.setItem('accessToken', response.data.accessToken);
  //     navigate('/dashboard');
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };
  return (
    <div>
      <input type="checkbox" id="check"></input>
      <label class="chat-btn" for="check">
        <i class="fa fa-commenting-o comment">hi</i>
        <i class="fa fa-close close">bye</i>
      </label>
      <div class="wrapper">
        <div class="header">
          <h2>Let's Chat - Online</h2>
        </div>
        <div class="text-center">
          <span>Please authenticate to start chat!</span>
        </div>
          <button className='btn' onClick={handleClick}>Authenticate
            {
              // spiner ? <span><Spinner animation="border" /></span> : ""
            }
          </button>
       
       
      </div>
    </div>
  )
}

export default ChatBot