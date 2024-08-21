import React from 'react';
import './PatientCard.css';

// Import images
import logo from './images/logo.png';
import phoneIcon from './images/phone-icon.png';
import emailIcon from './images/email-icon.png';
import emgIcon from './images/emg-icon.png';
import romIcon from './images/rom-icon.png';

function PatientCard() {
  return (
    <div className="patient-card">
      <div className="header">
        <img src={logo} alt="Logo" className="logo" />
        <h2>View patient</h2>
      </div>
      <div className="patient-info">
        <div className="patient-name">
          <h3>S.Meena, F/23</h3>
          <p>Patient ID: 87 20200727153457</p>
        </div>
        <div className="goal">
          <h3>Goal reached</h3>
          <div className="progress-circle">
            <span>40%</span>
          </div>
          <div className="metrics">
            <div className="metric">
              <img src={emgIcon} alt="EMG Icon" />
              <p>EMG</p>
            </div>
            <div className="metric">
              <img src={romIcon} alt="ROM Icon" />
              <p>ROM</p>
            </div>
          </div>
        </div>
        <div className="contact-info">
          <p><img src={phoneIcon} alt="Phone Icon" className="icon" /> 8022334455</p>
          <p><img src={emailIcon} alt="Email Icon" className="icon" /> meenarabinsachin2@gmail.com</p>
          <p><strong>Affected side:</strong> Bilateral</p>
          <p><strong>Condition:</strong> Ortho</p>
          <p><strong>Speciality:</strong> Osteoarthritis</p>
        </div>
        <div className="medical-history">
          <h4>Medical history</h4>
          <p>Hypertension, DM, Hypothyroidism</p>
        </div>
      </div>
    </div>
  );
}

export default PatientCard;
