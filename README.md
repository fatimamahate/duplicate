<h1 align="center">Duplicate Game</h1>

[Find the live link to the Duplicate game here](https://fatimamahate.github.io/duplicate/)

Welcome to Duplicate. This game is a single-player matching game. The user will go through a set of cards and check if they are identical or not. There are 3 levels of difficulty including: easy, difficult and impossible (the changes (if there are any) are extremely inconspicuous in the impossible level). It is designed to test the very best and in some cases the difference is barely noticeable. 

The rules of the game is to simply identify if the pair of cards match or not and gain as many points as possible within 5 rounds.

The market audience is predominantly anybody who wants to play a game. The easy level mainly catering towards younger children under the age of 5, the difficult level is aimed at children upto the age of 10 and the impossible level has no age limit! Of course these ages are only guidlines and truly all levels can be enjoyed by anyone who wants to play a game.

## Contents
* [User Experience (UX)](#user-experience-ux) 
* [Features](#features)
* [Design](#design)
* [Technologies Used](#technologies-used)
* [Testing](#testing)
* [Deployment](#deployment)
* [Credits](#credits)
* [Acknowlegements](#acknowledgements)

## User Experience (UX)
Users of the website will
* find a game with many levels and a text on landing page to choose a level.
* try different levels so the user spends more time playing the game
* try to figure out all possible pairs of images by repeating levels.
* find a variety of image pairs to avoid memorising the content

## Features
### Current
#### Feature 1: Header
* The header includes the title of the game using the font Fredoka One from [Google Fonts](https://fonts.google.com/) with two similar copy signs from [Font Awesome](https://fontawesome.com/). The copy signs are not exactly the same to show that they are not identical.  

#### Feature 2: Difficulty Buttons
* Directly below the header are the difficulty levels. 
* The user can hover over the button so that the user knows it is clickable. 
* The colour of the difficulty buttons are different shades of the main background colour (#EEA47FFF) and increase in saturation the higher the difficulty gets. 
* These buttons can also be used as reset buttons should the user wish to start again or if the round has been complete. 

#### Feature 3: Question and Score Area
##### Question & Instruction
* The game is fairly simple, are the images identical or not? Therefore, a question is added so the user can understand the game.
There is also an instruction which is one of the first things  
##### Score Area
* The Score area is included so that the user can see the score they have obtained.  
##### Purchase
* The online game can also have a corresponding card game which can be purchased on the link provided for Amazon. 
### Future
* Introduce a second page that sells card games instead of linking to another website.
* Introduce event listeners for keyboard inputs.
* Add a div or another page describing all the keys needed for the above event listeners. 

## Design 
* Throughout the entire game, predominantly only 2 colours have been used - #EEA47FFF for the background colour and #00539CFF for the text and header.
* The score area has the same colours but in the reverse order whereby #EEA47FFF is used for the text and #00539CFF is used for the background colour.
* The exception to the above however is the not identical and identical buttons. These are brightly red (#880808) and green (#228B22) respectively. This is to ensure contrast between background and to differentiate between these buttons and the difficulty level buttons. 
* All buttons have a hover feature which introduces a border and changes background colour. and the user can be sure of the button they have clicked on. 
* The link to amazon is within the sentence asking users to check out the corresponding card game. The colour was changed to inherit the colour from its parents but the underline still remains. This makes it obvious to the user that the word/name is a clickable link.  

## Technologies Used

* [Google Fonts](https://fonts.google.com/) - Imported the Fredoka One and Didact Gothic fonts
* [Font Awesome](https://fontawesome.com/) - Used free to use icons for logo
* [Microsoft Paint](https://apps.microsoft.com/store/detail/paint/9PCFS5B6T72H?hl=en-us&gl=us) - Used to design image pairs
* [Git](https://git-scm.com/) - Used for version control
* [Github](https://github.com/) - Used to contain the repository and to deploy
* HTML5
* CSS3
* JavaScript (ES6-2015)

## Testing
### Functionality
* The table below shows the test for functionality of each interactive element

| Test  | Action   | Expected Outcome  | Actual Outcome  ||
|---|---|---|---|---|
|  Easy, Difficult,Impossible Buttons Hover |Hover over level buttons   |background,font colours change with a border   |  Pass |   |
|Identical/not identical Buttons Hover   | hover over button  | font colour change, background colour change, border   |Pass   |   |
| Easy button-click  |User clicks on easy button   |  Random picture is generated from easyOne variable or if in the middle of a game, game refreshes| Pass  |   |
| Difficult button-click  |User clicks on difficult button   |  Random picture is generated from difficultOne variable or if in the middle of a game, game refreshes| Pass  |   |
| Impossible button-click  |User clicks on impossible button   |  Random picture is generated from impossibleOne variable or if in the middle of a game, game refreshes| Pass  |   |
|Identical button-click   |User clicks on Identical   |  If correct move to next image set else an alert  |  Pass |   |
Not Identical button-click   |User clicks on Not Identical   |  If correct move to next image set else an alert  |  Pass |   |
| Linked text-The Board Room  |User clicks on The Board Room text   |  Takes you to [The Board Room](https://fatimamahate.github.io/theboardroom/) site. | Pass  |   |
|   |   |   |   |   |
|   |   |   |   |   |
|   |   |   |   |   |
### Browsers
* It was tested on Internet Edge and Google Chrome. 
### Responsive Media
* There are 3 media queries at 700px, 420px, and 360px.
* The site was tested on a large laptop at 1440px, a tablet at 768px, a phone at 425px and a mobile phone at 320px. 

## Deployment
### Deploy
* To deploy the site, first go to the GitHub repository.
* Click on Settings in the repository's nav bar. 
* On the left hand side, click on Pages
* Where it says branch, there is a dropdown menu. Select Main and then save.
* A live link should appear (this can take a while)

### Clone
* To clone a repository, go to the GitHub repository.
* Click on Code
* Copy the link
* Open GitBash
* Type in git clone, copy your URL and press enter.

### Push and Commit
* First in GitBash type in git add . 
* To commit any changes, type in git commit -m "Add your description of change here"
* Finally type in git push. This will push code to GitHub.

## Credits
* The colour combination was recommended on a [webflow blog](https://webflow.com/blog/best-color-combinations) article by [Naja Wade](https://webflow.com/author/naja-wade)

* The [Love Maths](https://codeinstitute.net/) walkthrough was the source of inspiration for the difficulty buttons. 

### Icons
* The clone icons that are used are from the [Font Awesome](https://fontawesome.com/) Website. 
```
<script src="https://kit.fontawesome.com/acf23d3677.js" crossorigin="anonymous"></script>

<h1><i class="fa-solid fa-clone"></i> Duplicate <i class="fa-regular fa-clone"></i></h1>
```

### Fonts
* The Didact Gothic and Fredoka One fonts are from [Google Fonts](https://fonts.google.com/)
```
<link href="https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Fredoka+One&display=swap" rel="stylesheet">
```
```
body{
    background-color:#EEA47FFF;
    color:#00539CFF;
    font-family:  'Didact Gothic', sans-serif;
    font-weight: bold; 
}

h1{
    font-family: 'Fredoka One', cursive;
    text-align: center;
    font-size: 4rem;
}
```

### Images
* The images were designed by [myself](https://github.com/fatimamahate/duplicate) using the Microsoft Paint Software. 
## Acknowledgements
A very big thank you to my mentor, Brian Macharia, for providing invaluable advice throughout the project. 
