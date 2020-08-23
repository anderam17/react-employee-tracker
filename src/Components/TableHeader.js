import React from "react";

function TableHeader(props) {
    return (
      <>
      <div className="row">
      <div className="col-md-2">
          <h4>Photo</h4>
      </div>
      <div className="col-md-4">
      <h4>Name</h4><button type="button" className="btn btn-outline-info" id="sort-by-name" onClick={props.sortByName}>^</button>
      </div>
      <div className="col-md-4">
      <h4>Email</h4>
      </div>
      <div className="col-md-2">
      <h4>Age</h4>
      </div>
      </div>
      </>
    );
  }
  
  export default TableHeader;