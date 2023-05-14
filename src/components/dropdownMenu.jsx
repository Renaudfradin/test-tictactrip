import React, { useState } from "react";

export default function dropdownMenu({ }) {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [infoTrajet, setinfoTrajet] = useState("Aller simple");

  const handleOpen = () => {
    setOpenDropdown(!openDropdown);
  }

  return (
    <>
      <p onClick={ handleOpen } className="menu">{ infoTrajet }</p>
      {openDropdown ?
        <div className="dropdown">
          <p onClick={() => { setinfoTrajet("Aller simple"); setOpenDropdown(!openDropdown); }}>Aller simple</p>
          <p onClick={() =>{ setinfoTrajet("Aller-retour"); setOpenDropdown(!openDropdown); }}>Aller-retour</p>
        </div>
      : null}
    </>
  )
}