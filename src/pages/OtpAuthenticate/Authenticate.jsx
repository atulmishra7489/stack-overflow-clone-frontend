import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { sentOtpFunction, userVerify } from "../../api/index"
import icon from '../../assets/icon.png'
import '../Auth/Auth.css'

const Authenticate = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [error, setError] = useState(null);
  const [spiner, setSpiner] = useState(false);

  const navigate = useNavigate();

  // sendotp
  const sendOtp = async (e) => {
    e.preventDefault();

    if (email === "") {
      alert("Enter Your Email !")
    } else if (!email.includes("@")) {
      alert("Enter Valid Email !")
    } else {
      setSpiner(true)
      const data = {
        email: email
      }
      // dispatch(generateOTP(data, navigate))
      const response = await sentOtpFunction(data);
      // console.log(response);

      if (response.status === 200) {
        setSpiner(false)
        setShowOtpForm(true);
        // location.state=email
        // navigate("/user/otp",{state:email})
      } else {
        toast.error(response.response.data.error);
      }
    }
  }
  const LoginUser = async (e) => {
    e.preventDefault();

    if (otp === "") {
      toast.error("Enter Your Otp")
    } else if (!/[^a-zA-Z]/.test(otp)) {
      toast.error("Enter Valid Otp")
    } else if (otp.length < 6) {
      toast.error("Otp Length minimum 6 digit")
    } else {
      const data = {
        otp, email: email
      }
      console.log(email)
      const response = await userVerify(data);
      console.log(response)
      if (response.status === 200) {
        localStorage.setItem("userdbtoken", response.data.userToken);
        toast.success(response.data.message);
        setTimeout(() => {
          navigate("/dashboard")
        }, 5000)
      } else {
        toast.error(response.response.data.error)
      }
    }
  }
  return (
    <>
      <section className='auth-section'>
        <div className='auth-container-2'>
          <img src={icon} alt='stack overflow' className='login-logo' />
          <form onSubmit={sendOtp}>
            <label htmlFor="email">
              <h4>Email</h4>
              <input type="email" name='email' id='email' onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter Your Email Address' />
            </label>
            <button type='submit' className='auth-btn' onClick={sendOtp}>Send OTP
              {
                //   spiner ? <span><Spinner animation="border" /></span> : ""
              }
            </button>
          </form>

          {showOtpForm && (
            <form onSubmit={LoginUser}>
              <div className="form_input">
                <label htmlFor="otp"><h4>OTP</h4>
                  <input type="text" name="otp" id="" onChange={(e) => setOtp(e.target.value)} placeholder='Enter Your OTP' />
                </label>
              </div>
              <button type='submit' className='auth-btn'>Submit</button>
            </form>
          )}
          <p>
            Don't have an account?
            <button type='button' className='handle-switch-btn' ><NavLink to="/Auth" className='handle-switch-btn' style={{ textDecoration: "none" }}>Sing up</NavLink></button>
          </p>
          {error && <p>{error}</p>}
        </div>
      </section>
      <ToastContainer />
    </>

  )
}

export default Authenticate