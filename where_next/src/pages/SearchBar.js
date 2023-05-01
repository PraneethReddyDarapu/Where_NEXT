import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Tour from "../Components/Tours/Tour";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [activeContinent, setActiveContinent] = useState("");
  const [data, setData] = useState([]);
  const [continents, setContinents] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleContinent = (e) => {
    setActiveContinent(e.target.value);
  };

  const getTours = () => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/tours?search=${search}&continent_id=${activeContinent}`
      )
      .then((res) => {
        setData(res.data);
      });
  };

  const getContinents = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/continents`).then((res) => {
      setContinents(res.data);
    });
  };

  useEffect(() => {
    getTours();
    getContinents();
  }, []);

  return (
    <div className="container px-lg-4 mt-4">
      <div className="d-flex">
        <input
          type="text"
          value={search}
          className="form-control me-3 my-auto"
          placeholder="Search for a destination"
          onChange={handleSearch}
        />
        <select
          className="form-select col-3 me-2"
          aria-label="Default select example"
          onChange={handleContinent}
        >
          <option value="">All</option>
          {continents?.map((item, key) => (
            <option key={key} value={item._id}>
              {item.name}
            </option>
          ))}
        </select>
        <button className="btn btn-dark" onClick={getTours}>
          Search
        </button>
      </div>

      <div className="row">
        {data?.map((item, key) => (
          <div className="col-lg-6 col-md-6" key={key}>
            <Tour key={item.id} {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
