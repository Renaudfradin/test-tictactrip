import axios from "axios";
import React, { useState } from "react";

export default function Home() {
  const [popularCity, setPopularCity] = useState([]);
  const [resultCity, setResultCity] = useState(false);
  const [searchCity, setSearchCity] = useState("");
  const [cityDestinationPopular, setcityDestinationPopular] = useState([]);
  const [searchCityDestination, setSearchCityDestination] = useState("");

  const clickInput = () => {
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
    console.log(searchCity);
    if (searchCity === "renaud") {
      console.log("tesssssssssssssssssssssssssssssssssssssssssss");
    }
    axios.get(`https://api.comparatrip.eu/cities/autocomplete/?q=${searchCity}`)
      .then((response) => {
        //console.log(response.data);
        setPopularCity(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const clickCityDestination = () => {
    try {
      axios.get(`https://api.comparatrip.eu/cities/popular/from/${searchCity}/10`)
        .then((response) => {
          console.log(response.data);
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
    console.log(searchCity);
    if (searchCityDestination === "renaud") {
      console.log("tesssssssssssssssssssssssssssssssssssssssssss");
    }
    axios.get(`https://api.comparatrip.eu/cities/autocomplete/?q=${searchCityDestination}`)
      .then((response) => {
        //console.log(response.data);
        setcityDestinationPopular(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const clickAddvalue = (citylocal_name) => {
    console.log(citylocal_name);
    setSearchCity(citylocal_name)
  }


  return (
    <div>
      <h1>BatBat page</h1>
      <input type="text"
        onClick={clickInput}
        value={searchCity}
        onChange={searchCitys}
      />
      <div>
        {resultCity ? 
          popularCity.map((city) => (
          <>
            {console.log(city.local_name)}
              <p
                onClick={() => clickAddvalue(city.local_name)}
              >{city.local_name}</p>
          </>
          ))
          :
          <>
            <p>rien</p>
          </>
        }
      </div>
      <input type="text"
        onClick={clickCityDestination}
        value={searchCityDestination}
        onChange={searchCityD}
      />
      <div>
        {cityDestinationPopular.map((city) => (
          <>
            {console.log(city.local_name)}
            <p>{ city.local_name }</p>
          </>
        ))}
      </div>

      <button type="submit">search</button>
    </div>
  )
}