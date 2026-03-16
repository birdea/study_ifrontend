import React, { useEffect, useState } from 'react';
import { useAtomValue } from 'jotai';
import { activePageAtom } from '../store';
import FigmaPage1 from './figma-page-1/FigmaPage1';
const Content: React.FC = () => {
  const activePage = useAtomValue(activePageAtom);
  const [countdown, setCountdown] = useState<number>(5);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (activePage === 'bye') {
      setCountdown(5);
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            window.alert('Page will close now (Simulated)');
            window.location.href = 'about:blank';
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [activePage]);

  if (activePage === 'hello') {
    return (
      <div className="centered-content">
        <h1>hello world</h1>
        <p>It is frontend study space! welcome!</p>
      </div>
    );
  }

  if (activePage === 'bye') {
    return (
      <div className="centered-content">
        <h1>bye bye~!</h1>
        <p>Closing in {countdown} seconds...</p>
      </div>
    );
  }

  if (activePage === 'figma.page.1') {
    return <FigmaPage1 />;
  }

  if (activePage === 'figma.page.2') {
    return (
      <div className="centered-content">
        <h1>the result of figma.page.2 process</h1>
      </div>
    );
  }

  return (
    <div className="centered-content">
      <p>Select a page from the sidebar</p>
    </div>
  );
};

export default Content;
