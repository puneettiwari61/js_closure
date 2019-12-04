// Challenge 1
function addTwo(num) {
  return num + 2
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
function addS(word) {
  return word + 's'
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {
  let newArr = [];
  array.forEach(n => {
    newArr.push(callback(n));
  })
  return newArr;
}

// console.log(map([1, 2, 3], addTwo)); [3, 4, 5]

// Challenge 4
function forEach(array, callback) {
  for(let i = 0 ; i< array.length; i++){
    callback(array[i]);
  }
}

// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {let newArr = [];
  array.forEach(n => {
    newArr.push(callback(n));
  })
  return newArr;
}

//Extension 2
function reduce(array, callback, initialValue) {
  for(let i = 0 ; i< array.length; i++){
    initialValue = callback(array[i],initialValue)
  }
  return initialValue;
}

//Extension 3
// function intersection(array1,array2,array3) {
//   let newA;
//   array1.reduce((acc,cv) => {
//     (array2.includes(cv) && array3.includes(cv)) ? acc.push(cv):acc;
//     return (newA = acc);
//   },[])
//   return newA;
// }


function intersection(...arrays){
  return arrays.reduce((acc,cv) => {
  return acc.filter(e => cv.includes(e));
  })
}

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
// function union(array1,array2,array3) {
//   let newA;
//   let arrays = (array1.join('') + array2.join('') + array3.join('')).split('');
//   arrays.reduce((acc,cv) => {
//       acc[cv] ===-1?acc.push(cv):acc;
//       return (newA = acc);
//   },[])
//   return newA;
// }


// function union(...arrays){
//   return arrays.reduce((acc,cv) => {
//     return cv.filter(e => {
//       !acc.includes(e)? acc.push(e):acc;
//     })
//   },[])
// }


function union(...arrays){
  return arrays.reduce((acc,cv) => {
    cv.forEach(e => !acc.includes(e)? acc.push(e):acc);
	return acc
  },[])
}


// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
  let newA ={};
  array1.reduce((acc,cv) => {
    array2.includes(callback(cv))? acc[cv] =(array2[(array2.indexOf(callback(cv)))]): acc; 
    return (newA=acc);
  },{})
  return newA
}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
  arrCallbacks.reduce(acc,cv => {
    arrVals.reduce((a,c)=>{
      a.push(cv(c));
      return acc[cv] =  a;
    },[])
      return acc
  },{})
}

or

function multiMap(arrVals,arrCallbacks){
  return arrVals.reduce((acc,cv) => {
   acc[cv] = arrCallbacks.reduce((a,c)=> {
       (a.push(c(cv)));
      return a
    },[])
    return acc;
  },{})
}

or 
function multiMap(arrVals,arrCallbacks){
	let k;
  arrVals.reduce((acc,cv) => {
    arrCallbacks.reduce((a,c)=> {
       (a.push(c(cv)));
		acc[cv] = a;
      return a
    },[])
    return (k = acc);
  },{})
	return k;
}





// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
