export const ReturnTimeLog = (displayTime,event=null)=>({
            time:`${displayTime.hours}:${displayTime.minutes}:${displayTime.seconds}:${displayTime.miliseconds}${displayTime.microseconds}`,
            event,
})