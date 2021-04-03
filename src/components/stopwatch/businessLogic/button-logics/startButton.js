
export const StartButtonCase = ({TimerMethod, setState, Properties})=>{
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
}
