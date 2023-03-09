import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Ping from 'ping.js';
import { format } from 'util';

function App() {
  const [pingResult, setPingResult] = useState(null);
  const p = new Ping();
  useEffect(() => {
    try {
    p.ping("https://www.google.com", (err, data) => {
      if (err) {
        console.log(`error occurred ... ${err}`)
      };
        setPingResult(`data : ${data}`);
      })
    } catch (error) {
      console.log(`error occurred : ${error}`);
      setPingResult('error ping');
    }
  }, []);
  
  return (
    <div>
      <p>{pingResult ? pingResult : 'Pinging...'}</p>
    </div>
  );
}

export default App;
