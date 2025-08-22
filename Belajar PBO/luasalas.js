// interface Animal {
//     nama : string;
//     suara(): void;
// }
var Kubus = /** @class */ (function () {
    function Kubus(nama, sisi) {
        this.nama = nama;
        this.sisi = sisi;
    }
    Kubus.prototype.volume = function () {
        console.log("Volume ".concat(this.nama, " dengan sisi ").concat(this.sisi, " = ").concat(Math.pow(this.sisi, 3)));
    };
    Kubus.prototype.luasPermukaan = function () {
        console.log("Luas permukaan = ".concat(Math.pow(this.sisi, 6), " "));
    };
    return Kubus;
}());
var Balok = /** @class */ (function () {
    function Balok(nama, panjang, lebar, tinggi) {
        this.nama = nama;
        this.panjang = panjang;
        this.lebar = lebar;
        this.tinggi = tinggi;
    }
    Balok.prototype.volume = function () {
        console.log("Volume ".concat(this.nama, " dengan panjang ").concat(this.panjang, ", lebar ").concat(this.lebar, ", dan tinggi ").concat(this.tinggi, " = ").concat(this.panjang * this.lebar * this.tinggi));
    };
    Balok.prototype.luasPermukaan = function () {
        console.log("Luas permukaan = ".concat(2 * (this.panjang * this.lebar + this.panjang * this.tinggi + this.lebar * this.tinggi), " "));
    };
    return Balok;
}());
var Tabung = /** @class */ (function () {
    function Tabung(nama, jari, tinggi) {
        this.nama = nama;
        this.jari = jari;
        this.tinggi = tinggi;
    }
    Tabung.prototype.volume = function () {
        console.log("Volume ".concat(this.nama, " dengan jari-jari ").concat(this.jari, " dan tinggi ").concat(this.tinggi, " = ").concat(22 / 7 * Math.pow(this.jari, 2) * this.tinggi));
    };
    Tabung.prototype.luasPermukaan = function () {
        console.log("Luas permukaan = ".concat(2 * 22 / 7 * this.jari * this.jari + 2 * 22 / 7 * this.jari * this.tinggi, " "));
    };
    return Tabung;
}());
var kubus1 = new Kubus("Kubus", 5);
kubus1.volume();
kubus1.luasPermukaan();
var balok1 = new Balok("Balok", 5, 6, 7);
balok1.volume();
balok1.luasPermukaan();
var tabung1 = new Tabung("Tabung", 7, 5);
tabung1.volume();
tabung1.luasPermukaan();
