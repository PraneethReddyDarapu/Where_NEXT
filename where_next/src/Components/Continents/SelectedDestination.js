import React from "react";
import Loading from "../Loading/Loading";
import { useParams } from "react-router-dom";
import { doHttpCall } from "../../util/restapi";
import { ContinentDestinations } from "./ContinentDestinations";

export default function SelectedDestination() {
  const { name, id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [selectedDestination, setSelectedDestination] = React.useState(null);

  const navigateUrl =
    name !== "Destination"
      ? `http://localhost:3001/continents?name=${name}`
      : `http://localhost:3001/tours?id=${id}`;
  let tourObject;
  React.useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    async function getSelectedDestination() {
      try {
        const options = {
          method: "GET",
          url: navigateUrl,
        };

        const { data } = await doHttpCall(options);
        console.log(data);

        if (name !== "Destination") {
          tourObject = data[0].places.find((e) => e.id === id);
        } else {
          tourObject = data[0];
        }

        if (tourObject) {
          setSelectedDestination(tourObject);
        } else {
          setSelectedDestination(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getSelectedDestination();
  }, [name, id]);
  if (loading) {
    return <Loading />;
  }
  if (!selectedDestination) {
    return <h2 className="section-title">Please try again!!!</h2>;
  } else {
    return (
      <>
        <ContinentDestinations {...selectedDestination} isContinent={false} />
      </>
    );
  }
}
