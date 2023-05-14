import axios from "axios";
import React, { useState } from "react";

export default function inputDepart({ setSearchCity,searchCity }) {
  const [popularCity, setPopularCity] = useState([]);
  const [resultCity, setResultCity] = useState(false);

  const handleInput = () => {
    try {
      axios.get("https://api.comparatrip.eu/cities/popular/5")
        .then((response) => {
          setResultCity(!resultCity);
          setPopularCity(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
    } catch (error) {
      console.log(error);
    }
  }

  function searchCitys(event) {
    setSearchCity(event.target.value);
    axios.get(`https://api.comparatrip.eu/cities/autocomplete/?q=${searchCity}`)
      .then((response) => {
        setPopularCity(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const clickAddvalue = (citylocal_name) => {
    setSearchCity(citylocal_name);
    setResultCity(!resultCity);
  }

  return (
    <div className="inputResult">
      <input type="text"
        onClick={ handleInput }
        value={ searchCity }
        onChange={ searchCitys }
        className="inputSearch"
        placeholder="De: Ville, gare ou aéroport"
      />
      {resultCity ? 
        <div className="result">
          {popularCity.map((city) => (
            <p
              onClick={() => clickAddvalue(city.local_name)}
            >{ city.local_name }</p>
          ))}
        </div>
        : null }
    </div>
  )
}