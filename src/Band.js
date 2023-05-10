import React, {useState} from "react"

function Band({band, onAddShow, onEditBand}){

        const [showLocation, setShowLocation] = useState("")
        const [showDescription, setShowDescription] = useState("")
        const [newShowDescription, setNewShowDescription] = useState("")
        const [showDate, setShowDate] = useState("")
        const [editBand, setEditBand] = useState(false)


        function handleAddShow(e){
            e.preventDefault()
            fetch(`http://localhost:9292/bands/${band.id}/shows`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                      location: showLocation,
                      description: showDescription,
                      show_date: showDate,
                      band_id: band.id
                      }),
            })
            .then((r) => r.json())
            .then(newShow => onAddShow(newShow))
            e.target.reset()
        }

        function handleDeleteClick() {
            fetch(`http://localhost:9292/bands/${band.id}`, {
              method: "DELETE",
            })
        }

        function handleEditBand(){
            setEditBand((editBand)=> !editBand)
        }

        function onEditBandDescription(e){
            e.preventDefault()
            fetch(`http://localhost:9292/bands/${band.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                      description: newShowDescription,
                      }),
            })
            .then((r) => r.json())
            .then(newDescription => onEditBand(newDescription))
            e.target.reset()
            handleEditBand()
        }


    return (
    <div>
        <div>
            <h1>{band.name}</h1>
            <button onClick={handleDeleteClick}>Remove Band</button>
            <button onClick={handleEditBand}>Edit Band</button>
            <h3>{band.genre}</h3>
            <p>
            {editBand ? <form onSubmit={onEditBandDescription}>
                <div>
                <label>
                <input type="text"
                onChange={(e) => setNewShowDescription(e.target.value)}
                ></input>
                </label> 
                </div>
                <button>submit</button>
                </form>
            : band.description}
            </p>
        </div>
        <div>
            <h3>Add a Show</h3>
            <form onSubmit={handleAddShow}>
                <div>
                    <label> Show location
                        <input type="text" 
                        value={showLocation} 
                        onChange={(e) => setShowLocation(e.target.value)}
                        > 
                        </input>
                    </label>
                </div>
                <div>
                    <label> Show description
                        <input type="text" 
                        value={showDescription} 
                        onChange={(e)=> setShowDescription(e.target.value)}
                        > 
                        </input>
                    </label>
                </div>
                <div>
                    <label> Show date
                        <input type="text" 
                        value={showDate} 
                        onChange={(e)=> setShowDate(e.target.value)}
                        >
                        </input>
                    </label>
                </div>
            <button>Add Show</button>
            </form>
        </div>
        <div>
            <ul>
                {band.shows.map((show)=>(
                    <ul key={show.id}>
                        {show.location} - {show.description} - {show.show_date}
                    </ul>
                ))}
            </ul>
        </div>
    </div>
    )
};

export default Band