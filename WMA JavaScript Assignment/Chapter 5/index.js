
/*
1. Write a program that take two numbers & add them in a
new variable. Show the result in your browser. */

// Prompt the user to enter two numbers
var number1 = parseFloat(prompt("Enter the first number:"));
var number2 = parseFloat(prompt("Enter the second number:"));

// Add the numbers and store the result in a new variable
var sum = number1 + number2;

// Heading
document.write("<h3>Sum of two numbers</h3>");

// Display the result on the page
document.write("The sum of " + number1 + " and " + number2 + " is " + sum);


/*
2. Repeat task1 for Addition, subtraction, multiplication, division &
modulus. */

// Prompt the user to enter two numbers
var number1 = parseFloat(prompt("Enter the first number:"));
var number2 = parseFloat(prompt("Enter the second number:"));

// Perform addition, subtraction, multiplication, division, and modulus
var sum = number1 + number2;
var difference = number1 - number2;
var multiplication = number1 * number2;
var division = number1 / number2;
var percentage = number1 % number2;

// Heading
document.write("<h3>Repeat task1</h3>");

// Display the results on the page
document.write("Addition: " + number1 + " + " + number2 + " = " + sum + "<br>");
document.write("Subtraction: " + number1 + " - " + number2 + " = " + difference + "<br>");
document.write("Multiplication: " + number1 + " * " + number2 + " = " + multiplication + "<br>");
document.write("Division: " + number1 + " / " + number2 + " = " + division + "<br>");
document.write("Percentage: " + number1 + " % " + number2 + " = " + percentage);


/*   
3. Do the following using JS Mathematic Expressions
a. Declare a variable. */

// Heading
document.write("<h3>Mathematic Expressions</h3>");

// a. Declare a variable.
var myVariable;

// b. Show the value of variable after declaration.
document.write("Value after variable declaration is: " + myVariable + "<br>");

// c. Initialize the variable with some number.
myVariable = 5;

// d. Show the initial value of the variable.
document.write("Initial value: " + myVariable + "<br>");

// e. Increment the variable.
myVariable++;

// f. Show the value of the variable after increment.
document.write("Value after increment is: " + myVariable + "<br>");

// g. Add 7 to the variable.
myVariable = myVariable + 7;

// h. Show the value of the variable after addition.
document.write("Value after addition is: " + myVariable + "<br>");

// i. Decrement the variable.
myVariable--;

// j. Show the value of the variable after decrement.
document.write("Value after decrement is: " + myVariable + "<br>");

// k. Show the remainder after dividing the variable's value by 3.
var remainder = myVariable / 3;

// l. Show the remainder.
document.write("The remainder is: " + remainder);


/*
4. Cost of one movie ticket is 600 PKR. Write a script to
store
ticket price in a variable & calculate the cost of buying 5
tickets
to a movie. Example output: */

// Cost of one movie ticket
var ticketPrice = 600;

// Number of tickets to buy
var numberOfTickets = 5;

// Calculate the total cost
var totalCost = ticketPrice * numberOfTickets;

// Heading
document.write("<h3>Cost of Tickets</h3>");

// Display the result on the page
document.write("Ticket Price: " + ticketPrice + "PKR <br>")
document.write("Numbers of ticket: " + numberOfTickets + "<br> <br>")
document.write("Total cost to buy " + numberOfTickets + " tickets to a movie is " + totalCost + "PKR ");


/*
5. Write a script to display multiplication table of any
number in your browser. E.g */

var userValue = prompt('table number');

if (userValue == null) {
        userValue = 4;
    }
    console.log(`
        ${userValue} X 1 = ${userValue * 1}
        ${userValue} X 2 = ${userValue * 2}
        ${userValue} X 3 = ${userValue * 3}
        ${userValue} X 4 = ${userValue * 4}
        ${userValue} X 5 = ${userValue * 5}
        ${userValue} X 6 = ${userValue * 6}
        ${userValue} X 7 = ${userValue * 7}
        ${userValue} X 8 = ${userValue * 8}
        ${userValue} X 9 = ${userValue * 9}
        ${userValue} X 10 = ${userValue * 10}
    `);


/*
6. The Temperature Converter: It’s hot out! Let’s make a
converter based on the steps here.
a. Store a Celsius temperature into a variable.
b. Convert it to Fahrenheit & output “NNoC is NNoF”.
c. Now store a Fahrenheit temperature into a variable.
d. Convert it to Celsius & output “NNoF is NNoC”. */

// Heading
document.write("<h3>The Temperature Converter</h3>");

// a. Store a Celsius temperature into a variable.
var celsiusTemperature = 25;

// b. Convert Celsius to Fahrenheit.
var fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;

// Display the receipt on the page
document.write(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F<br>");

// c. Store a Fahrenheit temperature into a variable.
var fahrenheitTemperature2 = 70;

// d. Convert Fahrenheit to Celsius.
var celsiusTemperature2 = (fahrenheitTemperature2 - 32) * 5/9;

// Display the receipt on the page
document.write(fahrenheitTemperature2 + "°F is " + celsiusTemperature2 + "°C");


/*
7. Write a program to implement checkout process of a
shopping cart system for an e-commerce website. Store
the following in variables
MATH EXPRESSIONS | JAVASCRIPT
Page 5 of 9
a. Price of item 1
b. Price of item 2
c. Ordered quantity of item 1
d. Ordered Quantity of item 2
e. Shipping charges
Compute the total cost & show the receipt in your browser. */

// Store the item prices and quantities
var priceItem1 = 650;
var priceItem2 = 100;
var quantityItem1 = 2;
var quantityItem2 = 3;

// Shipping charges
var shippingCharges = 100;

// Calculate the total cost
var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

// Heading
document.write("<h3>Shopping Cart</h3>");

// Display the receipt on the page
document.write("Price of Item 1: " + priceItem1 + " PKR<br>");
document.write("Quantity of Item 1: " + quantityItem1 + "<br>");
document.write("Price of Item 2: " + priceItem2 + " PKR<br>");
document.write("Quantity of Item 2: " + quantityItem2 + "<br>");
document.write("Shipping Charges: " + shippingCharges + " PKR<br><br>");
document.write("Total Cost: " + totalCost + " PKR ");


/*
8. Store total marks & marks obtained by a student in 2
variables. Compute the percentage & show the result in
your browser */

// Store the total marks and marks obtained
var totalmarks = 980 ;
var marksobtained = 804 ;

// Calculate the percentage
var percentage = (804 / 980) * 100 ;

// Heading
document.write("<h3>Marks Sheet</h3>")

// Display the result on the page
document.write("Total marks: " + totalmarks + "<br>")
document.write("Marks obtained: " + marksobtained + "<br>")
document.write("Percentage: " + percentage + "%")


/*
9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
script to convert the total currency to Pakistani Rupees.
Perform all calculations in a single expression.
(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
and 1 Saudi Riyal = 28 Pakistani Rupee) */

// Given amounts in US dollars and Saudi Riyals
var usDollars = 10;
var saudiRiyals = 25;

// Exchange rates
var usdToPkrRate = 104.80;
var sarToPkrRate = 28;

// Convert to Pakistani Rupees in a single expression
var totalInPkr = (usDollars * usdToPkrRate) + (saudiRiyals * sarToPkrRate);

// Heading
document.write("<h3>Currency in PKR</h3>")

// Display the result on the page
document.write("Amounts of US Dollars (" + usDollars + ") 1 US Dollar to PKR rate: " + usdToPkrRate + "<br>")
document.write("Amounts of Saudiriyals (" + saudiRiyals + ") 1 Saudiriyal to PKR rate: " + sarToPkrRate + "<br> <br>")
document.write("Total currency in Pakistani Rupees: " + totalInPkr + " PKR");


/*
10. Write a program to initialize a variable with some
number and do arithmetic in following sequence:
a. Add 5
b. Multiply by 10
c. Divide the result by 2
Perform all calculations in a single expression */

// Initialize the variable with some number
var number = 10;

// Perform arithmetic operations in a single expression
var result = ((number + 5) * 10) / 2;

// Heading
document.write("<h3>Arithmetic in following sequence</h3>")

// Display the result on the page
document.write("Add: " + "5" + "<br>");
document.write("Multiply by: " + "10" + "<br>");
document.write("Divide the result by : " + "2" + "<br> <br>");
document.write("Result: " + result);


/*
11. The Age Calculator: Forgot how old someone is?
Calculate it!
a. Store the current year in a variable.
b. Store their birth year in a variable.
c. Calculate their 2 possible ages based on the stored
values.
Output them to the screen like so: “They are either NN or NN
years old”. */

// Store the current year and birth year
var currentYear = 2023;
var birthYear = 2000; 

// Calculate the possible ages
var age1 = currentYear - birthYear;
var age2 = age1 - 1;

// Heading
document.write("<h3>Age Calculator</h3>")

// Display the result on the page
document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br> <br>");
document.write("They are either " + age1 + " or " + age2 + " years old.");


/*
13. The Lifetime Supply Calculator: Ever wonder how
much a “lifetime supply” of your favorite snack is?
Wonder no more.
a. Store your favorite snack into a variable
b. Store your current age into a variable.
c. Store a maximum age into a variable.
d. Store an estimated amount per day (as a number).
e. Calculate how many would you eat total for the rest of
your life.
Output the result to the screen like so: “You will need
NNNN to last you until the ripe old age of NN”. */

// Store your favorite snack
var favoriteSnack = "chocolate chip";

// Store your current age and maximum age
var currentAge = 15;
var maximumAge = 65;

// Store estimated amount per day
var amountPerDay = 3;

// Calculate the total amount needed
var yearsRemaining = maximumAge - currentAge;

var totalAmount = yearsRemaining * 365 * amountPerDay;

// Heading
document.write("<h3>The Lifetime Supply Calculator</h3>")

// Display the result on the page
document.write("Favorite Snack: " + favoriteSnack + "<br>");
document.write("Current age: " + currentAge + "<br>");
document.write("Estimated Maximum age: " + maximumAge + "<br>");
document.write("Amount of snacks per day: " + amountPerDay + "<br> <br>");
document.write("You will need " + totalAmount + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge + ".");



if (dshfbsda) {
    if (dsfsdaf) {
        if (dfsd) {
            
        }
    }
}
















