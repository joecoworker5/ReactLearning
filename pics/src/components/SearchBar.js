import { useState } from 'react';

import './SearchBar.css';
function SearchBar({onSubmit}) {
  const [term, setTerm] = useState('');
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleTerm = (event) => {
      setTerm(event.target.value);
  }
  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input value={term} onChange={handleTerm}/>
      </form>
    </div>
  );
}

export default SearchBar;
