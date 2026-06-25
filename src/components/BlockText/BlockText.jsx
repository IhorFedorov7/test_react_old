import React from "react";
import "./BlockText.css";


export const BlockText = ({info}) => {

    return (
        <div className="block">
            <p className="block__header-text info">
                {info}
            </p>
        </div>
    )
}