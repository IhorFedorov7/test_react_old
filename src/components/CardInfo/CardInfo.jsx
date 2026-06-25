import React from "react";
import "./CardInfo.css";


export const CardInfo = ({header, info}) => {
    
    if (!header || !info) return;

    return (
        <div className="block">
            <div className="card__info">
                <h2>
                    {header}
                </h2>
                <p >
                    {info}
                </p>
            </div>
        </div> 
    )
}