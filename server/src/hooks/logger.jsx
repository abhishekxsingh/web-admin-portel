import { useState } from 'react';

export const useLogger = () => {
  const [logMessages, setLogMessages] = useState([]);

  const log = (message) => {
    const timestamp = new Date().toLocaleString();
    const log = `${timestamp}: ${message}`;
    setLogMessages([...logMessages, log]);
  };

  return {
    logMessages,
    log
  };
};
