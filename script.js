var bgColor; //Variable for main Selected BG Colour
var textColor; //Variable for the main text Colour
var invColor; //Variable for the inverse of the selected BG Colour
var invTextColor; //Variable for the text colour of the inverse Colour
var settingsIconSRC; //Variable for the SRC of the respective Settings Icon
var font; //Variable for the selected Font


var colorPicker = document.getElementById("colourPicker"); //Variable for Colour Input Element
var fontList = document.getElementById("fontList"); //Gets the Font Dropdown List in a Variable
var fontSizeInput = document.getElementById("fontSizePicker"); //Variable for Font Size Input Element

var navBar = document.getElementById("navBar"); //Variable for Navigation Bar

var settingsIcon = document.getElementById("settingsIcon"); //Variable for Settings Icon

var navLinks = document.getElementsByClassName("navLink"); //Array for all HREFs on the Nav Bar
var footerLinks = document.getElementsByClassName("footerLink"); //Array for all HREFs on the Footer

var evenSections = document.getElementsByClassName("sectionEven"); //Array for all Even Sections
var oddSections = document.getElementsByClassName("sectionOdd"); //Array for all Odd Sections

var oddnBtns = document.getElementsByClassName("btnOdd"); //Array for all Buttons in Odd Sections
var evenBtns = document.getElementsByClassName("btnEven"); //Array for all Buttons in Even Sections

var facebook = document.getElementById("facebook"); //Variable for the Facebook Symbol
var instagram = document.getElementById("instagram"); //Variable for the Instagram Symbol
var twitter = document.getElementById("twitter"); //Variable for the Twitter Symbol
var linkedin = document.getElementById("linkedin"); //Variable for the LinkedIn Symbol
var youtube = document.getElementById("youtube"); //Variable for the YouTube Symbol

window.onload = function()
{
  if (localStorage.getItem("bgColor") == null)
  {
    bgColor = "ffffff"; //Sets BG Colour to white as the default value
    calcColor(); //Sets all of the other colours based on the White BG Colour
  }

  if (localStorage.getItem("font") == null)
  {
    localStorage.setItem("font", "Verdana"); //Sets "Verdana" as the default Font
    setFont(); //Applies "Vardana" as the Selected Font
  }

  if (colorPicker != null && fontList != null)
  {
    colorPicker.addEventListener("input", getColor, false); //Changes BG Colour as it is being input
    fontList.addEventListener ("input", getFont, false); //Adds Event listener to Font Dropdown List
  }

  setColor (); //sets Background colour to value of colour input

  setFont(); //sets font to the selected font of the dropdown list
}

//Function to Change BG Colour as it is being input
function getColor(event)
{
  bgColor = colorPicker.value.toString(); //Sets the Variable "Color" to the value of the Colour Input;
  calcColor(); //Calculates and sets the other colour values
}

function calcColor ()
{
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
    textColor = "black" //Sets the text colour to black if the BG colour is light
  }
  else
  {
    textColor = "white" //Sets the text colour to white if the BG colour is dark

  }

  //Adds all the colour values to the local storage for use in other pages of the Website
  localStorage.setItem("bgColor", bgColor);
  localStorage.setItem("textColor", textColor);
  localStorage.setItem("invColor", invColor);
  localStorage.setItem("invTextColor", invTextColor);
  localStorage.setItem("settingsIconSRC", settingsIconSRC);

  setColor(); //Applies the selected colour
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

  for (let i = 0; i < footerLinks.length; i++)
  {
    //Applies the colour to all Nav Bar Text
    footerLinks[i].style.color = localStorage.getItem("textColor");
  }

  for (let i = 0; i < evenSections.length; i++)
  {
    //Applies the colour to all Even Sections of the Website
    evenSections[i].style.backgroundColor = localStorage.getItem("invColor");
    evenSections[i].style.color = localStorage.getItem("invTextColor");
  }

  for (let i = 0; i < oddSections.length; i++)
  {
    //Applies the colour to all Odd Sections of the Website
    oddSections[i].style.backgroundColor = localStorage.getItem("bgColor");
    oddSections[i].style.color = localStorage.getItem("textColor");
  }

  for (let i = 0; i < oddnBtns.length; i++)
  {
    //Applies the colour to all Buttons in Odd Sections of the Website
    oddnBtns[i].style.backgroundColor = localStorage.getItem("invColor");
    oddnBtns[i].style.color = localStorage.getItem("invTextColor");
  }

  for (let i = 0; i < evenBtns.length; i++)
  {
      //Applies the colour to all Buttons in Even Sections of the Website
    evenBtns[i].style.backgroundColor = localStorage.getItem("bgColor");
    evenBtns[i].style.color = localStorage.getItem("textColor");
  }

  if (colorPicker != null)
  {
    colorPicker.value = localStorage.getItem("bgColor"); //sets the selected value to the selected font
  }

  if (facebook != null && instagram != null && twitter != null && linkedin != null)
  {
    //Sets the colour of the Social media Icons
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
  font = fontList.value;; //Gets the Selected Font

  localStorage.setItem("font", font); //Stores the selected font for use in all pages

  setFont (); //Applies the selected font
}

//Code for Image Carousell
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n)
{
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n)
{
  showSlides(slideIndex = n);
}

function showSlides(n)
{
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
