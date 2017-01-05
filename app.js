'use strict';

// alert('Hello there~!');
//
// // QUESTION 1
//
// var userAnswer = prompt('I want to know. If the a site crashes on the deep web, does it make a sound?').toLowerCase();
//
// if (userAnswer === 'yes') {
//   console.log('S P O O P Y');
// } else{
//   console.log('It would be best if we stay out of there...');
// }
//
// // QUESTION 2
//
// var userAnswer = prompt('Do I seem like a brave person?').toLowerCase();
//
// if (userAnswer === 'yes') {
//   console.log('That\'s very nice of you to say! I hope I am at least, a little courageous when needed.');
// } else{
//   console.log('I\'m not! But maybe for cautionary purposes, I like to listen to scary stories onilne and watch scary movies.');
// }
//
// // QUESTION 3
//
// var userAnswer = prompt('Did Chewbacca get the junior dev job that he interviewed for?').toLowerCase();
//
// if (userAnswer === 'yes') {
//   console.log('He must be pretty good for a wookie.');
// } else{
//   console.log('Ah, I suppose he\'s just a wookie.');
// }
//
// // QUESTION 4
//
// var userAnswer = prompt('Sorry, these bad jokes are getting out of hand, wouldn\'t you say?').toLowerCase();
//
// if (userAnswer === 'yes') {
//   console.log('At least it\'s over now.');
// } else{
//   console.log('Comedy is harder than it seems!');
// }
//
// // QUESTION 5
//
// var userAnswer = prompt('Did you at least enjoy yourself?').toLowerCase();
//
// if (userAnswer === 'yes') {
//   console.log('Wonderful~! I\'m glad! Come back sometime, yeah?');
// } else{
//   console.log('Winter has been tough. I\'ve had to ration happiness, myself.');
// } if(//
// alert('I like you. Shall we play some more?');

//QUESTION 6

var a = 0;
var b = 3;

while(a < 4) {
  var userAnswer = prompt('Can you guess how old I am?');

  if (parseInt(userAnswer) === 23) {
    alert('BULLSEYE! <3');
  }else if(userAnswer < 23) {
    alert('Not quite. Too young. :)');
  }else if(userAnswer > 23){
    alert('I didn\'t know I looked so mature. I\'m younger~! Try again :)');
  }{
    console.log(userAnswer);
  }
  a++;
  alert('You have' + b + 'chances left.');
  //ADD MORE ALERTS DISPLAYING THE AMOUNT OF LOOPS/ATTEMPTS LEFT
    //alert('You have' + b + 'chances left.');
}
