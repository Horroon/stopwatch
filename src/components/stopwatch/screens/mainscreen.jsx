import React, { memo, useReducer } from 'react';
import {TimeSplitContainer} from './time-split-screen/sliptContainer';
import {ButtonsContainer} from './buttons-container/buttonContainer';
import {DisplayTime} from './display-time/index';
import styles from './style.module.scss';


const Properties = {
    displayTime: "displayTime",
    splitedTime:{

    },
    timeLogs:{
     isEnable: 'isEnable',
     logs: 'logs',   
    },
    buttons: {
        start:{
            id: 'start',
            text: 'Start',
            classNames: 'startbutton',
        },
        pause:{
            id: 'pause',
            text: 'Pause',
            classNames: 'pausebutton',
        },
        split: {
            id: 'split',
            text: 'Split',
            classNames: 'splitbutton',
        },
        reset:{
            id: 'reset',
            text: 'Reset',
            classNames: 'resetbutton',
        }
    }
}

const InitialState = {
    displayTime: {
        hours:"00",
        minutes:"00",
        seconds: "00",
        miliseconds: "0",
        microseconds: "00"
    },
    splitedTime: {
        initial: "Split Time",
        time: ""
    },
    timeLogs: {
        isEnable: false,
        logs:[{time:'00:12:123', event: 'pause'}]
    },
    buttons:{
        first: {
            id: Properties.buttons.start.id,
            text: Properties.buttons.start.text,
            disable: false,
            classNames: Properties.buttons.start.classNames
        },
        second: {
            id: Properties.buttons.split.id,
            text: Properties.buttons.split.text,
            disable: true,
            classNames: Properties.buttons.split.classNames
        },
        third:{
            id: Properties.buttons.reset.id,
            text: Properties.buttons.reset.text,
            disable: true,
            classNames: Properties.buttons.reset.classNames
        }
    }
}

const reducer = (state, action)=>{
    switch(action.type){
        case Properties.displayTime:
            return {...state, displayTime: action.payload};
        case Properties.buttons.start.id:
            return {...state, buttons: {...state.buttons, first: {...action.payload}}};
        case Properties.buttons.pause.id:
            return {...state, buttons: {...state.buttons, first: {...action.payload}}};
        case Properties.buttons.split.id:
            return {...state, buttons: {...state.buttons, second: {...action.payload}}};
        case Properties.buttons.reset.id:
            return {...state, buttons: {...state.buttons, third: {...action.payload}}};
        case Properties.timeLogs.logs:
            return {...state, timeLogs: {isEnable: !state.timeLogs.isEnable, logs: action.payload}};
        default:
            return state
    }
}

let startTime;
let elapsedTime = 0;
let timerInterval;

function TimeFormatter(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);
  
    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);
  
    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);
  
    let diffInMs = (diffInSec - ss) * 10;
    let ms = Math.floor(diffInMs);
  
    let diffInMIS = (diffInMs - ms) * 100;
    let mis = Math.floor(diffInMIS);

    let formattedHH = hh.toString().padStart(2, "0");
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms;
    let formattedMIS = mis.toString().padStart(2,"0");
  
    return {
        hours:formattedHH,
        minutes: formattedMM,
        seconds: formattedSS,
        miliseconds: formattedMS,
        microseconds: formattedMIS
    }
  }

export const MainScreen = memo(()=>{

    const [state,setState] = useReducer(reducer,InitialState);
   
    const TimerMethod = (status)=>{
        if(status){
            startTime = Date.now() - elapsedTime;
            timerInterval = setInterval(function printTime() {
              elapsedTime = Date.now() - startTime;
              setState({type: Properties.displayTime, payload: TimeFormatter(elapsedTime)})
            }, 10);
        }
       else{
           clearInterval(timerInterval)
       }
    }

    const buttonHandler = (id)=>{
        switch(id){
            case Properties.buttons.start.id:
                return (function(){
                    TimerMethod(true)
                    setState({
                        type: Properties.buttons.start.id,
                        payload: {
                             id: Properties.buttons.pause.id,
                             text: Properties.buttons.pause.text,
                             disable: false,
                             classNames: Properties.buttons.pause.classNames
                         } 
                     });
                     setState({
                        type: Properties.buttons.split.id,
                        payload: {
                             id: Properties.buttons.split.id,
                             text: Properties.buttons.split.text,
                             disable: false,
                             classNames: Properties.buttons.split.classNames
                         } 
                     });
                })()
            case Properties.buttons.pause.id:
                return (()=>{
                    TimerMethod(false)
                    setState({
                        type: Properties.buttons.pause.id,
                        payload: {
                             id: Properties.buttons.start.id,
                             text: Properties.buttons.start.text,
                             disable: false,
                             classNames: Properties.buttons.start.classNames
                         } 
                     });
                })()
            case Properties.buttons.split.id:
                return (function(){
                    setState({
                        type: Properties.timeLogs.logs,
                        payload: [{time:'00:33:00:983', event:'split'}]
                     });
                    setState({
                        type: Properties.buttons.split.id,
                        payload: {
                            ...state.buttons.second,
                            disable: true
                         } 
                     });
                     setState({
                        type:Properties.buttons.reset.id,
                        payload: {
                            ...state.buttons.third,
                            disable: false
                         } 
                     });
                })()
            case Properties.buttons.reset.id:
                return (function(){
                    setState({
                        type:Properties.timeLogs.logs,
                        payload: []
                     });
                    setState({
                        type:Properties.buttons.pause.id,
                        payload: {
                             id: Properties.buttons.start.id,
                             text: Properties.buttons.start.text,
                             disable: false,
                             classNames: Properties.buttons.start.classNames
                         } 
                     });
                    setState({
                        type: Properties.buttons.split.id,
                        payload: {
                            ...state.buttons.second,
                            disable: true
                         } 
                     });
                     setState({
                        type: Properties.buttons.reset.id,
                        payload: {
                            ...state.buttons.third,
                            disable: true
                         } 
                     });
                })()
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