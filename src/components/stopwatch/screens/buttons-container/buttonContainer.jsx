import React, { memo } from 'react';
import {Button} from '../../button/button';
export const ButtonsContainer = memo(({styles})=>{

    const method = ()=>{alert("You click me ")}
    return <div className={styles.buttonContainer}>
                <div className={styles.buttonwrapper}>
                    <div>
                        <Button id="start" text="start" onClick={method} classNames="startbutton" />
                    </div>
                    <div>
                        <Button id="split" text="Split" onClick={method} classNames="splitbutton" />
                    </div>
                    <div>
                        <Button id="reset" text="Reset" onClick={method} classNames="resetbutton" />
                    </div>
                </div>
         </div>
})