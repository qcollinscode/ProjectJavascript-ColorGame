/*****************************************************
**| Variables
******************************************************/
var numSquares = 6,
    colors = generateRandomColor(numSquares),
    pickedColor = pickColor();


const displays = document.querySelectorAll("span"),
      squares = document.querySelectorAll('.square'),
      h1 = document.querySelector("h1"),
      resetButton = document.querySelectorAll("button")[0],
      modeButtons = document.querySelectorAll(".mode");

/*****************************************************
**| Variable Reassignments
******************************************************/
    /**
     * Set the display title text to the picked color
     */
    displays[0].textContent = pickedColor;



for (var i = 0; i < modeButtons.length; i++) {

  addEventListener([modeButtons[i]], "click", function () {
    /**
     * Reset the title background-color
     */
    h1.style.backgroundColor = "steelblue";

    /**
     * Reset the button text
     */
    resetButton.textContent = "New Colors";

    /**
     * Reset the message display
     */
    displays[1].textContent = "";

    /**
     * Add select class on the clicked element and remove it from the other element
     */
    var checkButtons = this === modeButtons[0] ? (
      /**
       * Set the number of squares generated to 3
       */
      numSquares = 3,

      /**
       * Hide the last three squares
       */
      addClass([squares[3], squares[4], squares[5]], "hide")

    ) : (
      /**
       * Set the number of squares generated to 3
       */
      numSquares = 6,

      /**
       * Hide the last three squares
       */
      removeClass([squares[3], squares[4], squares[5]], "hide")
    );

    /**
    * Generate new colors and set the limit to 3
    */
    colors = generateRandomColor(numSquares);

    /**
    * Generate a new pick color
    */
    pickedColor = pickColor();

    /**
    * Set the display title text to the newly generated picked color
    */
    displays[0].textContent = pickedColor;

    /*
    * Set the background colors of all the squares
    */
    colorUs(squares, "backgroundColor", colors);

    console.log(colors);

    removeClass([modeButtons[0], modeButtons[1]], "selected");
    addClass([this], "selected");
  });
}





/*****************************************************
* Functions
******************************************************/

    /*********************************************
    * Set the background colors of all the squares
    **********************************************/
    console.log(squares);
    colorUs(squares, "backgroundColor", colors);

    /************************************
     * RESET BUTTON
     ***********************************/

     /**
      * When the reset button is clicked
      */
    addEventListener([resetButton], "click", function () {

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
    });





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
  const checkColors = clickedColor === pickedColor ? (

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
