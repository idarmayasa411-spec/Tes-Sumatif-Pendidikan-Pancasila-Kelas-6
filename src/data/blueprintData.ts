import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';
import { CONFIG } from '../config';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase C (Kelas 6) Mata Pelajaran Pendidikan Pancasila
 * Lingkup Materi: Norma, Hak dan Kewajiban Anak
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 30 butir soal Kurikulum Merdeka Pendidikan Pancasila
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi jenis norma hukum melalui contoh kepatuhan terhadap rambu lalu lintas di lingkungan sekitar.',
    indikatorSoal:
      'Disajikan gambar siswa sekolah dasar menyeberang di zebra cross saat lampu penyeberangan berwarna hijau, peserta didik dapat menentukan jenis norma yang dipatuhi.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan pengertian dan tujuan utama dibentuknya norma dalam kehidupan bermasyarakat.',
    indikatorSoal:
      'Disajikan narasi tentang kehidupan bermasyarakat yang tertib, peserta didik dapat menentukan tujuan utama adanya norma.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat mengenali sumber dan contoh penerapan norma agama dalam kehidupan sehari-hari.',
    indikatorSoal:
      'Disajikan ciri-ciri sebuah norma yang bersumber dari kitab suci dan Tuhan Yang Maha Esa, peserta didik dapat mengidentifikasi nama norma tersebut.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat menerapkan nilai norma kesusilaan yang bersumber dari hati nurani dalam situasi nyata.',
    indikatorSoal:
      'Disajikan kasus siswa yang menemukan barang terjatuh di halaman sekolah dan mengembalikannya, peserta didik dapat menentukan norma yang melandasi tindakan tersebut.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi keterkaitan antara hak berpendapat, kewajiban menghargai orang lain, dan norma kesopanan saat musyawarah.',
    indikatorSoal:
      'Disajikan gambar kegiatan musyawarah di kelas, peserta didik dapat menentukan sikap yang mencerminkan pelaksanaan norma kesopanan dan kewajiban peserta musyawarah.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan sanksi yang timbul dari pelanggaran norma kesopanan dan norma lainnya.',
    indikatorSoal:
      'Disajikan perilaku siswa yang melanggar tata krama pergaulan, peserta didik dapat menentukan sanksi yang sesuai dengan norma kesopanan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat memahami konsep dasar hak anak dalam kehidupan sehari-hari.',
    indikatorSoal:
      'Disajikan definisi tentang sesuatu yang mutlak dimiliki dan diterima anak sejak lahir, peserta didik dapat mengidentifikasi istilah hak anak.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat memahami konsep dasar kewajiban anak sebagai bagian dari tanggung jawab sosial.',
    indikatorSoal:
      'Disajikan pernyataan mengenai tugas yang harus dilaksanakan sebelum menuntut hak, peserta didik dapat menentukan istilah kewajiban.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat mengklasifikasikan empat kelompok hak anak menurut Konvensi Hak Anak PBB.',
    indikatorSoal:
      'Disajikan contoh hak anak seperti akta kelahiran, gizi seimbang, dan layanan kesehatan, peserta didik dapat menentukan kategori hak kelangsungan hidup.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat menghubungkan hak anak memperoleh pendidikan dengan kewajiban merawat fasilitas sekolah.',
    indikatorSoal:
      'Disajikan gambar siswa membaca buku di perpustakaan sekolah dengan rapi, peserta didik dapat menentukan kewajiban pengguna perpustakaan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi contoh hak anak di lingkungan rumah dan keluarga.',
    indikatorSoal:
      'Disajikan empat pernyataan aktivitas anak di rumah, peserta didik dapat memilih pernyataan yang merupakan contoh hak anak di rumah.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan contoh kewajiban anak di lingkungan keluarga.',
    indikatorSoal:
      'Disajikan situasi kehidupan sehari-hari di rumah, peserta didik dapat memilih perilaku yang mencerminkan kewajiban membantu orang tua.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi kewajiban utama peserta didik terhadap tata tertib sekolah.',
    indikatorSoal:
      'Disajikan pilihan perilaku di sekolah, peserta didik dapat menentukan contoh pelaksanaan kewajiban anak di lingkungan sekolah.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Negara Kesatuan Republik Indonesia',
    tujuanPembelajaran:
      'Peserta didik dapat menerapkan keseimbangan hak dan kewajiban anak di lingkungan masyarakat.',
    indikatorSoal:
      'Disajikan situasi anak-anak bermain di taman desa, peserta didik dapat menentukan kewajiban yang menyertai hak menggunakan fasilitas umum.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Bhinneka Tunggal Ika',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi bentuk pelaksanaan hak berpartisipasi anak di sekolah maupun di rumah.',
    indikatorSoal:
      'Disajikan beberapa contoh kegiatan anak, peserta didik dapat mengelompokkan kegiatan yang mencerminkan hak berpartisipasi anak.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis dampak apabila seseorang menuntut hak secara berlebihan tanpa melaksanakan kewajibannya.',
    indikatorSoal:
      'Disajikan studi kasus siswa yang menuntut kelas bersih tetapi menghindari kewajiban piket, peserta didik dapat menyimpulkan dampaknya.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  17: {
    elemen: 'Bhinneka Tunggal Ika',
    tujuanPembelajaran:
      'Peserta didik dapat memahami hak perlindungan anak dari segala bentuk kekerasan dan perundungan (bullying).',
    indikatorSoal:
      'Disajikan kasus perundungan verbal di sekolah, peserta didik dapat menentukan sikap tepat untuk melindungi hak anak.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis penerapan norma kesopanan dan etika komunikasi saat menggunakan pesan digital.',
    indikatorSoal:
      'Disajikan skenario siswa menghubungi gurunya melalui pesan singkat pada malam hari, peserta didik dapat menentukan cara berkomunikasi yang santun.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  19: {
    elemen: 'Negara Kesatuan Republik Indonesia',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi perilaku yang menunjukkan pelaksanaan kewajiban anak menjaga kebersihan dan kelestarian lingkungan sekolah.',
    indikatorSoal:
      'Disajikan gambar kegiatan gotong royong siswa membersihkan taman sekolah, peserta didik dapat memilih semua pernyataan benar terkait kewajiban dan kerja sama.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan hak anak di sekolah dengan kewajiban anak di sekolah.',
    indikatorSoal:
      'Disajikan tiga pernyataan aktivitas siswa di sekolah, peserta didik dapat memilih semua pernyataan yang termasuk hak anak di sekolah.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  21: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis perilaku nyata yang sesuai dengan norma kesopanan dan norma kesusilaan.',
    indikatorSoal:
      'Disajikan tiga contoh perilaku sehari-hari siswa, peserta didik dapat memilih semua perilaku yang sesuai dengan norma kesopanan dan kesusilaan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  22: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat mengevaluasi penerapan norma agama, norma kesopanan, dan kewajiban sosial melalui kegiatan berbagi kepada sesama.',
    indikatorSoal:
      'Disajikan gambar siswa menyerahkan bantuan sembako kepada seorang nenek dengan sikap santun, peserta didik dapat menentukan kebenaran (Benar/Salah) dari 3 pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  23: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan sumber dan ciri khas dari masing-masing norma yang berlaku di Indonesia.',
    indikatorSoal:
      'Disajikan tiga pernyataan tentang ciri norma hukum, kesusilaan, dan kesopanan, peserta didik dapat menentukan kebenaran (Benar/Salah) tiap pernyataan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  24: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan antara hak dan kewajiban anak dalam lingkungan keluarga.',
    indikatorSoal:
      'Disajikan narasi keseharian anak di rumah, peserta didik dapat menilai kebenaran (Benar/Salah) pada 3 pernyataan hak dan kewajiban keluarga.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  25: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat menilai keseimbangan hak dan kewajiban siswa dalam mematuhi tata tertib sekolah.',
    indikatorSoal:
      'Disajikan skenario tata tertib kelas 6, peserta didik dapat menentukan kebenaran (Benar/Salah) pada 3 pernyataan tentang hak bertanya dan kewajiban disiplin.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  26: {
    elemen: 'Bhinneka Tunggal Ika',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis sikap saling menghargai keberagaman teman sebagai wujud pemenuhan hak perlindungan anak.',
    indikatorSoal:
      'Disajikan narasi keberagaman siswa kelas 6, peserta didik dapat menentukan kebenaran (Benar/Salah) pada 3 pernyataan hak bebas dari diskriminasi dan perundungan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  27: {
    elemen: 'Pancasila',
    tujuanPembelajaran:
      'Peserta didik dapat mengevaluasi sikap demokratis dan kewajiban melaksanakan hasil keputusan musyawarah dengan lapang dada.',
    indikatorSoal:
      'Disajikan kasus musyawarah penentuan pentas seni kelas, peserta didik dapat menentukan kebenaran (Benar/Salah) pada 3 pernyataan hak berpendapat dan kewajiban menghormati hasil.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  28: {
    elemen: 'Negara Kesatuan Republik Indonesia',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis perilaku yang bertanggung jawab terhadap fasilitas umum dan lingkungan sekitar.',
    indikatorSoal:
      'Disajikan deskripsi pemanfaatan fasilitas umum di desa, peserta didik dapat menentukan kebenaran (Benar/Salah) pada 3 pernyataan kewajiban menjaga lingkungan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  29: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis perbedaan sanksi dan jenis norma dari berbagai peristiwa pelanggaran aturan.',
    indikatorSoal:
      'Disajikan tiga peristiwa pelanggaran aturan lalu lintas, berbohong, dan tata krama salam, peserta didik dapat menentukan kebenaran (Benar/Salah) klasifikasi sanksi normanya.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  30: {
    elemen: 'Negara Kesatuan Republik Indonesia',
    tujuanPembelajaran:
      'Peserta didik dapat menyimpulkan prinsip keterkaitan antara norma, pelaksanaan kewajiban, dan pemenuhan hak anak dalam membentuk warga negara yang baik.',
    indikatorSoal:
      'Disajikan refleksi karakter pelajar Pancasila, peserta didik dapat menentukan kebenaran (Benar/Salah) pada 3 pernyataan prinsipil keselarasan norma, hak, dan kewajiban.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
};

/**
 * Format label bentuk soal
 */
export function getBentukSoalLabel(type: string): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda (PG)';
    case 'pgk':
      return 'Pilihan Ganda Kompleks (PGK)';
    case 'pgk_kategori':
      return 'Benar / Salah (PGK Kategori)';
    default:
      return 'Pilihan Ganda';
  }
}

/**
 * Format label level kognitif
 */
export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman / Mengingat)';
    case 'L2':
      return 'L2 (Aplikasi / Penerapan)';
    case 'L3':
      return 'L3 (Penalaran / Analisis HOTS)';
    default:
      return 'L2 (Aplikasi)';
  }
}

/**
 * Mendapatkan format string ringkas kunci jawaban
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : 'A';
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(', ');
    }
    return String(q.correctAnswer || 'A');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      return q.statements
        .map((st, i) => `${i + 1}:${st.correctAnswer ? 'B' : 'S'}`)
        .join(', ');
    }
    return 'B/S';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  const elemen =
    q.elemen ||
    (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif ||
    (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def
      ? def.tujuanPembelajaran
      : `Peserta didik mampu memahami dan menerapkan konsep ${q.topic} dalam mata pelajaran ${CONFIG.MATA_PELAJARAN}.`);

  const indikatorSoal =
    q.indikatorSoal ||
    (def
      ? def.indikatorSoal
      : `Disajikan stimulus kasus tentang ${q.topic}, peserta didik dapat menentukan jawaban yang tepat.`);

  const bobotSkor = q.bobot || (def ? def.bobotSkor : 1);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (t.includes('pancasila') || t.includes('musyawarah') || t.includes('kesusilaan') || t.includes('agama') || t.includes('keluarga')) {
    return 'Pancasila';
  }
  if (t.includes('keberagaman') || t.includes('perlindungan') || t.includes('partisipasi') || t.includes('perundungan')) {
    return 'Bhinneka Tunggal Ika';
  }
  if (t.includes('masyarakat') || t.includes('gotong royong') || t.includes('fasilitas') || t.includes('tanggung jawab')) {
    return 'Negara Kesatuan Republik Indonesia';
  }
  return 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghitung rekapitulasi distribusi kisi-kisi soal
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  const elemenCountMap: Record<string, number> = {};
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  const typeCountMap: Record<string, number> = { pg: 0, pgk: 0, pgk_kategori: 0 };

  blueprints.forEach((bp, idx) => {
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    const q = questions[idx];
    if (q) {
      diffCountMap[q.difficulty] = (diffCountMap[q.difficulty] || 0) + 1;
      typeCountMap[q.type] = (typeCountMap[q.type] || 0) + 1;
    }
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami konsep dasar',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan konsep pada konteks nyata',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis & memecahkan masalah kompleks',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const typeDistribution = [
    {
      type: 'pg',
      label: 'Pilihan Ganda (PG)',
      count: typeCountMap.pg,
      percentage: total > 0 ? Math.round((typeCountMap.pg / total) * 100) : 0,
    },
    {
      type: 'pgk',
      label: 'Pilihan Ganda Kompleks (PGK)',
      count: typeCountMap.pgk,
      percentage: total > 0 ? Math.round((typeCountMap.pgk / total) * 100) : 0,
    },
    {
      type: 'pgk_kategori',
      label: 'Benar / Salah (PGK Kategori)',
      count: typeCountMap.pgk_kategori,
      percentage: total > 0 ? Math.round((typeCountMap.pgk_kategori / total) * 100) : 0,
    },
  ];

  return {
    total,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}
