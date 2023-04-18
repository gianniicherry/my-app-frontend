import React, {useState,useEffect} from "react"
import Band from "./Band"
import Form from "./Form"


function BandShows(){

    const [bands, setBands] = useState([])
  
 

    useEffect(()=>{
      fetch('http://localhost:9292/bands')
      .then(r => r.json())
      .then(data => setBands(data))
    },[])
  
  
  
  
      function handleAddBand(newBand){
          setBands([...bands, newBand])
        }
  

    return (
    <div>
        <div><Form onAddBand={handleAddBand}/></div>
        <div>{bands.map((band)=> (
            <Band key={band.id} band={band}/>
        ))}</div>
    </div>
)};

export default BandShows;