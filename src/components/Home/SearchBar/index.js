import React from 'react';
import PropTypes from 'prop-types';  // Import PropTypes
import styled from 'styled-components';

const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch, className }) => (
  <div className={className}>
    <form onSubmit={formSubmit}>
      <input
        type='text'
        placeholder='Search By Category'
        value={value}
        onChange={handleSearchKey}
      />
      {value && <span onClick={clearSearch}>X</span>}
      <button>Go</button>
    </form>
  </div>
);

SearchBar.propTypes = {
  formSubmit: PropTypes.func.isRequired,  
  value: PropTypes.string.isRequired,  
  handleSearchKey: PropTypes.func.isRequired,  
  clearSearch: PropTypes.func.isRequired,  
  className: PropTypes.string.isRequired  
};

// สไตล์สำหรับ SearchBar
const StyledSearchBar = styled(SearchBar)`
  .searchBar-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: #f0f0f0;
    border-radius: 80px;
  }

  form {
    display: flex;
    align-items: center;
    width: 10%;
   padding: 10px;
    justify-content: center;
  }

  input {
    padding: 10px;
    border: 1px solid #000000;
    border-radius: 4px;
    width: 80%;
    margin-right: 10px;
  }

  button {
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  span {
    margin-left: 10px;
    cursor: pointer;
    color: red;
  }

  span:hover {
    color: darkred;
  }
`;

export default StyledSearchBar;
