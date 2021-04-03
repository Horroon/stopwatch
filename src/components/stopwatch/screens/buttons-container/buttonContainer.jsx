import React, { memo } from 'react';
import {Button} from '../../button/button';

export const ButtonsContainer = memo(({styles, buttons, buttonHandler})=>(<div className={styles.buttonContainer}>
                <div className={styles.buttonwrapper}>
                    <div>
                        <Button {...buttons.first} onClick={()=>buttonHandler(buttons.first.id)} />
                    </div>
                    <div>
                        <Button {...buttons.second} onClick={()=>buttonHandler(buttons.second.id)} />
                    </div>
                    <div>
                        <Button {...buttons.third}  onClick={()=>buttonHandler(buttons.third.id)} />
                    </div>
                </div>
         </div>
),)