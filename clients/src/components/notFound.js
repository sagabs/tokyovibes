import React from "react";
import "./styles/notfound.css";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="body404 not-found d-flex flex-column justify-content-center align-items-center">
      <img src={require("../assets/img/notfound.png")} alt="not found"></img>
      <span>"YOU'RE BEYOND THE BORDERS."</span>
      <Link to="/">
        <div className="clickhere">Click Here to Come Back Shopping</div>
      </Link>
    </div>
  );
};

export default NotFound;
