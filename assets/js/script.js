/** 
 * Add all image pairs for the easy difficulty as objects with information on whether they match
 */
let ePair0={img1:'./assets/images/easy/0.png',
img2:'./assets/images/easy/0.png',
same:'Y'}
let ePair1={img1:'./assets/images/easy/1_1.png',
img2:'./assets/images/easy/1.2.png',
same:'N'}
let ePair2={img1:'./assets/images/easy/2.png',
img2:'./assets/images/easy/2.png',
same:'Y'}
let ePair3={img1:'./assets/images/easy/3_1.png',
img2:'./assets/images/easy/3_2.png',
same:'N'}
let ePair4={img1:'./assets/images/easy/4_1.png',
img2:'./assets/images/easy/4_2.png',
same:'N'}
let ePair5={img1:'./assets/images/easy/5_1.png',
img2:'./assets/images/easy/5_2.png',
same:'N'}

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
            } else if (this.getAttribute("data-type") === "impossible") {
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

function gradeScore(){
console.log('gradeScore test')
}

function displayEasy(myArray){
    for (j=0;j<myArray.length;j++){
        let round = easyOne[myArray[j]]
        console.log(round); 
        console.log(round.img1);
        let firstImage=document.getElementById('img1').src = round.img1
        let secondImage=document.getElementById('img2').src = round.img2
        console.log(firstImage);
        console.log(secondImage);
        document.getElementById('identical').addEventListener('click',function(){
            if (round.same ==="Y"){
                gradeScore();
            }
        })
        document.getElementById('notidentical').addEventListener('click',function(){
            if (round.same==="N"){
                gradeScore();
            }
        });
    }
}
// function displayDifficult(){

// }

// function displayImpossible(){

// }
