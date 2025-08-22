class Car {
    constructor(merek) {
        this.merek = merek;
    }
    instanceof(){
        console.log(`Car brand : ${this.merek}`);
    }
}

module.exports = Car;