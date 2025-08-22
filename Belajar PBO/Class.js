class Car{
    constructor(brand){
        this.brand = brand;
    }
}

//instantiate the class
var mobil1 = new Car ('Pajero');
console.log(mobil1.brand);
//instantiate second object
var mobil2 = new Car ('Toyota');
console.log(mobil2.brand);

//latihan
class Data{
    constructor(peserta){
        this.peserta = peserta;
    }
}

var nama = new Data ('Hana Putri Ariyadi');
console.log(nama.peserta);

var umur = new Data ('23 Tahun');
console.log(umur.peserta);

var proglat = new Data ('Pengembangan Website');
console.log(proglat.peserta);

//cara lain
 class Peserta{
    constructor(nama, umur, proglat){
        this.nama = nama;
        this.umur = umur;
        this.proglat = proglat;
    }
 }

 var peserta1 = new Peserta ('Hana',23,'Pengembangan Website');
 console.log(peserta1.nama);
 console.log(peserta1.umur);
 console.log(peserta1.proglat);

