let userscore=0;
let compscore=0;

let rock=document.querySelector("#rock");
let paper=document.querySelector("#paper");
let scissor=document.querySelector("#scissor");

const compchoice= () =>{
    const randnum=Math.floor(Math.random()*3);
    console.log(randnum);
}

let userwin;
const playgame= () =>{
    if(userscore==="rock"){
        userwin=compscore==="drawgame";}
        else{ userwin=true;}
    if (userscore==="paper"){
    userwin=compscore==="scissor" ?false:true;    
    } else if(userscore==="scissor")
    userwin=compscore==="paper" ?false:true;
    else{
        userwin=compscore==="rock" ?false:true; 
    }

    }

    rock.addEventListener("click", () => {
        // Handle click on rock
        const userchoice=rock.getAttribute("id");
        playgame(userchoice);
        // Add your logic for rock selection
    });

    paper.addEventListener("click", () =>{
        const userchoice=paper.getAttribute("id");
        playgame(userchoice);
    });

    scissor.addEventListener("click", () =>{
        const userchoice=scissor.getAttribute("id");
        playgame(userchoice);
    });


let container=document.querySelector(".container");
container.addEventListener("click", () => {
    console.log("Container clicked!");
});



