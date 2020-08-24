import React from "react";

function Search(props) {
  return (
    <>
      <div className="input-group input-group-lg">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-lg">
            SEARCH
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          onChange={(event) => props.updateSearchTerm(event.target.value)}
        />
      </div>
    </>
  );
}

export default Search;
