import React from "react";
import ContactForm from "../components/ContactForm";
import Title from "../components/Title";

const Contact = () => {
  return (
    <div className="contact">
      <Title
        title="CONTACT"
        subtitle="GET IN"
        secondTitle="TOUCH"
        classes="contact-subtitle"
        class="contact-title"
      />
      <div className="contact-me">
        <div className="container contact-display">
          <div className="contact-icon">
            <h1>DON'T BE SHY !</h1>
            <p>
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions.
            </p>
            <div className="icon-padding">
              <p>
                <i className="bx bx-map-alt"></i>
                <span> ADDRESS POINT</span>
                123 Rruga Vëllezërit Gërvalla, Pristina,Kosovo 10000.
              </p>
              <p>
                <i className="bx bx-envelope-open"></i>
                <span> MAIL ME</span>
                shpatxmustafa@gmail.com
              </p>
              <p>
                <i className="bx bx-phone"></i>
                <span>CALL ME</span>
                +38349346548
              </p>
            </div>
          </div>
          <div className="form">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
