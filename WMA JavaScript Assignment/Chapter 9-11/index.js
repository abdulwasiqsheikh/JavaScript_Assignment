        //1
        var a = prompt("where are you from ? \ncity name ..")
        if (a === "karachi"){
            document.write("\n  welcome to city of lights")
        }
        document.write(`<br>_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ <br><br>`)
        //2
        var gender = prompt("male or female")
        if(gender === "male"){
            document.write(`<br>good morning sir`)
        }else if(gender === "female"){
            document.write(`<br>good morning madam`)
        }else{
            alert("this is only for male or female")
        }
        document.write(`<br>_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ <br><br>`)

        //3
        var trafficLights = prompt("what is your signal color ? \nred\nyellow\ngreen")
        if(trafficLights === "red"){
            document.write("must stop")
        }else if(trafficLights === "yellow"){
            document.write("ready to move")
        }else if(trafficLights === "green"){
            document.write("move now")
        }else{
            alert("please give true colors")
        }
        document.write(`<br>_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ <br><br>`)

        //4
        var remainFuel = prompt("how much remaining fuel in liters")
        remainFuel = Number.parseInt(remainFuel)
        if(remainFuel < 0.25){
            document.write("please refill the fuel in your car")
        }

        //5
        var A = 4
        if(++A === 5){
            alert('given condition of variable is true')
        }

        var B = 82
        if(B++ === 83){
            alert('given condition of variable is true')
        }


        var C = 12
        if(C++ === 13){
            alert('condition 1 is true')
        }
        if(C === 13){
            alert('condition 2 is true')
        }
         if(++C < 14){
            alert('condition 3 is true')
        }

        if(C === 14){
            alert('condition 4 is true')
        }


        var materialCost = 20000
        var laborCost = 2000
        var totalCost = materialCost + laborCost

        if(totalCost ===  laborCost + materialCost){
            alert("the cost equals")
        }
        if(true){
            alert("true")
        }
        if(false){
            alert("false")
        }
        if("car" < "cat"){
            alert("car is smaller than cats")

        }
        document.write(`<br>_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ <br><br>`)

        //6
        var totalMarks = prompt("give total marks")
        document.write(`Total marks: ${totalMarks}<br>`)
        var obtainMarks = prompt("give your obtained marks")
        document.write(`Obtained marks: ${obtainMarks}<br>`)

        var percentage = obtainMarks/totalMarks * 100
        document.write(`percentage: ${percentage}<br>`)


        if(percentage > 100){
            alert("please give obtain marks smaller than total marks")
        }
        else if(percentage >= 80){
            document.write("grade: A-one<br>")
            document.write("Remarks: Excellent<br>")
        }else if(percentage >= 70){
            document.write("grade: A<br>")
            document.write("Remarks: Good<br>")
        }else if(percentage >= 60){
            document.write("grade: b<br>")
            document.write("Remarks: You need to improve<br>")
        }else if(percentage < 60){
            document.write("grade: fail<br>")
            document.write("Remarks: sorry<br>")
        }else{
            alert("please give the correct values")
        }

        //7
        var secretNum = 7
        var guess = prompt("guess the correct number between 1 to 10")
        guess = Number.parseInt(guess)
        if(guess === secretNum){
            alert("Bingo! correct answer")
        }else if (guess > secretNum){
            alert(`your guess is greater than correct number`)
        }else if (guess < secretNum){
            alert(`your guess is smaller than correct number`)
        }
        document.write(`<br>_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ <br><br>`)

        //8
        var threedivisible = prompt("give any number")
        if(threedivisible % 3 == 0){
            document.write("yes! your number is divided by 3")
        }else{
            document.write("No! your number is not divided by 3")
        }

        //9
        var evenOdd = +prompt("give any number that even or odd")
        if(evenOdd % 2 == 0){
            alert("this is a even number")
        }else{
            alert("this is a odd number")
        }

        //10
        var T = prompt("what's your area temperature")
        if(T > 40){
            alert("it is too hot outside")
        }else if(T > 30){
            alert("the weather today is normal")
        }else if(T > 20){
            alert("Today's weather is cool")
        }else if(T > 10){
            alert("OMG! Today's weather is so cool")
        }else{
            alert("very very cool")
        }

        //11
        var firstValue = +prompt("GIVE FIRST VALUE")
        // firstValue = Number.parseInt(firstValue)
        var secondValue = +prompt("GIVE SECOND VALUE")
        // secondValue = Number.parseInt(secondValue)
        var selectoperator = prompt(`+ - * / %`)

        var calculator = `${firstValue} ${selectoperator} ${secondValue} = `


        if (selectoperator === "+") {
            alert(`${calculator}${firstValue + secondValue}`)
        } else if (selectoperator === "-") {
            alert(`${calculator}${firstValue - secondValue}`)
        } else if (selectoperator === "/") {
            alert(`${calculator}${firstValue / secondValue}`)
        } else if (selectoperator === "*") {
            alert(`${calculator}${firstValue * secondValue}`)
        } else if (selectoperator === "%") {
            alert(`${calculator}${firstValue % secondValue}`)
        } else if(isNaN(firstValue) || isNaN(secondValue)) {
            alert("not a number")
        }else{
            alert("is not a operator")
        }