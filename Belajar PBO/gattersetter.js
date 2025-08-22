class Car {
    constructor(brand){
        this._carname = brand;
    }
    get carname(){
        return this._carname;
    }
    set carname(x){
        this._carname = x;
    }
}

//instantiate
mobil1 = new Car('Pajero');
mobil1.carname = 'Alphard';

console.log(mobil1.carname);
