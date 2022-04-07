import React, { useState, useEffect } from 'react'
import List from './components/List'

function App() {
  let [data, setPosts] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3001/cars")
    .then(response => response.json())
    .then(json => {
      setPosts(json)
    })
  },[])

  return (
    <div className="wrapper">
      <List data={data} />
    </div>
  );
}

export default App;
