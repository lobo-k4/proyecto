class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greet(){
        console.log(`hola soy: ${this.nombre}, tendo la edad: ${this.edad}`)
    }
}

module.exports = User