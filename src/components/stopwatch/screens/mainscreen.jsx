import React, { memo, useReducer } from 'react';
import {TimeSplitContainer} from './time-split-screen/sliptContainer';
import {ButtonsContainer} from './buttons-container/buttonContainer';
import {DisplayTime} from './display-time/index';
import styles from './style.module.scss';

import {
    StartButtonCase, 
    PauseButtonCase, 
    SplitButtonCase, 
    ResetButtonCase, 
    TimeFormatter, 
    ReturnTimeLog,
    InitialState,
    MainScreenReducer,
} from '../businessLogic/index';

import {Properties} from '../constants/properties'






let startTime;
let elapsedTime = 0;
let timerInterval;

export const MainScreen = memo(()=>{

    const [state,setState] = useReducer(MainScreenReducer,InitialState);
   
    const TimerMethod = (status)=>{
        if(status && status !== 'reset'){
            startTime = Date.now() - elapsedTime;
            timerInterval = setInterval(function printTime() {
              elapsedTime = Date.now() - startTime;
              setState({type: Properties.displayTime, payload: TimeFormatter(elapsedTime)})
            }, 10);
        }
        else if(status === 'reset'){
           elapsedTime=0
           clearInterval(timerInterval)
           setState({type: Properties.displayTime, payload: InitialState.displayTime})
        }
       else{
           clearInterval(timerInterval)
       }
    }

    const buttonHandler = (id)=>{
        switch(id){
            case Properties.buttons.start.id:
                return StartButtonCase({TimerMethod, setState, Properties});
            case Properties.buttons.pause.id:
                return PauseButtonCase({TimerMethod, setState, Properties, ReturnTimeLog, state})
            case Properties.buttons.split.id:
                return SplitButtonCase({setState, Properties, ReturnTimeLog,state})
            case Properties.buttons.reset.id:
                return ResetButtonCase({TimerMethod, setState, state,Properties})
        }
    }
   
    return <div className={styles.stopWatchBody}>
        <DisplayTime styles={styles} displayTimes={state.displayTime} />
        <div className={styles.splitTimeSmall}>
            <h5>{state.splitedTime.time && state.splitedTime.time || state.splitedTime.initial}</h5>
        </div>
        <ButtonsContainer styles={styles} buttons={state.buttons} buttonHandler={buttonHandler} />
        <TimeSplitContainer timelogs={state.timeLogs}/>
    </div>
})