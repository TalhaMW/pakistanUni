import React from "react";
import "./university.css";

export const University = ({name,country,link,linkText}) => {
  return (
    <div className="university">
      <p>{name}</p>
      <p>{country}</p>
      <a target="_blank" href={link}>{linkText}</a>
    </div>
  );
};
