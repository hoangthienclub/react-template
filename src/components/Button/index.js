import React from 'react';
import './styles.scss';

export default function({ title, type }) {
    return (
        <button 
            className='btn-common'
            type={type}
        >{title}</button>
    );
}
