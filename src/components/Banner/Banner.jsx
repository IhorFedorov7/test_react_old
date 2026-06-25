import React from "react";
import "./Banner.css";


export const Banner = ({header, img}) => {

    return (
        <div className="content__banner">
            <div className="banner__title">
                <h1 className="title">{header}</h1>
            </div>
            <img className="banner"
                src={"https://lh3.googleusercontent.com/d/" + img[0]} 
                alt={img[1]}
            />
        </div>
    )
}