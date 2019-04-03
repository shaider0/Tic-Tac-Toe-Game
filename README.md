<!--Add styles based on markdown cheatsheet if time-->
Welcome to T1c-Tac-T0e, my first deployed application as a software engineer! This README will walk you through my development process & how the application works. Hope you enjoy :0)

Development Process

Reminders:

-Commit early and often. If you screw something up, use git reset.


Steps (high-level):

- [X]Gather all the documentation and understand the project at a high level
- [X]Review all the documentation carefully and understand the requirements at
      a low level
- [X]Brainstorm & Diagram
- [ ]Get working code
- [ ]Optimize code
- [ ]Add styles
- [ ]Add features (time permitting)

Gather & Review Resources:

  https://git.generalassemb.ly/ga-wdi-boston/game-project
  Game Project Requirements

  https://git.generalassemb.ly/ga-wdi-boston/game-project-api
  Game Project API Documents

  https://git.generalassemb.ly/ga-wdi-boston/game-project-scope-study
  Game project scope study

  https://git.generalassemb.ly/ga-wdi-boston/gh-pages-deployment-guide
  Github Deployment guide

  https://gist.git.generalassemb.ly/SHaider0/fe5349d05a6e992712e63af70612de47
  Explains the pattern used at GA for creating modular code. This includes having different files for HTML, HTTP requests, event handlers, and dom updates.

  https://git.generalassemb.ly/ga-wdi-boston/html-css-sass
  SASS

  https://git.generalassemb.ly/ga-wdi-boston/html-css-bootstrap-layout
  Bootstrap

  https://git.generalassemb.ly/SHaider0/project-issue-tracker-guide
  Issue tracker guide

Brainstorm & Diagram

  User Stories

  * First time users can create an account so they can access the game and keep track of their statistics
  * Returning users can log in so they can access the game and continue to add to their statistics
  * During gameplay, users can see whose turn it is
  * During gameplay, users can click to place their symbol on a spot on the game board
  * After starting a game, users can reset the game board at any time to start a new game.
  * At any point after logging in, users can log out

Application Design

  Game board: HTML/Bootstrap
  Moves: Event handlers
