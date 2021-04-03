export const ResetButtonCase = ({TimerMethod, setState, state, Properties})=>{
    TimerMethod('reset')
    setState({
        type: Properties.splitedTime,
        payload: ''
    })
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
}