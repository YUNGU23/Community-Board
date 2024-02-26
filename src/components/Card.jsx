import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} className="img" />
      <h2 style={{ color: "black" }}>{props.name}</h2>
      <h4 style={{ color: "black" }}>{props.region}</h4>
      <button className="button">View Menu</button>
    </div>
  );
};

export default Card;
