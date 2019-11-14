import React from 'react';
import { GridLoader } from 'react-spinners';
import { css } from '@emotion/core';
import Modal from 'react-modal';
import './styles.scss';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        width: 'unset',
        padding: '0px',
        borderRadius: '8px',
        border: 'none',
        background: 'transparent',
    },
};

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    border-radius: 0px;
    & > div {
        border-radius: 0px !important;
    }
`;

export default function({ loading }) {
    return (
        <Modal isOpen={loading} style={customStyles}>
            {/* <GridLoader css={override} color={'#d54526'} radius={0} size={15} loading={true} /> */}
            <div class="sk-cube-grid">
                <div class="sk-cube sk-cube1" />
                <div class="sk-cube sk-cube2" />
                <div class="sk-cube sk-cube3" />
                <div class="sk-cube sk-cube4" />
                <div class="sk-cube sk-cube5" />
                <div class="sk-cube sk-cube6" />
                <div class="sk-cube sk-cube7" />
                <div class="sk-cube sk-cube8" />
                <div class="sk-cube sk-cube9" />
            </div>
        </Modal>
    );
}
