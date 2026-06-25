import React from "react";
import "./BlockTextTow.css";


export const BlockTextTow = ({info}) => {

    return (
        <div className="block">
            <p className="block__header-Tow-text info">
                {info}
            </p>
        </div>
    )
}