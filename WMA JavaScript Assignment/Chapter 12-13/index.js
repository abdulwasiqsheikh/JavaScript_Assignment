  //1
  document.write("1<br>")
  var ch = prompt("please enter any charcter or name")

  if (ch >= "A" && ch <= "Z") {
      document.write(ch +
          " is an UpperCase character <br>");
  } else if (ch >= "a" && ch <= "z") {
      document.write(ch +
          " is an LowerCase character <br>");
  } else {
      document.write(ch +
          " is not an alphabetic character <br>");
  }
  document.write(`<br>_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ <br><br>`)

  //2
  document.write("2<br>")

  var a = +prompt("give the value 1")
  var b = +prompt("give the value 2")
  if (a > b) {
      document.write("The larger number is " + "value1 = " + a);
  } else if (a < b) {
      document.write("The larger number is " + "value2 = " + b);
  } else if (a === b) {
      document.write("Both numbers are equal!")
  } else if (isNaN(a)) {
      alert("Please add an integer!\nbecause it is not an integer value1");
  } else if (isNaN(b)) {
      alert("Please add an integer!\nbecause it is not an integer value2");
  }
  document.write(`<br>_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ <br><br>`)

  //3
  document.write("3<br>")

  var num = prompt("give any number then I give it's positive , negative , or zero")

  if (isNaN(num)) {
      alert("please add a number \nbecause it is not a number " + "'" + num + "'")
  } else if (num == 0) {
      document.write(`0 it is a zero`)
  } else if (num > 0) {
      document.write(`${num} is a positive number`)
  } else if (num < 0) {
      document.write(`${num} is a negative negative`)
  }
  document.write(`<br>_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ <br><br>`)

  //4
  document.write("4<br>")

  var character = prompt("enter any name that it's vowel or not")

  if (character[0] === "a" || character[0] === "e" || character[0] === "i" || character[0] === "o" || character[0] === "u") {
      alert(`${true} because this is a vowel`)
  } else {
      alert(`${false} because this is not a vowel`)
  }
  document.write(`<br>_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ <br><br>`)

  //5
  document.write("5<br>")

  var password = "hashim"
  var userGuessPassword = prompt('please enter his password')
  if(userGuessPassword === password){
      alert(`Correct! the password you entered matches the orignal password`)
  }else{
      alert('incorrect password')
  }
  document.write(`<br>_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ <br><br>`)

  //6
  document.write("6<br>")

  //fix it curly bracket are missing
  var greeting;
  var hour = prompt('what time is it');
  if (hour < 18) {
      greeting = "Good day";
      alert(greeting)
  } else {
      greeting = "Good evening";
      alert(greeting)
  }
  document.write(`<br>_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ <br><br>`)

  //7
  document.write("7<br>")

  var format24hour = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 0]
  var usertime = +prompt("enter a time in 24 hour format then I convert into am & pm format")
  var formatAmAndPm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,]


  if (usertime === format24hour[0]) {
      alert(`${formatAmAndPm[0]} Am`)
  }
  else if (usertime === format24hour[1]) {
      alert(`${formatAmAndPm[1]} Am`)
  }
  else if (usertime === format24hour[2]) {
      alert(`${formatAmAndPm[2]} Am`)
  }
  else if (usertime === format24hour[3]) {
      alert(`${formatAmAndPm[3]} Am`)
  }
  else if (usertime === format24hour[4]) {
      alert(`${formatAmAndPm[4]} Am`)
  }
  else if (usertime === format24hour[5]) {
      alert(`${formatAmAndPm[5]} Am`)
  }
  else if (usertime === format24hour[6]) {
      alert(`${formatAmAndPm[6]} Am`)
  }
  else if (usertime === format24hour[7]) {
      alert(`${formatAmAndPm[7]} Am`)
  }
  else if (usertime === format24hour[8]) {
      alert(`${formatAmAndPm[8]} Am`)
  }
  else if (usertime === format24hour[9]) {
      alert(`${formatAmAndPm[9]} Am`)
  }
  else if (usertime === format24hour[10]) {
      alert(`${formatAmAndPm[10]} Am`)
  }
  else if (usertime === format24hour[11]) {
      alert(`${formatAmAndPm[11]} pm`)
  }
  else if (usertime === format24hour[12]) {
      alert(`${formatAmAndPm[12]} pm`)
  }
  else if (usertime === format24hour[13]) {
      alert(`${formatAmAndPm[13]} pm`)
  }
  else if (usertime === format24hour[14]) {
      alert(`${formatAmAndPm[14]} pm`)
  }
  else if (usertime === format24hour[15]) {
      alert(`${formatAmAndPm[15]} pm`)
  }
  else if (usertime === format24hour[16]) {
      alert(`${formatAmAndPm[16]} pm`)
  }
  else if (usertime === format24hour[17]) {
      alert(`${formatAmAndPm[17]} pm`)
  }
  else if (usertime === format24hour[18]) {
      alert(`${formatAmAndPm[18]} pm`)
  }
  else if (usertime === format24hour[19]) {
      alert(`${formatAmAndPm[19]} pm`)
  }
  else if (usertime === format24hour[20]) {
      alert(`${formatAmAndPm[20]} pm`)
  }
  else if (usertime === format24hour[21]) {
      alert(`${formatAmAndPm[21]} pm`)
  }
  else if (usertime === format24hour[22]) {
      alert(`${formatAmAndPm[22]} pm`)
  }
  else if (usertime === format24hour[23]) {
      alert(`${formatAmAndPm[23]} pm`)
  }
   else if (usertime >= 24 || usertime < 0) {
      alert("please enter correct time under 1 to 23 ..0")
  }
  else if (isNaN(usertime)) {
      alert("please enter a time in number under 1 to 23 ..0")
  }


  if (usertime >= +"00" && usertime < 12) {
      alert("good morning")
  } else if (usertime >= 12 && usertime < 17) {
      alert("good afternoon")
  } else if (usertime >= 17 && usertime < 21) {
      alert("good evening")
  } else if (usertime >= 21 && usertime <= 23) {
      alert("good night")

  }
