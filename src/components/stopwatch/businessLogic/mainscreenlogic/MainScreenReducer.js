import {Properties} from '../../constants/properties';

export const MainScreenReducer = (state, action)=>{
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
            return {...state, timeLogs: {isEnable: state.timeLogs.isEnable, logs: action.payload}};
        case Properties.timeLogs.isEnable:
            return {...state, timeLogs: {isEnable: true, logs: action.payload}};
        case Properties.splitedTime:
            return {...state, splitedTime: { ...state.splitedTime, time: action.payload}};
        default:
            return state
    }
}