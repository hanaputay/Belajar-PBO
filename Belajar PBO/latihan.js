var Menu = /** @class */ (function () {
    function Menu(nama, harga, stok) {
        this.nama = nama;
        this.harga = harga;
        this.stok = stok;
    }
    Menu.prototype.cekStok = function (jumlah) {
        return jumlah <= this.stok;
    };
    Menu.prototype.kurangiStok = function (jumlah) {
        this.stok -= jumlah;
    };
    return Menu;
}());
var Transaksi = /** @class */ (function () {
    function Transaksi(menu, jumlah) {
        this.pajakRate = 0.1;
        this.menu = menu;
        this.jumlah = jumlah;
    }
    Transaksi.prototype.hitungSubtotal = function () {
        return this.menu.harga * this.jumlah;
    };
    Transaksi.prototype.hitungPajak = function () {
        return this.hitungSubtotal() * this.pajakRate;
    };
    Transaksi.prototype.hitungTotal = function () {
        return this.hitungSubtotal() + this.hitungPajak();
    };
    Transaksi.prototype.cetakNota = function () {
        console.log("\n=== NOTA ===");
        console.log("Menu: ".concat(this.menu.nama));
        console.log("Jumlah: ".concat(this.jumlah));
        console.log("Harga per item: Rp".concat(this.menu.harga));
        console.log("Subtotal: Rp".concat(this.hitungSubtotal()));
        console.log("Pajak 10%: Rp".concat(this.hitungPajak()));
        console.log("Total bayar: Rp".concat(this.hitungTotal()));
        console.log("=====================");
    };
    return Transaksi;
}());
var Restoran = /** @class */ (function () {
    function Restoran() {
        this.daftarMenu = [
            new Menu("Menu 1", 10000, 10),
            new Menu("Menu 2", 15000, 5),
            new Menu("Menu 3", 20000, 8),
            new Menu("Menu 4", 12000, 12),
            new Menu("Menu 5", 18000, 6),
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
// --- Simulasi program ---
var resto = new Restoran();
resto.tampilkanMenu();
var pilihan = 1; // misalnya pilih menu ke-1
var jumlah = 5; // beli 3 item
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
