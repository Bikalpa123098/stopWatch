// alert("HI")

let hour = document.querySelector("#hour");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");
let mm = document.querySelector("#mm");
let k = document.querySelector("#stop");
let pause = document.querySelector("#pause");
let interval;
k.innerText = "Start";
let i = 0,
  h = 0,
  m = 0,
  s = 0
d=0;
pause.addEventListener("click", () => {
  if (k.innerText == "Stop") {
    if (   pause.innerText == "Resume") {
      move()
      pause.innerText = "Pause";
    }
   else if (      pause.innerText == "Pause") {
    clearInterval(interval)
      pause.innerText = "Resume";
    }
  }
});


k.addEventListener("click",()=>{
    if(k.innerText=='Start'){
        move();
        k.innerText="Stop";
    }else if(k.innerText=='Stop'){
 clearInterval(interval);
 mm.innerText = "00";
 sec.innerText = "00";
 min.innerText = "00";
 hour.innerText = "00";
  i = 0,
  h = 0,
  m = 0,
  s = 0;
k.innerText="Start"
pause.innerText = "Pause"
    }
})



function move() {
  interval = setInterval(() => {
    i++;
    i >= 10 ? i : (i = `0${i}`);
    mm.innerText = i;
    if (i >= 99) {
      i = 0;
      s++;
      s >= 10 ? s : (s = `0${s}`);
      sec.innerText = s;
      if(s>=59){
        s=0;
        m++;
        m>=10?m:(m=`0${m}`);
        min.innerText=m;
        if(m>=59){
            m=0;
            h++;
            h>=10? h: (h=`0${h}`)
            hour.innerText=h;
            if(h>=23){
                h=0;
                d++;
                console.log(`Its day ${d}`);
            }
        }
      }
    }
  }, 10);
}
