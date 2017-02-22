"use strict";

/**
 * Returns the first element that matches the specified selector;
 */
function _el(el) {
  var element = document.querySelector(el);
  return element;
}

/**
 * Set multiple attributes on the given element
 */
function setAttributes(elName, attrs) {
  /**
   * Loop through each attribute in the object
   */
  for (var key in attrs) {
    /**
     * Attach each attribute to the given element
     */
    elName.setAttribute(key, attrs[key]);
  }
  /**
   * Return the element with the attached attributes
   */
  return elName;
}

/**
 * Creates a new element with the given attributes
 */
function createNewElement(element, attrsSetting) {

  /**
   * Create a new element
   */
  var newElement = new CreateElement(element);

  /**
   * Element constructor
   */
  function CreateElement(element) {
    this.el = element;
    this.newEl = document.createElement(this.el);
    return this.newEl;
  }

  /**
   * Set the attributes of the new element
   */
  setAttributes(newElement, attrsSetting);

  /**
   * Return the new element with the given attributes
   */
  return newElement;
}

/**
 * Creates a new text
 */
function createNewText(text, attrsSetting) {

  /**
   * Create a new text node
   */
  var newText = new CreateText(text);

  /**
   * Text node constructor
   */
  function CreateText(element) {
    this.text = text;
    this.newText = document.createTextNode(this.text);
    return this.newText;
  }

  /**
   * Return the newly create text node
   */
  return newText;
}

/**
 * Sets the time when a function is called
 */
function debounce(fn, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
        args = arguments;
    var later = function later() {
      timeout = null;
      if (!immediate) fn.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) fn.apply(context, args);
  };
}

/**
 * Toggles each class given
 */
function getElement(element, clss1, clss2, clss3, clss4) {
  if (element.classList.contains(clss1)) {
    removeClass(element, clss1);
  } else if (element.classList.contains(clss2)) {
    removeClass(element, clss2);
  } else if (element.classList.contains(clss3)) {
    removeClass(element, clss3);
  }
  addClass(element, clss4);
}

function ResponsiveScreen() {
  /**
   * Capture the width of the window
   */
  var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  /**
   * If the width of the window is less than 768px
   */
  if (w < 768) {
    /**
     * Call the onXSmallScreen function
     */
    //  onXSmallScreen()
  } else if (w > 768 && w <= 992) {
    //onSmallScreen()
  } else if (w > 992 && w <= 1200) {
    //onMediumScreen()
  } else if (w > 1200) {
    //onLargeScreen()
  }
}

/**
 * Calls the ResponsiveScreen function when the window loads
 */
window.onload = ResponsiveScreen;
/**
 * Calls the ResponsiveScreen function when the windows is resized
 */
window.onresize = ResponsiveScreen;

function isEven(num) {
  return num % 2 === 0;
}

/**
 * Returns all the factors of the given numbers
 */
function factorial(num) {
  var result = 1;
  for (var x = 1; x <= num; x++) {
    result = result * x;
  }
  return result;
}

/**
 * Replaces the given string with another string given
 *
 * Example:
 *
 * // Hello how are you?
 *
 * replace("Hello, how are you?", "Hello", "Ni hao") //=> "Ni hao, how are you?"
 */
function replace(str, str2, replacement) {
  /**
   * Capture the string that is to be replaced
   */
  var _replace = str2,
      re = new RegExp(_replace, "g");
  /**
   * Return the new string with the replacement added
   */
  return newStr = str.replace(re, replacement);
}

/**
 * Reverses the order of the elements in the given array
 */
function reverseArray(arr) {
  /**
   * Create a new array
   */
  var newArr = [];
  /**
   * Loop through the given array starting at the last element
   */
  for (var i = arr.length - 1; i >= 0; i--) {
    /**
     * Push each element to the new array
     */
    newArr.push(arr[i]);
  }
  /**
   * Return the new array
   */
  return newArr;
}

/**
 * Checks to see if all elements in the given array are equal to each other. If they are all alike, true will be returned. If they are not all alike, false will be returned.
 */
function isUniform(arr) {
  /**
   * Capture the value of the first element in the given array and assign it to the first variable
   */
  var first = arr[0];
  /**
   * Loop over each element in the array starting from the second element
   */
  for (var i = 1; i < arr.length; i++) {
    /**
     * if the element does not equal the first
     */
    if (arr[i] !== first) {
      /**
       * Return false
       */
      return false;
    }
  }
  /**
   * Otherwise return true
   */
  return true;
}

/**
 * Returns the total of all the numbers in the given array;
 */
function sumArray(arr) {
  /**
   * Start from 0
   */
  var total = 0;
  /**
   * Loop through the given array
   */
  for (var i = 0; i < arr.length; i++) {
    /**
     * Add the value of each element in the array to the total value
     */
    total += arr[i];
  }
  /**
   * return the value of the total variable
   */
  return total;
}

/**
 * Returns the largest number in the given array.
 */
function max(arr) {
  /**
   * Capture the value of the first element in the array
   */
  var max = arr[0];
  /**
   * Loop through the given array starting at the second element
   */
  for (var i = 1; i < arr.length; i++) {
    /**
     * If the element in array is greater than the first element
     */
    if (arr[i] > value) {
      /**
       * capture the value of the element and assign it as the new value of the max variable
       */
      max = arr[i];
    }
  }
  /**
   * return the value
   */
  return max;
}

/**
 * Returns the smallest number in the given array.
 */
function min(arr) {
  /**
   * Capture the value of the first element in the array
   */
  var min = arr[0];
  /**
   * Loop through the given array starting at the second element
   */
  for (var i = 1; i < arr.length; i++) {
    /**
     * If the element in array is less than the first element
     */
    if (arr[i] < value) {
      /**
       * capture the value of the element and assign it as the new value of the min variable
       */
      min = arr[i];
    }
  }
  /**
   * return the value
   */
  return min;
}

function myForEach(arr, fn) {
  /**
   * Call a function for each element in the array
   */
  for (var x = 0; x < arr.length; x++) {
    fn(arr[x]);
  }
};

/**
 * This function requires an node or node list or an array of node elements or node lists  for the first argument and an object of css key value pairs for the second argument.
 * Example:
 * const squares = document.querySelectorAll(".square");
 *
 * const squareStyle = {
 *  backgroundColor: "yellow",
 *  width: "10em"
 * }
 *
 * Function call example:
 * setStyles(squares, squareStyle);
 *
 */
function setStyles(elName, stylesObj) {
  /**
   * If there are more than one elements
   */
  if (elName.length > 0) {
    /**
     * Loop over each element given
     */
    for (var x = 0; x < elName.length; x++) {
      /**
       * and loop through the object given
       */
      for (var key in stylesObj) {
        /**
         * And attach each style in the object to the element
         */
        elName[x].style[key] = stylesObj[key];
      }
    }
  } else {
    /**
     * Loop through the object given
     */
    for (var key in stylesObj) {
      /**
       * and attach the styles to the element
       */
      elName.style[key] = stylesObj[key];
    }
  }
  /**
   * and return the node element with the attached attributes
   */
  return elName;
}

/**
 * Example:
 * const links = document.querySelectorAll("a");
 *
 * const linksAttrs = {
 *  href: "www.example.com",
 *  target: "_blank"
 * }
 *
 * Function call example:
 * setStyles(links, linksAttrs);
 *
 */
function setAttributes(elName, attrsObj) {
  /**
   * If there are more than one elements
   */
  if (elName.length > 0) {
    /**
     * Loop over each element given
     */
    for (var x = 0; x < elName.length; x++) {
      /**
       * Also loop through the object given
       */
      for (var key in attrsObj) {
        /**
         * And attach each attribute in the object to the element
         */
        elName[x].setAttribute(key, attrsObj[key]);
      }
    }
  } else {
    /**
     * Loop through the object given and attach the attributes to the element
     */
    for (var key in attrsObj) {
      elName.setAttribute(key, attrsObj[key]);
    }
  }
  /**
   * and return the node element with the attached attributes
   */
  return elName;
}

/**
 * Same as above except the second argument requires a class name.
 *
 * Example:
 * const squares = document.getElementsByClassName("square");
 * const div = document.querySelectorAll(".square")[2];
 *
 * const square = [squares[0], div];
 *
 * addClass(square, "bg-color");
 */
function addClass(elName, className) {
  /**
   * If there are more than one elements
   */
  if (elName.length > 0) {
    /**
     * Loop over each element given
     */
    for (var x = 0; x < elName.length; x++) {
      /**
       * and add a class to its class list
       */
      elName[x].classList.add(className);
    }
  } else {
    /**
     * Attach a class to the node elements class list
     */
    elName.classList.add(className);
  }
  /**
   * return the node element with the attached class
   */
  return elName;
}

function removeClass(elName, className) {
  /**
   * If there are more than one elements
   */
  if (elName.length > 0) {
    /**
     * Loop over each element given
     */
    for (var x = 0; x < elName.length; x++) {
      /**
       * and add a class to its class list
       */
      elName[x].classList.remove(className);
    }
  } else {
    /**
     * Attach a class to the node elements class list
     */
    elName.classList.remove(className);
  }
  /**
   * return the node element with the attached class
   */
  return elName;
}

/**
 * Same as above
 */
function toggleClass(elName, className) {
  /**
   * If there are more than one elements
   */
  if (elName.length > 0) {
    /**
     * Loop over each element given
     */
    for (var x = 0; x < elName.length; x++) {
      /**
       * and add a toggle to its class list
       */
      elName[x].classList.toggle(className);
    }
  } else {
    /**
     * Attach a toggle to the node element
     */
    elName.classList.toggle(className);
  }
  /**
   * return the node element with the attached toggle;
   */
  return elName;
}

/**
 * Console.log multiple things at once
 * Example:
 *
 * consoleThis("hello", "bye");
 */
function consoleThis() {
  /**
   * Loop over each argument given
   */
  for (var x = 0; x < arguments.length; x++) {
    // Call the console.log method on each argument
    console.log(arguments[x]);
  }
}

/**
 * Returns an array of multiple elements;
 *
 * Example:
 * selector([".square", ".triangle"]) // returns [div.square, div.triangle]
 */
function selector(arr) {
  /**
   * Create an empty array
   */
  var newArr = [];
  /**
   * Loop through the given array
   */
  for (var x = 0; x < arr.length; x++) {
    /**
     * Pass each array element to the querySelector method and capture the returned node element
     */
    var element = document.querySelector(arr[x]);
    /**
     * Push the node element into the new array if it does not equal null
     */
    if (element !== null) {
      newArr.push(element);
    }
  }
  return newArr;
}

/**
 * Adds an event listener to an array of elements
 * Requires the function Selector
 * Example:
 *
 * addEventListener([".square", ".triangle"], "click", function() {
 * toggleClass(selector([".square", ".triangle"]), "bg-color");
 * });
 *
 * Note: You can also use a node list instead of an array of selectors
 *
 * Example:
 *
 * const squares = document.querySelectorAll('.square');
 *
 *
 * addEventListener(squares, "click", function() {
 * console.log("hello");
 });
 */

function addEventListener(names, eventName, fn) {
  /**
   * If the array is a node list
   */
  if (names[0] instanceof HTMLElement) {
    /**
     * Loop over each node in the list
     */
    for (var x = 0; x < names.length; x++) {
      (function () {
        /**
         * and attach an event listener to every element returned thats not null
         */
        if (names[x] !== null) {
          return names[x].addEventListener(eventName, fn, false);
        }
      })();
    }
  } else {
    var x;

    (function () {
      /**
       * Capture the array of nodes
       */
      var div = selector(names);
      /**
       * Loop through the array
       */
      for (x = 0; x < div.length; x++) {
        (function () {
          /**
           * If the element in the array does not equal null
           */
          if (div[x] !== null) {
            /**
             * Return the element with an eventListener attached
             */
            return div[x].addEventListener(eventName, fn);
          }
        })();
      }
    })();
  }
}

/******************************************
**** Guess That Color Function Helpers
*******************************************/

function changeColors(el, color) {
  for (var x = 0; x < el.length; x++) {
    el[x].style.backgroundColor = color;
  }
}

function colorUs(element, css, obj) {
  //var element = document.querySelectorAll(el);
  for (var i = 0; i < element.length; i++) {
    element[i].style[css] = obj[i];
  }
}