// Challenge 1. Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];

// Your code here.
arrays.reduce((acc,cv) =>{
  acc.push(...cv)
    return acc},[]) ;

    or

arrays.flat();
// → [1, 2, 3, 4, 5, 6]

// Challenge 2. Your own loop
// Your code here.

function loop(v,testFn,updateFn,bodyFn){
  for(v; testFn(v); v =updateFn(v)){
     bodyFn(v);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);

// → 3
// → 2
// → 1

// Challenge 3. Everything
function every(array, test) {
  // Your code here.
 return (JSON.stringify(array) == JSON.stringify(array.filter(n => test(n)))) 
}

function every(array,test){
	let  p ;
	if (array.length == 0){
		p = true;}
  for(i=0;i < array.length ; i++ ){
    if(array[i] && test(array[i])){
		p = true; 
    }
	else {
		p =  false
		break;	
	} 
  } return p;
}

function every(array,test){
  for(let i =0; i<array.length; i++){
  if(test[i] == false){
    return false;
  }
  else{
    return true;
  }
}
}


// function every(array,test){
//   array.some(e => {
//     test(e)? true : false
//   })
// }

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true



// Challenge 4. Dominant writing direction
function dominantDirection(text) {
  // Your code here.
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
