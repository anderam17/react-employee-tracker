import React from "react";
import Search from "../Search";
import "./style.css";


function Header(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4" id="big-title">Employee Search</h1>
      <p className="lead" id="big-subtitle"> Search Employees by name or filter by clicking on "name" column heading</p>
      <Search updateSearchTerm={props.updateSearchTerm} />
    </div>
  </div>
  );
}

export default Header;