import React from "react";

export const Profile = ({ name, occupation, location, email, telephone, image }) => (
  <div className="profile">
    <img src={image} alt="Profile" />
    <h1>{name}</h1>
    <h2>{occupation}</h2>
    <p>{location}</p>
    <p>{email}</p>
    <p>{telephone}</p>
  </div>
);
