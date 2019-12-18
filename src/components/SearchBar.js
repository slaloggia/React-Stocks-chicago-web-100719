import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <form>
        <div className="radio">
          <label>
            <input type="radio" value="Alphabetically" name="sort" checked={null} onChange={(event) => {props.handleSort(event.target.value)}}/>
            Alphabetically
          </label>
          <label>
            <input type="radio" value="Price" name="sort" checked={null} onChange={(event) => {props.handleSort(event.target.value)}}/>
            Price
          </label>
        </div>
      </form>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(event) => props.handleFilter(event.target.value)}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
