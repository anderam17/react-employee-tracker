import React from "react";
import "./style.css"

function EmployeeRow(props) {
    return (
      <>
      <div className="row">
      <div className="col-md-2 employee-info">
          <img src={props.image} alt={props.firstName}/>
      </div>
      <div className="col-md-4 employee-info">
    <p>{props.firstName} {props.lastName}</p>
      </div>
      <div className="col-md-4 employee-info">
          <p>{props.email}</p>
      </div>
      <div className="col-md-2 employee-info">
          <p>{props.birthday}</p>
      </div>
      </div>
      </>
    );
  }
  
  export default EmployeeRow;