import React from 'react';
import './styles.scss';

export default function({ title }) {
    return (
        <button className='btn-common'>{title}</button>
    );
}
