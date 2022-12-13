

export class Contact {
    name = '';
    surname = '';
    email = '';
    isConnected = false

    //Usamos un conjunto de datos, que los vamos a usar como prop

    constructor(name, surname, email, isConnected) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.isConnected = isConnected
    }
}