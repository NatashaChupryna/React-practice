import React from "react";

export const Cat = ({cat}) =>{
    return(
        <div>
            <img src={cat.url} alt="" style={{width : '500px'}}/>
            {/* <div>
                <p> Name : {cat.name}</p>
                <p> Breed for : {cat.name}</p>
                <p>Temperament : {cat.name}</p>
            </div> */}
        </div>
    )
}