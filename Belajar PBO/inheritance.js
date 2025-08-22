// class Parent {
//     constructor(greeting) {
//         this.greeting = greeting;
//     }
//     parentSay(){
//         console.log(`${this.greeting} this is the parent class.`);
//     }
// }

// // child class
// class Child extends Parent {
//     constructor(greeting, name){
//         super(greeting);
//         this.name = name;
//     }

//     childSay(){
//         console.log(`${this.greeting} , ${this.name} this is the child class.`);
//     }
// }

// //instantiate
// var parent1 = new Parent("Hai");
// parent1.parentSay();

// var child1 = new Child("Hallo", "Mark");
// child1.childSay();

//Hitung bangun datar

//parent
class LuasBangunDatar {
    constructor(nama){
        this.nama = nama;
    }

    luas(){
        console.log(`Luas ${this.nama} belum didefenisikan`);
    }
}

//child persegi
class Persegi extends LuasBangunDatar {
    constructor(sisi){
        super("Persegi");
        this.sisi = sisi;
    }

    luas(){
        return this.sisi * this.sisi;
    }
    info(){
        console.log(`Luas ${this.nama} dengan sisi ${this.sisi} = ${persegi1.luas()}`);
    }
}

//child persegi panjang
class PersegiPanjang extends LuasBangunDatar {
    constructor(panjang,lebar){
        super("Persegi Panjang");
        this.panjang = panjang;
        this.lebar = lebar;
    }

    luas(){
        return this.panjang * this.lebar;
    }
    info(){
        console.log(`Luas ${this.nama} dengan panjang ${this.panjang} dan lebar ${this.lebar} = ${pp1.luas()}`);
    }
}

//child segitiga
class Segitiga extends LuasBangunDatar {
    constructor(alas,tinggi){
        super("Segitiga");
        this.alas = alas;
        this.tinggi = tinggi;
    }

    luas(){
        return this.alas * this.tinggi / 2;
    }
    info(){
        console.log(`Luas ${this.nama} dengan alas ${this.alas} dan tinggi ${this.tinggi} = ${segitiga1.luas()}`);
    }
}

//child lingkaran
class Lingkaran extends LuasBangunDatar {
    constructor(jari) {
        super("Lingkaran");
        this.jari = jari;
    }

    luas(){
        return 22/7 * this.jari **2;
    }
    info(){
        console.log(`Luas ${this.nama} dengan jari-jari ${this.jari} = ${lingkaran1.luas()}`);
    }
}

//child jajar genjang
class JajarGenjang extends LuasBangunDatar {
    constructor(alas, tinggi) {
        super("Jajar Genjang");
        this.alas = alas;
        this.tinggi = tinggi;
    }

    luas() {
        return this.alas * this.tinggi;
    }
    info(){
        console.log(`Luas ${this.nama} dengan alas ${this.alas} dan tinggi ${this.tinggi} = ${jg1.luas()}`);
    }
}

// ====== Contoh Penggunaan ======
var persegi1 = new Persegi(4);
persegi1.info();

var pp1 = new PersegiPanjang(5, 3);
pp1.info();

var segitiga1 = new Segitiga(6, 4);
segitiga1.info();

var lingkaran1 = new Lingkaran(7);
lingkaran1.info();

var jg1 = new JajarGenjang(8, 5);
jg1.info();