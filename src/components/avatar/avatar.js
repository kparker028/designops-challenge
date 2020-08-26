import React from "react";
import "./avatar.css";

export const Avatar = ({ image, size }) => {
  const avatarStyles = {
    width: size === "small" ? "48px" : size === "medium" ? "64px" : "80px",
    height: size === "small" ? "48px" : size === "medium" ? "64px" : "80px",
    backgroundImage: `url(${image})`,
    backgroungSize: "contain",
    backgroundPosition: "center",
  };
  return <div style={avatarStyles} className="avatarContainer"></div>;
};
