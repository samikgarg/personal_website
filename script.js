var bgColor;
var textColor;
var invColor;
var invTextColor;
var fontSize;
var font;
var settingsIconSRC;


var colorPicker = document.getElementById("colourPicker"); //Variable for Colour Input Element
var fontList = document.getElementById('fontPicker'); //Gets the Font Dropdown List in a Variable
var fontSizeInput = document.getElementById("fontSizePicker"); //Variable for Font Size Input Element

window.onload = function()
{

  if (colorPicker != null && fontList != null && fontSizeInput != null)
  {
    colorPicker.addEventListener("input", getColor, false); //Changes BG Colour as it is being input
    fontList.addEventListener ("input", getFont, false); //Adds Event listener to Font Dropdown List
    fontSizeInput.addEventListener("input", getFontSize, false); //Changes Font size as Input is Entered is moved

    fontSizeInput.value = localStorage.getItem("fontSize").toString().substring(0,2); //sets the selected value to the selected font
  }

  setColor (); //sets Background colour to value of colour input

  setFont(); //sets font to the selected font of the dropdown list

  setFontSize (); //sets font size to the selected font of the dropdown list
}


var navBar = document.getElementById("navBar"); //Variable for Navigation Bar

var settingsIcon = document.getElementById("settingsIcon");


var navLinks = document.getElementsByClassName("navLink"); //Array for all HREFs on the Nav Bar
var footerLinks = document.getElementsByClassName("footerLink"); //Array for all HREFs on the Footer

//Array for all Sections with inverted BG Colours
var evenSections = document.getElementsByClassName("sectionEven");

var facebook = document.getElementById("facebook"); //Variable for the Facebook Symbol
var instagram = document.getElementById("instagram"); //Variable for the Instagram Symbol
var twitter = document.getElementById("twitter"); //Variable for the Twitter Symbol
var linkedin = document.getElementById("linkedin"); //Variable for the LinkedIn Symbol

//Function to Change BG Colour as it is being input
function getColor(event)
{
  bgColor = colorPicker.value.toString(); //Sets the Variable "Color" to the value of the Colour Input;

  var rgbColor = hexToRgb (bgColor); //Converts the Hex Colour to RGB Format

  let red = rgbColor [0]; //Sets value of the "red" variable to the RGB red value of the BG Color
  let green = rgbColor [1]; //Sets value of the "red" variable to the RGB red value of the BG Color
  let blue = rgbColor [2]; //Sets value of the "red" variable to the RGB red value of the BG Color

//gets the inverse of each color
  let invRed = 255 - red;
  let invGreen = 255 - green;
  let invBlue = 255 - blue;

  //Sets the colour of the navigation Bar to that which is Complementary to the Background
   invColor = "rgb(" + invRed + "," + invGreen + "," + invBlue + ")";

   if (invRed * 0.299 + invGreen * 0.587 + invBlue * 0.114 > 186) //Condition to check whether BG Color is Light or Dark
   {
     //If BG Colour is light, set the text colour to Black
     invTextColor = "black";
     settingsIconSRC = "https://img.icons8.com/ios-filled/50/000000/settings.png";
   }
   else
   {
     //If BG Colour is light, set the text colour to White
     invTextColor = "white";
     settingsIconSRC = "settings_white.png";
   }


  if (red * 0.299 + green * 0.587 + blue * 0.114 > 186) //Condition to check whether BG Color is Light or Dark
  {
    textColor = "black"
  }
  else
  {
    textColor = "white"

  }

  localStorage.setItem("bgColor", bgColor);
  localStorage.setItem("textColor", textColor);
  localStorage.setItem("invColor", invColor);
  localStorage.setItem("invTextColor", invTextColor);
  localStorage.setItem("settingsIconSRC", settingsIconSRC);

  setColor();
}

function setColor ()
{
  document.body.style.backgroundColor = localStorage.getItem("bgColor"); //Sets the Background Colour to the stored value
  navBar.style.backgroundColor = localStorage.getItem("invColor"); //Sets the Nav Bar Colour to the stored value
  //document.body.footer.style.backgroundColor = localStorage.getItem("invColor"); //Sets the Footer Colour to the stored value
  settingsIcon.src = localStorage.getItem("settingsIconSRC");

  document.body.style.color  = localStorage.getItem("textColor"); //If BG Colour is light, set the text colour to White

  for (let i = 0; i < navLinks.length; i++)
  {
    //Applies the colour to all Nav Bar Text
    navLinks[i].style.color = localStorage.getItem("invTextColor");
  }

  console.log (navLinks);
  console.log (footerLinks);
  for (let i = 0; i < footerLinks.length; i++)
  {
    //Applies the colour to all Nav Bar Text
    footerLinks[i].style.color = localStorage.getItem("textColor");
  }

  for (let i = 0; i < evenSections.length; i++)
  {
    evenSections[i].style.backgroundColor = localStorage.getItem("invColor");
    evenSections[i].style.color = localStorage.getItem("invTextColor");
  }

  if (colorPicker != null)
  {
    colorPicker.value = localStorage.getItem("bgColor"); //sets the selected value to the selected font
  }

  if (facebook != null && instagram != null && twitter != null && linkedin != null)
  {
    facebook.setAttributeNS(null,"fill",localStorage.getItem("textColor"));
    instagram.setAttributeNS(null,"fill",localStorage.getItem("textColor"));
    twitter.setAttributeNS(null,"fill",localStorage.getItem("textColor"));
    linkedin.setAttributeNS(null,"fill",localStorage.getItem("textColor"));
  }
}


//Function to Convert Hex colour to RGB, in the form of an array
function hexToRgb(hex)
{
  var res = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return [parseInt(res[1], 16),parseInt(res[2], 16),parseInt(res[3], 16)];
}

//Function to set the Font of the Website as it is being input
function setFont ()
{
  if (fontList != null)
  {
    fontList.value = localStorage.getItem("font"); //sets the selected value to the selected font
  }
  document.body.style.fontFamily = localStorage.getItem("font"); //Applies the selected
}

//Function to set the Font of the Website to the selected Font and store it in a variable
function getFont (event)
{
  var value = fontList.options[fontList.selectedIndex].value; //Gets the Selected Font
  font = value; //Sets the Selected Font as the Font Family for the Website

  localStorage.setItem("font", font); //Stores the selected font for use in all pages

  setFont (); //Applies the selected font
}

//Function to change Font size as it is input
function getFontSize(event)
{
  var fontSizeInt = fontSizeInput.value; //Sets the Variable "Font" to the value of the Input

  if (fontSizeInt > 70)
  {
    fontSizeInt = 70; //Sets Font Size to 70 if it input is above 70 to prevent it from being too large
  }
  else if (fontSizeInt < 18)
  {
    fontSizeInt = 18; //Sets Font Size to 18 if it input is below 18 to prevent it from being too small
  }

  fontSize = fontSizeInt + "px"; //Sets the Font Size to the value of the "Font" variable in px


  localStorage.setItem ("fontSize", fontSize); //Stores the Font Size Variable for use in the other Web Pages

  setFontSize (); //Applies the selected Font Size
}

//Function to set Font size to the text on the page
function setFontSize ()
{
  document.body.style.fontSize = localStorage.getItem ("fontSize");
}
