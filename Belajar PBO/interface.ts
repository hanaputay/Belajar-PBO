// interface Animal {
//     nama : string;
//     suara(): void;
// }

// interface Category {
//     deskripsi: string;
// }

// class Cat implements Animal, Category{
//     nama: string;
//     deskripsi: string;

//     constructor(nama: string, deskripsi: string) {
//         this.nama = nama;
//         this.deskripsi = deskripsi;
//     }
//     suara(): void{
//         console.log(`${this.nama} ${this.deskripsi} says meoww`);
//     }
// }

// const kucing1 = new Cat("Kitty", "Mamalia");
// kucing1.suara();

//luas permukaan dan volume
interface Volume {
    volume : void;
}

interface LuasPermukaan {
    luasPermukaan : void;
}

class Kubus implements Volume, LuasPermukaan{
    nama: string;
    sisi: number;

    constructor(nama: string, sisi: number) {
        this.nama = nama;
        this.sisi = sisi;
    }
    volume(): void{
        console.log(`Volume ${this.nama} dengan sisi ${this.sisi} = ${this.sisi **3}`);
    }
    luasPermukaan(): void{
        console.log(`Luas permukaan ${this.nama} dengan sisi ${this.sisi} = ${this.sisi **6} `)
    }
}

class Balok implements Volume, LuasPermukaan{
    nama: string;
    sisi: number;

    constructor(nama: string, panjang: number, lebar: number, tinggi: number) {
        this.nama = nama;
        this.panjang = panjang;
        this.lebar = lebar;
        this.tinggi = tinggi;
    }
    volume(): void{
        console.log(`Volume ${this.nama} dengan panjang ${this.panjang}, lebar ${this.lebar}, dan tinggi ${this.tinggi} = ${this.panjang * this.lebar * this.tinggi}`);
    }
    luasPermukaan(): void{
        console.log(`Luas permukaan ${this.nama} dengan panjang ${this.panjang}, lebar ${this.lebar}, dan tinggi ${this.tinggi} = ${2 * (this.panjang * this.lebar + this.panjang * this.tinggi + this.lebar * this.tinggi)} `)
    }
}

class Tabung implements Volume, LuasPermukaan{
    nama: string;
    sisi: number;

    constructor(nama: string, jari: number, tinggi: number) {
        this.nama = nama;
        this.jari = jari;
        this.tinggi = tinggi;
    }
    volume(): void{
        console.log(`Volume ${this.nama} dengan jari-jari ${this.jari} dan tinggi ${this.tinggi} = ${22/7 * this.jari **2 *this.tinggi}`);
    }
    luasPermukaan(): void{
        console.log(`Luas permukaan ${this.nama} dengan jari-jari ${this.jari} dan tinggi ${this.tinggi} = ${2 * 22/7 * this.jari * this.jari + 2 * 22/7 * this.jari * this.tinggi} `)
    }
}



const kubus1 = new Kubus("Kubus", 5);
kubus1.volume();
kubus1.luasPermukaan();

const balok1 = new Balok("Balok", 5, 6, 7);
balok1.volume();
balok1.luasPermukaan();

const tabung1 = new Tabung("Tabung", 7, 5);
tabung1.volume();
tabung1.luasPermukaan();

