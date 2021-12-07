# Advent of Code

This is the environment I'm using to solve advent of code puzzles. This one is configured for 2021, but it's a trivial change (to `bin/year.js`) to get it to work for other years.

I'm using VS Code with Wallaby for tests. There's a handful of yarn commands I use to bootstrap and scaffold my solutions. After running `yarn` to install dependencies, I typically run the following sequence of commands:

 - `yarn day 1`  
   Create scaffolding in src dir for day 1
 - `yarn input 1 && yarn open 1`  
   Download input for day 1 and open description and relevant source files
 - `yarn solve 1 1`  
   Submit solution for part 1
 - `yarn solve 1 2`
   Submit solution for part 2

## Todos and ideas

 - Add visualizations
 - Add client-side versions with Vue or React
 - Add solutions in more languages
 - Automatically extract sample data and test cases from description
