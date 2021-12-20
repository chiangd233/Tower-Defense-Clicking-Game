# Tower-Defense-Clicking-Game
Simple clicking game to protect your tower from being taken over

## Concept:
In this game, the user's goal is to prevent enemies, entering from the left side of the screen, from reaching the castle walls, located at the right side of the screen. The user plays as an archer in first person view and fires arrows (using the cursor to click) to hit enemies as they advance toward the castle walls. Each enemy will have a certain number of hitpoints while the user's arrows will deal a certain number of damage. If the enemy's hitpoints are equal to or less than zero, the enemy dies. 

Each game will take 5 minutes. The castle walls will have 5 lives. If an enemy reaches the walls, the castle walls will take one life. If the castle walls reach 0 lives, you lose the game. If you do not lose the game within 5 minutes, you win.

I want the user ...
    - to attempt to protect the castle walls to the best of their ability
    - to use their finger so vigorously, that the user cannot use their finger again
    - to practice their clicking accuracy
    - to read the instructions before playing the game
    - to want to play again


## Wireframes:
![Cover Page] (IMG_4216.HEIC)
![In Game Display] (IMG_4217.HEIC)
![Defeat Display] (IMG_4218.HEIC)
![Victory Display] (IMG_4219.JPG)


## Technologies Used:
    - HTML
    - CSS
    - JavaScript

## Approach:
1. create landing page, instruction page and game page
2. generate links between pages and css styling of title and buttons
3. create gameboard
4. create wall/background/enemy units
5. create onclick function for deleting enemies
6. create end game (win/lose) and replay function

## Challenges:
orignially created everything through flex display, but there was an issue with generating enemy divs and everything moved together. it was changed to a canvas background so that each unit created was animated
Indicate any outstanding problems



## App Demo
Link to GitHub project (https://github.com/chiangd233/Tower-Defense-Clicking-Game)