import React, { memo } from 'react';
import styles from './style.module.scss';

export const TimeSplitContainer = memo(({timelogs})=> timelogs.isEnable && timelogs.logs.length &&
<div className={styles.timesplitContainer}>
    <div className={styles.timesplitListContainer}>
        <ul>
            {
                timelogs.logs.map((log,i)=><li id={`log-${i}`}>
                    <div className={styles.splitnumber}>#{i+1}</div>
                    <div className={styles.splitTime}>{log.time}</div>
                    <div className={styles.splitEvent}>{log.event}</div>
                </li>)
            }
        </ul>
    </div>
</div> || null)