/** 
 * Add all image pairs for the easy difficulty as objects with information on whether they match
 */
let easyOne=[
{img1:'./assets/images/easy/0.png',
img2:'./assets/images/easy/0.png',
same: true},
{img1:'./assets/images/easy/1_1.png',
img2:'./assets/images/easy/1_2.png',
same:false},
{img1:'./assets/images/easy/2.png',
img2:'./assets/images/easy/2.png',
same:true},
{img1:'./assets/images/easy/3_1.png',
img2:'./assets/images/easy/3_2.png',
same:false},
{img1:'./assets/images/easy/4_1.png',
img2:'./assets/images/easy/4_2.png',
same: false},
{img1:'./assets/images/easy/5_1.png',
img2:'./assets/images/easy/5_2.png',
same:false}]



document.addEventListener("DOMContentLoaded",function(){
    let choices = document.getElementsByTagName("button");
    console.log(choices)
    for (let choice of choices){
        choice.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "easy") {
               var level='easy';
               mainGame(level)
            } else if (this.getAttribute("data-type") === "difficult") {
               var level='difficult';
               mainGame(level)
            } else if (this.getAttribute("data-type") === "impossible") {
               var level='impossible';
               mainGame(level)
            }
        });
    }
})
    
let currentPair;
let currentArray;



/**
 * The full game is run in the main game function
 */
function mainGame(level){
    // randomPair(level);
    if (level === "easy"){
        currentArray=easyOne;
        let rand=Math.floor(Math.random()*currentArray.length);
        currentPair=currentArray[rand];
        let imageOne=currentPair.img1;
        let imageTwo=currentPair.img2;
        var displayOne=document.getElementById('img1');
        displayOne.src=imageOne;
        var displayTwo=document.getElementById('img2');
        displayTwo.src=imageTwo;
        scoreCheck()
    }
}


function scoreCheck(result){
    if (currentPair.same === result){
       let scoreVal= document.getElementById('score').innerText;
       let score=parseInt(scoreVal);
       document.getElementById('score').innertext=++score;
    }     
}


let answerBtn=document.getElementsByClassName('answer-area');
for (let button of answerBtn){
    button.addEventListener('click',function(){
        let userAnswer = this.getAttribute("button-type")
        if (userAnswer === "identical"){
            scoreCheck(true);
        } else {
            scoreCheck(false);
        }
    })
}






























































































// function gradeAnswer(){
    
// }



// function displayEasy(myArray){
//     for (j=0;j<myArray.length;j++){
//         let round = easyOne[myArray[j]]
//         console.log(round); 
//         console.log(round.img1);
//         let firstImage=document.getElementById('img1').src = round.img1
//         let secondImage=document.getElementById('img2').src = round.img2
//         console.log(firstImage);
//         console.log(secondImage);
//         function gradeScore(){
//             let y=round.same;
//             if(btnClicked ==="identical" && y==="Y"){
//                 let oldScore = parseInt(document.getElementById("score").innerText);
//                 document.getElementById("score").innerText = ++oldScore
//             } else if (btnClicked === "notidentical" && y === "Y"){
//                 alert("Try again!");
//             } else if (btnClicked === "identical" && y === "N"){
//                 alert("Try again!");
//             } else if (btnClicked === "notidentical" && y === "N"){
//                 let oldScore = parseInt(document.getElementById("score").innerText);
//                 document.getElementById("score").innerText = ++oldScore
//             }
//         }
//         gradeScore()
//     }
// }
// function displayDifficult(){

// }

// function displayImpossible(){

// }
