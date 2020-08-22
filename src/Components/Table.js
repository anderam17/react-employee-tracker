import React from "react";
import EmployeeRow from "./EmployeeRow";
import API from "../utils/api";
//import react + employee row
//for each employee, print out a row

class Table extends React.Component {
state = {
    employees: []
};

employeeRows () {
    for (let i=0; i <=10; i++){

    }
}

getEmployees = () => {
    API.search()
      .then(res => this.setState({ employees: res.data.results }))
      .catch(err => console.log(err));
  };

  renderContent = () => {
      this.state.employees.map((employee) => {
          return <EmployeeRow
          firstName={employee.name.first}
          lastName={employee.name.last}
          email={employee.email}
          birthday={employee.dob.date}
          image={employee.picture.thumbnail}
          /> 
    }); 
  };

render () {
    return (
        <div>
            <h1>THIS IS TABLE</h1>
            {this.renderContent()}
        </div>
    );
}
}

  
  export default Table;