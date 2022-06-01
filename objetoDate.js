//let FechaHoy = Date.now()//
let fechaHoy = new Date()
let fechaCumpleaños = new Date(1991,1,9)

//dia//
/*console.log(fechaDeHoy.getDate());
console.log(fechaHoy.getFullYear());
console.log(fechaDeHoy.getMonth());
console.log(fechaDehoy.getUTCHours());*/
console.log(fechaCumpleaños.toDateString());
console.log(fechaCumpleaños.toLocaleDateString());
console.log(fechaHoy.toLocaleTimeString());