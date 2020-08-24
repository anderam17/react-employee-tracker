import React from "react";
import Search from "../Search";
import "./style.css";


function Header(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4" id="big-title">Employee Search</h1>
      <p className="lead" id="big-subtitle"> Search Employees by entering their first or last name in the search box. 
      <br/> 
      Filter by name by clicking the arrow in "name" column.
      <br/> 
      Filter by age by clicking the arrow in the "age" column. </p>
      <Search updateSearchTerm={props.updateSearchTerm} />
    </div>
  </div>
  );
}

export default Header;