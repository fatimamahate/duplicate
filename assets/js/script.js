/** 
 * Add all image pairs for the easy difficulty as objects with information on whether they match
 */
let ePair1={img1:'url',
img2:'url',
same:'Y'}
let ePair2={img1:'url',
img2:'url',
same:'Y'}
let ePair3={img1:'url',
img2:'url',
same:'Y'}
let ePair4={img1:'url',
img2:'url',
same:'Y'}
let ePair5={img1:'url',
img2:'url',
same:'Y'}
let ePair6={img1:'url',
img2:'url',
same:'Y'}
let easyOne=[ePair1,ePair2,ePair3,ePair4,ePair5,ePair6];

document.addEventListener("DOMContentLoaded",function(){
    let choices = document.getElementsByTagName("button");
    console.log(choices)
    for (let choice of choices){
        choice.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "easy") {
               var level='easy';
               mainGame(level)
            } else if (this.getAttribute("data-type") === "difficult") {
                alert("difficult")
            }
            else if (this.getAttribute("data-type") === "impossible") {
                alert("impossible")
            }
        });
    }
})
    

/**
 * The full game is run in the main game function
 */
function mainGame(level){
    if (level === 'easy'){
        let imgCheck=[];
    while(imgCheck.length<5){
        let random=Math.floor(Math.random()*6);
        console.log(random)
        if (imgCheck.includes(random)){
           continue
        } else {
            imgCheck.push(random)
            displayEasy(random);
        }
        console.log(imgCheck)
     } 
    } else {
        alert("fig")
    }
}

// function gradeAnswer(){

// }

// function gradeScore(){

// }

function displayEasy(random){
    
}

// function displayDifficult(){

// }

// function displayImpossible(){

// }
