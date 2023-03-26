import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour, continentName, isContinent }) => {
  const tourName = continentName ? `in ${continentName}` : "";
  return (
    <section>
      <div className="title">
        {isContinent ? (
          <>
            <h2 className="tours-title"> Featured Tours {tourName}</h2>
            <div className="underline"></div>
          </>
        ) : (
          <></>
        )}
      </div>
      {tours?.length === 0 ? (
        <div className="title">
          <h3 className="tours-title"> No Tours Found</h3>
        </div>
      ) : (
        <div className="tours-center">
          {tours?.map((tour) => {
            return (
              <Tour
                key={tour.id}
                {...tour}
                continentName={continentName}
                removeTour={removeTour}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Tours;
