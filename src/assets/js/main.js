/*****************************************************
**| Variables
******************************************************/
var numSquares = 6,
    colors = [],
    pickedColor;


const displays = document.querySelectorAll("span"),
      squares = document.querySelectorAll('.square'),
      h1 = document.querySelector("h1"),
      resetButton = document.querySelectorAll("button")[0],
      modeButtons = document.querySelectorAll(".mode");


init();

function init() {
  modeButtonsInit();
  squaresInit();
  reset();
}

function squaresInit() {
  /********************************
   * SQUARES
   ******************************/

   /**
    * When a square is clicked
    */
  addEventListener(squares, "click", function() {

    /**
     * Grab the background color of the square clicked
     */
    var clickedColor = this.style.backgroundColor;

    /**
     * Check to see if the background-color of the square clicked matches the picked color. If it does
     */
    clickedColor === pickedColor ? (

      /**
       * Display the message correct
       */
      displays[1].textContent = "Correct!",

      /**
       * Set the background-color of all the squares to the picked color
       */
      changeColors(squares, pickedColor),

      /**
       * Set the background-color of the title to the picked color
       */
      h1.style.backgroundColor = pickedColor,

      /**
       * Change the reset button text to "Play Again"
       */
      resetButton.textContent = "Play Again?"

    ) : (
      /**
       * If not then hide the square by making the same color as the body background color
       */
      this.style.backgroundColor = "#232323",

      /**
       * and change the reset display title to "Try Again"
       */
      displays[1].textContent = "Try Again"
    );
  });
}

function modeButtonsInit() {
  /*******************************************
   * Easy and Hard Buttons
   ******************************************/
  for (var i = 0; i < modeButtons.length; i++) {

    addEventListener([modeButtons[i]], "click", function () {
      /**
       * Remove the selected class from both buttons
       */
      removeClass([modeButtons[0], modeButtons[1]], "selected");

      /**
       * Add the selected class to the button thats being clicked
       */
      addClass([this], "selected");

      /**
       * If the easy button is being clicked set the numSquares to 3 otherwise set it to 6
       */
      this === modeButtons[0] ? numSquares = 3 : numSquares = 6;

      /**
       * Reset the game
       */
      reset();
    });
  }
}




/*******************************************
 * Reset
 ******************************************/
function reset() {
  /**
   * Generate a new list of colors
   */
  colors = generateRandomColor(numSquares);

  /**
   * Generate a new picked color
   */
  pickedColor = pickColor();

  /**
   * Set the display title text to the generated picked color
   */
  displays[0].textContent = pickedColor;

  /**
   * Set all squares display property to block
   */
  setStyles(squares, {display: "block"});

  /**
   * Loop over each square
   */
  for(var i = 0; i < squares.length; i++) {
    /**
     * and check to see if it has a color for it in the color array. If it does, show it, else hide it
     */
    colors[i] ? removeClass([squares[i]], "hide") : addClass([squares[i]], "hide");
  }
  /**
   * Recolor the background of the squares from the list of generated colors
   */
  colorUs(squares, "backgroundColor", colors);

  /**
   * Reset the message display
   */
  displays[1].textContent = "";

  /**
   * Reset the title background-color
   */
  h1.style.backgroundColor = "steelblue";

  /**
   * Reset the button text
   */
  resetButton.textContent = "New Colors"
}

  /************************************
   * RESET BUTTON
   ***********************************/

   /**
    * When the reset button is clicked
    */
  addEventListener([resetButton], "click", function () {
    /**
     * Reset the game
     */
    reset();
  });

/********************************
 * COLOR ARRAY GENERATOR
 ********************************/
function generateRandomColor(num) {

/**
 * Create an empty array
 */
  var arr = [];

  /**
   * Push each random rgb strings generated into the empty array
   */
  for(var x = 0; x < num; x++) {
    arr.push(randomColor());
  }

  /**
   * Return the array of generated rgb strings
   */
  return arr;
}

/********************************
 * RANDOM RGB STRING GENERATOR
 *******************************/
function randomColor() {

  /**
   * Generate three random whole numbers between 0 and 255 and assign the values to r, b, and g;
   */
  var r = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);

  /**
   * Return a string of "rgb()" and the random generated numbers concatenated
   */
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

/*****************************
 * RANDOM COLOR PICK GENERATOR
 ****************************/
function pickColor() {

  /**
   * Generate a random number between 0 and whatever the length of the colors array is
   */
  var random = Math.floor(Math.random() * colors.length);

  /**
   * return the rgb string from the generated color array with the same key value as the generated random number
   */
  return colors[random];
}
