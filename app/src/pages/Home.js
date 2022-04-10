import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import api from "../utils/axios";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    api.get("/user/6252f29254f74e6a862248fc").then((myData) => {
      setData(myData.data.data);
    });
  };

  return (
    <>
      {data ? (
        <div className="home container">
          <div className="home-image "></div>
          <div className="home-content">
            <h1 className="title-color">
              I'M {data.firstName} {data.lastName}
            </h1>
            <h1>{data.jobTitle}</h1>
            <p>{data.biography}</p>
            <div>
              <Button
                icon="bx bx-right-arrow-alt"
                text="MORE ABOUT ME"
                classes="home-button btn"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="home container">
          <p className="no-data">Under Construction!</p>
        </div>
      )}
    </>
  );
};
export default Home;
