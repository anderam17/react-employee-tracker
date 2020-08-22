import React from "react";

function EmployeeRow(props) {
    return (
      <>
      <div className="row">
      <div className="col-md-2">
          <img src="https://img.icons8.com/dotty/80/000000/ios-application-placeholder.png"/>
      </div>
      <div className="col-md-4">
    <p>{props.firstName} {props.lastName}</p>
      </div>
      <div className="col-md-4">
          <p>{props.email}</p>
      </div>
      <div className="col-md-2">
          <p>{props.birthday}</p>
      </div>
      </div>
      </>
    );
  }
  
  export default EmployeeRow;