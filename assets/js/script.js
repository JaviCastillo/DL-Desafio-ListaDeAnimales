class Propietario {
    constructor(nombrePropietario, direccion, telefono) {
        this.nombrePropietario =  nombrePropietario;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    datosPropietario() {
        return `<p>El nombre del dueño es: ${this.nombrePropietario}. El domicilio es: ${this.direccion}, y el número telefónico de contacto: ${this.telefono}</p>`;
    }
}

class Animal extends Propietario{
    constructor(nombrePropietario, direccion, telefono, nombreAnimal, tipo){
        super(nombrePropietario, direccion, telefono);
        this.nombreAnimal = nombreAnimal;
        this.tipo = tipo;
    }

    datosAnimal(){
        return `<p>El nombre del animal es: ${this.nombreAnimal}. Siendo este un: ${this.tipo}, y la enfermedad es: ${this.enfermedad}</p>`;
    }
}

class Perro extends Animal{
    constructor(nombrePropietario, direccion, telefono, nombreAnimal, tipo, enfermedad){
        super(nombrePropietario, direccion, telefono, nombreAnimal, tipo);
        this._enfermedad = enfermedad;
    }

    get enfermedad(){
        return this._enfermedad;
    }

    set enfermedad(new_enfermedad){
        this._enfermedad = new_enfermedad;
    }
}

class Gato extends Animal{
    constructor(nombrePropietario, direccion, telefono, nombreAnimal, tipo, enfermedad){
        super(nombrePropietario, direccion, telefono, nombreAnimal, tipo);
        this._enfermedad = enfermedad;
    }

    get enfermedad(){
        return this._enfermedad;
    }

    set enfermedad(new_enfermedad){
        this._enfermedad = new_enfermedad;
    }
}

class Conejo extends Animal{
    constructor(nombrePropietario, direccion, telefono, nombreAnimal, tipo, enfermedad){
        super(nombrePropietario, direccion, telefono, nombreAnimal, tipo);
        this._enfermedad = enfermedad;
    }

    get enfermedad(){
        return this._enfermedad;
    }

    set enfermedad(new_enfermedad){
        this._enfermedad = new_enfermedad;
    }
}


let formulario = document.querySelector('form');

let instancias = (e) => {
    e.preventDefault();

    let propietario = document.getElementById('propietario').value;
    let telefono = document.getElementById('telefono').value;
    let direccion = document.getElementById('direccion').value;
    let nombreMascota = document.getElementById('nombreMascota').value;
    let tipo = document.getElementById('tipo').value;
    let enfermedad = document.getElementById('enfermedad').value;
    let motorCA = new Animal;

    if(propietario!="" && telefono!="" && direccion!="" && nombreMascota!="" && enfermedad!=""){
        
        if (tipo == 'perro') {
            motorCA = new Perro(propietario, direccion, telefono, nombreMascota, tipo, enfermedad);
        }
        if (tipo == 'gato') {
            motorCA = new Gato(propietario, direccion, telefono, nombreMascota, tipo, enfermedad);
        }
        if (tipo == 'conejo') {
            motorCA = new Conejo(propietario, direccion, telefono, nombreMascota, tipo, enfermedad);
        }
        

        document.getElementById('resultado').innerHTML = `
                    <ul>
                        <li>${motorCA.datosPropietario()}</li>
                        <li>${motorCA.datosAnimal()}</li>
                    <ul>`;

        console.log(motorCA);
    }
    
}

formulario.addEventListener('submit', instancias);