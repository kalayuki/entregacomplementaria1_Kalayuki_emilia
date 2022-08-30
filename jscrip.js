 //Ingreso de la a la pagina

let usuarioRegistrado= prompt ("Para ingresrar debe estar registrado \nUsted se ha registrado?")

if (usuarioRegistrado == "si" || usuarioRegistrado == "SI" || usuarioRegistrado == "Si") {
    let usuario= prompt ("Ingresar usuario");
       let password= prompt("Ingresar password")
    if (usuario != "" && password != "") {
        alert ("No se encuentra usuario y contraseña. \nDebe registrarse")
        
    }

}else {
    // Registro de usuario y contraseña 
    let usuario= prompt ("Registrar usuario");
    let password= prompt("Registrar contraseña (solo numeros)")


    if (usuario != "" && password != ""){

    alert (`Bien venida/o : ${usuario}`)


    }else {
    alert ("verificar datos")
     }

}

// ciclo 

for ( let i = 0; i<=10; i++ ){

    if (i < 5){
        console.log(`Si la note del alumno es: ${i},
         desaprobado`)
    }else if (i >= 5 && i <= 6 ){
        console.log(` Si la nota es : ${i} 
        Es regular revisar TP para poder aprobar` )
    }else{
        console.log (`Si la nota es ${i}
        aprobado`)
    }
}
