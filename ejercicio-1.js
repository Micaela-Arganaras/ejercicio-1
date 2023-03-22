<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=0, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
      /*  Calcular e informar un sueldo sabiendo que:

La categoria define el sueldo basico mensual
 (1: u$s 1000, 2: u$s 1500, 3: u$s 2000)
 La subcategoria define el multiplicador (A: x1.5, B: x2, C: x2.5)
Ambos datos son ingresados por el usuario
3- Informar dentro de que rango esta el sueldo:

Rango inicial: entre u$s 1500 inclusive y u$s 3000 inclusive
Rango intermedio: entre u$s 3000 exclusive y u$s 4000 inclusive
Rango avanzado: si supera los u$s 4000  */

const sueldoBasico=parseInt(prompt("Ingrese sueldo basico mensual"));
const subcategoria=prompt("Ingrese su subcategoria A,B O C");

switch (subcategoria) {
    case "A":
    case "a":

       categoria= sueldoBasico * 1.5;
    
        break;

     case "B": 
     case "b": 
     
       categoria=sueldoBasico * 2;

        break;

     case "c":
     case "C":  

       categoria= sueldoBasico * 2.5;

        break;
        
    default:
        alert("La subcategoria indicada no existe");
        break;
}

if (categoria>=1500 && (categoria<=3000)) {
 console.log("El sueldo total es " + categoria+ " y su rango es inicial");

}else if(categoria>3000 && (categoria<=4000)){
console.log("El sueldo total es " +categoria+ " y el rango al que pertenece es intermedio");

}else{(categoria>4000)
console.log("El sueldo total es "+categoria+ " y el rango al que pertenece es avanzado");


}








    </script>
    
</body>
</html>