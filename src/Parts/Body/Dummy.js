import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import {Link} from 'react-router-dom';

function Dummy() {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    return(
        <>
        <div className="arrow">
            <button id="top" onClick={scrollToTop}><i class="fa fa-arrow-up" aria-hidden="true"></i></button>
        </div>
        <div className="back">
            <Link to="/"><button>Back to Home</button></Link>
        </div>
        <div className="addition"></div>
        <div className="dummy">
            <div className="judul">
                <h1>Berapa Banyak Kalori yang Anda Butuhkan Per Hari?</h1>
                <p>Jika Anda pernah memperhatikan tabel informasi nilai gizi pada kemasan makanan, maka Anda akan sering menemukan kalimat “Persen AKG berdasarkan kebutuhan energi 2000 kkal. Kebutuhan energi Anda mungkin lebih tinggi atau lebih rendah.” Ini berarti kebutuhan kalori Anda per hari tidaklah sama dengan orang lain, karena banyak faktor yang dapat mempengaruhi kebutuhan kalori Anda. Sebetulnya bagaimana cara menghitung kebutuhan kalori sehari-hari?</p>
            </div>
            <h2>Apa itu kalori?</h2>
            <p>Cara menghitung kebutuhan kalori tiap orang berbeda-beda, karena akan dihitung berdasarkan jenis kelamin, usia, tinggi dan berat badan, komposisi tubuh, aktivitas, hingga keadaan fisik masing-masing. Kalori yang dibutuhkan oleh laki-laki berbeda dengan perempuan meskipun berada pada rentang usia yang sama. Dua orang yang kembar sekalipun akan memiliki kebutuhan kalori yang berbeda, tergantung pada keadaan fisik dan aktivitasnya sehari-hari.</p>
            <p>Jumlah kalori dalam suatu makanan biasanya ditulis dalam satuan “kilokalori” atau “kkal”. Sebagai contoh, 500 kalori akan ditulis sebagai 500 kkal. Selain dalam kkal, kalori juga dapat ditulis dalam satuan “kilojoules” atau “kJ”. 1 kJ setara dengan 0,239 kalori.</p>

            <h2>Kebutuhan kalori setiap hari masing-masing orang berbeda</h2>
            <p>Cara menghitung kebutuhan kalori tiap orang berbeda-beda, karena akan dihitung berdasarkan jenis kelamin, usia, tinggi dan berat badan, komposisi tubuh, aktivitas, hingga keadaan fisik masing-masing. Kalori yang dibutuhkan oleh laki-laki berbeda dengan perempuan meskipun berada pada rentang usia yang sama. Dua orang yang kembar sekalipun akan memiliki kebutuhan kalori yang berbeda, tergantung pada keadaan fisik dan aktivitasnya sehari-hari.</p>
            <p>Standar asupan kalori per hari berbeda-beda di tiap negara. Di Amerika, laki-laki disarankan untuk mengonsumsi 2700 kalori per hari dan wanita 2200 kalori per harinya. Sementara berdasarkan National Health Service di Inggris, laki-laki disarankan mengonsumsi 2500 kalori dan wanita 2000 kalori. Berbeda dengan FAO yang menyarankan orang dewasa rata-rata harus mengonsumsi minimal 1800 kalori per hari.</p>
            <p>Di Indonesia, terdapat tabel panduan angka kecukupan gizi. Tabel tersebut memuat anjuran berapa banyak kalori yang dibutuhkan oleh masing-masing kelompok umur. Sebagai contoh:</p>
            <ul>
                <li>Bayi berusia 7-11 bulan dengan berat badan 9 kg dan tinggi badan 71 cm membutuhkan energi 725 kkal per hari.</li>
                <li>Laki-laki berusia 19-29 tahun dengan berat badan 60 kg dan tinggi 168 cm membutuhkan energi 2725 kkal per hari.</li>
                <li>Wanita berusia 19-29 tahun dengan berat badan 54 kg dan tinggi 159 cm membutuhkan energi 2250 kkal per hari.</li>
                <li>Laki-laki berusia lebih dari 80 tahun membutuhkan energi sebesar 1525 kkal dan wanita pada usia yang sama membutuhkan energi 1425 kkal per hari.</li>
                <li>Bagi wanita hamil, dibutuhkan tambahan energi sebesar 180-300 kkal per harinya, tergantung pada usia trimester kehamilannya. Begitu juga dengan ibu menyusui, pada 6 bulan pertama dibutuhkan tambahan energi hingga 330 kkal dan tambahan 400 kkal pada 6 bulan berikutnya</li>
            </ul>

            <h2>Berbagai cara menghitung kebutuhan kalori setiap hari</h2>
            <p>Ada beberapa cara menghitung kebutuhan kalori Anda, yaitu:</p>
            <ul>
                <ul>Rumus Harris-Benedict: rumus ini termasuk rumus yang sering dipakai oleh ahli gizi. Rumus Harris-Benedict memperhitungkan usia, jenis kelamin, berat badan, tinggi badan, hingga level aktivitas fisik Anda.
                    <li>Rumus untuk menghitung kebutuhan energi pria yaitu= 66,5 + 13,8 x (berat badan dalam kilogram) + 5 x (tinggi badan dalam cm) dibagi dengan 6,8 x usia.</li>
                    <li>Sementara untuk wanita= 655,1 + 9,6 x (berat badan dalam kilogram) + 1,9 x (tinggi badan dalam cm) dibagi dengan 4,7 x usia.</li>
                    <li>Hasil dari penghitungan ini kemudian dikalikan dengan faktor aktivitas fisik. Jika aktivitas fisik Anda rendah, maka dikalikan dengan 1,2. Untuk aktivitas fisik sedang dikalikan dengan 1,3. Sementara aktivitas fisik berat dikalikan dengan 1,4.</li>
                </ul>
                <ul>
                Rumus WHO (World Health Organization): berbeda dengan rumus Harris-Benedict, rumus ini lebih sederhana dan tidak memperhitungkan tinggi badan. Rumus WHO dibagi sesuai dengan kategori umur. Sebagai contoh, untuk mencari kebutuhan energi wanita berusia 18-29 tahun, digunakan rumus 14,7 x (berat badan dalam kilogram) + 496. Sementara untuk mencari kebutuhan energi pria usia 18-29 tahun, digunakan rumus 15,3 x (berat badan dalam kilogram) + 679. Hasilnya kemudian dikalikan dengan faktor aktivitas fisik.
                </ul>
            </ul>

            <h2>Hubungan antara kebutuhan kalori dan kesehatan</h2>
            <p>Meskipun kemasan makanan lebih sering mencantumkan persen angka kecukupan gizi berdasarkan pada kebutuhan energi 2000 kkal, namun kini Anda tahu bahwa tidak semua orang membutuhkan energi 2000 kkal per harinya. Kebutuhan energi Anda bergantung pada jenis kelamin, usia, berat badan, tinggi badan, keadaan fisik, hingga aktivitas Anda sehari-hari. Mengetahui berapa kebutuhan energi Anda per hari dapat membantu menjaga kesehatan Anda karena hal tersebut bisa mempengaruhi keseimbangan energi Anda sehari-hari.</p>
            <p>Prinsip dalam mencukupi kebutuhan energi sederhana saja yaitu seimbang, karena jika Anda mengonsumsi kalori lebih dari kebutuhan, ini dapat mengakibatkan peningkatan berat badan di kemudian hari sekaligus meningkatkan risiko Anda mengidap berbagai macam penyakit, khususnya penyakit degeneratif. Tetapi jika Anda mengonsumsi kalori kurang dari kebutuhan Anda, maka akan terjadi penurunan berat badan sekaligus penurunan fungsi organ-organ dalam tubuh karena tidak mendapat asupan yang seharusnya.</p>
            <p>(Source : https://hellosehat.com/hidup-sehat/nutrisi/cara-menghitung-kebutuhan-kalori/)</p>
        </div>
        <div className="addition2"></div>
        </>
    )
}

export default Dummy;
