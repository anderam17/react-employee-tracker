import React from "react";
import EmployeeRow from "./EmployeeRow";
import API from "../utils/api";
import TableHeader from "./TableHeader"
//import react + employee row
//for each employee, print out a row

class Table extends React.Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    API.search()
      .then((res) => {
        this.setState({ employees: res.data.results });
      })
      .catch((err) => console.log(err));
  };

  sortByName = () => {
      let sortedEmployees = this.state.employees;
      sortedEmployees.sort((a, b) => {
        if (a.name.first < b.name.first) {
          return -1;
        }
        if (a.name.first > b.name.first) {
          return 1;
        }
        return 0;
      });
      this.setState({ employee: sortedEmployees })
  }

  renderContent = () => {
    console.log(this.state.employees);
    return this.state.employees.map((employee) => {
      return (
        <EmployeeRow
          key={employee.login.uuid}
          firstName={employee.name.first}
          lastName={employee.name.last}
          email={employee.email}
          birthday={employee.dob.age}
          image={employee.picture.thumbnail}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <TableHeader 
        sortByName = {() => this.sortByName()}
        />
        {this.renderContent()}
      </div>
    );
  }
}

export default Table;
