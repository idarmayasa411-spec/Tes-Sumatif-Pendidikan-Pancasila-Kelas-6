import { Question } from '../types';
import imgNormaLaluLintas from '../assets/images/norma_lalu_lintas_1795060258127.jpg';
import imgMusyawarahKelas from '../assets/images/musyawarah_kelas_1795060257960.jpg';
import imgGotongRoyong from '../assets/images/gotong_royong_sekolah_1795060258292.jpg';
import imgHakBelajarPerpustakaan from '../assets/images/hak_belajar_perpustakaan_1795060258419.jpg';
import imgNormaKesopananBerbagi from '../assets/images/norma_kesopanan_berbagi_1795060258821.jpg';

export const INITIAL_QUESTIONS: Question[] = [
  // --- PILIHAN GANDA (18 SOAL) ---
  {
    id: 1,
    type: 'pg',
    topic: 'Norma Hukum dan Tata Tertib Lalu Lintas',
    difficulty: 'Mudah',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L1',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi jenis norma hukum melalui contoh kepatuhan terhadap rambu lalu lintas di lingkungan sekitar.',
    indikatorSoal:
      'Disajikan gambar siswa sekolah dasar menyeberang di zebra cross saat lampu penyeberangan berwarna hijau, peserta didik dapat menentukan jenis norma yang dipatuhi.',
    image: imgNormaLaluLintas,
    imageAlt: 'Siswa sekolah dasar menyeberang jalan di zebra cross pada zona selamat sekolah',
    text: 'Perhatikan gambar di atas dengan saksama!\nPara siswa menyeberang jalan melalui zebra cross saat lampu penyeberangan berwarna hijau, sedangkan pengendara berhenti di belakang garis marka jalan. Perilaku tersebut merupakan wujud kepatuhan terhadap...',
    options: [
      { id: 'A', text: 'Norma agama' },
      { id: 'B', text: 'Norma kesopanan' },
      { id: 'C', text: 'Norma hukum' },
      { id: 'D', text: 'Norma adat istiadat' },
    ],
    correctAnswer: 'C',
    explanation:
      'Aturan lalu lintas seperti berhenti di belakang garis marka, mematuhi lampu pengatur lalu lintas, dan menyeberang di zebra cross diatur dalam undang-undang negara yang bersifat tegas dan mengikat. Oleh karena itu, kepatuhan tersebut termasuk pelaksanaan norma hukum.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Pengertian dan Fungsi Norma',
    difficulty: 'Mudah',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L1',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan pengertian dan tujuan utama dibentuknya norma dalam kehidupan bermasyarakat.',
    indikatorSoal:
      'Disajikan narasi tentang kehidupan bermasyarakat yang tertib, peserta didik dapat menentukan tujuan utama adanya norma.',
    text: 'Norma adalah aturan atau pedoman tingkah laku yang berlaku di dalam masyarakat. Tujuan utama dibentuknya norma dalam kehidupan sehari-hari adalah...',
    options: [
      { id: 'A', text: 'Membatasi kebebasan seluruh warga agar tidak bisa berkegiatan' },
      { id: 'B', text: 'Mewujudkan ketertiban, keamanan, keadilan, dan keharmonisan bersama' },
      { id: 'C', text: 'Memberikan hukuman berat kepada setiap anak yang melakukan kesalahan' },
      { id: 'D', text: 'Membedakan kedudukan antara warga yang mampu dan kurang mampu' },
    ],
    correctAnswer: 'B',
    explanation:
      'Norma hadir sebagai pedoman perilaku manusia dalam bermasyarakat agar tercipta ketertiban, keamanan, keadilan, serta keharmonisan antarwarga.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Norma Agama',
    difficulty: 'Mudah',
    elemen: 'Pancasila',
    levelKognitif: 'L1',
    tujuanPembelajaran:
      'Peserta didik dapat mengenali sumber dan contoh penerapan norma agama dalam kehidupan sehari-hari.',
    indikatorSoal:
      'Disajikan ciri-ciri sebuah norma yang bersumber dari kitab suci dan Tuhan Yang Maha Esa, peserta didik dapat mengidentifikasi nama norma tersebut.',
    text: 'Norma yang bersumber dari ajaran Tuhan Yang Maha Esa melalui kitab suci, berisi perintah dan larangan bagi pemeluknya serta memiliki sanksi berupa dosa, disebut...',
    options: [
      { id: 'A', text: 'Norma agama' },
      { id: 'B', text: 'Norma kesusilaan' },
      { id: 'C', text: 'Norma kesopanan' },
      { id: 'D', text: 'Norma hukum' },
    ],
    correctAnswer: 'A',
    explanation:
      'Norma agama bersumber dari wahyu Tuhan Yang Maha Esa melalui kitab suci masing-masing agama. Kepatuhannya mendatangkan pahala, sedangkan pelanggarannya menimbulkan dosa.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Norma Kesusilaan',
    difficulty: 'Sedang',
    elemen: 'Pancasila',
    levelKognitif: 'L2',
    tujuanPembelajaran:
      'Peserta didik dapat menerapkan nilai norma kesusilaan yang bersumber dari hati nurani dalam situasi nyata.',
    indikatorSoal:
      'Disajikan kasus siswa yang menemukan dompet terjatuh di halaman sekolah dan mengembalikannya, peserta didik dapat menentukan norma yang melandasi tindakan tersebut.',
    text: 'Ketika istirahat di halaman sekolah, Made menemukan sebuah tempat pensil berisi uang saku milik temannya yang terjatuh. Meskipun tidak ada orang lain yang melihat, hati kecil Made mendorongnya untuk segera menyerahkan barang tersebut kepada guru piket. Sikap jujur Made merupakan penerapan dari...',
    options: [
      { id: 'A', text: 'Norma hukum' },
      { id: 'B', text: 'Norma kesusilaan' },
      { id: 'C', text: 'Norma kesopanan' },
      { id: 'D', text: 'Norma kebiasaan' },
    ],
    correctAnswer: 'B',
    explanation:
      'Norma kesusilaan bersumber dari hati nurani atau bisikan kalbu manusia tentang nilai baik dan buruk (seperti kejujuran, rasa malu berbuat curang, dan empati). Sanksinya berupa rasa bersalah atau penyesalan dalam diri.',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Norma Kesopanan dan Musyawarah',
    difficulty: 'Sedang',
    elemen: 'Pancasila',
    levelKognitif: 'L2',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi keterkaitan antara hak berpendapat, kewajiban menghargai orang lain, dan norma kesopanan saat musyawarah.',
    indikatorSoal:
      'Disajikan gambar kegiatan musyawarah di kelas, peserta didik dapat menentukan sikap yang mencerminkan pelaksanaan norma kesopanan dan kewajiban peserta musyawarah.',
    image: imgMusyawarahKelas,
    imageAlt: 'Siswa kelas 6 melaksanakan musyawarah kelas dengan mengacungkan tangan secara tertib',
    text: 'Perhatikan gambar musyawarah kelas di atas!\nSeorang siswa mengacungkan tangan terlebih dahulu sebelum menyampaikan usulan, sementara teman-teman lainnya mendengarkan dengan tenang. Tindakan tersebut menunjukkan perpaduan antara hak mengemukakan pendapat dengan pelaksanaan...',
    options: [
      { id: 'A', text: 'Kewajiban memaksakan pendapat pribadi kepada seluruh teman' },
      { id: 'B', text: 'Norma kesopanan dan kewajiban menghargai pendapat orang lain' },
      { id: 'C', text: 'Hak untuk meninggalkan ruang kelas apabila usulan tidak dipilih' },
      { id: 'D', text: 'Norma hukum yang memberikan denda uang bagi siswa yang berbicara' },
    ],
    correctAnswer: 'B',
    explanation:
      'Mengacungkan tangan sebelum berbicara serta mendengarkan pendapat teman tanpa memotong pembicaraan merupakan penerapan norma kesopanan di kelas sekaligus kewajiban menghargai sesama peserta musyawarah.',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Perbandingan Sanksi Norma',
    difficulty: 'Sedang',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L2',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan sanksi yang timbul dari pelanggaran norma kesopanan dan norma lainnya.',
    indikatorSoal:
      'Disajikan perilaku siswa yang melanggar tata krama pergaulan, peserta didik dapat menentukan sanksi yang sesuai dengan norma kesopanan.',
    text: 'Putu berbicara dengan nada suara yang sangat keras sambil memotong pembicaraan orang yang lebih tua. Perilaku Putu melanggar norma kesopanan. Sanksi yang umumnya diterima oleh pelanggar norma kesopanan adalah...',
    options: [
      { id: 'A', text: 'Mendapat hukuman kurungan penjara dari kepolisian' },
      { id: 'B', text: 'Wajib membayar denda uang ke kas negara' },
      { id: 'C', text: 'Mendapat teguran, celaan, atau dikucilkan dalam pergaulan masyarakat' },
      { id: 'D', text: 'Diberhentikan secara paksa dari status warga negara' },
    ],
    correctAnswer: 'C',
    explanation:
      'Norma kesopanan bersumber dari tata pergaulan dan kebiasaan masyarakat setempat. Sanksinya bersifat sosial, yaitu teguran, rasa malu, celaan, atau pengucilan dari pergaulan masyarakat.',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Pengertian Hak Anak',
    difficulty: 'Mudah',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L1',
    tujuanPembelajaran:
      'Peserta didik dapat memahami konsep dasar hak anak dalam kehidupan sehari-hari.',
    indikatorSoal:
      'Disajikan definisi tentang sesuatu yang mutlak dimiliki dan diterima anak sejak lahir, peserta didik dapat mengidentifikasi istilah yang tepat.',
    text: 'Segala sesuatu yang mutlak menjadi milik dan patut diterima oleh setiap anak sejak dalam kandungan hingga tumbuh dewasa agar dapat hidup, tumbuh, berkembang, dan berpartisipasi secara optimal disebut...',
    options: [
      { id: 'A', text: 'Hak anak' },
      { id: 'B', text: 'Kewajiban anak' },
      { id: 'C', text: 'Sanksi sosial' },
      { id: 'D', text: 'Tata tertib sekolah' },
    ],
    correctAnswer: 'A',
    explanation:
      'Hak anak adalah segala sesuatu yang harus diterima dan dimiliki oleh anak (seperti kasih sayang, pendidikan, kesehatan, dan perlindungan) sejak lahir agar tumbuh kembangnya terjamin.',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Pengertian Kewajiban Anak',
    difficulty: 'Mudah',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L1',
    tujuanPembelajaran:
      'Peserta didik dapat memahami konsep dasar kewajiban anak sebagai bagian dari tanggung jawab sosial.',
    indikatorSoal:
      'Disajikan pernyataan mengenai tugas yang harus dilaksanakan sebelum menuntut hak, peserta didik dapat menentukan istilah yang tepat.',
    text: 'Segala sesuatu yang harus dilaksanakan atau dikerjakan oleh seorang anak dengan penuh rasa tanggung jawab sebelum menuntut haknya disebut...',
    options: [
      { id: 'A', text: 'Penghargaan' },
      { id: 'B', text: 'Kewenangan' },
      { id: 'C', text: 'Kewajiban' },
      { id: 'D', text: 'Keinginan' },
    ],
    correctAnswer: 'C',
    explanation:
      'Kewajiban adalah segala sesuatu yang wajib dilaksanakan dengan penuh tanggung jawab oleh seseorang sesuai perannya di rumah, sekolah, maupun masyarakat.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Kategori Hak Anak (Konvensi Hak Anak)',
    difficulty: 'Sedang',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L2',
    tujuanPembelajaran:
      'Peserta didik dapat mengklasifikasikan empat kelompok hak anak menurut Konvensi Hak Anak PBB.',
    indikatorSoal:
      'Disajikan contoh hak anak seperti memperoleh akta kelahiran, gizi seimbang, dan layanan kesehatan, peserta didik dapat menentukan kategori hak anak tersebut.',
    text: 'Setiap anak berhak memperoleh akta kelahiran sebagai identitas resmi, makanan bergizi, tempat tinggal yang layak, serta layanan kesehatan saat sakit. Dalam Konvensi Hak Anak, hak-hak tersebut termasuk dalam kelompok...',
    options: [
      { id: 'A', text: 'Hak berpartisipasi (Participation Rights)' },
      { id: 'B', text: 'Hak kelangsungan hidup (Survival Rights)' },
      { id: 'C', text: 'Hak kebebasan bekerja mencari nafkah' },
      { id: 'D', text: 'Hak memiliki kekuasaan politik' },
    ],
    correctAnswer: 'B',
    explanation:
      'Empat kategori Hak Anak meliputi: Hak Kelangsungan Hidup (standar hidup layak, gizi, kesehatan, akta kelahiran), Hak Perlindungan, Hak Tumbuh Kembang (pendidikan, bermain), dan Hak Berpartisipasi (menyampaikan pendapat).',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Hak Pendidikan dan Kewajiban Menjaga Fasilitas',
    difficulty: 'Sedang',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L2',
    tujuanPembelajaran:
      'Peserta didik dapat menghubungkan hak anak memperoleh pendidikan dengan kewajiban merawat fasilitas sekolah.',
    indikatorSoal:
      'Disajikan gambar siswa membaca buku di perpustakaan sekolah dengan rapi, peserta didik dapat menentukan kewajiban yang harus dilakukan setelah memanfaatkan fasilitas perpustakaan.',
    image: imgHakBelajarPerpustakaan,
    imageAlt: 'Siswa kelas 6 membaca buku bersama secara tertib di perpustakaan sekolah yang rapi',
    text: 'Perhatikan gambar suasana belajar di perpustakaan sekolah di atas!\nSiswa kelas 6 SD Negeri 4 Dauhwaru memiliki hak untuk membaca dan meminjam buku pelajaran maupun buku cerita di perpustakaan. Agar hak tersebut terus berjalan dengan baik bagi seluruh siswa, kewajiban utama yang harus dilaksanakan oleh pengguna perpustakaan adalah...',
    options: [
      { id: 'A', text: 'Membawa pulang seluruh buku perpustakaan tanpa melapor kepada petugas' },
      { id: 'B', text: 'Menjaga ketenangan, tidak mencoret buku, dan mengembalikannya tepat waktu ke rak semula' },
      { id: 'C', text: 'Makan dan minum di meja baca sambil melipat halaman buku sebagai penanda' },
      { id: 'D', text: 'Melarang adik kelas meminjam buku yang disukai oleh siswa kelas 6' },
    ],
    correctAnswer: 'B',
    explanation:
      'Hak menggunakan fasilitas perpustakaan harus diimbangi dengan kewajiban menjaga ketenangan agar tidak mengganggu pembaca lain, merawat buku agar tidak rusak atau kotor, serta mengembalikannya tepat waktu.',
  },
  {
    id: 11,
    type: 'pg',
    topic: 'Hak Anak di Lingkungan Keluarga',
    difficulty: 'Mudah',
    elemen: 'Pancasila',
    levelKognitif: 'L1',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi contoh hak anak di lingkungan rumah dan keluarga.',
    indikatorSoal:
      'Disajikan empat pernyataan aktivitas anak di rumah, peserta didik dapat memilih pernyataan yang merupakan contoh hak anak di rumah.',
    text: 'Berikut ini yang merupakan contoh pemenuhan hak anak di lingkungan keluarga atau rumah adalah...',
    options: [
      { id: 'A', text: 'Merapikan tempat tidur dan kamar belajar setiap pagi' },
      { id: 'B', text: 'Membantu ibu mencuci piring setelah makan malam' },
      { id: 'C', text: 'Mendapatkan kasih sayang, perhatian, dan bimbingan belajar dari orang tua' },
      { id: 'D', text: 'Mematuhi nasihat ayah dan ibu sebelum berangkat ke sekolah' },
    ],
    correctAnswer: 'C',
    explanation:
      'Mendapatkan kasih sayang, perhatian, dan bimbingan dari orang tua adalah hak anak di rumah. Sedangkan merapikan tempat tidur, mencuci piring, dan mematuhi nasihat orang tua adalah kewajiban anak di rumah.',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Kewajiban Anak di Lingkungan Keluarga',
    difficulty: 'Mudah',
    elemen: 'Pancasila',
    levelKognitif: 'L1',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan contoh kewajiban anak di lingkungan keluarga.',
    indikatorSoal:
      'Disajikan situasi kehidupan sehari-hari di rumah, peserta didik dapat memilih perilaku yang mencerminkan kewajiban anak terhadap orang tua.',
    text: 'Sebagai anak yang berbakti di lingkungan keluarga, kewajiban yang seharusnya dilaksanakan Ayu ketika melihat orang tuanya sibuk bekerja membersihkan halaman rumah adalah...',
    options: [
      { id: 'A', text: 'Menunggu hingga selesai lalu langsung meminta uang jajan tambahan' },
      { id: 'B', text: 'Bermain gawai di dalam kamar agar tidak mengganggu pekerjaan orang tua' },
      { id: 'C', text: 'Turut membantu meringankan pekerjaan rumah sesuai kemampuan dengan ikhlas' },
      { id: 'D', text: 'Menyuruh adik kecilnya yang mengerjakan seluruh tugas kebersihan rumah' },
    ],
    correctAnswer: 'C',
    explanation:
      'Membantu meringankan pekerjaan orang tua di rumah sesuai kemampuan dengan tulus merupakan kewajiban anak di lingkungan keluarga yang menumbuhkan sikap peduli dan tanggung jawab.',
  },
  {
    id: 13,
    type: 'pg',
    topic: 'Kewajiban Anak di Sekolah',
    difficulty: 'Mudah',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L1',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi kewajiban utama peserta didik terhadap tata tertib sekolah.',
    indikatorSoal:
      'Disajikan pilihan perilaku di sekolah, peserta didik dapat menentukan contoh pelaksanaan kewajiban anak di lingkungan sekolah.',
    text: 'Manakah di antara tindakan berikut ini yang merupakan kewajiban seorang siswa di lingkungan sekolah?',
    options: [
      { id: 'A', text: 'Mendapatkan nilai ujian yang objektif dari guru kelas' },
      { id: 'B', text: 'Menggunakan lapangan olahraga sekolah saat jam pelajaran PJOK' },
      { id: 'C', text: 'Datang tepat waktu, memakai seragam sesuai ketentuan, dan melaksanakan piket kelas' },
      { id: 'D', text: 'Memperoleh ruang kelas yang bersih, terang, dan nyaman untuk belajar' },
    ],
    correctAnswer: 'C',
    explanation:
      'Datang tepat waktu, berpakaian seragam rapi, dan melaksanakan piket kebersihan kelas merupakan kewajiban siswa. Sedangkan mendapat nilai objektif, memakai fasilitas olahraga, dan ruang belajar nyaman adalah hak siswa.',
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Hak dan Kewajiban di Masyarakat',
    difficulty: 'Sedang',
    elemen: 'Negara Kesatuan Republik Indonesia',
    levelKognitif: 'L2',
    tujuanPembelajaran:
      'Peserta didik dapat menerapkan keseimbangan hak dan kewajiban anak di lingkungan masyarakat.',
    indikatorSoal:
      'Disajikan situasi anak-anak bermain di taman desa/lingkungan masyarakat, peserta didik dapat menentukan kewajiban yang menyertai hak menggunakan fasilitas umum tersebut.',
    text: 'Anak-anak di Desa Dauhwaru memiliki hak untuk bermain dan berolahraga di taman bermain umum desa. Kewajiban yang harus dilaksanakan anak-anak saat berada di taman bermain tersebut adalah...',
    options: [
      { id: 'A', text: 'Menguasai ayunan sepanjang sore agar anak lain tidak bisa ikut bermain' },
      { id: 'B', text: 'Menjaga kebersihan taman, tidak merusak tanaman, dan bergantian memakai alat permainan' },
      { id: 'C', text: 'Memetik bunga hias di taman desa untuk dibawa pulang ke rumah' },
      { id: 'D', text: 'Meninggalkan bungkus makanan ringan di bangku taman agar dibersihkan petugas' },
    ],
    correctAnswer: 'B',
    explanation:
      'Setiap warga termasuk anak-anak berhak menikmati fasilitas umum, namun wajib menjaga kebersihan, merawat tanaman serta alat bermain, dan bersikap adil dengan mau bergantian.',
  },
  {
    id: 15,
    type: 'pg',
    topic: 'Hak Berpartisipasi Anak',
    difficulty: 'Sedang',
    elemen: 'Bhinneka Tunggal Ika',
    levelKognitif: 'L2',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi bentuk pelaksanaan hak berpartisipasi anak di sekolah maupun di rumah.',
    indikatorSoal:
      'Disajikan beberapa kegiatan anak, peserta didik dapat memilih kegiatan yang mencerminkan hak berpartisipasi anak.',
    text: 'Perhatikan pernyataan kegiatan berikut ini!\n(1) Menyampaikan usulan tema pentas seni kelas saat rapat kelas\n(2) Memilih ketua kelas secara jujur dan bebas tanpa paksaan\n(3) Mendapatkan imunisasi kesehatan dari petugas puskesmas\n(4) Memberikan pendapat mengenai rencana wisata keluarga bersama orang tua\nKegiatan yang merupakan wujud hak berpartisipasi anak ditunjukkan oleh nomor...',
    options: [
      { id: 'A', text: '(1), (2), dan (3)' },
      { id: 'B', text: '(1), (2), dan (4)' },
      { id: 'C', text: '(1), (3), dan (4)' },
      { id: 'D', text: '(2), (3), dan (4)' },
    ],
    correctAnswer: 'B',
    explanation:
      'Hak berpartisipasi anak adalah hak anak untuk didengar pendapatnya dan terlibat dalam kegiatan sosial atau pengambilan keputusan sesuai usianya: usulan pentas seni (1), memilih ketua kelas (2), dan pendapat rencana keluarga (4). Imunisasi kesehatan (3) termasuk hak kelangsungan hidup.',
  },
  {
    id: 16,
    type: 'pg',
    topic: 'Keseimbangan Hak dan Kewajiban',
    difficulty: 'Sedang',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L3',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis dampak apabila seseorang menuntut hak secara berlebihan tanpa melaksanakan kewajibannya.',
    indikatorSoal:
      'Disajikan studi kasus siswa yang menuntut hak nilai bagus dan suasana nyaman tetapi mengabaikan kewajiban belajar serta piket, peserta didik dapat menyimpulkan dampaknya.',
    text: 'Kadek selalu menuntut agar ruang kelasnya bersih, rapi, dan nyaman saat belajar. Namun, setiap kali jadwal piket kelasnya tiba, ia selalu pulang lebih dulu tanpa melaksanakan tugas piket. Jika sikap seperti ini dibiarkan, dampak yang akan terjadi di kelas adalah...',
    options: [
      { id: 'A', text: 'Persahabatan di kelas semakin erat karena teman lain mau mengerjakan tugasnya' },
      { id: 'B', text: 'Terjadi ketidakadilan, kekecewaan teman sekelas, dan lingkungan kelas menjadi tidak nyaman' },
      { id: 'C', text: 'Kadek akan memperoleh penghargaan sebagai siswa paling disiplin di sekolah' },
      { id: 'D', text: 'Kewajiban seluruh siswa otomatis gugur karena kelas sudah memiliki petugas kebersihan' },
    ],
    correctAnswer: 'B',
    explanation:
      'Hak dan kewajiban harus berjalan seimbang. Menuntut hak lingkungan bersih tanpa melaksanakan kewajiban piket menimbulkan ketidakadilan, membebani orang lain, serta merusak kerukunan dan kenyamanan kelas.',
  },
  {
    id: 17,
    type: 'pg',
    topic: 'Hak Perlindungan Anak',
    difficulty: 'Sedang',
    elemen: 'Bhinneka Tunggal Ika',
    levelKognitif: 'L2',
    tujuanPembelajaran:
      'Peserta didik dapat memahami hak perlindungan anak dari segala bentuk kekerasan dan perundungan (bullying).',
    indikatorSoal:
      'Disajikan kasus perundungan verbal di sekolah, peserta didik dapat menentukan sikap tepat untuk melindungi hak anak.',
    text: 'Berdasarkan Undang-Undang Perlindungan Anak, setiap anak berhak memperoleh perlindungan dari tindakan kekerasan, diskriminasi, dan perundungan (bullying). Apabila kamu melihat seorang teman diejek atau dikucilkan saat jam istirahat di sekolah, tindakan yang paling tepat adalah...',
    options: [
      { id: 'A', text: 'Ikut menertawakan agar dianggap kompak oleh teman yang mengejek' },
      { id: 'B', text: 'Diam saja dan merekam kejadian tersebut untuk disebarkan di media sosial' },
      { id: 'C', text: 'Menghibur teman yang diejek, menasihati dengan baik, dan melapor kepada guru' },
      { id: 'D', text: 'Menjauhi teman yang diejek supaya tidak ikut menjadi sasaran ejekan' },
    ],
    correctAnswer: 'C',
    explanation:
      'Melindungi hak teman agar terbebas dari perundungan dilakukan dengan memberi dukungan empati kepada korban, menghentikan atau menegur perilaku ejekan secara santun, serta melaporkannya kepada guru agar ditangani secara bijak.',
  },
  {
    id: 18,
    type: 'pg',
    topic: 'Norma Kesopanan di Era Digital',
    difficulty: 'Sukar',
    elemen: 'Pancasila',
    levelKognitif: 'L3',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis penerapan norma kesopanan dan etika komunikasi saat menggunakan pesan digital atau media sosial.',
    indikatorSoal:
      'Disajikan skenario siswa menghubungi gurunya melalui pesan singkat untuk menanyakan tugas, peserta didik dapat menentukan cara berkomunikasi yang mencerminkan norma kesopanan.',
    text: 'Pada malam hari pukul 19.30, Komang ingin menanyakan petunjuk tugas Pendidikan Pancasila kepada Bapak Guru melalui aplikasi pesan singkat. Cara menghubungi guru yang paling tepat sesuai norma kesopanan adalah...',
    options: [
      { id: 'A', text: 'Mengirim pesan singkat berisi "Pak, tugasnya halaman berapa? Balas cepat!"' },
      { id: 'B', text: 'Melakukan panggilan telepon berkali-kali hingga diangkat meskipun sudah malam' },
      { id: 'C', text: 'Mengucapkan salam, memohon maaf mengganggu waktu istirahat, menyebutkan nama dan kelas, lalu bertanya dengan bahasa santun' },
      { id: 'D', text: 'Mengirimkan gambar stiker berulang kali agar guru segera membuka pesan tersebut' },
    ],
    correctAnswer: 'C',
    explanation:
      'Norma kesopanan juga berlaku dalam komunikasi digital (netiket). Menghubungi guru harus memperhatikan waktu yang wajar, diawali salam, memperkenalkan diri (nama dan kelas), serta menggunakan bahasa yang santun dan penuh hormat.',
  },

  // --- PILIHAN GANDA KOMPLEKS (3 SOAL) ---
  // Ketentuan: Kemungkinan lebih dari 1 pilihan jawaban benar, setiap soal memiliki 3 pilihan jawaban
  {
    id: 19,
    type: 'pgk',
    topic: 'Gotong Royong dan Kewajiban Menjaga Lingkungan Sekolah',
    difficulty: 'Sedang',
    elemen: 'Negara Kesatuan Republik Indonesia',
    levelKognitif: 'L2',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi perilaku yang menunjukkan pelaksanaan kewajiban anak menjaga kebersihan dan kelestarian lingkungan sekolah.',
    indikatorSoal:
      'Disajikan gambar kegiatan gotong royong siswa membersihkan taman sekolah, peserta didik dapat memilih semua pernyataan yang benar tentang kewajiban dan nilai kebersamaan (lebih dari 1 jawaban benar).',
    image: imgGotongRoyong,
    imageAlt: 'Siswa sekolah dasar bergotong royong menyapu, menyiram bunga, dan membuang sampah di halaman sekolah',
    text: 'Perhatikan gambar kegiatan kerja bakti siswa di halaman sekolah di atas!\nPilihlah SEMUA pernyataan yang BENAR mengenai kewajiban anak dan penerapan norma berdasarkan kegiatan pada gambar! (Pilihan benar lebih dari satu)',
    options: [
      { id: 'A', text: 'Menyapu halaman, merawat tanaman, dan membuang sampah pada tempatnya merupakan kewajiban siswa menjaga kebersihan sekolah' },
      { id: 'B', text: 'Bekerja sama dalam kerja bakti menumbuhkan rasa persatuan, tanggung jawab, dan kepedulian antarwarga sekolah' },
      { id: 'C', text: 'Kebersihan taman sekolah sepenuhnya merupakan kewajiban penjaga sekolah sehingga siswa tidak perlu ikut menjaga kebersihan' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Pernyataan A benar karena seluruh siswa wajib menjaga kebersihan dan keasrian lingkungan sekolah. Pernyataan B benar karena gotong royong melatih persatuan dan tanggung jawab bersama. Pernyataan C salah karena kebersihan sekolah adalah tanggung jawab seluruh warga sekolah, bukan hanya penjaga sekolah.',
  },
  {
    id: 20,
    type: 'pgk',
    topic: 'Hak-Hak Anak di Sekolah',
    difficulty: 'Mudah',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L1',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan hak anak di sekolah dengan kewajiban anak di sekolah.',
    indikatorSoal:
      'Disajikan tiga pernyataan tentang aktivitas siswa di sekolah, peserta didik dapat memilih semua pernyataan yang termasuk hak anak di sekolah (lebih dari 1 jawaban benar).',
    text: 'Manakah di antara pernyataan-pernyataan berikut ini yang termasuk HAK anak di lingkungan sekolah? Pilihlah SEMUA jawaban yang benar! (Pilihan benar lebih dari satu)',
    options: [
      { id: 'A', text: 'Memperoleh bimbingan belajar dan perlakuan yang adil dari guru tanpa membeda-bedakan' },
      { id: 'B', text: 'Menghormati guru serta menaati seluruh tata tertib yang berlaku di sekolah' },
      { id: 'C', text: 'Menggunakan fasilitas pembelajaran sekolah seperti ruang kelas, buku perpustakaan, dan UKS' },
    ],
    correctAnswer: ['A', 'C'],
    explanation:
      'Memperoleh bimbingan serta perlakuan adil (A) dan menggunakan fasilitas belajar sekolah (C) adalah hak siswa. Sedangkan menghormati guru dan menaati tata tertib (B) merupakan kewajiban siswa di sekolah.',
  },
  {
    id: 21,
    type: 'pgk',
    topic: 'Penerapan Norma Kesopanan dan Kesusilaan',
    difficulty: 'Sedang',
    elemen: 'Pancasila',
    levelKognitif: 'L2',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis perilaku nyata yang sesuai dengan norma kesopanan dan norma kesusilaan.',
    indikatorSoal:
      'Disajikan tiga perilaku sehari-hari anak di rumah dan sekolah, peserta didik dapat memilih semua perilaku yang sesuai dengan norma kesopanan dan kesusilaan.',
    text: 'Perhatikan contoh perilaku siswa kelas 6 berikut ini! Pilihlah SEMUA perilaku yang mencerminkan kepatuhan terhadap norma kesopanan dan norma kesusilaan! (Pilihan benar bisa lebih dari satu)',
    options: [
      { id: 'A', text: 'Mengucapkan "permisi" sambil sedikit membungkuk ketika berjalan melewati orang yang lebih tua' },
      { id: 'B', text: 'Mengerjakan soal tes sumatif secara jujur tanpa menyontek pekerjaan teman' },
      { id: 'C', text: 'Meminta maaf dengan tulus dan berjanji tidak mengulangi apabila berbuat salah kepada teman' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation:
      'Ketiga pilihan benar: mengucapkan permisi saat lewat di depan orang tua adalah norma kesopanan (A); bersikap jujur tidak menyontek adalah norma kesusilaan (B); meminta maaf dengan tulus mencerminkan kesusilaan dan kesopanan (C).',
  },

  // --- PILIHAN GANDA KOMPLEKS KATEGORI (9 SOAL) ---
  // Ketentuan: Setiap soal memiliki 3 deskripsi/pernyataan yang harus direspons Benar / Salah
  {
    id: 22,
    type: 'pgk_kategori',
    topic: 'Norma Agama, Kesopanan, dan Kepedulian Sosial',
    difficulty: 'Sedang',
    elemen: 'Pancasila',
    levelKognitif: 'L2',
    tujuanPembelajaran:
      'Peserta didik dapat mengevaluasi penerapan norma agama, norma kesopanan, dan kewajiban sosial melalui kegiatan berbagi kepada sesama.',
    indikatorSoal:
      'Disajikan gambar anak-anak menyerahkan bantuan sembako kepada seorang nenek dengan sikap santun, peserta didik dapat menentukan kebenaran (Benar/Salah) dari 3 pernyataan terkait norma dan sikap sosial.',
    image: imgNormaKesopananBerbagi,
    imageAlt: 'Anak-anak berseragam SD bersikap sopan dan menyerahkan paket sembako kepada nenek di lingkungan rumah',
    text: 'Perhatikan gambar siswa SD yang berkunjung dan menyerahkan paket bantuan kepada seorang nenek di lingkungan masyarakat di atas!\nTentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Menyapa dengan senyum, menunduk sopan, dan menyerahkan bantuan menggunakan kedua tangan merupakan wujud norma kesopanan.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Menolong tetangga yang membutuhkan merupakan cerminan ajaran norma agama dan norma kesusilaan tentang kasih sayang antarmanusia.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Kegiatan berbagi hanya boleh dilakukan apabila ada kamera yang merekam agar mendapat pujian dari warga.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Menyapa ramah dan menyerahkan sesuatu dengan sopan mencerminkan norma kesopanan (BENAR).\n2. Tolong-menolong dan berempati kepada sesama sesuai ajaran norma agama dan hati nurani/kesusilaan (BENAR).\n3. Berbagi harus dilandasi ketulusan hati, bukan demi pujian atau pamer (SALAH).',
  },
  {
    id: 23,
    type: 'pgk_kategori',
    topic: 'Identifikasi Sumber dan Jenis Norma',
    difficulty: 'Mudah',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L1',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan sumber dan ciri khas dari masing-masing norma yang berlaku di Indonesia.',
    indikatorSoal:
      'Disajikan tiga pernyataan tentang sumber dan ciri norma hukum, norma agama, dan norma kesusilaan, peserta didik dapat menentukan benar atau salah setiap pernyataan.',
    text: 'Dalam kehidupan bermasyarakat dikenal empat jenis norma utama, yaitu norma agama, kesusilaan, kesopanan, dan hukum. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Norma hukum dibuat oleh lembaga negara yang berwenang dan bersifat memaksa bagi seluruh warga negara.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Pelanggaran terhadap norma kesusilaan menyebabkan pelakunya merasakan penyesalan dan kegelisahan dalam hati nuraninya.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Aturan norma kesopanan di seluruh belahan dunia selalu sama persis tanpa dipengaruhi budaya daerah setempat.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Norma hukum dibentuk negara (undang-undang/peraturan daerah) dan mengikat secara tegas (BENAR).\n2. Sumber norma kesusilaan adalah hati nurani, sehingga sanksinya berupa rasa bersalah/menyesal (BENAR).\n3. Norma kesopanan dipengaruhi adat, kebiasaan, dan budaya masyarakat setempat sehingga bisa berbeda antarwilayah (SALAH).',
  },
  {
    id: 24,
    type: 'pgk_kategori',
    topic: 'Hak dan Kewajiban Anak di Rumah',
    difficulty: 'Mudah',
    elemen: 'Pancasila',
    levelKognitif: 'L1',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan antara hak dan kewajiban anak dalam lingkungan keluarga.',
    indikatorSoal:
      'Disajikan narasi keseharian anak di rumah, peserta didik dapat menentukan kebenaran (Benar/Salah) pada 3 pernyataan terkait hak dan kewajiban di keluarga.',
    text: 'Setiap pagi sebelum berangkat ke SD Negeri 4 Dauhwaru, Putu selalu merapikan tempat tidurnya, sarapan pagi yang disiapkan ibu, lalu berpamitan dengan mencium tangan kedua orang tuanya. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Memperoleh sarapan yang sehat dan bergizi dari orang tua merupakan bagian dari hak anak di rumah.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Merapikan tempat tidur sendiri dan berpamitan dengan sopan sebelum berangkat sekolah merupakan kewajiban anak.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Anak berhak menuntut uang saku dalam jumlah besar meskipun keadaan ekonomi keluarga sedang sulit.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Memperoleh makanan sehat untuk tumbuh kembang adalah hak anak (BENAR).\n2. Melatih kemandirian dengan merapikan tempat tidur dan menghormati orang tua adalah kewajiban anak (BENAR).\n3. Anak harus memahami kondisi keluarga dan bersyukur, tidak boleh memaksakan kehendak secara berlebihan (SALAH).',
  },
  {
    id: 25,
    type: 'pgk_kategori',
    topic: 'Hak dan Kewajiban di Sekolah',
    difficulty: 'Sedang',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L2',
    tujuanPembelajaran:
      'Peserta didik dapat menilai keseimbangan hak dan kewajiban siswa dalam mematuhi tata tertib sekolah.',
    indikatorSoal:
      'Disajikan skenario kegiatan pembelajaran dan tata tertib kelas 6, peserta didik dapat menentukan nilai kebenaran (Benar/Salah) pada 3 pernyataan tentang hak dan kewajiban siswa.',
    text: 'Di kelas 6 disepakati bahwa seluruh siswa wajib hadir paling lambat pukul 07.15 WITA, menjaga ketenangan saat guru menjelaskan materi, serta berhak bertanya apabila ada pelajaran yang belum dipahami. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Bertanya dengan sopan kepada guru saat belum memahami pelajaran merupakan hak siswa.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Hadir tepat waktu sebelum pukul 07.15 WITA merupakan kewajiban siswa untuk menjaga kedisiplinan kelas.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Siswa diperbolehkan mengobrol keras saat guru menjelaskan karena membayar kebutuhan alat tulis sendiri.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Mendapat penjelasan dan bertanya saat belajar adalah hak peserta didik (BENAR).\n2. Mematuhi kesepakatan waktu masuk kelas adalah kewajiban disiplin siswa (BENAR).\n3. Mengobrol keras mengganggu hak belajar teman lain dan melanggar norma kesopanan serta tata tertib kelas (SALAH).',
  },
  {
    id: 26,
    type: 'pgk_kategori',
    topic: 'Hak Perlindungan dan Lingkungan Ramah Anak',
    difficulty: 'Sedang',
    elemen: 'Bhinneka Tunggal Ika',
    levelKognitif: 'L2',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis sikap saling menghargai keberagaman teman sebagai wujud pemenuhan hak perlindungan anak.',
    indikatorSoal:
      'Disajikan narasi keberagaman teman di kelas 6, peserta didik dapat menentukan kebenaran (Benar/Salah) pada 3 pernyataan mengenai hak bebas dari diskriminasi dan perundungan.',
    text: 'Siswa kelas 6 berasal dari berbagai latar belakang suku, agama, serta kemampuan belajar yang berbeda-beda. Setiap anak berhak merasa aman dan nyaman selama belajar di sekolah tanpa rasa takut. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Menghormati teman yang berbeda agama saat sedang menjalankan ibadah merupakan kewajiban moral setiap siswa.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Memberi julukan buruk kepada teman karena kondisi fisiknya hanya merupakan candaan biasa yang tidak melanggar hak anak.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Setiap anak berhak mendapatkan perlindungan yang sama dari perlakuan kasar, baik secara fisik maupun melalui kata-kata.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Toleransi dan saling menghormati perbedaan agama merupakan kewajiban menjaga persatuan dan Bhinneka Tunggal Ika (BENAR).\n2. Memberi julukan buruk termasuk perundungan verbal yang melukai perasaan dan melanggar hak perlindungan anak (SALAH).\n3. Semua anak berhak bebas dari kekerasan fisik maupun verbal (BENAR).',
  },
  {
    id: 27,
    type: 'pgk_kategori',
    topic: 'Musyawarah dan Tanggung Jawab Keputusan Bersama',
    difficulty: 'Sukar',
    elemen: 'Pancasila',
    levelKognitif: 'L3',
    tujuanPembelajaran:
      'Peserta didik dapat mengevaluasi sikap demokratis dan kewajiban melaksanakan hasil keputusan musyawarah dengan lapang dada.',
    indikatorSoal:
      'Disajikan kasus pemilihan ketua kelas atau tujuan karya wisata melalui musyawarah, peserta didik dapat menentukan kebenaran (Benar/Salah) pada 3 pernyataan tentang hak dan kewajiban bermusyawarah.',
    text: 'Kelas 6 mengadakan musyawarah untuk menentukan jenis kegiatan pentas seni akhir semester. Usulan Rina tidak terpilih karena mayoritas teman kelas sepakat memilih pementasan tari daerah. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Rina tetap berkewajiban menghormati dan ikut mendukung keputusan bersama meskipun usulannya belum terpilih.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Sebelum keputusan diambil, Rina berhak menyampaikan pendapatnya secara santun tanpa dihalangi oleh teman lain.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Rina berhak menolak mengikuti kegiatan kelas karena keputusan musyawarah tidak sesuai dengan keinginannya pribadi.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Menghormati dan melaksanakan hasil musyawarah dengan tanggung jawab adalah kewajiban seluruh peserta musyawarah sesuai sila ke-4 Pancasila (BENAR).\n2. Setiap peserta memiliki hak setara untuk menyampaikan usulan secara sopan (BENAR).\n3. Menolak keputusan bersama demi ego pribadi bertentangan dengan nilai musyawarah mufakat (SALAH).',
  },
  {
    id: 28,
    type: 'pgk_kategori',
    topic: 'Kewajiban Menjaga Fasilitas Umum dan Lingkungan',
    difficulty: 'Sedang',
    elemen: 'Negara Kesatuan Republik Indonesia',
    levelKognitif: 'L2',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis perilaku yang bertanggung jawab terhadap fasilitas umum dan lingkungan sekitar.',
    indikatorSoal:
      'Disajikan deskripsi pemanfaatan fasilitas umum di desa/kota, peserta didik dapat menentukan kebenaran (Benar/Salah) pada 3 pernyataan terkait norma dan kewajiban menjaga fasilitas umum.',
    text: 'Di sekitar tempat tinggal siswa terdapat berbagai fasilitas umum seperti pos ronda, jalan desa, taman baca, dan tempat pembuangan sampah terpadu. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Mencoret-coret tembok pos ronda atau halte desa melanggar norma hukum dan merusak keindahan lingkungan.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Membuang sampah ke saluran air/got di depan rumah dapat menyumbat aliran air dan merugikan hak warga atas lingkungan sehat.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Anak usia sekolah dasar belum memiliki kewajiban sama sekali untuk menjaga kebersihan lingkungan tempat tinggalnya.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Vandalisme atau mencoret-coret fasilitas umum melanggar peraturan daerah (norma hukum) dan merusak fasilitas bersama (BENAR).\n2. Membuang sampah ke got menyebabkan banjir/pencemaran yang mengganggu hak warga lain hidup di lingkungan sehat (BENAR).\n3. Anak-anak sejak dini memiliki kewajiban menjaga kebersihan lingkungan sesuai kemampuannya (SALAH).',
  },
  {
    id: 29,
    type: 'pgk_kategori',
    topic: 'Analisis Kasus Pelanggaran Norma',
    difficulty: 'Sukar',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L3',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis perbedaan sanksi dan jenis norma dari berbagai peristiwa pelanggaran aturan.',
    indikatorSoal:
      'Disajikan tiga peristiwa pelanggaran aturan yang berbeda, peserta didik dapat menentukan kebenaran (Benar/Salah) klasifikasi jenis norma dan sanksinya.',
    text: 'Perhatikan analisis beberapa peristiwa pelanggaran norma di bawah ini. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Pengendara sepeda motor yang menerobos lampu merah dan tidak memakai helm akan dikenai sanksi tilang karena melanggar norma hukum.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Seorang anak yang berbohong kepada orang tuanya lalu merasa gelisah dan tidak tenang sepanjang hari sedang merasakan sanksi norma kesusilaan.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Siswa yang tidak mengucapkan salam saat bertemu guru di koridor sekolah akan langsung diproses di pengadilan negeri.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Pelanggaran aturan lalu lintas (lampu merah & helm) merupakan pelanggaran norma hukum dengan sanksi tegas dari aparat kepolisian berupa tilang/denda (BENAR).\n2. Rasa gelisah dan penyesalan batin akibat berbohong adalah sanksi norma kesusilaan dari hati nurani (BENAR).\n3. Tidak mengucapkan salam melanggar norma kesopanan yang sanksinya berupa teguran atau nasihat, bukan proses pengadilan negeri (SALAH).',
  },
  {
    id: 30,
    type: 'pgk_kategori',
    topic: 'Tanggung Jawab Pelaksanaan Hak dan Kewajiban Anak',
    difficulty: 'Sukar',
    elemen: 'Negara Kesatuan Republik Indonesia',
    levelKognitif: 'L3',
    tujuanPembelajaran:
      'Peserta didik dapat menyimpulkan prinsip keterkaitan antara norma, pelaksanaan kewajiban, dan pemenuhan hak anak dalam membentuk warga negara yang baik.',
    indikatorSoal:
      'Disajikan refleksi nilai karakter anak Indonesia yang patuh norma dan bertanggung jawab, peserta didik dapat menentukan kebenaran (Benar/Salah) pada 3 pernyataan prinsipil tentang norma, hak, dan kewajiban.',
    text: 'Sebagai pelajar Pancasila di SD Negeri 4 Dauhwaru, setiap siswa kelas 6 diharapkan memahami keselarasan antara norma, hak, dan kewajiban dalam kehidupan sehari-hari. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Pelaksanaan kewajiban harus didahulukan dengan penuh tanggung jawab agar tercipta keseimbangan sebelum menuntut hak.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Dalam menggunakan hak pribadi, seorang anak tetap harus memperhatikan batas norma agar tidak merugikan hak orang lain.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Mematuhi norma hanya perlu dilakukan ketika diawasi oleh guru atau orang tua saja.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Mendahulukan kewajiban menciptakan keteraturan sosial sehingga hak setiap orang dapat terpenuhi secara adil (BENAR).\n2. Hak seseorang dibatasi oleh hak orang lain dan aturan norma yang berlaku (BENAR).\n3. Kepatuhan terhadap norma harus tumbuh dari kesadaran diri dan tanggung jawab pribadi, bukan hanya saat diawasi (SALAH).',
  },
];
