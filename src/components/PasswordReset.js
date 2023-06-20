import React, { useState } from 'react';
import './PasswordReset.css';
import { act } from 'react-dom/test-utils';
import { useNavigate } from 'react-router-dom';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [isPasswordReset, setIsPasswordReset] = useState(false);
  const [actualOtp, setActualOtp] = useState('');

  const navigate=useNavigate()
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmNewPasswordChange = (e) => {
    setConfirmNewPassword(e.target.value);
  };

  const handleSendOtp = () => {
    // Code to send OTP
    const randomNumber = Math.floor(Math.random() * 10000);
    setActualOtp(randomNumber);
    let otpdata = {
      receiver: email,
      otp: randomNumber,
    };
    fetch('https://betawill-com.onrender.com/resetpasswordotp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(otpdata),
    });
    setIsOtpSent(true);
  };

  const handleResetPassword = () => {
    if (otp != actualOtp) {
      alert('Wrong OTP!!\nPlease try again by sending a new OTP');
    } else {
      setIsPasswordReset(true);
    }
  };

  const handleChangePassword = () => {
    if (newPassword !== confirmNewPassword) {
      alert("New password and confirm password don't match. Please try again.");
    } else {
      changepassword(newPassword);
      alert("password changed successfully!!!")
      navigate('/')
      
      
    }
  };

  const changepassword = (newpassword) => {
    let passworddata = {
      email: email,
      newpassword: newpassword,
    };
    fetch('https://betawill-com.onrender.com/changepassword', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(passworddata),
    });
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-popup">
        <button className="forgot-password-close-btn">&times;</button>
        <div className="forgot-password-popup-content">
          {!isOtpSent ? (
            <>
              <label className="forgot-password-label">Email:</label>
              <input
                type="text"
                value={email}
                onChange={handleEmailChange}
                className="forgot-password-input"
              />
              <button onClick={handleSendOtp} className="forgot-password-button">
                Send OTP
              </button>
            </>
          ) : !isPasswordReset ? (
            <>
              <label className="forgot-password-label">OTP:</label>
              <input
                type="text"
                value={otp}
                onChange={handleOtpChange}
                className="forgot-password-input"
              />
              <button onClick={handleResetPassword} className="forgot-password-button">
                Reset Password
              </button>
            </>
          ) : (
            <>
              <label className="forgot-password-label">New Password:</label>
              <input
                type="password"
                value={newPassword}
                onChange={handleNewPasswordChange}
                className="forgot-password-input"
              />
              <label className="forgot-password-label">Confirm New Password:</label>
              <input
                type="password"
                value={confirmNewPassword}
                onChange={handleConfirmNewPasswordChange}
                className="forgot-password-input"
              />
              <button onClick={handleChangePassword} className="forgot-password-button">
                Change Password
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
