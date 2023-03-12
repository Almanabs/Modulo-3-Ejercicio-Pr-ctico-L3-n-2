window.alert("Ingrese 3 numeros.");

let lista=[]
for (let i=0;i<3;i++){  
    contador=i+1;
    var num = parseFloat(prompt("Ingrese numero" + contador + ":"));
    lista.push(num);

}

do{
    n=0;
    for (let i=1; i<lista.length; i++)
      if (lista[i-1]>lista[i]){
        temp=lista[i-1];
        lista[i-1]=lista[i];
        lista[i]=temp;
        n=i;
       }
 } while (n!=0);

 if (lista[0]==lista[lista.length-1]){ 
    document.write("los 3 numeros son iguales");
 } 
 else{
    document.write("el menor de los numeros que ingresaste es"+ lista[0]);
    document.write("<br/> El mayor de los numeros que ingresaste es"+ lista[lista.length-1]);

   } 