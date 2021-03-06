import React from "react";
import EmployeeRow from "../EmployeeRow/EmployeeRow";
import API from "../../utils/api";
import TableHeader from "../TableHeader/TableHeader"

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

  filterBySearch = () => {
    return this.state.employees.filter((employee) => {
      return (employee.name.first.toLowerCase().startsWith(this.props.searchTerm.toLowerCase()) || 
      employee.name.last.toLowerCase().startsWith(this.props.searchTerm.toLowerCase()));
    });
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
  };

  sortByAge = () => {
    let sortedEmployees = this.state.employees;
    sortedEmployees.sort((a, b) => {
      if (a.dob.age < b.dob.age) {
        return -1;
      }
      if (a.dob.age > b.dob.age) {
        return 1;
      }
      return 0;
    });
    this.setState({ employee: sortedEmployees })
};

  renderContent = () => {
    return this.filterBySearch().map((employee) => {
      return (
        <EmployeeRow
          key={employee.login.uuid}
          firstName={employee.name.first}
          lastName={employee.name.last}
          email={employee.email}
          birthday={employee.dob.age}
          image={employee.picture.medium}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <TableHeader 
        sortByName = {() => this.sortByName()}
        sortByAge = {() => this.sortByAge()}
        />
        {this.renderContent()}
      </div>
    );
  }
}

export default Table;
