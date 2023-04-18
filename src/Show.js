import React from "react"

function Show({show}) {
    return (
        <div>
            <p>
            {show.location}
            {show.description}
            {show.showDate}
            </p>
        </div>
    )
}

export default Show