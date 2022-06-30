function humanReadable(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds - hours * 3600) / 60);
    let ss = (seconds - hours * 3600 - minutes * 60);
    
  if(seconds<0 || seconds>359999){
    return "invalid input";
  }else{
   
    return `${hours}:${minutes}:${ss}`;
  }
}
console.log(humanReadable(359999));