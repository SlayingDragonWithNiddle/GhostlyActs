let score=document.getElementById("score");
let popup=document.getElementById("popup");
let display=document.getElementById("display");
let up=document.getElementById("w");
let down=document.getElementById("d");
let left=document.getElementById("a");
let right=document.getElementById("s");
//for sound
let food= new Audio("snake_button_press.mp3");
food.preload="auto";
let button_click=new Audio("snake_mouse_click_2.mp3")
button_click.preload="auto";
//canvas object
const ctx=display.getContext('2d');
var pixel;
var hx=30;
var hy=200;
var bx=[20];
var by=[200];
var check=1;//for letting only one food at a time
var x,y;
var x,y;
var scoreValue=0;

//detect wall colision
function onColision(){
  if(hy<0){
    ctx.fillStyle="black";
    ctx.fillRect(0,0,300,450);
    popup.style.visibility="visible";
    document.addEventListener("click",function(){
      location.reload();
    });
  }
  else if(hy>440){
    ctx.fillStyle="black";
    ctx.fillRect(0,0,300,450);
    popup.style.visibility="visible";
    document.addEventListener("click",function(){
      location.reload();
    });
  }
  else if(hx<0){
    ctx.fillStyle="black";
    ctx.fillRect(0,0,300,450);
    popup.style.visibility="visible";
    document.addEventListener("click",function(){
      location.reload();
    });
  }
  else if(hx>290){
    ctx.fillStyle="black";
    ctx.fillRect(0,0,300,450);
    popup.style.visibility="visible";
    document.addEventListener("click",function(){
      location.reload();
    });
  }
}
//general move function
function move(){
  ctx.clearRect(0,0,300,450);
  ctx.beginPath();
  if(check===1){
  rx=Math.floor(Math.random()*150);
  ry=Math.floor(Math.random()*225);
  x=rx*2+1;
  y=ry*2+1;
  check=0;
  }
  ctx.arc(x,y,2,0,Math.PI*2);
  ctx.fillStyle="yellow";
  ctx.fill();
  //
  //detect wall colision
  onColision();
  pixel=ctx.getImageData(hx,hy,10,10).data;
  for(let i=0;i<pixel.length;i+=4){
    if(pixel[i]===255 && pixel[i+1]===255 && pixel[i+2]===0){
      //sound
      food.currentTime=0;
      food.play();
      check=1;
      //update score
      scoreValue+=1;
      score.innerText="Score:"+" "+scoreValue;
      //update array
      bx.push(bx[bx.length-1]-10);
      by.push(by[by.length-1]);
      break;
    }
  }
  //head draw
  ctx.fillStyle="yellow";
  ctx.fillRect(hx,hy,10,10);
  //body draw
  for(let j=0;j<bx.length;j++){
    ctx.fillStyle="#9a9d00";
    ctx.fillRect(bx[j],by[j],10,10);
  }
  //update position values
  for(let k=bx.length-1;k>0;k--){
    bx[k]=bx[k-1];
    by[k]=by[k-1];
  }
  bx[0]=hx;
  by[0]=hy;
  hx+=10;
  
}
up.addEventListener("click",function(e){
  //button press sound
  button_click.currentTime=0;  button_click.play();
  
  move=function(){
  ctx.clearRect(0,0,300,450);
  if(check===1){
  rx=Math.floor(Math.random()*150);
  ry=Math.floor(Math.random()*225);
  x=rx*2+1;
  y=ry*2+1;
  check=0;
  }
  ctx.beginPath();
  ctx.arc(x,y,2,0,Math.PI*2);
  ctx.fillStyle="yellow";
  ctx.fill();
  onColision();
  pixel=ctx.getImageData(hx,hy,10,10).data;
  for(let i=0;i<pixel.length;i+=4){
    if(pixel[i]===255 && pixel[i+1]===255 && pixel[i+2]===0){
      //sound
      food.currentTime=0;
      food.play();
      check=1;
      //update score
      scoreValue+=1;
      score.innerText="Score:"+" "+scoreValue;
      //update array
      bx.push(bx[bx.length-1]-10);
      by.push(by[by.length-1]);
      break;
    }
  }
  //head draw
  ctx.fillStyle="yellow";
  ctx.fillRect(hx,hy,10,10);
  //body draw
  for(let j=0;j<bx.length;j++){
    ctx.fillStyle="#9a9d00";
    ctx.fillRect(bx[j],by[j],10,10);
  }
  //update position values
  for(let k=bx.length-1;k>0;k--){
    bx[k]=bx[k-1];
    by[k]=by[k-1];
  }
  bx[0]=hx;
  by[0]=hy;
  hy-=10;
  
  };
  e.stopPropagation();
});
down.addEventListener("click",function(e){
  //button press sound
  button_click.currentTime=0; 
  button_click.play();
  move=function(){
  ctx.clearRect(0,0,300,450);
  if(check===1){
  rx=Math.floor(Math.random()*150);
  ry=Math.floor(Math.random()*225);
  x=rx*2+1;
  y=ry*2+1;
  check=0;
  }
  ctx.beginPath();
  ctx.arc(x,y,2,0,Math.PI*2);
  ctx.fillStyle="yellow";
  ctx.fill();
  onColision();
  pixel=ctx.getImageData(hx,hy,10,10).data;
  for(let i=0;i<pixel.length;i+=4){
    if(pixel[i]===255 && pixel[i+1]===255 && pixel[i+2]===0){
      //sound
      food.currentTime=0;
      food.play();
      check=1;
      //update score
      scoreValue+=1;
      score.innerText="Score:"+" "+scoreValue;
      //update array
      bx.push(bx[bx.length-1]-10);
      by.push(by[by.length-1]);
      break;
    }
  }
  //head draw
  ctx.fillStyle="yellow";
  ctx.fillRect(hx,hy,10,10);
  //body draw
  for(let j=0;j<bx.length;j++){
    ctx.fillStyle="#9a9d00";
    ctx.fillRect(bx[j],by[j],10,10);
  }
  //update position values
  for(let k=bx.length-1;k>0;k--){
    bx[k]=bx[k-1];
    by[k]=by[k-1];
  }
  bx[0]=hx;
  by[0]=hy;
  hy+=10;
  
  };
  e.stopPropagation();
});
left.addEventListener("click",function(e){
  //button press sound
  button_click.currentTime=0; 
  button_click.play();
  move=function(){
  ctx.clearRect(0,0,300,450);
  if(check===1){
  rx=Math.floor(Math.random()*150);
  ry=Math.floor(Math.random()*225);
  x=rx*2+1;
  y=ry*2+1;
  check=0;
  }
  ctx.beginPath();
  ctx.arc(x,y,2,0,Math.PI*2);
  ctx.fillStyle="yellow";
  ctx.fill();
  onColision();
  pixel=ctx.getImageData(hx,hy,10,10).data;
  for(let i=0;i<pixel.length;i+=4){
    if(pixel[i]===255 && pixel[i+1]===255 && pixel[i+2]===0){
      //food sound
      food.currentTime=0;
      food.play();
      check=1;
      //update score
      scoreValue+=1;
      score.innerText="Score:"+" "+scoreValue;
      //update array
      bx.push(bx[bx.length-1]-10);
      by.push(by[by.length-1]);
      break;
    }
  }
  //head draw
  ctx.fillStyle="yellow";
  ctx.fillRect(hx,hy,10,10);
  //body draw
  for(let j=0;j<bx.length;j++){
    ctx.fillStyle="#9a9d00";
    ctx.fillRect(bx[j],by[j],10,10);
  }
  //update position values
  for(let k=bx.length-1;k>0;k--){
    bx[k]=bx[k-1];
    by[k]=by[k-1];
  }
  bx[0]=hx;
  by[0]=hy;
  hx-=10;
  
  };
  e.stopPropagation();
});
right.addEventListener("click",function(e){
  //button press sound
  button_click.currentTime=0; 
  button_click.play();
  move=function(){
  ctx.clearRect(0,0,300,450);
  if(check===1){
  rx=Math.floor(Math.random()*150);
  ry=Math.floor(Math.random()*225);
  x=rx*2+1;
  y=ry*2+1;
  check=0;
  }
  ctx.beginPath();
  ctx.arc(x,y,2,0,Math.PI*2);
  ctx.fillStyle="yellow";
  ctx.fill();
  onColision();
  pixel=ctx.getImageData(hx,hy,10,10).data;
  for(let i=0;i<pixel.length;i+=4){
    if(pixel[i]===255 && pixel[i+1]===255 && pixel[i+2]===0){
      //food sound
      food.currentTime=0;
      food.play();
      check=1;
      //update score
      scoreValue+=1;
      score.innerText="Score:"+" "+scoreValue;
      //update array
      bx.push(bx[bx.length-1]-10);
      by.push(by[by.length-1]);
      break;
    }
  }
  //head draw
  ctx.fillStyle="yellow";
  ctx.fillRect(hx,hy,10,10);
  //body draw
  for(let j=0;j<bx.length;j++){
    ctx.fillStyle="#9a9d00";
    ctx.fillRect(bx[j],by[j],10,10);
  }
  //update position values
  for(let k=bx.length-1;k>0;k--){
    bx[k]=bx[k-1];
    by[k]=by[k-1];
  }
  bx[0]=hx;
  by[0]=hy;
  hx+=10;
  
  };
  e.stopPropagation();
});

setInterval(()=>move(),120);


