/*****************************************************
**| Variables
******************************************************/
var numCircles = 6,
    colors = [],
    pickedColor;


const displays = document.querySelectorAll("span"),
      circles = document.querySelectorAll('.square'),
      h1 = document.querySelector("h1"),
      resetButton = document.querySelectorAll("button")[0],
      modeButtons = document.querySelectorAll(".mode");


init();

function init() {
  modeButtonsInit();
  circlesInit();
  reset();
}

/********************************
* Circles
******************************/
function circlesInit() {
  addEventListener(circles, "click", function() {

    var clickedColor = this.style.backgroundColor;

    // When the correct circle is clicked
    if( clickedColor === pickedColor ) {

        displays[1].textContent = "Correct!";

        // make all circles and the header the same color as the picked color
        changeColors(circles, pickedColor);
        h1.style.backgroundColor = pickedColor;
        resetButton.textContent = "Play Again?";

    } else {

        // Fade the clicked circle out
        this.style.backgroundColor = "#232323";
        displays[1].textContent = "Try Again";

    };

  });
}


/*******************************************
* Easy and Hard Buttons
******************************************/
function modeButtonsInit() {
  for (var i = 0; i < modeButtons.length; i++) {

    addEventListener([modeButtons[i]], "click", function () {
      removeClass([modeButtons[0], modeButtons[1]], "selected");
      addClass([this], "selected");

      // If the first mode button is clicked set the num circles to 3 else set it the 6
      this === modeButtons[0] ? numCircles = 3 : numCircles = 6;
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
  // Generate a new array of rgb strings
  colors = generateRandomColor(numCircles);

  // Pick a new rgb string from the colors array
  pickedColor = pickColor();

  // Display the chosen rgb string on the screen
  displays[0].textContent = pickedColor;

  setStyles(circles, {display: "block"});

  // If there is a color for the circle show the circle, else remove it
  for(var i = 0; i < circles.length; i++) {
    colors[i] ? removeClass([circles[i]], "hide") : addClass([circles[i]], "hide");
  }

  colorUs(circles, "backgroundColor", colors);
  displays[1].textContent = "";
  h1.style.backgroundColor = "steelblue";
  resetButton.textContent = "New Colors";
}

  /************************************
   * RESET BUTTON
   ***********************************/
  addEventListener([resetButton], "click", function () {
    reset();
  });

/********************************
 * COLOR ARRAY GENERATOR
 ********************************/
function generateRandomColor(num) {
  var arr = [];
  for(var x = 0; x < num; x++) {
    arr.push(randomColor());
  }
  return arr;
}

/********************************
 * RANDOM RGB STRING GENERATOR
 *******************************/
function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

/*****************************
 * RANDOM COLOR PICK GENERATOR
 ****************************/
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
