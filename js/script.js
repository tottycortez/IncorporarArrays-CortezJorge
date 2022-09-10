const listaUsuarios = [];

function nuevoUsuario() {
    let crearUsuario = prompt("Cree su Usuario:")
    listaUsuarios.push(crearUsuario)
    let crearContraseña = Number(prompt("Cree su Contraseña NUMERICA:"))
    listaUsuarios.push(crearContraseña)
    console.log(listaUsuarios)
}
nuevoUsuario()

function ingresoUsuario() {
    let usuario = prompt("Ingrese su Usuario:")
    while (usuario != listaUsuarios[0]) {
        usuario = prompt("Ingrese su Usuario por favor!!!")
    }
    alert("Usuario correcto!")
    let contraseña = prompt(`Ingrese la Contraseña de ${usuario} :`)
    while (contraseña != listaUsuarios[1]) {
        contraseña = prompt(`${usuario}, Ingrese su Contraseña por favor!!!`)
    }
    alert("Contraseña correcta!!")
    alert(`Bienvenido/a ${usuario}!!!`)
}
ingresoUsuario()

let saldo = 0
function mostrarSaldo() {
    alert("Usted seleccionó saber su saldo disponible")
    alert(`Su saldo disponible es $${saldo}`)
}
function agregarDinero() {
    alert("Usted seleccionó agregar dinero a su cuenta")
    let agregar = Number(prompt("¿Cuanto desea agregar?:"))
    saldo = agregar + saldo
    alert(`Su saldo es de $${saldo}`)
}
function retirarDinero() {
    alert("Usted seleccionó retirar dinero a su cuenta")
    let retirar = Number(prompt("¿Cuanto desea retirar?:"))
    if (saldo == 0 || retirar >= saldo) {
        alert(`Monto no disponible, su saldo es de $${saldo}`)
    } else {
        saldo = saldo - retirar
        alert(`Su saldo es de $${saldo}`)
    }
}
function opcionNoDisponible() {
    alert(`Usted seleccionó ${opcion} y no se encuentra disponible!`)
}
let opcion = prompt("Ingrese la opción deseada:\n 1- Saber su saldo disponible.\n 2- Agregar dinero a su cuenta.\n 3- Retirar dinero de su cuenta.\n X - Salir")
while (opcion != "X") {
    if (opcion == "1") {
        mostrarSaldo()
    } else if (opcion == "2") {
        agregarDinero()
    } else if (opcion == "3") {
        retirarDinero()
    } else {
        opcionNoDisponible()
    }
    opcion = prompt("Ingrese la opción deseada por favor:\n 1- Saber su saldo disponible.\n 2- Agregar dinero a su cuenta.\n 3- Retirar dinero de su cuenta.\n X - Salir")
}
alert(`¡Muchas gracias por operar con nosotros ${usuario}, vuelva pronto!`)