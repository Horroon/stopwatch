import React, { memo } from 'react';

export const DisplayTime = memo(({styles})=> 
<div className={styles.timemainshow}>
    <h3>00:00:00.0<span>00</span></h3>
</div>)