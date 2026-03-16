import React from 'react';

const Sidebar = ({ isFolded, onPageChange, activePage }) => {
  return (
    <aside className={`sidebar-layer ${isFolded ? 'folded' : ''}`}>
      <nav className="sidebar-nav">
        <button 
          className={`nav-btn ${activePage === 'hello' ? 'active' : ''}`}
          onClick={() => onPageChange('hello')}
        >
          Hello World
        </button>
        <button 
          className={`nav-btn ${activePage === 'bye' ? 'active' : ''}`}
          onClick={() => onPageChange('bye')}
        >
          Good Bye
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
