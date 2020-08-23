import React from "react";
import Search from "./Search"

function Header(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4">Employee Search</h1>
      <p className="lead"> Search Employees by name or filter by... by clicking on column heading</p>
      < Search />
    </div>
  </div>
  );
}

export default Header;