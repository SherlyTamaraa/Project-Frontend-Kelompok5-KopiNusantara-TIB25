document.addEventListener('DOMContentLoaded', () => {
    let keranjang = JSON.parse(localStorage.getItem('kopi_cart')) || [];

    // Konversi teks "Rp 28.000" menjadi angka 28000
    function parseHarga(str) {
        return parseInt(str.replace(/[^0-9]/g, ''), 10);
    }

    // Format angka menjadi format Rupiah
    function formatRupiah(num) {
        return 'Rp ' + num.toLocaleString('id-ID');
    }

    // Simpan keranjang ke storage
    function simpanKeranjang() {
        localStorage.setItem('kopi_cart', JSON.stringify(keranjang));
        console.log('Isi keranjang saat ini:', keranjang);
    }

    // Tambah item ke keranjang
    function tambahItem(nama, harga, asal) {
        const itemDitemukan = keranjang.find((item) => item.nama === nama);

        if (itemDitemukan) {
            itemDitemukan.qty += 1;
        } else {
            keranjang.push({
                nama: nama,
                harga: harga,
                asal: asal,
                qty: 1
            });
        }

        simpanKeranjang();

        const totalItem = keranjang.reduce((total, item) => total + item.qty, 0);
        const totalHarga = keranjang.reduce((total, item) => total + (item.harga * item.qty), 0);

        alert(`Berhasil menambahkan "${nama}"!\nTotal di keranjang: ${totalItem} item (${formatRupiah(totalHarga)})`);
    }

    const btnReset = document.getElementById('btn-reset');
    if (btnReset) {
        btnReset.addEventListener('click', () => {
            if (keranjang.length === 0) {
                alert('Keranjang memang sudah kosong.');
                return;
            }

            localStorage.removeItem('kopi_cart');
            keranjang = [];
            alert('Keranjang berhasil dikosongkan!');
        });
    }

    const daftarKartu = document.querySelectorAll('.card');

    daftarKartu.forEach((kartu) => {
        kartu.addEventListener('click', () => {
            const elemenJudul = kartu.querySelector('h3');
            const elemenHarga = kartu.querySelector('.harga');
            const elemenDaerah = kartu.querySelector('.daerah');

            if (elemenJudul && elemenHarga) {
                const namaKopi = elemenJudul.textContent.trim();
                const hargaKopi = parseHarga(elemenHarga.textContent);
                const asalKopi = elemenDaerah ? elemenDaerah.textContent.trim() : '-';

                tambahItem(namaKopi, hargaKopi, asalKopi);
            }
        });
    });
});