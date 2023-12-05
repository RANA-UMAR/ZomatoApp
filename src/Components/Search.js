import React, { useEffect, useState } from 'react'
import Fooddata from './FoodData'
import "./Style.css"
import Form from 'react-bootstrap/Form';
import Cards from './Cards';
import Set from './Set';

const Search = () => {
    const[fdata,Setfdata]=useState(Fooddata);
    console.log(fdata);
    const[copydata,Setcopydata]=useState([]);
    console.log(copydata);
    
    
    const zomatologo = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
    
    useEffect(()=>{
      setTimeout(()=>{

        Setcopydata(Fooddata)
      },3000)
    },[])

    const changedata=(e)=>{

      const getChangedata = e.toLowerCase();
      if (getChangedata === ""){
        Setcopydata(fdata);
      }
      else{
        let storeddata = copydata.filter((ele,k)=>{
          return ele.rname.toLowerCase().match(getChangedata)
        })
        Setcopydata(storeddata)
      }
    }



  return (
    <>
    <div className='container d-flex justify-content-between align-items-center'>
    <img src={zomatologo} alt="" style={{width:"8rem",position:"relative",left:"2%",cursor:"pointer"}} />
    <h2 style={{color:"#1b1464", cursor:"pointer"}}>Search Filter App</h2>
    </div>

    <div>

    <Form className='d-flex justify-content-center align-items-center'>
      <Form.Group className="mx-2 col-lg-4" controlId="formBasicEmail">
        <Form.Control type="text" onChange={(e)=>changedata(e.target.value)} placeholder="Search Restraunt" />
      </Form.Group>

<button className='btn text-light col-lg-1' style={{background:"#ed4c67"}}>Submit</button>
      </Form>

<section className=' mt-4 container'>

    <h2 className='px-4 ' style={{fontWeight:"400"}}>
        Resturants Open in Gujranwala
    </h2>

    <div className="row mt-2 d-flex justify-content-around align-items-center">
    {copydata&&copydata.length ? <Cards food={copydata}/> : <Set sdata={fdata}/>}
    </div>
</section>
    </div>
    
    </>
    
  )
}

export default Search