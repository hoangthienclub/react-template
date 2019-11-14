import React from 'react';
import './styles.scss';

export default function({ title, type}) {
    return (
        <div className='input-common'>
            <div className='label'>{title}</div>
            <input
                type={type}
            />
        </div>
    );
}
