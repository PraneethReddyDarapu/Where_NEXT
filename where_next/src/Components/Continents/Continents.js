import React, { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import { doHttpCall } from "../../util/restapi";
import { Link } from "react-router-dom";
import "../../Components/Tours/Tours.css";

const continentsURL = `${process.env.REACT_APP_API_URL}/continents`;

function Continents() {
  const [loading, setLoading] = useState(true);
  const [continents, setContinents] = useState([]);

  const fetchContinents = async () => {
    setLoading(true);
    try {
      const options = {
        method: "GET",
        url: continentsURL,
      };

      const { data } = await doHttpCall(options);
      const continents = data;
      setLoading(false);
      setContinents(continents);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchContinents();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (continents.length === 0) {
    return (
      <main>
        <div className="title-continent">
          <button className="btn-refresh" onClick={() => fetchContinents()}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <div className="p-3">
      <section className="continentOverlay">
        <div className="title-continent">
          <h2 className="tours-title-continent"> Continents</h2>
          <div className="underline-continent"></div>
        </div>
        <div className="continent">
          {continents.map((continent) => {
            return (
              <>
                <Link
                  to={`/destination/${continent._id}`}
                  className="btn btn-primary btn-details"
                >
                  {continent.name}{" "}
                </Link>
              </>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Continents;
