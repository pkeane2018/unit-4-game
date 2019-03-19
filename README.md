# Crystal Game
This is a game in which the player must click on crystals and keep track of their numerical values in order to reach a target number. The game is intended for anyone who enjoys math and logic games.

## How to run site on local machine
The repository can be cloned by clicking the Clone or Download button on the main repository page, then clicking the button next to the url which appears below. Then open a Terminal or Git Bash window, navigate to the location where you want to place the cloned repository, then type 'git clone' and then paste the repository that was just copied. The site can then be opened by clicking on the index.html file and opening it in a web browser.

## Repository organization
The main directory file contains the index.html file, Readme.md file, and the assets folder. Within the assets folder, there are three subfolders - the 'css', 'javascript', and 'images' folders. The 'css' folder contains the style.css file, with determines how the html elements in the index.html file are styled, as well as reset.css, which contains code to ensure that the styling of the html elements appears consistent across different web browsers. Within the 'javascript' folder is game.js, which contains code that determines the logic of the game, such as generating random number values for each crystal and the target number value, as well as determining what happens in response to the user's behavior. The image folder contains jpg and png files of the crystal images and the qbkls folder, which contains the background image file. Index.html contains all the html code for the site, as well as links to style.css, reset.css, game.js, and to the jQuery and CSS boostrap CDNs. There are also links to files in the images folder to display the images onscreen. 

## How to play
The game generates a random target number and then sets the attribute of each crystal image to a random number. By clicking on each picture, the number value of the attribute of that image is added to that player's score. The goal is to match the score to the target number. If this happens, the player wins. If the score becomes greater than the target value, the player loses. 

## Technology used
* HTML
* CSS 
* CSS Bootstrap
* JavaScript
* jQuery

## Link to deployed page 
https://pkeane2018.github.io/unit-4-game/
