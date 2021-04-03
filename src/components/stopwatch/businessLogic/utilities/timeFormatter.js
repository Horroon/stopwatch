export function TimeFormatter(time) {
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
