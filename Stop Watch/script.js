const time = document.getElementById("time");
let count = 0;
let Interval = null;

const setTime = ()=>
{
    const minutes = Math.floor(count/60);
    const seconds = count % 60;
    time.textContent = `${paddingValue(minutes)} : ${paddingValue(seconds)}`;
}
function paddingValue(value)
{
    return String(value).padStart(2,"0");
}
const timer = ()=>
{
    count++;
    setTime();
}
const StartClock = ()=>
{
    if(Interval) StopClock();
    Interval = setInterval(timer,1000);
}
const StopClock = ()=>
{
    clearInterval(Interval);
}
const ResetClock = ()=>
{
    count = 0;
    StopClock();
    setTime();
}