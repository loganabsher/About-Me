'use strict';

var name = prompt('What is your name?');

confirm('Hello there! ' + name + ' lets play for a bit.');

var questions = ['I want to know. If the a site crashes on the deep web, does it make a sound?', 'Do I seem like a brave person?', 'Did Chewbacca get the junior dev job that he interviewed for?', 'Sorry, these bad jokes are getting out of hand, wouldn\'t you say?', 'Did you at least enjoy yourself?'];

var responseOne = ['S P O O P Y', 'That\'s very nice of you to say! I hope I am at least, a little courageous when needed.', 'He must be pretty good for a wookie.', 'At least it\'s over now.', 'Wonderful~! I\'m glad! Come back sometime, yeah?'];

var responseTwo = ['It would be best if we stay out of there...', 'I\'m not! But maybe for cautionary purposes, I like to listen to scary stories onilne and watch scary movies.', 'Ah, I suppose he\'s just a wookie.', 'Comedy is harder than it seems!', 'Winter has been tough. I\'ve had to ration happiness, myself.'];

for(var i = 0; i < questions.length; i++){
  console.log(questions[i]);
  prompt(questions[i]);
  document.write('<p class="THINGS">' + questions[i] + '<br>');
}

alert('I like you. Shall we play some more?');

game();

function game(){
  var a = 4;
  console.log('IT WORKED');
  while(a > 0) {
    var x = prompt('What do you think my age is?');
    if (parseInt(x) === 23) {
      alert('BULLSEYE! <3');
      break;
    }else if(x < 23) {
      alert('Not quite. Too young. :)');
    }else if(x > 23){
      alert('I didn\'t know I looked so mature. I\'m younger~! Try again :)');
    }
    console.log(x);
    a--;
    alert('You have ' + a + ' chances left.');
  }
}
//
// var userAnswer = prompt('I want to know. If the a site crashes on the deep web, does it make a sound?').toLowerCase();
//
// if (userAnswer === 'yes') {
//   console.log('S P O O P Y');
// } else{
//   console.log('It would be best if we stay out of there...');
// }
//
//
// var userAnswer = prompt('Do I seem like a brave person?').toLowerCase();
//
// if (userAnswer === 'yes') {
//   console.log('That\'s very nice of you to say! I hope I am at least, a little courageous when needed.');
// } else{
//   console.log('I\'m not! But maybe for cautionary purposes, I like to listen to scary stories onilne and watch scary movies.');
// }
//
//
// var userAnswer = prompt('Did Chewbacca get the junior dev job that he interviewed for?').toLowerCase();
//
// if (userAnswer === 'yes') {
//   console.log('He must be pretty good for a wookie.');
// } else{
//   console.log('Ah, I suppose he\'s just a wookie.');
// }
//
// //QUESTIO 4
//
// var userAnswer = prompt('Sorry, these bad jokes are getting out of hand, wouldn\'t you say?').toLowerCase();
//
// if (userAnswer === 'yes') {
//   console.log('At least it\'s over now.');
// } else{
//   console.log('Comedy is harder than it seems!');
// }
//
//
// var userAnswer = prompt('Did you at least enjoy yourself?').toLowerCase();
//
// if (userAnswer === 'yes') {
//   console.log('Wonderful~! I\'m glad! Come back sometime, yeah?');
// } else{
//   console.log('Winter has been tough. I\'ve had to ration happiness, myself.');
// }
// alert('I like you. Shall we play some more?');
//
//
// var a = 0;
// var b = 3;
//
// while(a < 4) {
//   var userAnswer = prompt('Can you guess how old I am?');
//
//   if (parseInt(userAnswer) === 23) {
//     alert('BULLSEYE! <3');
//   }else if(userAnswer < 23) {
//     alert('Not quite. Too young. :)');
//   }else if(userAnswer > 23){
//     alert('I didn\'t know I looked so mature. I\'m younger~! Try again :)');
//   }{
//     console.log(userAnswer);
//   }
//   a++;
//   alert('You have' + b + 'chances left.');
  //ADD MORE ALERTS DISPLAYING THE AMOUNT OF LOOPS/ATTEMPTS LEFT
    //alert('You have' + b + 'chances left.');
