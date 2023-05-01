import React, { useEffect } from "react";
import SimpleSlider from "../../Components/Carousel/SimpleSlider";
import axios from "axios";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const Travel_Theme = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/travel_theme`).then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="container">
      <br />
      <br />
      <h2 style={{ textAlign: "center" }}>Immersive Travel Themes</h2>
      <br />

      <div className="row">
        {data?.map((item, key) => (
          <div className="col-lg-4 col-md-6 mt-3" key={key}>
            <Card className="single-tour" text="white">
              <Link to={`/travel/${item._id}`}>
                <Card.Img variant="top" src={item.image} />
              </Link>
              <Card.Body>
                <Link to={`/travel/${item._id}`}>
                  <Card.Title style={{ textAlign: "center" }}>
                    {item.title}
                  </Card.Title>
                </Link>
                <Card.Text style={{ textAlign: "center" }}>
                  {item.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Travel_Theme;
