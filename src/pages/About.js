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
                <p>First Name: {personalInfo.Name}</p>
              </div>
              <div>
                <p>LastName: {personalInfo.LastName}</p>
              </div>
              <div>
                <p>Age: {personalInfo.Age}</p>
              </div>
              <div>
                <p>Phone: {personalInfo.Phone}</p>
              </div>
              <div>
                <p>Nationality: {personalInfo.Nationality}</p>
              </div>
              <div>
                <p>Address: {personalInfo.Address}</p>
              </div>
              <div>
                <p>Email: {personalInfo.Email}</p>
              </div>
              <div>
                <p>Status: {personalInfo.Status}</p>
              </div>
            </div>
            <Button
              icon="bx bx-download"
              text="DOWNLOAD CV"
              classes="home-button btn"
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
