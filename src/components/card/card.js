import React from "react";
import "./card.css";

export const Card = ({ width, height, children }) => {
  const cardStyles = {
    width: width || "176px",
    height: height || "216px",
    boxShadow: "0 15px 30px -8px rgba(0,0,0,.08)",
    borderRadius: "20px",
    position: "relative",
    backgroundColor: "white",
    
  };
  return (
    <div style={cardStyles} className="cardContainer">
      {children}
    </div>
  );
};
