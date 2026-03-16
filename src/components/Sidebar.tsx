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
          className={`nav-btn ${activePage === 'figma.page.1' ? 'active' : ''}`}
          onClick={() => setActivePage('figma.page.1')}
        >
          figma.page.1
        </button>
        <button 
          className={`nav-btn ${activePage === 'figma.page.2' ? 'active' : ''}`}
          onClick={() => setActivePage('figma.page.2')}
        >
          figma.page.2
        </button>
        <button 
          className={`nav-btn ${activePage === 'figma.page.3' ? 'active' : ''}`}
          onClick={() => setActivePage('figma.page.3')}
        >
          figma.page.3
        </button>
        <button 
          className={`nav-btn ${activePage === 'figma.page.4' ? 'active' : ''}`}
          onClick={() => setActivePage('figma.page.4')}
        >
          figma.page.4
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
