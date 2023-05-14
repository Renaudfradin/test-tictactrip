import React, { useState } from "react";
import InputDepart from "@components/inputDepart";
import InputDetination from "@components/inputDestination";
import InputDate from "@components/inputDate";
import DropdownMenu from "@components/dropdownMenu";
import ImgCompagny from "../assets/fr.png";

export default function Home() {
  const [searchCity, setSearchCity] = useState("");

  return (
    <div className="imgHome" style={{ backgroundImage: `url("../front_page-dw.jpg")` }}>
      <div className="heroBanner">
        <h2>Laissez-vous transporter par Omio</h2>
        <h1>Billets de train, bus et avion</h1>
      </div>
      <div className="layout">
        <div className="searchBox">
          <DropdownMenu />
          <div className="inputBox">
            <InputDepart
              setSearchCity={ setSearchCity }
              searchCity={ searchCity }
            ></InputDepart>
            <InputDetination
              setSearchCity={ setSearchCity }
              searchCity={ searchCity }
            ></InputDetination>
            <InputDate />
            <button
              type="submit"
              className="searchBtn"
            >Rechercher</button>
          </div>
        </div>
        <div className="textHome">
          <div>
            <h2>Toutes les options de voyage sur une seule plateforme</h2>
            <p>Plus de 1 000 partenaires de transport pour vos trajets en train, bus, avion, ferry et vos transferts aéroportuaires pour profiter pleinement du voyage.</p>
          </div>  
          <div className="imgCompagny">
            <img src={ ImgCompagny } alt={ ImgCompagny } />
          </div>
        </div>
      </div>
    </div>
  )
}