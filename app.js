let userscore=0;
let compscore=0;

let userchoicescore=document.querySelector(".user-score");
let compchoicescore=document.querySelector(".comp-score");

let userdetail=document.querySelector(".user-select");
let compdetail=document.querySelector(".comp-select");

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector(".msg");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
       let userchoice=choice.getAttribute("id");
       playgame(userchoice);
    })
})

const gencompchoice=()=>{
    let options=["rock","paper","scissor"]
  let randomidx=Math.floor(Math.random()*3)
  return(options[randomidx])
  
}
const drawGame=()=>{
    console.log("Game was draw.")
    msg.innerText="Draw Game";
    msg.style.backgroundColor="black"
}
const Details=(userchoice,compchoice)=>{
   userdetail.innerText=`User Choice: ${userchoice}`;
   userdetail.style.backgroundColor="aquamarine"
   compdetail.innerText=`Comp Choice: ${compchoice}`;
   compdetail.style.backgroundColor="aquamarine"
}
const showWinner=(userwin)=>{
    if(userwin){
        userscore++;
        userchoicescore.innerText=userscore;
        msg.innerText="Congratulation! You Won";
        msg.style.backgroundColor="green"
    }
    else{
        compscore++;
        compchoicescore.innerText=compscore;
        msg.innerText="Oops! You Lose";
        msg.style.backgroundColor="red"
    }
}
const playgame=(userchoice)=>{
    console.log(`user choice; ${userchoice}`)
    let compchoice=gencompchoice();
     console.log(`comp choice; ${compchoice}`)


     if(userchoice===compchoice){
        drawGame();

     }else{
        let userwin=true;
        if(userchoice==="rock"){
           userwin= compchoice==="paper"?false:true;
        }else if(userchoice==="paper"){
            userwin=compchoice==="rock"?true:false;
        }else {
            userwin=compchoice==="paper"?true:false;
        }
        showWinner(userwin);
        Details(userchoice,compchoice);

     }

}