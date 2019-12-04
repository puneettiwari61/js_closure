function nonsense(str){
  var blab = function(){
  alert(str);
  }
  blab();
}

function nonsense(str){
  var blab = function(){
  alert(str);
  }
  setTimeout(() => blab(),200);
}

function nonsense(str){
  var blab = function(){
  alert(str);
  }
  return blab;
}

let blabLater = function nonsense(str){
  var blab = function(){
  alert(str);
  }
  return blab;
}

let blabAgainLater = function nonsense(str){
  var blab = function(){
  alert(str);
  }
  return blab;
}


var lastNameTrier = function(firstName){

  var innerFunction = function(lastName) {
       return firstName  + lastName;
   };
   return innerFunction;
   //maybe returns something here
};




function storyWriter(str=''){
  return {
    addWords: function(str1=''){
      return str = str + str1;
    },
    erase: function(){
      return str = '';
    }
  }
}