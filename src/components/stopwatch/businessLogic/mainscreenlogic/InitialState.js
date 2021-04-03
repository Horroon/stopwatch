import {Properties} from '../../constants/properties';

export const InitialState = {
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