import React, { useState, useEffect } from 'react';
import { API_URL } from './constants';

function App() {
  const [backendData, setBackendData] = useState([]);
  console.log(API_URL);
  useEffect(() => {
    // fetch('http://localhost:3001/api')
    fetch("https://react-class-server.onrender.com/api")
      .then(async res => {
        const data = await res.json();
        // Check the browser's console to see this
        console.log(data);
        setBackendData(data);
      });
  }, []);

  return (  
    <>
      <div>This is the front-end</div>
      { backendData.items &&  backendData.items.length > 0 ? backendData.items.map((movie, index) => {
        return (
          <div key={index}>
            <p>{movie.title}</p>
          </div>
        )
      }) : <p>loading...</p>}
    </>
  );
}

export default App;