// class Car{
//     //method
//     sound(){
//         return "vroom..bip..bip.."
//     }
// }

// //instantiate
// var mobil1 = new Car();
// console.log(mobil1.sound());

// //method dengan parameter
// class Car {
//     //method
//     sound(x){
//         return x + ", suara mobil saya vroomm..bip..bip..";
//     }
// }

// //instantiate
// var mobil2 = new Car();
// console.log(mobil2.sound("hello"));

// //tipe data, control program di class
// class Car {
//     constructor(kecepatan){
//         this.kecepatan = kecepatan;
//     }

//     get kecepatan(){
//         return this._kecepatan;
//     }

//     set kecepatan(jumlah){
//         if (jumlah < 0){
//             console.log('Kecepatan tidak boleh negatif');
//             this._valid = false;
//         } else{
//             this._kecepatan = jumlah;
//             this._valid = true;
//         }
//     }

//     info() {
//         if (!this._valid){
//             return;
//         }
//         console.log(`Mobil memiliki kecepatan ${this.kecepatan} km/jam`);

//         if (this.kecepatan > 0) {
//             console.log(`Mobil sedang berjalan`);
//         } else {
//             console.log(`Mobil sedang berhenti`);
//         }
//     }
// }

// //instantiate
// var mobil1 = new Car(60);
// mobil1.info();

//latihan
class Peserta {
    constructor(nama, umur, proglat, nilai) {
        this.nama = nama;
        this.umur = umur;
        this.proglat = proglat;
        this.nilai = nilai;
    }

    get nilai(){
        return this._nilai;
    }

    set nilai(jumlah){
        if (jumlah > 100){
            console.log('Nilai tidak valid');
            this._valid = false;
        } else {
            this._nilai = jumlah;
            this._valid = true;
        }
    }

    getGrade() {
        if (this.nilai >= 90 && this.nilai <= 100) {
            return "A";
        } else if (this.nilai >= 80 && this.nilai <= 89) {
            return "B";
        } else if (this.nilai >= 70 && this.nilai <= 79) {
            return "C";
        } else if (this.nilai >= 60 && this.nilai <= 69) {
            return "D";
        } else {
            return "Tidak Lulus";
        }
    }

    info() {
        if (!this._valid){
            return;
        }
        console.log(
            `Nama : ${this.nama} | Umur : ${this.umur} | Proglat : ${this.proglat} | Nilai : ${this.nilai} | Grade : ${this.getGrade()}`
        );
    }
}

// contoh penggunaan
var peserta1 = new Peserta("Hana", 23, "Pengembangan Web", 95);
peserta1.info();
