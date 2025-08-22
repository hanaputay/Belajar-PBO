// Parent class
class Food {
  nama: string;
  harga: number;
  stok: number;

  constructor(nama: string, harga: number, stok: number) {
    this.nama = nama;
    this.harga = harga;
    this.stok = stok;
  }

  cekStok(jumlah: number): boolean {
    return jumlah <= this.stok;
  }

  kurangiStok(jumlah: number): void {
    this.stok -= jumlah;
  }
}

// Child class
class Menu1 extends Food {
  constructor(stok: number) {
    super("Menu 1", 10000, stok);
  }
}

class Menu2 extends Food {
  constructor(stok: number) {
    super("Menu 2", 15000, stok);
  }
}

class Menu3 extends Food {
  constructor(stok: number) {
    super("Menu 3", 20000, stok);
  }
}

class Menu4 extends Food {
  constructor(stok: number) {
    super("Menu 4", 12000, stok);
  }
}

class Menu5 extends Food {
  constructor(stok: number) {
    super("Menu 5", 18000, stok);
  }
}

// Class Nota untuk menghitung transaksi
class Nota {
  pajakRate: number = 0.1;

  hitungPajak(subtotal: number): number {
    return subtotal * this.pajakRate;
  }
}

class Transaksi extends Nota {
  menu: Food;
  jumlah: number;

  constructor(menu: Food, jumlah: number) {
    super();
    this.menu = menu;
    this.jumlah = jumlah;
  }

  hitungSubtotal(): number {
    return this.menu.harga * this.jumlah;
  }

  hitungTotal(): number {
    return this.hitungSubtotal() + this.hitungPajak(this.hitungSubtotal());
  }

  cetakNota(): void {
    const subtotal = this.hitungSubtotal();
    const pajak = this.hitungPajak(subtotal);
    const total = this.hitungTotal();

    console.log("\n======= NOTA =======");
    console.log(`Menu           : ${this.menu.nama}`);
    console.log(`Jumlah         : ${this.jumlah}`);
    console.log(`Harga per item : Rp${this.menu.harga}`);
    console.log(`Subtotal       : Rp${subtotal}`);
    console.log(`Pajak 10%      : Rp${pajak}`);
    console.log(`Total bayar    : Rp${total}`);
    console.log("=====================");
  }
}

// Restoran dengan daftar menu
class Restoran {
  daftarMenu: Food[];

  constructor() {
    this.daftarMenu = [
      new Menu1(10),
      new Menu2(5),
      new Menu3(8),
      new Menu4(12),
      new Menu5(6),
    ];
  }

  tampilkanMenu(): void {
    console.log("=== DAFTAR MENU ===");
    this.daftarMenu.forEach((menu, index) => {
      console.log(`${index + 1}. ${menu.nama} - Rp${menu.harga} (Stok: ${menu.stok})`);
    });
    console.log("===================");
  }
}

// --- Simulasi ---
const resto = new Restoran();
resto.tampilkanMenu();

const pilihan = 2; // contoh pilih Menu2
const jumlah = 7;  // beli 3

const menuDipilih = resto.daftarMenu[pilihan - 1];

if (!menuDipilih.cekStok(jumlah)) {
  console.log("Stok tidak mencukupi!");
} else {
  const transaksi = new Transaksi(menuDipilih, jumlah);
  menuDipilih.kurangiStok(jumlah);
  transaksi.cetakNota();
  console.log(`Sisa stok ${menuDipilih.nama}: ${menuDipilih.stok}`);
}
