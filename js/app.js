'use strict';

var username = prompt('What\'s your name?');
greeting();
var score = 0;
//1
var question1 = prompt('Am I a girl?');
correctyes(question1);
//2
var question2 = prompt('Did I study computer science?');
correctno(question2);
//3
var question3 = prompt('Was I born in the 90\'s?');
correctyes(question3);
//4
var question4 = prompt('Do you like my work?');
correctyes(question4);
//5
var question5 = prompt('Do I hate TV?');
correctno(question5);
//6
for (var i = 1; i < 5; i++) {
    var question6 = prompt('How many feilds did I have an internship in?')
    if (Number(question6) === 4) {
        alert('That is correct!');
        score++;
        i = 5;
    } else if (Number(question6) < 4) {
        alert('Too low!');
    } else if (Number(question6) > 4) {
        alert('Too high!');
    } else {
        alert('Please insert a number!');
    }
}
//7
var BFfood = ['sandwiches', 'pancake', 'eggs', 'yogurt bowls', 'cereal'];
for (var i = 6; i >= 1; i--) {
    var question7 = prompt('What is my favorite breakfast? ' + i + ' attempts left!');
    for (var index = 0; index < BFfood.length; index++) {
        if (question7.toLowerCase() === BFfood[index]) {
            // console.log(BFfood[index]);
            alert('Correct! ' + question7 + ' is one of my favorite breakfasts!');
            score++;
            index = BFfood.length;
            i = 0;
        }
    }
}

alert('My favorite breakfast food are ' + BFfood);
alert('Congratulations ' + username + '! You got ' + score + ' out of 7. Good Job!');
alert('Thank you for visiting my webpage ' + username + '!');


// functions declaration
function correctyes(q) {
    if (q.toLowerCase() === 'yes' || q.toUpperCase() === 'Y') {
        //        console.log('Correct!');
        alert('That is correct! Good for you.');
        score++;
    } else {
        //        console.log('Wrong!');
        alert('Wrong!! Better luck next time.');
    }
}

function correctno(q) {
    if (q.toLowerCase() === 'no' || q.toUpperCase() === 'N') {
        //        console.log('Correct!');
        alert('That is correct! Good for you.');
        score++;
    } else {
        //        console.log('Wrong!');
        alert('Wrong!! Better luck next time.');
    }
}

function greeting() {
    var today = new Date();
    var t = today.getHours();
    var greeting;

    if (t > 18) {
        greeting = 'Good Evening, ';
    } else if (t > 12) {
        greeting = 'Good Afternoon, ';
    } else if (t > 6) {
        greeting = 'Good Morning, ';
    } else {
        greeting = 'Welcome, ';
    }

    return document.write('<h2>' + greeting + username + '!' + '</h2>');
}