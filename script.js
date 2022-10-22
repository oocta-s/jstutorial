// variables
var dog = "Rusty"
var name = "Joseph"
var age = "22"
console.log("hello there your pet " + dog + " is hungry")


// Methods
// var userName = prompt("what is your name");
// alert("Nice to meet you, " + userName);
// console.log("you are welcome, " + userName);


// Stalker Exercise
// var Firstname = prompt("What is your First name?");
// var Lastname = prompt("What is your Last name?");
// var age = prompt("How old are you?");
// alert("Hi there " + Firstname + " " + Lastname);
// alert("Are you really " + age + " years old");


// Age calculator exercise
// alert("Enter your age and find out how many day you have lived for");
// var age = prompt("How old are you?");
// var reply = age * 365.25
// alert("You have lived for " + reply + " days");



// Conditionals exercise
// var age = prompt("How old are you?")
// if (age < 18){
//     alert("You are too young to access the venue")
// }
// else if(age < 21){
//     alert("You can enter but not control the machine")
// }
// else{
//     alert("Feel free to work")
// }



// Guessing Game Exercise
// var secretNumber = 8;
// var guess = prompt("GUESS THE SECRET NUMBER");
// if(Number(guess) === secretNumber){
//     alert("HURRAY YOU GOT IT RIGHT");
// }
// else if(Number(guess) > secretNumber){
//     alert("OUCH.... TRY AGAIN... TOO HIGH");
// }
// else{
//     alert("OUCH.... TRY AGAIN... TOO LOW");
// }



// WHILE LOOP exercises
// var count = 1;

// while(count < 6){
//     console.log(count);
//     count++
// }

// var number = 5;
// while(number <= 25){
//     console.log(number);
//     number+=2
// }

// var str = "Joseph";
// var count = 0;
// while(count < str.length){
//     console.log(str[count]);
//     count++
// }

// var num = 1
// while(num <= 30){
//     if(num % 4 === 0){
//         console.log(num);
//     }
//     num++;
// }



// var num = -10;
// while(num <= 19 ){
//     console.log(num);
//     num++;
// }

// var num = 10
// while(num <= 40){
//     console.log(num);
//     num++;
// }

// var num = 300;
// while(num <= 333){
//     if( num % 2 !== 0){
//         console.log(num);
//     }
//     num++
// }

// var num = 5;
// while(num <= 50){
//     if( num % 5 === 0 && num % 3 === 0){
//         console.log(num);
//     }
//     num++
// }

// annoy-o-matic exercise
var answer = prompt("are we there yet?")
while(answer !== "yes" && answer !== "yh"){
    var answer = prompt("are we there yet?");
}
alert("we made it")

// For LOOP
// var str = "Joseph"

// for( var i = 0; i< str.length; i++){
//     console.log(str[i]);
// } 


// for(var i = 0; i < 16; i +=8){
//     console.log(i);
// }

// var str = "OLUMODEJI"
// for(var i = 1; i < str.length; i+2){
//     console.log(str[i]);
// }