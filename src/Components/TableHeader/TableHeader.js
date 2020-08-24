import React from "react";
import "./style.css"

function TableHeader(props) {
    return (
      <>
      <div id="header-container" className="row">
      <div className="col-md-2 header-titles">
          <h4>PHOTO</h4>
      </div>
      <div id="name-col" className="col-md-4 header-titles">
      <h4>NAME</h4>
      <button type="button" className="btn btn-outline-dark" id="sort-by-name" onClick={props.sortByName}>^</button>
      </div>
      <div className="col-md-4 header-titles">
      <h4>EMAIL</h4>
      </div>
      <div className="col-md-2 header-titles">
      <h4>AGE</h4>
      <button type="button" className="btn btn-outline-dark" id="sort-by-age" onClick={props.sortByAge}>^</button>
      </div>
      </div>
      </>
    );
  }
  
  export default TableHeader;