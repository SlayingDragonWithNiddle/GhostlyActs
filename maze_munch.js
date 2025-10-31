let n=document.getElementById('n');
let restart=document.getElementById('res');
let save=document.getElementById('sav');
let prestige=document.getElementById('pre');
let w=document.getElementById('w');
let a=document.getElementById('a');
let s=document.getElementById('s');
let d=document.getElementById('d');
let display=document.getElementById('display');
const ctx=display.getContext('2d');
var level;
//initial map draw


var check=localStorage.getItem("key");
let map= new Image();//declaring image object

if(check!=null){
  level=parseInt(localStorage.getItem("key"),10);
map.src=check+".png";
}
else {
  level=1;
  map.src=level+".png";
}
n.innerText=level;

map.onload=function(){
  
ctx.drawImage(map,0,0);
//points draw
ctx.beginPath();
ctx.fillStyle="yellow";
ctx.fillRect(146,0,14,16);
ctx.beginPath();
ctx.fillStyle="green";
ctx.fillRect(162,306,14,16);
}
var c=0;// !1-->execute vary last if   statement on specific key press
//player draw
var px=146;
var py=2;
let player= new Image();
player.src= "gtp5.png";
player.onload=function(){
  ctx.beginPath();
ctx.drawImage(player,px,py,14,14);
}
//controls
// w press
w.addEventListener("click", function(e){
  ctx.clearRect(px,py,14,14);//empty canvas
  n.innerText=level;
  ctx.drawImage(map,0,0);
    ctx.beginPath();
  ctx.fillStyle="yellow";
  ctx.fillRect(146,0,14,16);
  ctx.beginPath();
  ctx.fillStyle="green";
  ctx.fillRect(162,306,14,16);
  //redraw map
  //redraw points
  
  py-=16;//player position update
  var pixel=ctx.getImageData(px,py,14,16).data;
  for(let i=0;i<pixel.length;i+=4){
    //black check
    if(pixel[i]<10 && pixel[i+1]<10 && pixel[i+2]<10 ){
      py+=16; 
      break;
    }
    //green check
    else if(pixel[i]===0 && pixel[i+1]===128 && pixel[i+2]===0){
      c=1;
      level+=1;
      n.innerText=level;
      map.src=level+".png";
      map.onload=function(){
      //map draw
        ctx.drawImage(map,0,0);
       //player draw
        ctx.beginPath();
        px=146;
       py=2;
        ctx.drawImage(player,px,py,14,14);
         //points draw
        ctx.beginPath();
        ctx.fillStyle="yellow";
        ctx.fillRect(146,0,14,16);
        ctx.beginPath();
        ctx.fillStyle="green";
        ctx.fillRect(162,306,14,16);
      }
     break;
    }
  }
  //if no black or green, then move normally
  if(c!=1){
    ctx.drawImage(player,px,py,14,14);
  }
  c=0;
  e.stopPropagation();
});
//a press
a.addEventListener("click", function(e){
  ctx.clearRect(px,py,14,14);//empty canvas
  n.innerText=level;
  ctx.drawImage(map,0,0);
  ctx.beginPath();
  ctx.fillStyle="yellow";
  ctx.fillRect(146,0,14,16);
  ctx.beginPath();
  ctx.fillStyle="green";
  ctx.fillRect(162,306,14,16);
    //redraw canvas
  //redraw points
  
  px-=16;//player position update
  var pixel=ctx.getImageData(px,py,16,14).data;
  for(let i=0;i<pixel.length;i+=4){
    //black check
    if(pixel[i]<10 && pixel[i+1]<10 && pixel[i+2]<10){
      px+=16;
      ctx.beginPath();
      ctx.drawImage(player,px,py,14,14);
      break;
    }
    //green check
    else if(pixel[i]===0 && pixel[i+1]===128 && pixel[i+2]===0){
     c=1;
     level+=1;
     n.innerText=level;
     map.src=level+".png";
     map.onload=function(){
       ctx.drawImage(map,0,0);
       ctx.beginPath();
       px=146;
       py=2;
       ctx.drawImage(player,px,py,14,14);
       ctx.beginPath();
       ctx.fillStyle="yellow";
       ctx.fillRect(146,0,14,16);
       ctx.beginPath();
       ctx.fillStyle="green";
       ctx.fillRect(162,306,14,16);
      }
     break;
    }
  }
  //if no black or green, then move normally
  if(c!=1){
    ctx.drawImage(player,px,py,14,14);
  }
  c=0;
  e.stopPropagation();
});
//s press
s.addEventListener("click", function(e){
  ctx.clearRect(px,py,14,14);//empty canvas
  n.innerText=level;
  ctx.drawImage(map,0,0);
  ctx.beginPath();
  ctx.fillStyle="yellow";
  ctx.fillRect(146,0,14,16);
  ctx.beginPath();
  ctx.fillStyle="green";
  ctx.fillRect(162,306,14,16);
    //redraw map
  //redraw points
  
  px+=16;  //player position update
  var pixel=ctx.getImageData(px-2,py,14,14).data;
  for(let i=0;i<pixel.length;i+=4){
    //black check
    if(pixel[i]<10 && pixel[i+1]<10 && pixel[i+2]<10){
      px-=16;
      ctx.beginPath();
      ctx.drawImage(player,px,py,14,14);
      break;
    }
    //green check
    else if(pixel[i]===0 && pixel[i+1]===128 && pixel[i+2]===0){
      c=1;
      level+=1;
      n.innerText=level;
      map.src=level+".png";
      map.onload=function(){
        ctx.drawImage(map,0,0);
        ctx.beginPath();
        px=146;
        py=2;
        ctx.drawImage(player,px,py,14,14);
        ctx.beginPath();
        ctx.fillStyle="yellow";
        ctx.fillRect(146,0,14,16);
        ctx.beginPath();
        ctx.fillStyle="green";
        ctx.fillRect(162,306,14,16);
      }
     break;
    }
  }
  //if no black or green, then move normally
  if(c!=1){
    ctx.drawImage(player,px,py,14,14);
  }
  c=0;
  e.stopPropagation();
});
//d press
d.addEventListener("click", function(e){
  ctx.clearRect(px,py,14,14);// empty canvas
  n.innerText=level;
  ctx.drawImage(map,0,0);
  ctx.beginPath();
  ctx.fillStyle="yellow";
  ctx.fillRect(146,0,14,16);
  ctx.beginPath();
  ctx.fillStyle="green";
  ctx.fillRect(162,306,14,16);
    //redraw map
  //points redraw
  
  py+=16;  //player position update
  var pixel=ctx.getImageData(px,py-2,14,14).data;
  for(let i=0;i<pixel.length;i+=4){
    //black check
    if(pixel[i]<10 && pixel[i+1]<10 && pixel[i+2]<10 ){
     py-=16; 
     ctx.beginPath();
     ctx.drawImage(player,px,py,14,14);
     break;
    }
    //green check
    else if(pixel[i]===0 && pixel[i+1]===128 && pixel[i+2]===0){
     c=1;
     level+=1;
     n.innerText=level;
     map.src=level+".png";
     map.onload=function(){
       ctx.drawImage(map,0,0);
       ctx.beginPath();
       px=146;
       py=2;
       ctx.drawImage(player,px,py,14,14);
       ctx.beginPath();
       ctx.fillStyle="yellow";
       ctx.fillRect(146,0,14,16);
       ctx.beginPath();
       ctx.fillStyle="green";
       ctx.fillRect(162,306,14,16);
      }
     break;
    }
  }
  //if no black or green, then move normally
  if(c!=1){
    ctx.drawImage(player,px,py,14,14);
  }
  c=0;
  e.stopPropagation();
});
//save click ops
save.addEventListener('click',function(){
  localStorage.setItem("key",level);
  
});
//prestige click ops
prestige.addEventListener('click',function(){
  
  localStorage.setItem("key",1);
  level=1;
  n.innerText=level;
  ctx.clearRect(0,0,322,322);
  map.src= level+".png";
  map.onload=function(){
  ctx.drawImage(map,0,0);
  //points draw
  ctx.beginPath();
  ctx.fillStyle="yellow";
  ctx.fillRect(146,0,14,16);
  ctx.beginPath();
  ctx.fillStyle="green";
  ctx.fillRect(162,306,14,16);
 }
  px=146;
  py=2;
  ctx.beginPath();
  ctx.drawImage(player,px,py,14,14);
 
});
//restart click ops
restart.addEventListener('click',function(){
  ctx.clearRect(0,0,322,322);
  map.src=level+".png";
  map.onload=function(){
   ctx.drawImage(map,0,0);
   ctx.beginPath();
   ctx.fillStyle="yellow";
   ctx.fillRect(146,0,14,16);
   ctx.beginPath();
   ctx.fillStyle="green";
   ctx.fillRect(162,306,14,16);
  }
  px=146;
   py=2;
   ctx.beginPath();
   ctx.drawImage(player,px,py,14,14);
});  

