import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
// import NewsAPI from 'newsapi';


function App() {

  const reloadApi = false

  const [cardData,setCardData] = useState([]);



  useEffect( () => {
    setCardData(JSON.parse(localStorage.getItem("cardData")));
    console.log(cardData);
    console.log(JSON.parse(localStorage.getItem("cardData")), "localstorage value")



  },[reloadApi])





  return (
    <div className='App h-screen' >
    <Navbar/>


    { 
      /// "?." is used as NULL checker in js.
      cardData?.map((n , index)=>{
        return(
          <Card key={index} name={n.author} />
        )
      })
     } 

   
    

    </div>
  );
}

export default App;
