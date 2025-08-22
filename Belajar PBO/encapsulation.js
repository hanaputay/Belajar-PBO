// class Car{
//     constructor(brand){
//         this._carname = brand;
//     }
//     get carname(){
//         return this._carname;
//     }
//     set carname (x){
//         this._carname = x;
//     }
// }

// newcar = new Car('Pajero');
// console.log(newcar.carname);
// console.log(newcar._carname);

//pagar
class Car{
    #carname;
    constructor(brand){
        this.#carname = brand;
    }
    get carname(){
        return this.#carname;
    }
    set carname (x){
        this.#carname = x;
    }
}

newcar = new Car('Pajero');
console.log(newcar.carname);
console.log(newcar.#carname);