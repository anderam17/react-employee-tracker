import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Table from "./Components/Table/Table";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  state = {
    searchTerm: "",
  };

  updateSearchTerm = (string) => {
    this.setState({ searchTerm: string });
  };

  render() {
    return (
      <>
        <Header updateSearchTerm={this.updateSearchTerm} />
        <Table searchTerm={this.state.searchTerm} />
      </>
    );
  }
}

export default App;
