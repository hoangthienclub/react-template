import React from "react";
import "./styles.scss"

export default ({onChange, checked, className, disabled, value, size = 25}) => {
    return (
        <div className="checkbox-button-container" style={size?{height: size, width: size}:{}}>
            <input type="checkbox" value={value} checked={checked} className={`checkbox-button ${disabled ? 'disabled' : ''} ${className ? className : ''}`} onChange={disabled ? ()=>{} : onChange}/>
            <span className="checkmark"></span>
        </div>
    )
}