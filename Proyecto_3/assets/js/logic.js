let num = document.querySelectorAll('.number');
let entrada = document.getElementById('entrada');

console.log(entrada);
var digitosN = [];

num.forEach(
    
    function(val,index){
        
        num[index].addEventListener('click',otnum);
        //console.log(val.innerHTML);
        function otnum(){

           
            let nume = parseInt(num[index].innerHTML);
          
            let dig = digitos(nume).join(''); 

            entrada.value = parseInt(dig);
            console.log( parseInt(dig) + 1);
            

        }
        
    }



)


function digitos(numero){
  
    digitosN.push(numero);
    return digitosN;
}











