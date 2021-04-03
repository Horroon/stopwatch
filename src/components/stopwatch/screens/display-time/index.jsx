import React, { memo } from 'react';

export const DisplayTime = memo(({styles, displayTimes})=> 
<div className={styles.timemainshow}>
    <h3>{displayTimes.hours}:{displayTimes.minutes}:{displayTimes.seconds}.{displayTimes.miliseconds}<span>{displayTimes.microseconds}</span></h3>
</div>)