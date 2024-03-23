const run = function(){
    if(false){
        return "this is true"
    }
    return "this is false"
}
console.log(run());
const wakeUp = function(wakeUpHour){
    if (wakeUpHour < 8){
        return "it's ok"
    }else if(wakeUpHour >= 8){
        return "you'll get punish"
    }
}
console.log(wakeUp(8))

