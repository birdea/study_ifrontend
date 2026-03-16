import React, { useEffect, useState } from 'react';

const Content = ({ activePage }) => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    let timer;
    if (activePage === 'bye') {
      setCountdown(5);
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            // In a real browser, this would try to close the tab, 
            // but for security reasons window.close() only works on windows opened by script.
            // We can simulate it by showing a "Page Closed" message or redirecting.
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

  return (
    <div className="centered-content">
      <p>Select a page from the sidebar</p>
    </div>
  );
};

export default Content;
