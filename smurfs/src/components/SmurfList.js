import React from 'react';

const SmurfList = ({ smurf, DeleteSmurf }) => {
    return (
        <div>
            <h4>{smurf.name}</h4>
            <p>{smurf.age}</p>
            <p>{smurf.height}</p>
            <button onClick={() => DeleteSmurf(smurf.id)}>Delete Smurf</button>
        </div>
    )
}

export default SmurfList;