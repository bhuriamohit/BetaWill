import React, { useState } from 'react';
import './PasswordReset.css';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSendOtp = () => {
    // Code to send OTP
    setIsOtpSent(true);
  };

  const handleResetPassword = () => {
    // Code to reset password
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
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
