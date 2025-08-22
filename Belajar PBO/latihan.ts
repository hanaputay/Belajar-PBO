class Menu {
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

class Transaksi {
  menu: Menu;
  jumlah: number;
  pajakRate: number = 0.1;

  constructor(menu: Menu, jumlah: number) {
    this.menu = menu;
    this.jumlah = jumlah;
  }

  hitungSubtotal(): number {
    return this.menu.harga * this.jumlah;
  }

  hitungPajak(): number {
    return this.hitungSubtotal() * this.pajakRate;
  }

  hitungTotal(): number {
    return this.hitungSubtotal() + this.hitungPajak();
  }

  cetakNota(): void {
    console.log("\n=== NOTA ===");
    console.log(`Menu: ${this.menu.nama}`);
    console.log(`Jumlah: ${this.jumlah}`);
    console.log(`Harga per item: Rp${this.menu.harga}`);
    console.log(`Subtotal: Rp${this.hitungSubtotal()}`);
    console.log(`Pajak 10%: Rp${this.hitungPajak()}`);
    console.log(`Total bayar: Rp${this.hitungTotal()}`);
    console.log("=====================");
  }
}

class Restoran {
  daftarMenu: Menu[];

  constructor() {
    this.daftarMenu = [
      new Menu("Menu 1", 10000, 10),
      new Menu("Menu 2", 15000, 5),
      new Menu("Menu 3", 20000, 8),
      new Menu("Menu 4", 12000, 12),
      new Menu("Menu 5", 18000, 6),
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

// --- Simulasi program ---
const resto = new Restoran();
resto.tampilkanMenu();

const pilihan = 1; // misalnya pilih menu ke-1
const jumlah = 5;  // beli 3 item

const menuDipilih = resto.daftarMenu[pilihan - 1];

if (!menuDipilih.cekStok(jumlah)) {
  console.log("Stok tidak mencukupi!");
} else {
  const transaksi = new Transaksi(menuDipilih, jumlah);
  menuDipilih.kurangiStok(jumlah);
  transaksi.cetakNota();
  console.log(`Sisa stok ${menuDipilih.nama}: ${menuDipilih.stok}`);
}
