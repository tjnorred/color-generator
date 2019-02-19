/*
 * @Author TJ Norred
 */

/*
 * This function generates a random color
 */
function getColor() {
  let color =
    "#" +
    Math.random() // Generate a random number
      .toString(16) // Convert this number to a string with a hexidecimal value
      .slice(2, 8); // limit to 6 characters
  return color;
}

/*
 * This function sets the background color style
 */
function setBackGround(color) {
  let backGroundColor = getColor();
  document.body.style.background = backGroundColor;
  document.getElementById("display").innerHTML = backGroundColor; // Display the Hex value on the screen
}

/*
 * This function changes the background when spacebar is 'clicked'
 */
document.body.onkeyup = function(event) {
  if (event.keyCode == 32) {
    setBackGround();
  }
};
