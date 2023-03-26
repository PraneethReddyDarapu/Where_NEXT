import React from "react";
import Loading from "../Loading/Loading";
import { useParams } from "react-router-dom";
import { doHttpCall } from "../../util/restapi";
import { ContinentDestinations } from "./ContinentDestinations";

export default function SelectedContinent() {
  const { name } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [continent, setContinent] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getSelectedContinent() {
      try {
        const options = {
          method: "GET",
          url: `${process.env.REACT_APP_API_URL}/continents/${name}`,
        };

        const { data } = await doHttpCall(options);
        setContinent(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getSelectedContinent();
  }, [name]);
  if (loading) {
    return <Loading />;
  }
  if (!continent) {
    return <h2 className="section-title">Please try again!!!</h2>;
  } else {
    return (
      <>
        <ContinentDestinations {...continent} isContinent={true} />
      </>
    );
  }
}
