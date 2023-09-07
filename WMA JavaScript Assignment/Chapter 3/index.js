
/*
1. Declare a variable called age & assign to it your age. Show
your age in an alert box. */

var age = 25;
alert("My age is: " + age);


/*
2. Declare & initialize a variable to keep track of how many
times a visitor has visited a web page. Show his/her
number of visits on your web page. For example: “You
have visited this site N times”.*/

var visitCount = +localStorage.getItem("visitCount");

visitCount = visitCount + 1;

localStorage.setItem("visitCount", visitCount);

alert("You have visited this page " + visitCount + " times.");


/*
3. Declare a variable called birthYear & assign to it your
birth year. Show the following message in your browser: */

// Birth Year 
var birthYear = 2005;

// Current Year
var currentYear = 2023

// Calculate the years
var age = currentYear - birthYear;

var message = "My birth year is " + birthYear + " and I am " + age + " years old.";

// Heading
document.write("<h3>Birth Year</h3>")

// Display the message on the page
document.write(message + "<br> <br>");


/*
4. A visitor visits an online clothing store
www.xyzClothing.com . Write a script to store in variables
the following information:
a. Visitor’s name
b. Product title
c. Quantity i.e. how many products a visitor wants to
order
Show the following message in your browser: “John
Doe ordered 5 T-shirt(s) on XYZ Clothing store”. */

// Visitor’s name
var visitorName = "John Doe";

// Product title
var productTitle = "T-shirt";

// Quantity i.e. how many products a visitor wants to order
var quantity = 5;

var message = visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.";

// Heading
document.write("<h3>A visitor visits</h3>")

// Display the message on the page
document.write(message);