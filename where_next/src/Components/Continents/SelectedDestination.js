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
      ? `${process.env.REACT_APP_API_URL}/continents?name=${name}`
      : `${process.env.REACT_APP_API_URL}/tours/${id}`;
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
        setSelectedDestination(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getSelectedDestination();
  }, []);
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
