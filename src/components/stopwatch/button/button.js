import React from 'react';
import styles from './style.module.scss';


export const Button = ({id,text, classNames, disable ,onClick})=>{
    return(
    <div className={styles.buttonContainer}>
        <button id={id} className={`${styles.button} ${classNames} ${disable && 'disabled'}`} onClick={onClick} disabled={disable}>{text}</button>
    </div>
)}