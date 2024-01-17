let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newbtn=document.querySelector("#newgame");
let msg=document.querySelector("#msg");
let msgcontainer=document.querySelector(".msg-container");

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

let turn0=true;

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked.")
        if(turn0==true){
        box.innerText='O';
        turn0=false;
        }
        else{
            box.innerText='X';
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    })

})

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showwinner=(winner)=>{
    msg.innerText=`Winner is: ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}

const checkWinner=()=>{
    for(pattern of winPatterns){
        let v1=boxes[pattern[0]].innerText;
        let v2=boxes[pattern[1]].innerText;
        let v3=boxes[pattern[2]].innerText;
       
        if(v1!="" && v2!="" &&v3!=""){
        if(v1==v2 && v2==v3){
            console.log("winner");
            showwinner(v1);
        }
    }
    }
}

const resetgame=()=>{
    turn0=true;
    enableboxes();
    msgcontainer.classList.add("hide");
}

newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);
