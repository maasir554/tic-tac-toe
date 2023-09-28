# tic-tac-toe

simple game made using vanilla JavaScript.

### Try it out: 

[Click here to play](https://maasir554.github.io/tic-tac-toe)

## Playing with AI:
- To play with AI, press the *Play with AI* button, and the player (`X` or `O`), who's turn it would be, gets converted to AI. For example, if currently its turn of `O`, and I press the AI button, then `O` will now be controlled by AI. 

- the button will take the required color to indicate which of `X` or `O` is AI.

- You can enable/disable AI anytime you want.

- Here, AI just randomly clicks on unfilled boxes. So, it is actually not Intelligent, its just a dumb bot.

## Project structure

- Functions related to Click, MouseIn, and MouseOut are defined inside **events.js**
- These functions ared added via a separate functions, which are defined in **use-events.js**
- **utils.js** contains some basic utility functions which are used in other js files
- **logics.js** contains `WinCheck()` function, which checks if someone has won, or its a tie.
- `WinCheck()` is imported in events.js to perform its task

### app.js

- defines the global variables like `turnOf` and their getter and setter functions.
- selects the required DOM elements
- calls the event adders defined in use-event.js, and passes the global variabls along with their getters and setters, and DOM elements to these functions.
