import React, { memo } from 'react';
import {TimeSplitContainer} from './time-split-screen/sliptContainer';
import {ButtonsContainer} from './buttons-container/buttonContainer';
import {DisplayTime} from './display-time/index';
import styles from './style.module.scss';

export const MainScreen = memo(()=>{
    return <div className={styles.stopWatchBody}>
        <DisplayTime styles={styles} />
        <div className={styles.splitTimeSmall}>
            <h5>Split Time</h5>
        </div>
        <ButtonsContainer styles={styles} />
        <TimeSplitContainer />
    </div>
})