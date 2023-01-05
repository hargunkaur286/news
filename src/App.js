import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import NewsAPI from 'newsapi';


function App() {



const fetchData =  () => {
  var url = "https://newsapi.org/v2/everything?q=Apple&from=2023-01-05&sortBy=popularity&apiKey=3fec86d867ac4f2c9b48420cf0849a3c"

  console.log(url);

    const req =  new Request(url);
    // console.log(req.json());

  fetch(req)
  .then((response) => response.json())
  .then((data) =>{ console.log(data.articles[0]);});

  
}
  




  return (
    <div className='App h-screen '>
    <Navbar/>
     <h1 className='px-24' >Hello World</h1>
     <button onClick={fetchData}>Fetch</button>
    </div>
  );
}

export default App;
