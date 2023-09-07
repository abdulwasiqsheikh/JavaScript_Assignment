/*
2. What will be the output in variables a, b & result after
execution of the following script:
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
Explain the output at each stage:
--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--; */

// Given values
var a = 2, b = 1;
var result = --a - --b + ++b + b--;

console.log(result)

// Heading
document.write("<h3>a, b & result</h3>")

// Display the result on the page
document.write("a is " + a + "<br>")
document.write("b is " + b + "<br>")
document.write("result is " + result + "<br>")


/*
3. Write a program that takes input a name from user &
greet the user. */

// Prompt the user to enter their name
var userName = prompt("Please enter your name:");

// Greet the user using an alert box
alert("Hello, " + userName + "! Welcome to our website.");




var userValue = prompt('table number');

// Heading
document.write("<h3>Multiplication Table</h3>")

if (userValue == null) {
        userValue = 6;
        document.write("No valid input provided. Displaying multiplication table of 6 by default.<br><br>");
    }
    
    document.write("<table border='1'>");
    document.write(`<tr><td> ${userValue} </td> <td> X </td> <td> 1 </td> <td> = </td> <td> ${userValue * 1} </td> </tr>`)
    document.write(`<tr><td> ${userValue} </td> <td> X </td> <td> 2 </td> <td> = </td> <td> ${userValue * 2} </td> </tr>`)
    document.write(`<tr><td> ${userValue} </td> <td> X </td> <td> 3 </td> <td> = </td> <td> ${userValue * 3} </td> </tr>`)
    document.write(`<tr><td> ${userValue} </td> <td> X </td> <td> 4 </td> <td> = </td> <td> ${userValue * 4} </td> </tr>`)
    document.write(`<tr><td> ${userValue} </td> <td> X </td> <td> 5 </td> <td> = </td> <td> ${userValue * 5} </td> </tr>`)
    document.write(`<tr><td> ${userValue} </td> <td> X </td> <td> 6 </td> <td> = </td> <td> ${userValue * 6} </td> </tr>`)
    document.write(`<tr><td> ${userValue} </td> <td> X </td> <td> 7 </td> <td> = </td> <td> ${userValue * 7} </td> </tr>`)
    document.write(`<tr><td> ${userValue} </td> <td> X </td> <td> 8 </td> <td> = </td> <td> ${userValue * 8} </td> </tr>`)
    document.write(`<tr><td> ${userValue} </td> <td> X </td> <td> 9 </td> <td> = </td> <td> ${userValue * 9} </td> </tr>`)
    document.write(`<tr><td> ${userValue} </td> <td> X </td> <td> 10 </td> <td> = </td> <td> ${userValue * 10} </td> </tr>`)
    document.write("</table>");






// Take three subjects' names from the user
var subject1 = prompt("Enter the name of Subject 1:");
var subject2 = prompt("Enter the name of Subject 2:");
var subject3 = prompt("Enter the name of Subject 3:");

// Total marks for each subject
var totalMarks = 100;

// Take obtained marks for each subject from the user
var obtainedMarks1 = parseFloat(prompt("Enter obtained marks for " + subject1 + ":"));
var obtainedMarks2 = parseFloat(prompt("Enter obtained marks for " + subject2 + ":"));
var obtainedMarks3 = parseFloat(prompt("Enter obtained marks for " + subject3 + ":"));

// Calculate total marks and percentage
var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;

// Heading
document.write("<h3>Student Result</h3>")

// Display the result in a table format
document.write("<table border='1'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
document.write("<tr><td colspan='3'><b>Total</b></td><td><b>" + totalObtainedMarks + "</b></td></tr>");
document.write("</table>");

// Display the percentage
document.write(`<p>Percentage: ${percentage.toFixed(2)}  %</p>`);
