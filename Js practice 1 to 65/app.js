                                             // chap # 1 alert
// alert("Thanks for your input!");
// alert ( "Thanks for your input!" );

                                         // chap # 2 Variables for Strings
// var name = "Mark";
// alert(name)
// name = "Ace"; 
// alert(name);
// var nationality;
// nationality = "U.S."; 
// alert(nationality);
// var floogle = "Mark"; 
// var name = "Mark"; 
// var lessonAuthor = "Mark";
// var guyWhoKeepsSayingHisOwnName = "Mark";
// var x = "Mark"; 
// var lastName = "Smith"; 
// var cityOfOrigin = "New Orleans";
// var aussieGreeting = "g'Day";
// var thanx = "Thanks for your input!" 
// alert(thanx); 

                                        // chap # 3 Variables for Numbers 
// var weight = 150;
// weight + 25
// alert(weight);
// var originalNum = 23; 
// var newNum = originalNum + 7;
// alert(newNum);

                                        // chap # 4 Variable Names Legal and Illegal 
// userResponse 
// userResponseTime 
// userResponseTimeLimit 
// response 

                                       // chap # 5 Math expressions: Familiar operators 
// var popularNumber = 4;
// var popularNumber = 2 + 2; 
// alert(popularNumber)
// var num = 10; 
// var anotherNum = 1; 
// var popularNumber = num + anotherNum; 
// alert(popularNumber);
// var whatsLeftOver = 10 % 3;
// alert(whatsLeftOver);

                                       // chap # 6 Math expressions: Unfamiliar operators 
// num++; incriment
// num--; decrement 
// var num = 1;
// var newNum = num++;
// console.log(newNum); 
// var num = 1;
// var newNum = num--;
// console.log(newNum); 

                                       // chap # 7 Math expressions: Eliminating ambiguity 
// var totalCost = 1 + 3 * 4;
// alert(totalCost);
// var resultOfComputation = (2 * 4) * 4 + 2;
// alert(resultOfComputation); 

                                      // chap # 8 Concatenating text strings
// var message = "Thanks for your input!";  
// alert(message);
// var userName = "Adil";
// var message = "Thanks, "; 
// var banger = "!"; 
// alert(message + userName + banger);
// alert("Thanks, " + userName + "!");
// alert("2" + "2"); 

                                      // chap # 9 Promt
// var spec = prompt("Your species?", "human"); 
// var numberOfCats = prompt("How many cats?"); 
// var tooManyCats = numberOfCats + 1;
// alert(tooManyCats); 
// var name = prompt("Enter your name");
// alert(name);

                                      // chap # 10 if statment
// var x  = prompt("Where does the Pope live?"); 
//  if (x === "Vatican") {
//         alert("Correct!");
// } 
// var correctAnswer = "Vatican"; 
// if (x === correctAnswer) { 
//      score++;
//      userIQ = "genius";
//      alert("Correct!");
// } 

                                      // chap # 11 Compersion operators
// if (yourTicketNumber !== 487208) {    
//     alert("Better luck next time.");
// } 
// if (fullName === "Mark" + " " + "Myers") {
//      if (fullName === firstName + " " + "Myers") {
//          if (fullName === firstName + " " + "Myers") {
//              if (fullName === "firstName + " " + lastName) { 
//                 if (totalCost === 81.50 + 135) { 
//                     if (totalCost === materialsCost + 135) { 
//                         if (totalCost === materialsCost + laborCost) { 
//                             if (x + y === a - b) {

                                      // chap # 12 if...else and else if statements 
// var x = prompt("Where does the Pope live?"); 
// if (x === "Vatican") {
//     alert("Correct!"); 
// }

// if (x !== "Vatican") {
//     alert("Wrong answer");
// } 
// var x = prompt("Where does the Pope live?");
// if (x === "Vatican") {
//         alert("Correct!"); 
//     }
// else{ alert("Wrong answer"); 
// }
// var x = prompt("Where does the Pope live?");
// var correctAnswer = "Vatican";
// if (x === correctAnswer) {
//   alert("Correct!");
// }
// else if (x === "Rome") {
//     alert("Incorrect but close"); 
// }
// else{ alert("Wrong answer"); 
// }

                                      // chap # 13 Testing sets of conditions 
// var a = prompt("enter here");
// if (weight > 300 && time < 6 && age > 17 && gender === "male") {
//     alert("Come to our tryout!");
// }
// else {
//     alert("Come to our cookout!");
// } 

                                      // chap # 14 if statements nested 
// if  ((x === y || a === b) && c === d) {
//     g = h;
// }
// else { 
//     e = f;
// } 
                                      // chap # 15 Arrays
// var city0 = "Atlanta";
// var city1 = "Baltimore"; 
// var city2 = "Chicago";
// var city3 = "Denver"; 
// var city4 = "Los Angeles"; 
// var city5 = "Seattle";   
// alert("Welcome to " + city3);
// var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"]; 
// alert("Welcome to " + cities[3]);


                                      // chap # 16 Arrays: Adding and removing elements
// var pets = [];
// pets[0] = "dog";
// pets[1] = "cat";
// pets[2] = "bird"; 
// pets[3] = "lizard";
// pets[4] = "fish";
// pets[5] = "gerbil";
// pets[6] = "snake";
// alert(pets[5]) 
// var pets = ["dog","cat","bird"];
// pets.pop()
// console.log(pets)
// var pets = ["dog","cat","bird"];
// pets.push("fish", "snake")
// console.log(pets)
                                      // chap # 17 Arrays: Removing, inserting, and extracting elements 
// var pets = ["dog","cat","bird"];
// pets.shift()
// console.log(pets)
// var pets = ["dog","cat","bird"];
// pets.unshift("fish", "snake")
// console.log(pets)
// var pets = ["dog","cat","bird", "fly", "bug", "ox"];
// var noPets = pets.slice(2, 4);
// console.log(noPets)                         
                                      // chap # 18 For loop
// var cityToCheck = prompt("Enter city Name"); 
// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
// for (var i = 0; i <= 4; i++) {
//       if (cityToCheck === cleanestCities[i]) {
//      alert("It's one of the cleanest cities");
// }
// else{alert("City is not defined")}
// } 
                             // chap # 19 for loops: Flags, Booleans, array length, and loopus interruptus 
// var numElements = cleanestCities.length; 
// var cityToCheck = prompt("Enter city Name"); 
// var matchFound = "false";
// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
// for (var i = 0; i < numElements; i++);{
// if (cityToCheck === cleanestCities[i]) {
//     matchFound = "true";
//     alert("It's one of the cleanest cities");
    // break;
//   }
// }
// if (matchFound === "false") {   
//     alert("It's not on the list");
// }

                                 // chap # 20 for loops nested 
// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// var fullNames = [];
// for (var i = 0; i < firstNames.length; i++) { 
//     for (var j = 0; j < lastNames.length; j++) {
//          fullNames.push(firstNames[i] + lastNames[j]);
//          document.write(fullNames);
//     }
// }
// console.log(fullNames);
                                      // chap # 21 Changing case
// var cityToCheck = prompt("Enter your city");
// cityToCheck = cityToCheck.toLowerCase(); 
// var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"]; 
// for (var i = 0; i <= 4; i++ ) {
//     if(cityToCheck === cleanestCities [i]){
//         alert("It's one of the cleanest cities"); 
//     }
// }
// var cityToCheck = prompt("Enter your city");
// cityToCheck = cityToCheck.toUpperCase(); 
// var cleanestCities = ["CHEYENNE", "SANTA FE", "TUCSON", "GREAT FALLLS", "HONOLULU"]; 
// for (var i = 0; i <= 4; i++ ) {
//     if(cityToCheck === cleanestCities [i]){
//         alert("It's one of the cleanest cities"); 
//     }
// }
                                      // chap # 22 Strings: Measuring length and extracting parts 
// var cityToCheck = prompt("Enter your city");          
// var firstChar = cityToCheck.slice(2);
// alert(firstChar);
// var month = prompt("Enter a month");
// var charsInMonth = month.length;
// if (charsInMonth > 3) {
//     monthAbbrev = month.slice(0, 3);
//     alert(monthAbbrev);
// }
// var str = prompt("Enter some text");
// var numChars = str.length;
// for (var i = 0; i < numChars; i++) {
//     if (str.slice(i, i + 2) === " ") {
//     alert("No double spaces!");
// Break;
//     }
// }

                                          // chap # 23 Strings: Finding segments
// var text = "World War II";
//  for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 12) === "World War II") {
//         text = text.slice(0, i) + "the Second World War" + text.slice(i + 12); 
//         alert(text)
//     }
// } 
// var firstChar = text.indexOf("World War II");
// if (firstChar ==! -1){
//     text = text.slice(0, firstChar) + "the second world war" + text.slice(firstChar + 12);
//     console.log(text)
//     alert(text)
// }
// var text = "To be or not to be.";
// var segIndex = text.lastIndexOf("be"); 
// alert(segIndex);


                                // chap # 24 Strings: Finding a character at a location 
// var firstName = "ADIL"
// var firstChar = firstName.charAt(0)
// alert(firstChar)
// var firstName = "ADIL"
// var lastChar = names.charAt(names.length - 1);
// alert(lastChar)

// var text = prompt("entrt here")
// for (var i = 0; i < text.length; i++) {
//     if (text.charAt(i) === "!") {
//     alert("Exclamation point found!");
// break;
// }
// }   
                                      // chap # 25 Strings: Replacing characters
// var text = "World War II"
//  var newText = text.replace("World War II", "the Second World War");
// alert(newText);
// text = text.replace("World War II", "the Second World War")
// alert(text);
// var newText = text.replace(/World War II/g, "the Second World War");

                                      // chap # 26 Rounding numbers
// var scoreAvg = prompt("Enter number")
// var numberOfStars = Math.round(scoreAvg);  
// alert(numberOfStars)
// scoreAvg = Math.round(.0678437);
// alert(scoreAvg)
// var scoreAvg = Math.ceil(.000001);
// alert(scoreAvg)
// var scoreAvg = Math.floor(.999999); 
// alert(scoreAvg)
                                      // chap # 27 Generating random numbers 
// var randomNumber = Math.random(); 
// alert(randomNumber)
// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 6) + 1;
// var numberOfStars = Math.floor(improvedNum); 
// alert(numberOfStars)

                              // chap # 28 Converting strings to integers and decimals 
// var currentAge = prompt("Enter your age."); 
// var yearsEligibleToVote = currentAge - 18;
// alert(yearsEligibleToVote);
// var result = "200" + 150; 
// alert(result)
// var currentAge = prompt("Enter your age."); 
// var qualifying  = currentAge + 1;
// alert(qualifying)
// var currentAge = prompt("Enter your age."); 
// var qualifyingAge = parseInt(currentAge) + 1;
// alert(qualifyingAge)

                                // chap # 29 Converting strings to numbers, numbers to strings 
// var integerString = "24"
// var num = Number(integerString);
// alert(num)
// var integerString = "24.9876"
// var num = Number(integerString);
// alert(num)
// var numberAsNumber = 1234;
// var numberAsString = numberAsNumber.toString(); 
// alert(numberAsString)

                                 // chap # 30 Controlling the length of decimals 
// var price = 9.95;
// var taxRate = 6.5;
// var total = price + (price * taxRate);
// alert(total)
// var num = 25
// var str = num.toString();
// if (str.charAt(str.length - 1) === "5") {
//     str = str.slice(0, str.length - 1) + "6";
// }
// num = Number(str);
// prettyNum = num.toFixed(2);
// alert(prettyNum);
                                // chap # 31 Getting the current date and time 
// var rightNow = new Date();
// document.write(rightNow) 
// var rightNow = new Date();
// var dateString = rightNow.toString();
// document.write(dateString)
// var rightNow = new Date();
// var theDay = rightNow.getDay()
// document.write(theDay)
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// document.write(nameOfToday)


                                      // chap # 55
// function makeBig() {
//     document.getElementById("p1").className += " big";
// }
// document.getElementById("pic99").style.cssFloat = "left"; 
// document.getElementById("div9").style.visibility = "hidden";
// document.getElementById("mainPic").style.margin = "0 10px 0 10px;"; 
                                      // chap # 56
// getElementById(the id).style.fontSize = "2em";
// var par = document.getElementsByTagName("p")
{/* <p>This bed is too small.</p> <p>This bed is too big.</p> <p>This bed is just right.</p> */}
// var textInMiddleParagraph = par[1].innerHTML; 
// par[1].innerHTML = "This SUV is too big.";
//  for (var i = 0; i < par.length; i++) {
//     par[i].style.fontFamily = "Verdana, Geneva, sans-serif";
// } 

                                      // chap # 57
// var t = document.getElementById("table9");
// var cells = t.getElementsByTagName("td");
// for (var i = 0; i < cells.length; i++) {
//     cells[i].style.backgroundColor = "pink";
// }
                                      // chap # 58 The DOM

                                      // chap # 59 The DOM: Parents and children 

// 1st level: document
// 2nd level:   <html> 
// 3rd level:     <head> 
// 4th level:       <title> 
// 5th level:         Simple document                 
// </title>               </head> 
// 3rd level      <body> 
// 4th level        <div> 5th level          
//     <p> 
//         6th level            There's not much to this.                   </p> 
//         5th level          <p> 6th level            Nor to this.                   </p>                 </div>               </body>             </html    

                                      // chap # 60
// var eField = document.getElementById("email"); 
// var eField = document.getElementsByTagName("p");
// var contents = p[2].innerHTML;
{/* <body>  
    <div id="cal">     
    <p>Southern Cal is sunny.</p>
    <p>Northern Cal is rainy.</p>     
    <p>Eastern Cal is desert.</p>  
    </div>  
    <div id="ny">     
    <p>Urban NY is crowded.</p>     
    <p>Rural NY is sparse.</p>  
    </div> 
</body>  */}

                                      // chap # 61
{/* <html><head><title>Simple document</title></head><body><div><p>There's not much to this.</p><p>Nor to this. </p></div></body></html */}
// var nType = targetNode.nodeType;
{/* <div id="humpty">  <p>All the king's horses.</p>  <p>All the dude's crew.</p>  <p>All the town's orthopedists.</p> </div> */}
                                      // chap # 62
// var targetNode = parentNode.childNodes[0];
// var targetNode = parentNode.firstChild;
{/* <div id="div1">  <div id="div2">    <p>Chicago</p>    <p>Kansas City</p>    <p>St. Louis</p>  </div> */}
// var firstEl = document.getElementById("div1");
// var nonexistentEl = firstEl.previousSibling; 
                                      // chap # 63
// var parent = document.getElementById("div1");
// var target = parent.firstChild;nName = target.nodeName; 
{/* <h2>Do <em>not</em> hit!</h2>  */}
{/* <h2>Do <em>not</em> hit!</h2> */}
                                      // chap # 64
// var liElements = getElementsByTagName("li");
// var howManyLi = liElements.length
// 1 for (var i = 0; i < howManyLi; i++) { 2   if (liElements[i].innerHTML === "") { 3     liElements[i].innerHTML = "coming soon"; 4   } 5 } 
                                      // chap # 65
{/* <a href="http://www.amazon.com">Shop</a>
<element something="something in quotes"></element>
<div id="p1"> <p class="special"> <img src="images/slow-loris.png"> <span style="font-size:24px;"></span>
<img src="dan.gif" alt="Dan" height="42" width="42"></img> */}
