import React from "react";

const Card = ({name, email, id}) => { //see react props explanation
    return (
        <div className='tc bg-light-green dib br3 grow ma2 bw2 shadow-5'>
            <img alt='robot' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>      
    );
}  
export default Card;    