//cara 1
var Car = class {
    constructor(brand){
        this.brand = brand;
    }
}

// cara 2
var Car = class Car2{
    constructor(brand){
        this.brand = brand;
    }
}
//instantiate
var mobil1 = new Car2('Mitsubishi');
console.log(mobil1.brand);



