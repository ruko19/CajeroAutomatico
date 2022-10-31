
// 2 ME INDICA SI ES CLIENTE
// 1 ME INDICA QUE ES ADMINISTRADOR




const usuarios = [
    {
        nombre: 'juan pablo',
        documento:'3',
        password: '3',
        tipoDeUsuario: '2'
    },
    {
        nombre: 'isabela',
        documento: '4',
        password: '4',
        tipoDeUsuario: '2'

    },
    {
        nombre: 'gabriel',
        documento: '1',
        password: '1',
        tipoDeUsuario: '1'
    },
    {
        nombre: 'monica',
        documento: '2',
        password: '2',
        tipoDeUsuario: '1'
    }
]

let cajeroAutomatico = [

    {
        denominacion: 5,
        cantidad: 0

    },
    {
        denominacion: 10,
        cantidad: 0

    },
    {
        denominacion: 20,
        cantidad: 0

    },
    {
        denominacion: 50,
        cantidad: 0

    },
    {
        denominacion: 100,
        cantidad: 0

    }

]

cajeroAutomatico = localStorage.getItem('cajeroAutomatico') == null ? [

    {
        denominacion: 5,
        cantidad: 0

    },
    {
        denominacion: 10,
        cantidad: 0

    },
    {
        denominacion: 20,
        cantidad: 0

    },
    {
        denominacion: 50,
        cantidad: 0

    },
    {
        denominacion: 100,
        cantidad: 0

    }

] : JSON.parse(localStorage.getItem('cajeroAutomatico'))

console.log(cajeroAutomatico);

console.log(`total dinero en el cajero ${cajeroAutomatico.reduce((a,b) => a + (b.cantidad * b.denominacion) , 0 )} mil`)


// function administrador(){
    
//    window.location.href = "./administrador.html";

// }

// function cliente(){
//     window.location.href = "./cliente.html"
// }

function Limpiar(){

    document.getElementById('formulario').reset();

}


function validarIngreso(){
    
    const documentoUsuario = document.getElementById('documentoU').value;
    const passwordUsuario = document.getElementById('passwordU').value;
    
    if (documentoUsuario != "" && passwordUsuario != ""){
        let usuarioObtenido = null;

        for( let i = 0; i < usuarios.length; i++){
           

            if (documentoUsuario.trim() === usuarios[i].documento){
                usuarioObtenido = usuarios[i]
                
            }
        } 
        console.log(usuarioObtenido)
        if (usuarioObtenido){

            if  (passwordUsuario === usuarioObtenido.password){
                if(usuarioObtenido.tipoDeUsuario === '1'){
                    cargarModoAdmin(usuarioObtenido)
                }else {
                    cargarModoCliente(usuarioObtenido)
                }
            }else {
                alert('por favor ingrese la contraseña conrrecta')
            }

        }else {
            alert('ingresar documento valido')
        }

    }else {
        alert('por favor ingrese usurario y contraseña');
    }

    

   
}

function cargarModoAdmin(usuario){

    window.location.href = './administrador.html'
   
    
}


function cargarModoCliente(usuario){



    window.location.href = './cliente.html'



     let totalCajero = cajeroAutomatico.reduce((a,b) => a + (b.cantidad * b.denominacion) , 0 ) ;
     if(totalCajero == 0){
        alert('cajero en mantenimiento por favor vuelva pronto');

        window.location.href = './index.html'

        return

     }

    





}

function salir(){
    alert('vuelva pronto')
    window.location.href = './index.html'
}


function sumaCajero() {

    cajeroAutomatico[0].cantidad = document.getElementById('5mil').value == "" ? cajeroAutomatico[0].cantidad: cajeroAutomatico[0].cantidad + parseInt(document.getElementById('5mil').value)
    cajeroAutomatico[1].cantidad = document.getElementById('10mil').value == "" ? cajeroAutomatico[1].cantidad: cajeroAutomatico[1].cantidad + parseInt( document.getElementById('10mil').value)
    cajeroAutomatico[2].cantidad = document.getElementById('20mil').value == "" ? cajeroAutomatico[2].cantidad: cajeroAutomatico[2].cantidad + parseInt( document.getElementById('20mil').value)
    cajeroAutomatico[3].cantidad = document.getElementById('50mil').value == "" ? cajeroAutomatico[3].cantidad: cajeroAutomatico[3].cantidad + parseInt( document.getElementById('50mil').value)
    cajeroAutomatico[4].cantidad = document.getElementById('100mil').value == "" ? cajeroAutomatico[4].cantidad: cajeroAutomatico[4].cantidad + parseInt(document.getElementById('100mil').value)

    localStorage.setItem('cajeroAutomatico',JSON.stringify(cajeroAutomatico));

    console.log(`total billetes 5mil ${cajeroAutomatico[0].denominacion * cajeroAutomatico[0].cantidad}`)

    console.log(`total billetes 10mil ${cajeroAutomatico[1].denominacion * cajeroAutomatico[1].cantidad}`)
    console.log(`total billetes 20mil ${cajeroAutomatico[2].denominacion * cajeroAutomatico[2].cantidad}`)
    console.log(`total billetes 50mil ${cajeroAutomatico[3].denominacion * cajeroAutomatico[3].cantidad}`)
    console.log(`total billetes 100mil ${cajeroAutomatico[4].denominacion * cajeroAutomatico[4].cantidad}`)

    console.log(`total dinero en el cajero ${cajeroAutomatico.reduce((a,b) => a + (b.cantidad * b.denominacion) , 0 )} mil`)
    

   
    
}





function completarAccion(){

    


    window.location.href = './index.html'
}



function retirarDinero(){

    let contBilletes5 = 0;
    let contBilletes10 = 0;
    let contBilletes20 = 0;
    let contBilletes50 = 0;
    let contBilletes100 = 0;

    let  dineroRetirado = parseInt(document.getElementById('dineroARetirar').value)

    while (dineroRetirado != 0){

        if (dineroRetirado >= cajeroAutomatico[4].denominacion && cajeroAutomatico[4].cantidad > 0){
           dineroRetirado = dineroRetirado - cajeroAutomatico[4].denominacion
           cajeroAutomatico[4].cantidad -= 1
           contBilletes100 += 1

        } else if (dineroRetirado >= cajeroAutomatico[3].denominacion && cajeroAutomatico[3].cantidad > 0){
           dineroRetirado = dineroRetirado - cajeroAutomatico[3].denominacion
           cajeroAutomatico[3].cantidad -= 1
           contBilletes50 += 1;
        } else if (dineroRetirado >= cajeroAutomatico[2].denominacion && cajeroAutomatico[2].cantidad > 0){
           dineroRetirado = dineroRetirado - cajeroAutomatico[2].denominacion
           cajeroAutomatico[2].cantidad -= 1
           contBilletes20 +=1;

   
        }else if (dineroRetirado >= cajeroAutomatico[1].denominacion && cajeroAutomatico[1].cantidad > 0){
           dineroRetirado = dineroRetirado - cajeroAutomatico[1].denominacion
           cajeroAutomatico[1].cantidad -= 1
           contBilletes10 += 1
        }else if(dineroRetirado >= cajeroAutomatico[0].denominacion && cajeroAutomatico[0].cantidad > 0){
           dineroRetirado = dineroRetirado - cajeroAutomatico[0].denominacion
           cajeroAutomatico[0].cantidad -= 1
           contBilletes5 += 1

        }

        console.log(dineroRetirado)
    }

    console.log('billetes de 100 mil retirados: ', contBilletes100)
    console.log('billetes de 50 mil retirados: ', contBilletes50)
    console.log('billetes de 20 mil retirados: ', contBilletes20)
    console.log('billetes de 10 mil retirados: ', contBilletes10)
    console.log('billetes de 5 mil retirados: ', contBilletes5)
    console.log(cajeroAutomatico);



    console.log(`total dinero en el cajero ${cajeroAutomatico.reduce((a,b) => a + (b.cantidad * b.denominacion) , 0 )} mil`)

    localStorage.setItem('cajeroAutomatico',JSON.stringify(cajeroAutomatico));
    
    

}










