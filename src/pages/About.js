import React from "react";
import Button from "../components/Button";
import Experience from "../components/Experience";
import Title from "../components/Title";

const About = () => {
  const years = [
    {
      number: "12",
      icon: "+",
      title: "YEARS OF EXPERIENCE",
    },
    {
      number: "97",
      icon: "+",
      title: "COMPLETED PROJECTS",
    },
    {
      number: "81",
      icon: "+",
      title: "HAPPY CUSTOMERS",
    },
    {
      number: "53",
      icon: "+",
      title: "AWARDS WON",
    },
  ];

  const personalInfo = {
    Name: "Shpat",
    LastName: "Mustafa",
    Age: "19",
    Phone: "+38349346548",
    Nationality: "Kosovar",
    Address: "Prishtina",
    Email: "shpatxmustafa@gmail.com",
    Status: "freelancer",
  };

  return (
    <div className="about">
      <div className="about-">
        <Title
          classes="about-subtitle"
          title="RESUME"
          subtitle="ABOUT"
          secondTitle="ME"
          class="about-title"
        />
      </div>
      <div className="container">
        <div className="about-me">
          <div className="info">
            <h1>PERSONAL INFOS</h1>
            <div className="about-image home-image"></div>
            <div className="info-data">
              <div>
                <p>
                  <span>First Name:</span> {personalInfo.Name}
                </p>
              </div>
              <div>
                <p>
                  <span>LastName:</span> {personalInfo.LastName}
                </p>
              </div>
              <div>
                <p>
                  <span>Age:</span> {personalInfo.Age}
                </p>
              </div>
              <div>
                <p>
                  <span>Phone:</span> {personalInfo.Phone}
                </p>
              </div>
              <div>
                <p>
                  <span>Nationality: </span>
                  {personalInfo.Nationality}
                </p>
              </div>
              <div>
                <p>
                  <span>Address: </span>
                  {personalInfo.Address}
                </p>
              </div>
              <div>
                <p>
                  <span>Status: </span>
                  {personalInfo.Status}
                </p>
              </div>
              <div>
                <p>
                  <span>Email: </span>
                  {personalInfo.Email}
                </p>
              </div>
            </div>
            <Button
              icon="bx bx-download"
              text="DOWNLOAD CV"
              classes="about-button btn"
            />
          </div>
          <div className="experience-container">
            <Experience year={years} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
