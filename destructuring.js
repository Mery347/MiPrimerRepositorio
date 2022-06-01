// aplicado a arrays//

let colores = ["Rojo","Azul","Amarillo",{
    colorMezcla: "Violeta"
}]

let colorRojo = colores[0]
let colorAzul = colores[1]
let colorAmarillo = colores[2]

let [rojo,azul,pepito]= colores

//console.log(colorAmarillo,pepito);//


// aplicado a objetos literales//

let concensionaria = {
    marca :"volkswagen" ,
    modelo: " Vento",
    precio: 6000000,
    km:60000 ,
    color: "Turquesa",
    anio :2020 ,
    patente: "COM017",
    vandido: true
}

 let {color, modelo,precio,km,anio,patente,vendido} = auto

 console.log(modelo );