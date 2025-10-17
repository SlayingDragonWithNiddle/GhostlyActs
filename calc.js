let display= 
document.getElementById('display');
let display2=
document.getElementById('display2');
let b1= 
document.getElementById("b1");
let b2= 
document.getElementById('b2');
let b3= 
document.getElementById('b3');
let b4= 
document.getElementById('b4');
let b5= 
document.getElementById('b5');
let b6= 
document.getElementById('b6');
let b7= 
document.getElementById('b7');
let b8= 
document.getElementById('b8');
let b9= 
document.getElementById('b9');
let b0= 
document.getElementById('b0');
let plus= 
document.getElementById('bplus');
let minus= 
document.getElementById('b-');
let multiply= 
document.getElementById('binto');
let divide= 
document.getElementById('bdivide');
let dot= 
document.getElementById('bdot');
let clr= 
document.getElementById('bCLR');
let equal= 
document.getElementById('bequal');
let del= 
document.getElementById('bD');

function b11() {
  display.innerText += '1';
}
b1.addEventListener('click',b11);
function b22() {
  display.innerText += '2';
}
b2.addEventListener('click',b22);
function b33() {
  display.innerText += '3';
}
b3.addEventListener('click',b33);
function b44() {
  display.innerText += '4';
}
b4.addEventListener('click',b44);
function b55() {
  display.innerText += '5';
}
b5.addEventListener('click',b55);
function b66() {
  display.innerText += '6';
}
b6.addEventListener('click',b66);
function b77() {
  display.innerText += '7';
}
b7.addEventListener('click',b77);
function b88() {
  display.innerText += '8';
}
b8.addEventListener('click',b88);
function b99() {
  display.innerText += '9';
}
b9.addEventListener('click',b99);
function b00() {
  display.innerText += '0';
}
b0.addEventListener('click', b00);
function dot1() {
  display.innerText += '.';
}
dot.addEventListener('click',dot1);

var a;
var b;
var clkcount= 0;
const btnmap=[{btn: b1,fn: b11},{btn: b2, fn: b22},{btn: b3, fn: b33},{btn: b4, fn: b44},{btn: b5, fn: b55},{btn: b6, fn: b66},{btn: b7, fn: b77},{btn: b8, fn: b88},{btn: b9, fn: b99},{btn: b0, fn: b00},{btn: dot, fn: dot1}];
function remove() {
  btnmap.forEach(item => {
    item.btn.removeEventListener('click', item.fn)
  });
}


plus.addEventListener('click',function(){
  remove();
  plus.disabled= true;
  minus.disabled=true;
  multiply.disabled=true;
  divide.disabled=true;
  clkcount=1;
  a =Number(display.innerText);
  display.innerText += '+';
  //now the numbers will appear in display 2....
  b1.addEventListener('click', function() {
  display2.innerText += "1";
});
b2.addEventListener('click', function() {
  display2.innerText += '2';
});
b3.addEventListener('click', function() {
  display2.innerText += "3";
});
b4.addEventListener('click', function() {
  display2.innerText += "4";
});
b5.addEventListener('click', function() {
  display2.innerText += "5";
});
b6.addEventListener('click', function() {
  display2.innerText += "6";
});
b7.addEventListener('click', function() {
  display2.innerText += "7";
});
b8.addEventListener('click', function() {
  display2.innerText += "8";
});
b9.addEventListener('click', function() {
  display2.innerText += "9";
});
b0.addEventListener('click', function() {
  display2.innerText += "0";
});
dot.addEventListener('click', function() {
  display2.innerText += '.';
});
});

minus.addEventListener('click', function() {
  remove();
  plus.disabled = true;
  minus.disabled = true;
  multiply.disabled = true;
  divide.disabled = true;
  clkcount = 2;
  a = Number(display.innerText);
  display.innerText += '-';
  //now the numbers will appear in display 2....
  b1.addEventListener('click', function() {
    display2.innerText += "1";
  });
  b2.addEventListener('click', function() {
    display2.innerText += '2';
  });
  b3.addEventListener('click', function() {
    display2.innerText += "3";
  });
  b4.addEventListener('click', function() {
    display2.innerText += "4";
  });
  b5.addEventListener('click', function() {
    display2.innerText += "5";
  });
  b6.addEventListener('click', function() {
    display2.innerText += "6";
  });
  b7.addEventListener('click', function() {
    display2.innerText += "7";
  });
  b8.addEventListener('click', function() {
    display2.innerText += "8";
  });
  b9.addEventListener('click', function() {
    display2.innerText += "9";
  });
  b0.addEventListener('click', function() {
    display2.innerText += "0";
  });
  dot.addEventListener('click',function(){
    display2.innerText+='.';
  });
});

multiply.addEventListener('click', function() {
  remove();
  plus.disabled = true;
  minus.disabled = true;
  multiply.disabled = true;
  divide.disabled = true;
  clkcount = 3;
  a = Number(display.innerText);
  display.innerText += '*';
  //now the numbers will appear in display 2....
  b1.addEventListener('click', function() {
    display2.innerText += "1";
  });
  b2.addEventListener('click', function() {
    display2.innerText += '2';
  });
  b3.addEventListener('click', function() {
    display2.innerText += "3";
  });
  b4.addEventListener('click', function() {
    display2.innerText += "4";
  });
  b5.addEventListener('click', function() {
    display2.innerText += "5";
  });
  b6.addEventListener('click', function() {
    display2.innerText += "6";
  });
  b7.addEventListener('click', function() {
    display2.innerText += "7";
  });
  b8.addEventListener('click', function() {
    display2.innerText += "8";
  });
  b9.addEventListener('click', function() {
    display2.innerText += "9";
  });
  b0.addEventListener('click', function() {
    display2.innerText += "0";
  });
  dot.addEventListener('click',function(){
    display2.innerText+='.';
  });
});

divide.addEventListener('click', function() {
  remove();
  plus.disabled = true;
  minus.disabled = true;
  multiply.disabled = true;
 divide.disabled = true;
  clkcount = 4;
  a = Number(display.innerText);
  display.innerText += '/';
  //now the numbers will appear in display 2....
  b1.addEventListener('click', function() {
    display2.innerText += "1";
  });
  b2.addEventListener('click', function() {
    display2.innerText += '2';
  });
  b3.addEventListener('click', function() {
    display2.innerText += "3";
  });
  b4.addEventListener('click', function() {
    display2.innerText += "4";
  });
  b5.addEventListener('click', function() {
    display2.innerText += "5";
  });
  b6.addEventListener('click', function() {
    display2.innerText += "6";
  });
  b7.addEventListener('click', function() {
    display2.innerText += "7";
  });
  b8.addEventListener('click', function() {
    display2.innerText += "8";
  });
  b9.addEventListener('click', function() {
    display2.innerText += "9";
  });
  b0.addEventListener('click', function() {
    display2.innerText += "0";
  });
  dot.addEventListener('click',function(){
    display2.innerText+='.';
  });
});

equal.addEventListener('click',function(){
    
  var b=Number(display2.innerText);
  display2.innerText='';
  if (clkcount === 1) {
    del.disabled=true;
    equal.disabled=true;
    var c= a+b;
    display.innerText= c;
    
  }
  else if(clkcount === 2) {
    del.disabled=true;
    equal.disabled=true;
    var c=a-b;
    display.innerText= c;
  }
  else if (clkcount === 3) {
    del.disabled=true;
    equal.disabled=true;
  var c = a * b;
  display.innerText= c;
  }
  else if (clkcount === 4) {
    del.disabled=true;
    equal.disabled=true;
  var c = a / b;
  display.innerText= c;
  }
  else{
    
  }
  
});

del.addEventListener('click',function(){
  display2.innerText=display2.innerText.slice(0,-1);
  if (display2.innerText===''){
    display.innerText=display.innerText.slice(0,-1);
  }
});
     //Reload whole page
clr.addEventListener('click',function(){
  location.reload();
});


