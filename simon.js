let  gameseq = [];
let  userseq = [];

let btns = ["yellow","red" ,"green","purple"];
let started = false;
let level =0;
let h2 = document.querySelector("h2");


document.addEventListener("keypress", function () {
    if(started==false)
    {
        console.log("gamE is start")
        started = true;

         levelup();
    }
});
function btnflash(btn){
 btn.classList.add("flash");
 setTimeout(function (){
    btn.classList.remove("flash");
 },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
       btn.classList.remove("userflash");
    },250);
   }
 
function levelup(){
    userseq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`)
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randbtn);
    gameseq.push(randColor)
    console.log(gameseq)
    btnflash(randbtn);
}
function checkAns(idx){
    
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length === gameseq.length){
            setTimeout(levelup,1000)
        }
    }
        else{
            h2.innerHTML = `game is over Your score is<b>${level}</b><br> press any key to start`
            reset();
        }
    }

   
function btnpress(){
    // console.log(this)
    let btn = this;
    userflash(btn)
    usercolor = btn.getAttribute("id")
    userseq.push(usercolor)
    checkAns(userseq.length-1);
}
let allbtns = document.querySelectorAll(".btn")
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset() {
     started = false;
     gameseq = [];
     userseq = [];
     level = 0;
}