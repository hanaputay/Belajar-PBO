// //override
// class Vehicle{
//     sound(){
//         console.log("This vehicle makes a sound");
//     }
// }

// class Car extends Vehicle{
//     sound(){
//         console.log("Vroom..vroom");
//     }
// }

// class Bike extends Vehicle{
//     sound(){
//         console.log("Kring..kring");
//     }
// }

// var vehicle1 = new Vehicle();
// vehicle1.sound();
// var vehicle2 = new Car();
// vehicle2.sound();
// var vehicle3 = new Bike();
// vehicle3.sound();

//overloading
// class TypeNumber {
//     constructor(number){
//         this.number = number;
//         if (typeof number === "string"){
//             this.keterangan = `Ini bukan angka, tapi string : ${number}`;
//         } else {
//             this.keterangan = `Ini adalah angka : ${number}`;
//         }
//     }
//     info(){
//         console.log(this.keterangan);
//     }
// }

// var number1 = new TypeNumber("Hallo");
// number1.info();

//bangun ruang
class VolumeBangunRuang {
    constructor(nama){
        this.nama = nama;
    }

    volume(){
        console.log(`Volume ${this.nama} belum didefenisikan`);
    }
}

//child kubus
class Kubus extends VolumeBangunRuang{
    constructor(sisi){
        super("Kubus");
        this.sisi = sisi;
    }

    volume(){
        console.log(`Volume ${this.nama} dengan sisi ${this.sisi} = `, this.sisi **3);
    }
}

//child balok
class Balok extends VolumeBangunRuang {
    constructor(panjang,lebar,tinggi){
        super("Balok");
        this.panjang = panjang;
        this.lebar = lebar;
        this.tinggi = tinggi;
    }

    volume(){
        console.log(`Volume ${this.nama} dengan panjang ${this.panjang}, lebar ${this.lebar}, dan tinggi ${this.tinggi} = `, this.panjang * this.lebar * this.tinggi);
    }
}

//child tabung
class Tabung extends VolumeBangunRuang {
    constructor(jari,tinggi){
        super("Tabung");
        this.jari = jari;
        this.tinggi = tinggi;
    }

    volume(){
        console.log(`Volume ${this.nama} dengan jari-jari ${this.jari} dan tinggi ${this.tinggi} = `, 22/7 * this.jari **2 *this.tinggi);
    }
}



// ====== Contoh Penggunaan ======
var kubus1 = new Kubus(4);
kubus1.volume();

var balok1 = new Balok(5, 3, 2);
balok1.volume();

var tabung1 = new Tabung(7, 4);
tabung1.volume();

