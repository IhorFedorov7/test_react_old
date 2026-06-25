import React from "react";
import "./Banner2.css";


export const Banner2 = ({header, img}) => {

    return (
        <div className="content__banner">
            <div className="banner__title">
                <h2 className="title">{header}</h2>
            </div>
            <img className="banner"
                src={"https://lh3.googleusercontent.com/d/" + img[0]} 
                alt={img[1]}
            />
        </div>
    )
}