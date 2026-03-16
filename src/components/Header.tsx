import React from 'react';
import { useAtom } from 'jotai';
import { isSidebarFoldedAtom } from '../store';

const Header: React.FC = () => {
  const [isFolded, setIsFolded] = useAtom(isSidebarFoldedAtom);

  return (
    <header className="status-layer">
      <div className="header-left">
        <button 
          className="sidebar-toggle-btn" 
          onClick={() => setIsFolded(!isFolded)}
          aria-label="Toggle Sidebar"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="9" y1="3" x2="9" y2="21"></line>
          </svg>
        </button>
        <div className="logo">bd creative study space</div>
      </div>
    </header>
  );
};

export default Header;
