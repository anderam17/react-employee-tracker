import React from "react";
import Search from "./Search"

function Header(props) {
  return (
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Employee Search</h1>
      <p class="lead"> Search Employees by name or filter by... by clicking on column heading</p>
      < Search />
    </div>
  </div>
  );
}

export default Header;