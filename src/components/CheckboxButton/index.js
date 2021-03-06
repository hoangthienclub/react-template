import React from "react";
import "./styles.scss"

export default ({onChange, checked, className, disabled = false, value, size = 25, name}) => {
    return (
        <label className="checkbox-button-container" style={size?{height: size, width: size}:{}}>
            <input 
                type="checkbox"
                name={name}
                value={value} 
                checked={checked} 
                className={`checkbox-button ${disabled ? 'disabled' : ''} ${className ? className : ''}`} 
                onChange={disabled ? ()=>{} : onChange}
            />
            <span className="checkmark"></span>
        </label>
    )
}