
export const PauseButtonCase = ({TimerMethod, setState, Properties, ReturnTimeLog, state})=>{
    TimerMethod(false)
    setState({
        type: Properties.buttons.reset.id,
        payload: {
            ...state.buttons.third,
             disable: false,
         } 
     });
     setState({
        type: Properties.buttons.split.id,
        payload: {
            ...state.buttons.second,
             disable: true,
         } 
     });
     setState({
        type: Properties.buttons.pause.id,
        payload: {
             id: Properties.buttons.start.id,
             text: Properties.buttons.start.text,
             disable: false,
             classNames: Properties.buttons.start.classNames
         } 
     });
     setState({
         type: Properties.timeLogs.logs,
         payload: [...state.timeLogs.logs,ReturnTimeLog(state.displayTime, 'Pause')]
     })
}

