function calc(){
   const a = document.querySelector('.inp');
   const c = document.querySelector('.obj');
   let b = Number(a.value);
   if(b <= 40){
      b = b + 10;
      document.querySelector('.result').innerHTML=`${b}`;
      c.classList.add('change');
   }
   
   else{
      document.querySelector('.result').innerHTML=`${b}`;
      document.querySelector('.obj').innerHTML='calculated';
      c.classList.remove('change');
   }

}

function handlecost(event){
   document.querySelector('.result').innerHTML=`${event.key}`;
   if (event.key === 'Enter'){
      calc();
   }
}
