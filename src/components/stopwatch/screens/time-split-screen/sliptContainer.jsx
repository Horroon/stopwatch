import React, { memo } from 'react';
import styles from './style.module.scss';

export const TimeSplitContainer = memo(()=> 
<div className={styles.timesplitContainer}>
    <div className={styles.timesplitListContainer}>
        <ul>
            <li>
                <div className={styles.splitnumber}>#1</div>
                <div className={styles.splitTime}>00:00:00.000</div>
                <div className={styles.splitEvent}>Paused</div>
            </li>
        </ul>
    </div>
</div>)