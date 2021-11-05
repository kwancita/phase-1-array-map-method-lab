const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//const splitWord = [];

// for (let i = 0; i<=tutorials.length-1; i++){
//     tutorials[i].split(" ")
    
//     //splitWord.push(tutorials[i])
// }

// //console.log(splitWord);
// console.log(substrings);

// const titleCased = () => {
//   return tutorials
// }

// const titleCased = tutorials => {tutorials.map(function (element{
//   const aString = element.split(' ')
// })

////// arraow  function
// const titleCased = () =>  {
//   return tutorials.map(words => words.split(' ').map(cap => 
//     cap.charAt(0).toUpperCase() + cap.slice(1)).join(' '))
//   }


//////  declaration funtion
const titleCase  = function(){
  return tutorials.map(function(words){
    words.split(' ').map(function(cap){
      cap.charAt(0).toUpperCase() + cap.slice(1).join(" ")
    })
  })
}
