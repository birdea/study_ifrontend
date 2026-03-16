import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import './styles/global.scss';
import './styles/layout.scss';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="main-layout">
        <Sidebar />
        <main className="content-layer">
          <Content />
        </main>
      </div>
    </div>
  );
}

export default App;
