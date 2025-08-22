var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Parent class
var Food = /** @class */ (function () {
    function Food(nama, harga, stok) {
        this.nama = nama;
        this.harga = harga;
        this.stok = stok;
    }
    Food.prototype.cekStok = function (jumlah) {
        return jumlah <= this.stok;
    };
    Food.prototype.kurangiStok = function (jumlah) {
        this.stok -= jumlah;
    };
    return Food;
}());
// Child classes
var Menu1 = /** @class */ (function (_super) {
    __extends(Menu1, _super);
    function Menu1(stok) {
        return _super.call(this, "Menu 1", 10000, stok) || this;
    }
    return Menu1;
}(Food));
var Menu2 = /** @class */ (function (_super) {
    __extends(Menu2, _super);
    function Menu2(stok) {
        return _super.call(this, "Menu 2", 15000, stok) || this;
    }
    return Menu2;
}(Food));
var Menu3 = /** @class */ (function (_super) {
    __extends(Menu3, _super);
    function Menu3(stok) {
        return _super.call(this, "Menu 3", 20000, stok) || this;
    }
    return Menu3;
}(Food));
var Menu4 = /** @class */ (function (_super) {
    __extends(Menu4, _super);
    function Menu4(stok) {
        return _super.call(this, "Menu 4", 12000, stok) || this;
    }
    return Menu4;
}(Food));
var Menu5 = /** @class */ (function (_super) {
    __extends(Menu5, _super);
    function Menu5(stok) {
        return _super.call(this, "Menu 5", 18000, stok) || this;
    }
    return Menu5;
}(Food));
// Class Nota untuk menghitung transaksi
var Nota = /** @class */ (function () {
    function Nota() {
        this.pajakRate = 0.1;
    }
    Nota.prototype.hitungPajak = function (subtotal) {
        return subtotal * this.pajakRate;
    };
    return Nota;
}());
var Transaksi = /** @class */ (function (_super) {
    __extends(Transaksi, _super);
    function Transaksi(menu, jumlah) {
        var _this = _super.call(this) || this;
        _this.menu = menu;
        _this.jumlah = jumlah;
        return _this;
    }
    Transaksi.prototype.hitungSubtotal = function () {
        return this.menu.harga * this.jumlah;
    };
    Transaksi.prototype.hitungTotal = function () {
        return this.hitungSubtotal() + this.hitungPajak(this.hitungSubtotal());
    };
    Transaksi.prototype.cetakNota = function () {
        var subtotal = this.hitungSubtotal();
        var pajak = this.hitungPajak(subtotal);
        var total = this.hitungTotal();
        console.log("\n======= NOTA =======");
        console.log("Menu           : ".concat(this.menu.nama));
        console.log("Jumlah         : ".concat(this.jumlah));
        console.log("Harga per item : Rp".concat(this.menu.harga));
        console.log("Subtotal       : Rp".concat(subtotal));
        console.log("Pajak 10%      : Rp".concat(pajak));
        console.log("Total bayar    : Rp".concat(total));
        console.log("=====================");
    };
    return Transaksi;
}(Nota));
// Restoran dengan daftar menu
var Restoran = /** @class */ (function () {
    function Restoran() {
        this.daftarMenu = [
            new Menu1(10),
            new Menu2(5),
            new Menu3(8),
            new Menu4(12),
            new Menu5(6),
        ];
    }
    Restoran.prototype.tampilkanMenu = function () {
        console.log("=== DAFTAR MENU ===");
        this.daftarMenu.forEach(function (menu, index) {
            console.log("".concat(index + 1, ". ").concat(menu.nama, " - Rp").concat(menu.harga, " (Stok: ").concat(menu.stok, ")"));
        });
        console.log("===================");
    };
    return Restoran;
}());
// --- Simulasi ---
var resto = new Restoran();
resto.tampilkanMenu();
var pilihan = 2; // contoh pilih Menu2
var jumlah = 3; // beli 3
var menuDipilih = resto.daftarMenu[pilihan - 1];
if (!menuDipilih.cekStok(jumlah)) {
    console.log("Stok tidak mencukupi!");
}
else {
    var transaksi = new Transaksi(menuDipilih, jumlah);
    menuDipilih.kurangiStok(jumlah);
    transaksi.cetakNota();
    console.log("Sisa stok ".concat(menuDipilih.nama, ": ").concat(menuDipilih.stok));
}
