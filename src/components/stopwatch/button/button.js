import React from 'react';
import styles from './style.module.scss';


export const Button = ({id,text, classNames, onClick})=>(
    <div className={styles.buttonContainer}>
        <button id={id} className={`${styles.button} ${classNames}`} onClick={onClick}>{text}</button>
    </div>
)