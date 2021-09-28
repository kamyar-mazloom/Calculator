//variables
let var1 = "";
let fnc = "";
let var2 = "";

// 4 basic functions
function operator (var1,fnc,var2){ 
  if (fnc=="+") {return Math.round((parseFloat(var1) + parseFloat(var2))*10000000)/10000000}
  else if (fnc=="-") {return Math.round((var1 - var2)*10000000)/10000000}
  else if (fnc=="x") {return Math.round((var1 * var2)*10000000)/10000000}
  else if (fnc=="÷") {return Math.round((var1 / var2)*10000000)/10000000}
  else {return var1}
}

// Clear function
document.getElementById('clrBtn-id').onclick = function() {
  var1 ="";
  fnc ="";
  var2 ="";
  document.getElementById('inDis').innerHTML = "";
  document.getElementById('outDis').innerHTML = operator(var1,fnc,var2);
}

//delete function 
document.getElementById('dltBtn-id').onclick = function() {
  if (fnc=="") {
    var1 = var1.slice(0,-1)
    document.getElementById('inDis').innerHTML = var1 + fnc + var2;
  }
  else if(var2=="") {
    fnc=""
    document.getElementById('inDis').innerHTML = var1 + fnc + var2;
  }
  else{
    var2 = var2.slice(0,-1)
    document.getElementById('inDis').innerHTML = var1 + fnc + var2;
  }
}

//decimal function 
document.getElementById("decBtn-id").onclick = function () {
  if(var1=="") {
    var1 = var1 + 0 + this.innerHTML;
    document.getElementById('inDis').innerHTML = var1 + fnc + var2;
  }
  else if (fnc=="" && var1.includes(".")==false) {
    var1 = var1 + this.innerHTML;
    document.getElementById('inDis').innerHTML = var1 + fnc + var2;
 }
 else if (fnc!=="" && var2=="") {
    var2 = var2 + 0 + this.innerHTML;
    document.getElementById('inDis').innerHTML = var1 + fnc + var2;
 }
 else if (fnc!=="" && var2.includes(".")==false) {
  var2 = var2 + this.innerHTML;
  document.getElementById('inDis').innerHTML = var1 + fnc + var2;
}
}

//Equal function 
document.getElementById('equalBtn-id').onclick = function() {
  if (var2=="") {
    document.getElementById('outDis').innerHTML = var1;  
  }
  else {
    document.getElementById('outDis').innerHTML = operator(var1,fnc,var2);
  }
}

// add to variables 
let numButtons = document.getElementsByClassName('normalBtn');
for (let i=0; i < numButtons.length; i++) {
  numButtons[i].onclick = function(){
    if (fnc=="") {
       var1 = var1 + this.innerHTML;
       document.getElementById('inDis').innerHTML = var1 + fnc + var2;
    }
    else {
       var2 = var2 + this.innerHTML;
       document.getElementById('inDis').innerHTML = var1 + fnc + var2;
    }
  }
}

// choose function 
let fncButtons = document.getElementsByClassName('fncBtn');
for (let i=0; i < fncButtons.length; i++) {
  fncButtons[i].onclick = function(){
    if (var2=="") {
      fnc = this.innerHTML;
      document.getElementById('inDis').innerHTML = var1 + fnc + var2;
    }
    else {
      document.getElementById('outDis').innerHTML = operator(var1,fnc,var2);
      var1 = operator(var1,fnc,var2);
      fnc = this.innerHTML;
      var2 ="";
      document.getElementById('inDis').innerHTML = var1 + fnc + var2;

    }
  }
}