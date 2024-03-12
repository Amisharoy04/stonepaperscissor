let userscore=0;
let compscore=0;

const rock = document.querySelector("#rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

const userscorepara=document.querySelector("#userscore");
const compscorepara=document.querySelector("#compscore");

const genCompChoice=() =>{
    const option=["rock","paper","scissors"];
   const randIdx= Math.floor(Math.random()*3);
    return option[randIdx];
}

const drawgame=() =>{
    container.innerText="Game was draw,Play again.";
    container.style.backgroundColor="pink";
}

const showwinner=(userwin,userchoice,compChoice) =>{
    const resultMessage=userwin?"you win!":"you lose";
    const compChoiceMessage=`computer chose ${compChoice}`;

    container.innerText=`${resultMessage} ${compChoiceMessage}`;
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore; 
    container.style.backgroundColor="green";
  }
        else{
            compscore++;
            compscorepara.innerText=compscore;
            container.style.backgroundColor="red";

        }
}
const playgame= (userchoice) =>{

    const compChoice=genCompChoice();

    if(userchoice===compChoice){
drawgame();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compChoice==="paper"?false:true;
        }else if (userchoice==="paper"){
            userwin=compChoice==="scissor"?false:true;
        }else{
            userwin=compChoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,compChoice);
    }

};


rock.addEventListener("click", () => {
    // Handle click on rock
    const userchoice=rock.getAttribute("id");
    playgame(userchoice);
    // Add your logic for rock selection
});

paper.addEventListener("click", () => {
    // Handle click on paper
    const userchoice=paper.getAttribute("id");
    playgame(userchoice);
    // Add your logic for paper selection
});

scissor.addEventListener("click", () => {
    // Handle click on scissor
    const userchoice=scissor.getAttribute("id");
    playgame(userchoice);
    // Add your logic for scissor selection
});

let container = document.querySelector(".container");
container.addEventListener("click", () => {
    console.log("Container clicked!");
});








