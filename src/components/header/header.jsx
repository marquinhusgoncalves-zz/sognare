import React from 'react';
import SearchBar from '../search-bar/search-bar';

function Header() {
  return (
    <header className="header">
      <div className="wrapper">
        <SearchBar />
      </div>
    </header>
  );
}

export default Header;