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
        <button 
          className={`nav-btn ${activePage === 'figma1' ? 'active' : ''}`}
          onClick={() => onPageChange('figma1')}
        >
          figma1
        </button>
        <button 
          className={`nav-btn ${activePage === 'figma2' ? 'active' : ''}`}
          onClick={() => onPageChange('figma2')}
        >
          figma2
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
