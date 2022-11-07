/** 
 * Add all image pairs for the easy difficulty as objects with information on whether they match
 */
let ePair0={img1:'./assets/images/easy/pair0/0.png',
img2:'url1',
same:'1'}
let ePair1={img1:'./assets/images/easy/pair0/0.png',
img2:'url1',
same:'2'}
let ePair2={img1:'./assets/images/easy/pair0/0.png',
img2:'url2',
same:'3'}
let ePair3={img1:'./assets/images/easy/pair0/0.png',
img2:'url2',
same:'4'}
let ePair4={img1:'./assets/images/easy/pair0/0.png',
img2:'url3',
same:'5'}
let ePair5={img1:'./assets/images/easy/pair0/0.png',
img2:'url3',
same:'6'}

let easyOne=[ePair0,ePair1,ePair2,ePair3,ePair4,ePair5];

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
    var imgCheck=[];
    if (level === 'easy'){
        while(imgCheck.length<5){
            let random=Math.floor(Math.random()*6);
            console.log(random)
            if (imgCheck.includes(random)){
            continue
            } else {
                imgCheck.push(random);
            }
            console.log(imgCheck)
        } 
        displayEasy(imgCheck);
    } else {
        alert("fig")
    }
    
}

// function gradeAnswer(){

// }

// function gradeScore(){

// }

function displayEasy(myArray){
    for (j=0;j<myArray.length;j++){
        let round = easyOne[myArray[j]]
        console.log(round); 
        console.log(round.img1)
        let firstImage=document.getElementById('img1').src = round.img1
        console.log(firstImage);
                
    }
}
// function displayDifficult(){

// }

// function displayImpossible(){

// }
