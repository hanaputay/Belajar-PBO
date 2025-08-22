//Hitung bangun datar

//parent
class LuasBangunDatar {
    constructor(nama){
        this.nama = nama;
    }

    luasparent(){
        console.log(`Luas ${this.nama} belum didefenisikan`);
    }
}

//child persegi
class Persegi extends LuasBangunDatar {
    constructor(sisi){
        super("Persegi");
        this.sisi = sisi;
    }

    info(){
        console.log(`Luas ${this.nama} dengan sisi ${this.sisi} = `, this.sisi * this.sisi);
    }

}

var persegi1 = new Persegi(5);
persegi1.info();




 