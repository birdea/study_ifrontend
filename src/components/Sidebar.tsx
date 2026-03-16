import React from 'react';
import { useAtom } from 'jotai';
import { activePageAtom, isSidebarFoldedAtom } from '../store';

const Sidebar: React.FC = () => {
  const [activePage, setActivePage] = useAtom(activePageAtom);
  const [isFolded] = useAtom(isSidebarFoldedAtom);

  return (
    <aside className={`sidebar-layer ${isFolded ? 'folded' : ''}`}>
      <nav className="sidebar-nav">
        <button 
          className={`nav-btn ${activePage === 'hello' ? 'active' : ''}`}
          onClick={() => setActivePage('hello')}
        >
          Hello World
        </button>
        <button 
          className={`nav-btn ${activePage === 'bye' ? 'active' : ''}`}
          onClick={() => setActivePage('bye')}
        >
          Good Bye
        </button>
        <button 
          className={`nav-btn ${activePage === 'figma1' ? 'active' : ''}`}
          onClick={() => setActivePage('figma1')}
        >
          figma1
        </button>
        <button 
          className={`nav-btn ${activePage === 'figma2' ? 'active' : ''}`}
          onClick={() => setActivePage('figma2')}
        >
          figma2
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
