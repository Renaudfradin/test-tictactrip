import React from "react";

export default function inputDate() {
  return (
    <div className="boxDate">
      <input type="date"
        className="inputDate"
        placeholder="Ajouter aller"
      />
      <input type="date"
        className="inputDate"
        placeholder="Ajouter retour"
      />
    </div>
  )
}