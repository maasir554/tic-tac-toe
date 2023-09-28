# tic-tac-toe

simple game made using vanilla JavaScript.

### Try it out: 

[Click here to play](https://maasir554.github.io/tic-tac-toe)

## Project structure

- Functions related to Click, MouseIn, and MouseOut are defined inside **events.js**
- These functions ared added via a separate functions, which are defined in **use-events.js**
- *utils.js* contains some basic utility functions which are used in other js files
- **logics.js** contains `WinCheck()` function, which checks if someone has won, or its a tie.
- `WinCheck()` is imported in events.js to perform its task

### app.js

- defines the global variable: `turnOf` and its getter and setter functions.
- selects the required DOM elements
- calls the event adders defined in use-event.js, and passes the global variable along with its getter and setter, and DOM elements to these functions.


