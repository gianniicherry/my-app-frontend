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

        function onAddShow(newShow){
            const updatedShows = 
            bands.map((band) => {
                const {id, shows} = band
                if(id === newShow.band_id){
                    const updatedBand = {
                    ...band, shows: [...shows, newShow]
                    }
                return updatedBand
                } else {
                    return band
                }
            })
            setBands(updatedShows)
        }

        function onEditBand(newDescription){
           const updatedBands = bands.map((band) => {
                if(band.id === newDescription.id){
                   return newDescription
                }
                else {
                    return band
                }
            })
            setBands(updatedBands)
        }
  

    return (
    <div>
        <div><Form onAddBand={handleAddBand}/></div>
        <div>{bands.map((band)=> (
            <Band key={band.id} band={band} onAddShow={onAddShow} onEditBand={onEditBand}/>
        ))}</div>
    </div>
)};

export default BandShows;