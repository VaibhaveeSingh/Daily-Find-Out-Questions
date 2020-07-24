'use strict';

//while loop
console.log('Output of While loop')
var x= 2
while (x !== 20){
    x++
    console.log(x)
}

console.log('Output of Do-While loop')
var y=10
do {
    console.log(y)
    y= y*3
} while (y===20);

console.log('Output of Switch case')


var name= 'taylor'
switch (name) {
 
   case 'taylor':
    console.log('reputation')
       break;
    
    case 'lana':
        console.log('Born to die')
       break;    
   }