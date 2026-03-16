import React from 'react';
import { useAtom } from 'jotai';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import { isSidebarFoldedAtom } from './store';
import './styles/global.scss';
import './styles/layout.scss';

const App: React.FC = () => {
  const [isFolded, setIsFolded] = useAtom(isSidebarFoldedAtom);

  const toggleSidebar = () => {
    setIsFolded(!isFolded);
  };

  return (
    <div className="app-container">
      <Header />
      <div className="main-layout">
        <Sidebar />
        <main className="content-layer">
          <button className="toggle-btn" onClick={toggleSidebar}>
            {isFolded ? (
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </button>
          <Content />
        </main>
      </div>
    </div>
  );
}

export default App;
