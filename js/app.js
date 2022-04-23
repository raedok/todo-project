console.log("Hello from java script");
var myname = "Raad";
var age = "26";
alert("Hello my name is " + myname);
var userName = prompt("What is your name ?");
var Gender = prompt("What is your gender ?, Note: Type the first latter of your gender whit a capital latter like Male or Female");
var userAge = prompt("How old are you ?");

function myFunction() {
    let text = "Press a button!\nEither OK or Cancel.";
    if (confirm(text) == true) {
      text = "You pressed OK!";
    } else {
      text = "You canceled!";
    }
    document.getElementById("demo").innerHTML = text;
  }
if(Gender == "Male"){
    alert("Welcome to my websit Mr " + userName);
}else if(Gender == "Female"){
    alert("Welcome to my websit Ms " + userName);
}else{
    alert("Try agin")
}
if(userAge > 0){
    alert("done");
}else{
    alert("not valid age try agin");
}


//task 6

let answers = [];


function getAnswers(){
    let q1 = questions("do you this the first time vist my web sit ");
    let q2 = questions("do you like my web sit");
    let q3 = questions("do you think my web sit is helpfull");
    answers = [q1, q2 ,q3]
}
getAnswers();

function questions(myQues) {
    let answers = prompt (myQues);
    if(answers != 'yes' && answers != 'no') {
        return 'invalid';
    }
    return answers;
}

function logAnswers(arr) {
    for (let i=0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

logAnswers(answers);