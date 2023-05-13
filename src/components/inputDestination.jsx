import axios from "axios";
import React, { useState } from "react";

export default function inputDetination({searchCity}) {
  const [cityDestinationPopular, setcityDestinationPopular] = useState([]);
  const [searchCityDestination, setSearchCityDestination] = useState("");

  const clickCityDestination = () => {
    try {
      axios.get(`https://api.comparatrip.eu/cities/popular/from/${searchCity}/10`)
        .then((response) => {
          setcityDestinationPopular(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
    } catch (error) {
      console.log(error);
    }
  }

  function searchCityD(event) {
    setSearchCityDestination(event.target.value);
    axios.get(`https://api.comparatrip.eu/cities/autocomplete/?q=${searchCityDestination}`)
      .then((response) => {
        console.log(response.data);
        setcityDestinationPopular(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const clickAddvalue = (citylocal_name) => {
    setSearchCityDestination(citylocal_name)
  }

  return (
    <>
      <input type="text"
        onClick={clickCityDestination}
        value={searchCityDestination}
        onChange={searchCityD}
        className="inputSearch"
        placeholder="De: Ville, gare ou aéroport"
      />
      <div>
        {cityDestinationPopular.map((city) => (
          <p
            onClick={() => clickAddvalue(city.local_name)}
          >{city.local_name}</p>
        ))}
      </div>
    </>
  )
}