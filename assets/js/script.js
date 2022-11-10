/** 
 * Add all image pairs for the easy difficulty as objects with information on whether they match
 */
//  import Swal from 'sweetalert2'
const Swal = require('sweetalert2')
 let easyOne=[
    {img1:'./assets/images/easy/0.png',
    img2:'./assets/images/easy/0.png',
    same: 'Y'},
    {img1:'./assets/images/easy/1_1.png',
    img2:'./assets/images/easy/1_2.png',
    same:'N'},
    {img1:'./assets/images/easy/2.png',
    img2:'./assets/images/easy/2.png',
    same:'Y'},
    {img1:'./assets/images/easy/3_1.png',
    img2:'./assets/images/easy/3_2.png',
    same:'N'},
    {img1:'./assets/images/easy/4_1.png',
    img2:'./assets/images/easy/4_2.png',
    same: 'N'},
    {img1:'./assets/images/easy/5.png',
    img2:'./assets/images/easy/5.png',
    same:'Y'},
    {img1:'./assets/images/easy/6_1.png',
    img2:'./assets/images/easy/6_2.png',
    same:'N'},
    {img1:'./assets/images/easy/7_1.png',
    img2:'./assets/images/easy/7_2.png',
    same:'N'},
    {img1:'./assets/images/easy/8.png',
    img2:'./assets/images/easy/8.png',
    same:'Y'},
    {img1:'./assets/images/easy/9_1.png',
    img2:'./assets/images/easy/9_2.png',
    same:'N'}];
    
    let difficultOne=[
        {img1:'./assets/images/difficult/0.png',
        img2:'./assets/images/difficult/0.png',
        same: 'Y'},
        {img1:'./assets/images/difficult/1_1.png',
        img2:'./assets/images/difficult/1_2.png',
        same:'N'},
        {img1:'./assets/images/difficult/2_1.png',
        img2:'./assets/images/difficult/2_2.png',
        same:'N'},
        {img1:'./assets/images/difficult/3_1.png',
        img2:'./assets/images/difficult/3_2.png',
        same:'N'},
        {img1:'./assets/images/difficult/4.png',
        img2:'./assets/images/difficult/4.png',
        same: 'Y'},
        {img1:'./assets/images/difficult/5.png',
        img2:'./assets/images/difficult/5.png',
        same:'Y'},
        {img1:'./assets/images/difficult/6_1.png',
        img2:'./assets/images/difficult/6_2.png',
        same:'N'},
        {img1:'./assets/images/difficult/7.png',
        img2:'./assets/images/difficult/7.png',
        same:'Y'},
        {img1:'./assets/images/difficult/8.png',
        img2:'./assets/images/difficult/8.png',
        same:'Y'},
        {img1:'./assets/images/difficult/9_1.png',
        img2:'./assets/images/difficult/9_2.png',
        same:'N'}];
    
    let impossibleOne=[{img1:'./assets/images/impossible/0_1.png',
    img2:'./assets/images/impossible/0_2.png',
    same:'N'},
    {img1:'./assets/images/impossible/1_1.png',
    img2:'./assets/images/impossible/1_2.png',
    same:'N'},
    {img1:'./assets/images/impossible/2_1.png',
    img2:'./assets/images/impossible/2_2.png',
    same:'N'},
    {img1:'./assets/images/impossible/3_1.png',
    img2:'./assets/images/impossible/3_2.png',
    same:'N'},
    {img1:'./assets/images/impossible/4.png',
    img2:'./assets/images/impossible/4.png',
    same:'Y'},
    {img1:'./assets/images/impossible/5.png',
    img2:'./assets/images/impossible/5.png',
    same:'Y'},
    {img1:'./assets/images/impossible/6_1.png',
    img2:'./assets/images/impossible/6_2.png',
    same:'N'},
    {img1:'./assets/images/impossible/7_1.png',
    img2:'./assets/images/impossible/7_2.png',
    same:'N'},
    {img1:'./assets/images/impossible/8_1.png',
    img2:'./assets/images/impossible/8_2.png',
    same:'N'},
    {img1:'./assets/images/impossible/9.png',
    img2:'./assets/images/impossible/9.png',
    same:'Y'}];
    var level;
    
    document.addEventListener("DOMContentLoaded",function(){
        let choices = document.getElementsByClassName("diff");
        console.log(choices);
        for (let choice of choices){
            choice.addEventListener("click", function() {
                if (this.getAttribute("data-type") === "easy") {
                   level='easy';
                   mainGame(level);
                   scoreReset();
                } else if (this.getAttribute("data-type") === "difficult") {
                   level='difficult';
                   mainGame(level);
                   scoreReset();
                } else if (this.getAttribute("data-type") === "impossible") {
                   level='impossible';
                   mainGame(level);
                   scoreReset();
                }
            });
        }
    });
    
        
    let currentPair;
    let currentArray;
    let scoreVal;
    let currentRound=0;
    
    const maxNumOfRounds=5;
    
    /**
     * The full game is run in the main game function
     */
     function scoreCheck(){
        scoreVal=parseInt(document.getElementById('score').innerText);
        console.log(scoreVal);
        document.getElementById('score').innerText = ++scoreVal;
        
    }
    function roundCorrect(){
        currentRound+=1;
        console.log(currentRound);
        if (currentRound===maxNumOfRounds){
            Swal.fire(`You tried the ${level} level and got ${scoreVal+1}! Why not give the other levels a go?`);
            location.reload();   
        }
    }

    function roundIncorrect(){
        currentRound+=1;
        console.log(currentRound);
        if (currentRound===maxNumOfRounds){
            Swal.fire(`You tried the ${level} level and got ${scoreVal}! Why not give the other levels a go?`);
            location.reload();   
        }
    }
    
    function scoreReset(){
        document.getElementById('score').innerText = "0";
    }
    
    function mainGame(level){
    var displayOne;
    var displayTwo;
        if (level === "easy"){
            currentArray=easyOne;
            let rand=Math.floor(Math.random()*currentArray.length);
            currentPair=currentArray[rand];
            let imageOne=currentPair.img1;
            let imageTwo=currentPair.img2;
            displayOne=document.getElementById('img1');
            displayOne.src=imageOne;
            displayOne.alt='Image One';
            displayTwo=document.getElementById('img2');
            displayTwo.src=imageTwo;
            displayTwo.alt='Image Two';
        } else if (level === "difficult"){
            currentArray=difficultOne;
            let rand=Math.floor(Math.random()*currentArray.length);
            currentPair=currentArray[rand];
            let imageOne=currentPair.img1;
            let imageTwo=currentPair.img2;
            displayOne=document.getElementById('img1');
            displayOne.src=imageOne;
            displayOne.alt='Image One';
            displayTwo=document.getElementById('img2');
            displayTwo.src=imageTwo;
            displayTwo.alt='Image Two';
        } else if (level === "impossible"){
            currentArray=impossibleOne;
            let rand=Math.floor(Math.random()*currentArray.length);
            currentPair=currentArray[rand];
            let imageOne=currentPair.img1;
            let imageTwo=currentPair.img2;
            displayOne=document.getElementById('img1');
            displayOne.src=imageOne;
            displayOne.alt='Image One';
            displayTwo=document.getElementById('img2');
            displayTwo.src=imageTwo;
            displayTwo.alt='Image Two';
        }
    }
    
    let answerBtn=document.getElementsByClassName('idn-btn');
    for (let button of answerBtn){
        button.addEventListener('click',function(){
            let userAnswer = this.getAttribute("button-type");
            // console.log(userAnswer);
            if (userAnswer === "identical" && currentPair.same === 'Y'){
                roundCorrect();
                scoreCheck(level);
                mainGame(level);
            } else if(userAnswer === "notidentical" && currentPair.same === 'N'){
                roundCorrect();
                scoreCheck(level);
                mainGame(level);
            } else {
                alert('You got it wrong!');
                roundIncorrect();
                mainGame(level);
        return;
            }
        });
     
    }
    

    
    