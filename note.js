let cmd=document.getElementById('cmd');
let txt=document.getElementById('txt');
let nname=document.getElementById('nname');
let header=document.getElementById('header');
let nlist=document.getElementById('nlist');
let ndel=document.getElementById('ndel');
let ndelclose=document.getElementById('ndelclose');
let ndelinput=document.getElementById('ndelinput');
let help=document.getElementById('help');
let helpclose=document.getElementById('helpclose');
let nnameinput=document.getElementById('nnameinput');
let nnameclose=document.getElementById('nnameclose');

cmd.addEventListener('keydown',function(f){
  //for new note
  if(f.key==="Enter" && cmd.value=== "n+"){
    
    nname.style.visibility="visible";
    nname.addEventListener('keydown',function(i){
      
      if(i.key==="Enter" && nnameinput.value!==""){
        nname.style.visibility="hidden";
        localStorage.setItem(nnameinput.value,"");
        header.innerText=nnameinput.value;
        const car=document.createElement("li");
        car.innerText=nnameinput.value;
        nlist.appendChild(car);
        nnameinput.value="";
        txt.value="";
        
        return;
      }
    });
    return;
  }
  //for saving
  else if(f.key==="Enter" && cmd.value==="s+" && header.innerText!==""){
    localStorage.setItem(header.innerText,txt.value);
    return;
  }
  //for showing notes list
  else if(f.key==="Enter" && cmd.value==="sn+"){
    nlist.style.visibility="visible";
    document.addEventListener('click',function(){
      nlist.style.visibility="hidden";
    })
    return;
  }
  
  //for deleting all notes
  else if(f.key==="Enter" && cmd.value==="d*"){
    localStorage.clear();
    return;
  }
  
  //for deleting notes
  else if(f.key==="Enter" && cmd.value==="d+"){
    ndel.style.visibility="visible";
    ndel.addEventListener('keydown' ,function(h){
      if (h.key==="Enter" && ndelinput.value!==""){
        localStorage.removeItem(ndelinput.value);
        
        
        return;
      }
    });
   return;
  }
  // for help
  else if(f.key==="Enter" && cmd.value==="help"){
    help.style.visibility="visible";
    return;
  }
  
  //to open specific note * must be at the bottom of the flow
  else if(f.key==="Enter"){
   var a= localStorage.getItem(cmd.value);
   txt.value=a;
   header.innerText= cmd.value;
   
   return;
  }
  
  else return;
});
  
//Note list update, everytime the page loads
function getKeys(){
  for (let i=0; i<localStorage.length; i++){
   const whatever=document.createElement("li");
   whatever.textContent=localStorage.key(i);
   
   nlist.appendChild(whatever);
   
}
}

getKeys();
//note delete window close operation
ndelclose.addEventListener('click',function(){
  ndelinput.value="";
  ndel.style.visibility="hidden";
});
//help window cose operation
helpclose.addEventListener('click',function(){
  help.style.visibility="hidden";
});
//new note creare window close operation
nnameclose.addEventListener('click',function(){
  nname.style.visibility="hidden"
  nnameinput.value="";
});

// Thats it for now :)