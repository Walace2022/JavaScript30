const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}
//to find what part of your code changes a element fisrt you should go to the devtools in your Browser
//then select the element, click with the right button on the html code of it  find the option BREAK ON and select what type of changing
//and last run the code that changes it. the devtools will show which line is changing the element. 

// Regular
console.log('Hello!');

// Interpolated
console.log('I am %s string!', 'Henrique');
// console.log(`I am ${variable}!`); 

// Styled
console.log('%c I am Henrique!', 'font-size:20px; color:red');

// warning!
console.warn("Warning!");

// Error :|
console.error("Error!");

// Info
console.info("Information!");

// Testing
console.assert(1 === 2, "Shows if it's false"); 

// clearing
console.clear();

// Viewing DOM Elements
console.dir(document.querySelector('p'));

// Grouping together
console.group('Group Name');
console.log('i belong in this group.');
console.log('me too.');
console.groupEnd('Group Name');

console.groupCollapsed('Group Name2');
console.log('i belong in this group.');
console.log('me too.');
console.groupEnd('Group Name2');

// counting

console.count('num');
console.count('num');
console.count('num');
console.count('num');
console.count('num');

// timing
console.time('Timer Name');
console.groupCollapsed('Group Name3');
console.log('i belong in this group.');
console.log('me too.');
console.groupEnd('Group Name3');
console.timeEnd('Timer Name');