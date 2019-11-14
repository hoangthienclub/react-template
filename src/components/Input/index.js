import React from 'react';
import './styles.scss';

export default function({ title, type, onChange, name, value }) {
    return (
        <div className='input-common'>
            <div className='label'>{title}</div>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}
