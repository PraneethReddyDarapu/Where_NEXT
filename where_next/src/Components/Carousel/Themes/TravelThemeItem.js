import React, { useEffect } from "react";
import "./Theme.css";
import SimpleSliderInternal from "../SimpleSlider/SimpleSlider_Internal";
import { useParams } from "react-router-dom";
import axios from "axios";

const Mountains = () => {
  const { id } = useParams();
  const [travelTheme, setTravelTheme] = React.useState([]);
  const [data, setData] = React.useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/travel_theme/${id}`)
      .then((res) => {
        setTravelTheme(res.data);
      });
    axios
      .get(`${process.env.REACT_APP_API_URL}/tours?travel_theme_id=${id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }, []);

  return (
    <div>
      <div className="image">
        <div className="justimage">
          <img src={travelTheme?.image} alt={travelTheme?.title} />
        </div>
         {" "}
        <div className="centered">
          {data?.title}
          <div>
            <p>
              <h4> {travelTheme?.description}</h4>
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="Heading">
        <h2 style={{ textAlign: "center" }}>
          Popular Destinations for {travelTheme?.title}
        </h2>
      </div>
      <div className="container">
        <SimpleSliderInternal data={data} />
      </div>
    </div>
  );
};
export default Mountains;
