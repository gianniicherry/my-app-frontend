import React, {useState} from "react"

function Form({onAddBand}) {
    const [name, setName] = useState("")
    const [genre, setGenre] = useState("")
    const [description, setDescription] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        fetch("http://localhost:9292/bands",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                description: description,
                genre: genre
                }),
          })
            .then(r => r.json())
            .then(newBand => onAddBand(newBand));
            e.target.reset()
    }


return (
<div>
    <div><h2>Add a Band</h2></div>
    <form onSubmit={handleSubmit}>
        <div>
        <label> Enter your Band:
          <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          >
          </input>
        </label>
        </div>
        <div>
        <label>Enter your Genre:
          <input 
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          >
          </input>
        </label>
        </div>
        <div>
        <label>describe your band:
          <input 
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          >
          </input>
        </label>
        </div>
        <button>Add Band</button>
      </form>
</div>
)}

export default Form;
