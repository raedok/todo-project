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


