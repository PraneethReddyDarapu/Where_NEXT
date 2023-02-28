import React, { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import Tours from "./Tours";
import { doHttpCall } from "../../util/restapi";
import "../../Components/Tours/Tours.css";

const toursURL = "http://localhost:3001/tours";

function TourWrapper() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const options = {
        method: "GET",
        url: toursURL,
      };

      const { data } = await doHttpCall(options);
      const tours = data;
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn-refresh" onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} isContinent={true} />
    </main>
  );
}

export default TourWrapper;
