import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-page">
      <header className="navbar">
        <div className="logo">  <img src="src/images/logo.png" alt=" Not found" /></div>
        <nav>
          <ul>
            <li>Home</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </nav>
      </header>

      <main className="contact-container">
        <div className="left-section">
          <h1>CONTACT US</h1>
          <p>
            LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU. WHETHER YOU HAVE A QUESTION,
            COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, 
            OR BY PHONE, EMAIL.
          </p>

          <div className="buttons">
            <button className="btn">💬 VIA SUPPORT CHAT</button>
            <button className="btn">📞 VIA CALL</button>
          </div>

          <div className="form-group">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="E-Mail" />
            <textarea rows="4" placeholder="TEXT"></textarea>
            <button className="submit-btn">SUBMIT</button>
          </div>
        </div>

        <div className="right-section">
          <img src="src/images/image.png" alt="support" />
        </div>
      </main>
    </div>
  );
};

export default ContactUs;
