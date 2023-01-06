import React, { useEffect, useState } from 'react'
// import {BsPerson} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import Card from './Card';


function Navbar() {


    const [nav,setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }


  

    const [data,setData] = useState();  ///To handle fetched data    
    const fetchData = async  (fetchRequest) => {
    
      /// To fetch everything, here we can parse string to 'q' whish could be anythignand it will return data.
      var url = `https://newsapi.org/v2/everything?q=${fetchRequest}&from=2023-01-05&sortBy=popularity&apiKey=3fec86d867ac4f2c9b48420cf0849a3c`; 
      

      /// To fetch data category wise, we can use this.
      // var url = `https://newsapi.org/v2/top-headlines?category=${fetchRequest}&apiKey=3fec86d867ac4f2c9b48420cf0849a3c`;


      console.log(url);
      const req =  new Request(url);  
      // fetch(req)
      // .then((response) => response.json())
      // .then((data) =>{ console.log(data.articles);});
      const response = await fetch(req);
      const data = await response.json();
      console.log(data.articles);
      setData(data.articles);
      data.articles.map( (n) =>  { console.log(n.author);  })
    
    }
    
    console.log(data);
    useEffect( () => { fetchData('general')},[])




  return (
    <div className=' flex justify-between items-center h-20 w-full  absolute z-10 text-white px-8 bg-black '> 
    <ul className='hidden md:flex w-full m-auto justify-evenly lg:w-7/12  2xl:w-6/12'>
        <li onClick={ () => {fetchData('general');}}   >Home </li>
        <li onClick={ () => {fetchData('technology');}}   >Tech </li>
        <li onClick={ () => {fetchData('science');}}      >Science</li>
        <li onClick={ () => {fetchData('sports');}}       >Sports</li>
        <li onClick={ () => {fetchData('health');}}       >Health</li>
        <li onClick={ () => {fetchData('business');}}     >Business </li>
        <li onClick={ () => {fetchData('entertainment');}}   > Entertainment</li>
    </ul>
    
{/* 
    { 
      /// "?." is used as NULL checker in js.
      data?.map((n , index)=>{
        return(
          <Card key={index} name={n.author} />
        )
      })
     } */}
   
    {/* Hamburger */}
    <div onClick={handleNav} className='md:hidden z-10'>
    {  nav ? <AiOutlineClose size={20}/>:<HiOutlineMenuAlt4 size={20}/> }
    
    </div>

    <div  onClick={handleNav}  className={ nav ? 'absolute left-0 text-black top-0 h-screen w-full bg-gray-100/90 px-4 py-7 flex justify-evenly	 flex-col ' :  'absolute left-[-100%] h-full w-full bg-gray-100/90 px-4 py-7 flex flex-col'}>
    <ul className=' h-full contents'>
       
        <li className="border-b" >Home</li>
        <li className="border-b" >Tech </li>
        <li className="border-b" >Sports</li>
        <li className="border-b" >Space</li>
        <li className="border-b" >Crypto </li>
        <li className="border-b" >Contact</li>


    </ul>
    </div>
    </div>

  )
}

export default Navbar;