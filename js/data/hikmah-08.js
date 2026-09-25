// Data Materi Hikmah #08: Syarah Ibnu 'Abbad ar-Rundi — Wijhah Ta'arruf & Rahasia Bala'
const hikmah08 = {
  id: 8,
  nomor: "08",
  judul: "Pintu Ta'arruf di Balik Balā' — Wijhah Ma'rifat",
  kategori: "Ma'rifat & Balā'",
  arab: "إِذَا فَتَحَ لَكَ وِجْهَةً مِنَ التَّعَرُّفِ فَلَا تُبَالِ مَعَهَا إِنْ قَلَّ عَمَلُكَ، فَإِنَّهُ مَا فَتَحَهَا لَكَ إِلَّا وَهُوَ يُرِيدُ أَنْ يَتَعَرَّفَ إِلَيْكَ، أَلَمْ تَعْلَمْ أَنَّ التَّعَرُّفَ هُوَ مَوْرِدُهُ عَلَيْكَ، وَالْأَعْمَالَ أَنْتَ مُهْدِيهَا إِلَيْهِ، وَأَيْنَ مَا تُهْدِيهِ إِلَيْهِ مِمَّا هُوَ مُوْرِدُهُ عَلَيْكَ",
  terjemah:
    "Apabila Allah membukakan untukmu sebuah pintu dari ta'arruf (pengenalan Allah kepadamu), maka jangan pedulikan bersamanya akan sedikitnya amalmu. Sesungguhnya tidaklah Dia membukakannya untukmu melainkan Dia hendak memperkenalkan Diri-Nya kepadamu. Tidakkah engkau tahu bahwa ta'arruf itu adalah karunia yang Dia datangkan kepadamu, sedangkan amal-amal itu adalah hadiahmu yang engkau persembahkan kepada-Nya? Dan di manakah letak hadiahmu kepada-Nya dibanding karunia-Nya kepadamu?",
  isReady: true,
  renderContent: function () {
    return `
      <!-- ================= HEADER KAJIAN ================= -->
      <div style="text-align:center; margin-bottom:2rem; border-bottom:1px solid var(--border-color); padding-bottom:1rem;">
        <span class="meta-badge-top">HIKMAH 08 • SYARAH IBNU 'ABBAD AR-RUNDI • 2 BAGIAN</span>
        <div style="display:flex; justify-content:center; gap:1rem; font-size:0.78rem; color:var(--text-muted); margin-top:0.5rem; flex-wrap:wrap;">
          <span><strong>Maqam:</strong> Al-Khawwashul Muqarrabin</span>
          <span><strong>Wijhah:</strong> وِجْهَةٌ مِنَ التَّعَرُّفِ</span>
          <span><strong>Kunci:</strong> Warid vs Hadiah</span>
        </div>
        <div style="margin-top:0.75rem; display:inline-flex; gap:0.4rem; flex-wrap:wrap; justify-content:center;">
          <span style="background:#064e3b; color:#fef3c7; font-size:0.65rem; font-weight:700; padding:4px 10px; border-radius:20px; letter-spacing:0.06em;">BAGIAN 1 • Maqom Ta'arruf & Mitsal Bala'</span>
          <span style="background:#fef3c7; border:1px solid #fde68a; color:#92400e; font-size:0.65rem; font-weight:700; padding:4px 10px; border-radius:20px; letter-spacing:0.06em;">BAGIAN 2 • Hadits Qudsi & Kisah Wali</span>
        </div>
      </div>

      <!-- ================= MATAN UTAMA ================= -->
      <div style="text-align:center; margin-bottom:2rem;">
        <div style="font-size:1.75rem; font-family:'Amiri',serif; line-height:2.15; color:var(--primary); direction:rtl; font-weight:bold; background:var(--bg-main); border-right:4px solid var(--accent); border-radius:12px; padding:1.5rem;">
          إِذَا فَتَحَ لَكَ وِجْهَةً مِنَ التَّعَرُّفِ<br>
          <span style="color:var(--accent);">فَلَا تُبَالِ مَعَهَا إِنْ قَلَّ عَمَلُكَ</span><br>
          فَإِنَّهُ مَا فَتَحَهَا لَكَ إِلَّا وَهُوَ يُرِيدُ أَنْ يَتَعَرَّفَ إِلَيْكَ
        </div>
        <div style="font-family:'Amiri',serif; font-size:1.15rem; line-height:1.9; direction:rtl; color:#57534e; margin-top:0.9rem; background:#fff; border:1px solid #e7e5e4; border-radius:10px; padding:0.85rem 1rem;">
          أَلَمْ تَعْلَمْ أَنَّ التَّعَرُّفَ هُوَ مَوْرِدُهُ عَلَيْكَ، وَالْأَعْمَالَ أَنْتَ مُهْدِيهَا إِلَيْهِ، وَأَيْنَ مَا تُهْدِيهِ إِلَيْهِ مِمَّا هُوَ مُوْرِدُهُ عَلَيْكَ
        </div>
        <div style="margin-top:1.15rem; background:rgba(197,155,39,0.06); border-left:4px solid var(--accent); padding:1rem 1.25rem; border-radius:8px; text-align:left;">
          <h4 style="margin-bottom:0.4rem; color:var(--primary); font-size:0.85rem; letter-spacing:0.08em;"><i class="fa-solid fa-language"></i> TERJEMAHAN LENGKAP:</h4>
          <p style="font-size:0.93rem; line-height:1.8; font-weight:500; color:var(--text-main);">
            “Apabila Allah <strong>membukakan untukmu sebuah pintu (wijhah) dari ta'arruf</strong> — pengenalan Allah kepada dirimu melalui bala', kefakiran, sakit — maka <strong style="color:#92400e;">jangan pedulikan sedikitnya amal zhahirmu</strong> bersamanya. Sesungguhnya tidaklah Dia membukakannya melainkan <span style="background:#064e3b; color:#fef3c7; padding:1px 7px; border-radius:4px;">Dia hendak memperkenalkan Diri-Nya kepadamu</span>. Tidakkah engkau tahu bahwa ta'arruf adalah <span style="background:#fef3c7; border:1px solid #fde68a; color:#92400e; padding:1px 7px; border-radius:4px;">karunia yang Dia datangkan kepadamu</span>, sedang amal adalah hadiahmu kepada-Nya? <em>Di manakah hadiahmu dibanding karunia-Nya?</em>”
          </p>
          <div style="margin-top:0.7rem; display:flex; gap:0.4rem; flex-wrap:wrap; font-size:0.72rem;">
            <span style="background:#0f172a; color:#fde68a; padding:3px 9px; border-radius:20px;"><strong>وِجْهَة</strong> = arah/pintu</span>
            <span style="background:#fef3c7; border:1px solid #fde68a; color:#92400e; padding:3px 9px; border-radius:20px;"><strong>مَوْرِدُهُ</strong> = warid yang didatangkan</span>
            <span style="background:#f1f5f9; border:1px solid #e2e8f0; color:#475569; padding:3px 9px; border-radius:20px;"><strong>مُهْدِيهَا</strong> = hadiahmu</span>
            <span style="background:#ecfdf5; border:1px solid #a7f3d0; color:#065f46; padding:3px 9px; border-radius:20px;">وَأَيْنَ... = retoris tak sebanding</span>
          </div>
        </div>
      </div>

      <!-- ================= NAV BAGIAN ================= -->
      <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); gap:0.75rem; margin-bottom:2rem;">
        <div style="background:#064e3b; border:1px solid #065f46; border-radius:12px; padding:0.9rem 1rem; color:#fef3c7;">
          <div style="font-size:0.62rem; letter-spacing:0.1em; color:#6ee7b7; font-weight:700;">BAGIAN 1 • 7 POKOK</div>
          <div style="font-weight:800; font-size:0.85rem; margin-top:0.2rem;">01 Matan 02 Makna Umum 03 Syarah 5 Poin 04 Muqoronah 05 Mitsal Bala' 06 Khulashoh 07 Dalil</div>
        </div>
        <div style="background:#fff; border:1px solid #fde68a; border-radius:12px; padding:0.9rem 1rem;">
          <div style="font-size:0.62rem; letter-spacing:0.1em; color:#92400e; font-weight:700;">BAGIAN 2 • 6 POKOK</div>
          <div style="font-weight:800; font-size:0.85rem; color:#0f172a; margin-top:0.2rem;">01 Hadits 1-2 • 02 Qoul Tirmidzi 7 Tahap • 03 Wijhah • 04 Nasihat • 05 Maqam Syukur • 06 Tiga Kisah Wali</div>
        </div>
      </div>

      <!-- ========== BAGIAN 1 ========== -->
      <div style="background:#064e3b; color:#fef3c7; border-radius:12px; padding:0.7rem 1rem; text-align:center; font-weight:800; letter-spacing:0.08em; font-size:0.78rem; margin-bottom:1.25rem;">— BAGIAN PERTAMA: MAQOM TA'ARRUF & BALA' SEBAGAI PINTU —</div>

      <!-- ================= GHAYATUL MATHOLIB ================= -->
      <div style="background:linear-gradient(135deg,#fefce8,#fef3c7); border:1px solid #fde68a; border-radius:16px; padding:1.4rem; margin-bottom:1.5rem;">
        <div style="display:flex; gap:1rem; align-items:flex-start; flex-wrap:wrap;">
          <div style="flex-shrink:0; text-align:center;">
            <span style="display:inline-block; background:#0f172a; color:#fde68a; font-size:0.62rem; font-weight:700; letter-spacing:0.1em; padding:4px 10px; border-radius:20px;">03 • MAKNA UMUM</span>
            <div style="margin-top:0.85rem; width:64px; height:64px; border-radius:14px; background:#0f172a; display:flex; align-items:center; justify-content:center; border:1px solid rgba(197,155,39,0.2); margin-left:auto; margin-right:auto;">
              <span style="font-family:'Amiri',serif; color:#fde68a; font-size:1.45rem; font-weight:bold;">غاية</span>
            </div>
          </div>
          <div style="flex:1; min-width:260px;">
            <p style="font-family:'Amiri',serif; font-size:1.55rem; line-height:1.5; color:#0f172a; font-weight:bold; text-align:right;" dir="rtl">مَعْرِفَةُ اللهِ — هِيَ غَايَةُ الْمَطَالِبِ</p>
            <p style="font-family:'Amiri',serif; font-size:1rem; color:#78350f; text-align:right; margin:0;" dir="rtl">وَنِهَايَةُ الْآمَالِ وَالْمَآرِبِ</p>
            <div style="margin-top:0.85rem; background:rgba(255,255,255,0.85); border:1px solid rgba(197,155,39,0.2); border-radius:10px; padding:0.9rem 1rem;">
              <p style="font-size:0.88rem; line-height:1.7; color:#1e293b; margin:0;"><strong>Ma'rifatullah adalah ghayatul mathalib</strong> — puncak segala pencarian, ujung harapan & akhir segala hajat. Jika Allah <em>wajjaha</em> (menghadapkan) hamba pada sebab ma'rifat, <em>fataha bāb at-ta'arruf</em> dan menganugerahkan <strong>sakinah & thuma'ninah</strong> di dalamnya — itulah <span style="background:#0f172a; color:#fde68a; padding:1px 6px; border-radius:4px;">النِّعَمُ الْجَزِيْلَةُ</span> — nikmat paling besar.</p>
              <div style="margin-top:0.65rem; display:flex; gap:0.4rem; flex-wrap:wrap; font-size:0.7rem;">
                <span style="background:#fef3c7; border:1px solid #fde68a; color:#92400e; padding:3px 8px; border-radius:20px;">غَايَةُ الْمَطَالِبِ</span>
                <span style="background:#fef3c7; border:1px solid #fde68a; color:#92400e; padding:3px 8px; border-radius:20px;">نِهَايَةُ الْآمَالِ</span>
                <span style="background:#064e3b; color:#d1fae5; padding:3px 8px; border-radius:20px;">النِّعَمُ الْجَزِيْلَةُ</span>
              </div>
              <p style="font-size:0.82rem; color:#065f46; margin:0.6rem 0 0; font-weight:600;">Hukum: Jangan bersedih karena berkurangnya amal zhahir — jika pintu batin terbuka, engkau dipindahkan ke jalan <strong>الْخَاصَّةُ الْمُقَرَّبُوْنَ</strong>.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- ================= SYARAH 5 POIN ================= -->
      <div style="margin-bottom:1.5rem;">
        <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:1rem;">
          <span style="width:4px; height:28px; border-radius:20px; background:#064e3b; display:inline-block;"></span>
          <div>
            <div style="font-size:0.62rem; letter-spacing:0.12em; color:#64748b; font-weight:700;">04 • SYARAH TERPERINCI IBNU 'ABBAD</div>
            <div style="font-weight:800; color:#0f172a; font-size:1.02rem;">5 Poin Inti Penjelasan</div>
          </div>
        </div>
        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:0.85rem;">
          <div style="background:#fff; border:1px solid #e7e5e4; border-radius:12px; padding:1rem; box-shadow:0 8px 20px rgba(15,23,42,0.05);">
            <span style="width:28px; height:28px; border-radius:8px; background:#0f172a; color:#fde68a; display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.7rem;">01</span>
            <p style="font-family:'Amiri',serif; font-size:1.02rem; direction:rtl; text-align:right; color:#0f172a; font-weight:bold; margin:0.6rem 0 0.35rem;">إِذَا فَتَحَ لَكَ بَابَ التَّعَرُّفِ فَلَا تَحْزَنْ لِقِلَّةِ الْعَمَلِ</p>
            <div style="font-weight:700; font-size:0.82rem; color:#0f172a;">Jangan sedih jika amal sedikit</div>
            <p style="font-size:0.79rem; line-height:1.6; color:#57534e; margin:0.3rem 0 0;">Pintu ta'arruf (ujian, bala', fakir, sakit yang membuatmu kembali kepada-Nya) <strong>lebih mulia</strong> dari sekadar banyaknya amal zhahir. Sedikit amal saat pintu terbuka — tidak masalah.</p>
          </div>
          <div style="background:#fff; border:1px solid #e7e5e4; border-radius:12px; padding:1rem; box-shadow:0 8px 20px rgba(15,23,42,0.05);">
            <span style="width:28px; height:28px; border-radius:8px; background:#c59b27; color:#0f172a; display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.7rem;">02</span>
            <p style="font-family:'Amiri',serif; font-size:1rem; direction:rtl; text-align:right; color:#0f172a; font-weight:bold; margin:0.6rem 0 0.35rem;">مِنَ النِّعَمِ الْجَزِيْلَةِ وَسُلُوْكِ مَسْلَكِ الْخَاصَّةِ</p>
            <div style="font-weight:700; font-size:0.82rem; color:#0f172a;">Jalan Khawwashul Muqarrabin</div>
            <p style="font-size:0.79rem; line-height:1.6; color:#57534e; margin:0.3rem 0 0;">Nikmat agung — Allah menempuhkanmu pada <strong>مَسْلَكُ الْخَاصَّةِ الْمُقَرَّبِيْنَ</strong> yang mengantar ke hakikat tauhid <em>min ghairi iktisāb wa lā 'amal</em> — murni pemberian, bukan usahamu.</p>
          </div>
          <div style="background:#0f172a; border:1px solid #1e3a5f; border-radius:12px; padding:1rem; box-shadow:0 12px 28px rgba(15,23,42,0.2);">
            <span style="width:28px; height:28px; border-radius:8px; background:rgba(197,155,39,0.18); border:1px solid rgba(197,155,39,0.25); color:#fde68a; display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.7rem;">03</span>
            <p style="font-family:'Amiri',serif; font-size:1rem; direction:rtl; text-align:right; color:#fefce8; font-weight:bold; margin:0.6rem 0 0.35rem;">الْمُؤَدِّي إِلَى حَقَائِقِ التَّوْحِيْدِ وَالْيَقِيْنِ</p>
            <div style="font-weight:700; font-size:0.82rem; color:#fef3c7;">Menuju Hakikat Tauhid & Yaqin</div>
            <p style="font-size:0.79rem; line-height:1.6; color:#94a3b8; margin:0.3rem 0 0;">Ta'arruf datang sebagai <strong style="color:#fde68a;">warid ilahi langsung ke qalb</strong> — bukan hasil latihan. Amal bergantung kasab, ta'arruf adalah anugerah.</p>
          </div>
          <div style="background:#fff; border:1px solid #fecaca; border-radius:12px; padding:1rem; box-shadow:0 8px 20px rgba(15,23,42,0.05);">
            <span style="width:28px; height:28px; border-radius:8px; background:#991b1b; color:#fecaca; display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.7rem;">04</span>
            <p style="font-family:'Amiri',serif; font-size:0.95rem; direction:rtl; text-align:right; color:#7f1d1d; font-weight:bold; margin:0.6rem 0 0.35rem;">الْأَعْمَالُ لَا تَسْلَمُ مِنَ الْآفَاتِ</p>
            <div style="font-weight:700; font-size:0.82rem; color:#7f1d1d;">Amal Rentan Afat</div>
            <p style="font-size:0.79rem; line-height:1.6; color:#57534e; margin:0.3rem 0 0;">Amal dengan kasab <strong>tidak selamat dari afat</strong>: riya', ujub, sum'ah. Dituntut ikhlas. Saat <em>munāqasyah al-hisāb</em> belum tentu dapat pahala yang diharapkan.</p>
          </div>
          <div style="background:linear-gradient(135deg,#fef3c7,#fde68a); border:1px solid #f59e0b; border-radius:12px; padding:1rem; grid-column:span 2;">
            <span style="width:28px; height:28px; border-radius:8px; background:#0f172a; color:#fde68a; display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.7rem;">05</span>
            <p style="font-family:'Amiri',serif; font-size:1.05rem; direction:rtl; text-align:center; color:#78350f; font-weight:bold; margin:0.6rem 0 0.35rem;">وَأَيْنَ مَا تُهْدِيهِ إِلَيْهِ مِمَّا هُوَ مُوْرِدُهُ عَلَيْكَ</p>
            <div style="font-weight:800; font-size:0.82rem; color:#78350f; text-align:center;">Pertanyaan Retoris — Tak Sebanding!</div>
            <p style="font-size:0.79rem; line-height:1.6; color:#451a03; margin:0.3rem 0 0; text-align:center;">Di mana hadiah cacat dari fakir dibanding samudera dari Al-Ghaniy? <strong>Hadiahmu setetes, karunia-Nya samudera.</strong></p>
          </div>
        </div>
      </div>

      <!-- ================= DIAGRAM MUQORONAH ================= -->
      <div style="background:#fff; border:1px solid #e7e5e4; border-radius:16px; overflow:hidden; margin-bottom:1.5rem; box-shadow:0 10px 30px rgba(15,23,42,0.06);">
        <div style="background:#0f172a; color:#fef3c7; padding:0.75rem 1rem; text-align:center; font-weight:800; font-size:0.78rem; letter-spacing:0.06em;">DIAGRAM MUQORONAH — DUA JALAN</div>
        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr));">
          <div style="background:#fef2f2; padding:1.15rem; border-right:1px solid #e7e5e4;">
            <div style="text-align:center; margin-bottom:0.75rem;">
              <span style="background:#991b1b; color:#fecaca; font-size:0.62rem; font-weight:800; padding:4px 10px; border-radius:20px;">🕌 الْأَعْمَالُ الظَّاهِرَةُ</span>
              <div style="font-weight:800; color:#7f1d1d; font-size:0.9rem; margin-top:0.35rem;">Amal Zhahir — Hadiah Hamba</div>
              <div style="font-size:0.7rem; color:#991b1b;">🎁 Hadiah kecil cacat dari fakir</div>
            </div>
            <div style="display:flex; flex-direction:column; gap:0.45rem; font-size:0.78rem; color:#451a03;">
              <div style="background:#fff; border:1px solid #fecaca; border-radius:8px; padding:0.55rem 0.7rem;"><strong>أَنْتَ مُهْدِيْهَا إِلَيْهِ</strong> — Engkau yang menghadiahkannya</div>
              <div style="background:#fff; border:1px solid #fecaca; border-radius:8px; padding:0.55rem 0.7rem;"><strong>بِاكْتِسَابِكَ</strong> — Dengan kasab & usahamu</div>
              <div style="background:#fff; border:1px solid #fecaca; border-radius:8px; padding:0.55rem 0.7rem;"><strong>لَا تَسْلَمُ مِنَ الْآفَاتِ</strong> — Tidak selamat dari penyakit hati</div>
              <div style="background:#fff; border:1px solid #fecaca; border-radius:8px; padding:0.55rem 0.7rem;"><strong>مُطَالَبَةٌ بِالْإِخْلَاصِ</strong> — Dituntut ikhlasnya</div>
              <div style="background:#7f1d1d; color:#fecaca; border-radius:8px; padding:0.55rem 0.7rem; text-align:center; font-weight:700;">قَدْ لَا يَحْصُلُ الثَّوَابُ — Belum tentu berpahala saat hisab</div>
            </div>
          </div>
          <div style="background:#ecfdf5; padding:1.15rem;">
            <div style="text-align:center; margin-bottom:0.75rem;">
              <span style="background:#064e3b; color:#d1fae5; font-size:0.62rem; font-weight:800; padding:4px 10px; border-radius:20px;">✨ التَّعَرُّفُ الْبَاطِنُ</span>
              <div style="font-weight:800; color:#064e3b; font-size:0.9rem; margin-top:0.35rem;">Ta'arruf Batin — Warid Ilahi</div>
              <div style="font-size:0.7rem; color:#065f46;">🌊 Samudera dari Al-Ghaniy</div>
            </div>
            <div style="display:flex; flex-direction:column; gap:0.45rem; font-size:0.78rem; color:#064e3b;">
              <div style="background:#fff; border:1px solid #a7f3d0; border-radius:8px; padding:0.55rem 0.7rem;"><strong>هُوَ مَوْرِدُهُ عَلَيْكَ</strong> — Karunia yang Dia datangkan</div>
              <div style="background:#fff; border:1px solid #a7f3d0; border-radius:8px; padding:0.55rem 0.7rem;"><strong>مِنْ غَيْرِ اكْتِسَابٍ</strong> — Tanpa kasab & tanpa amalmu</div>
              <div style="background:#fff; border:1px solid #a7f3d0; border-radius:8px; padding:0.55rem 0.7rem;"><strong>مَسْلَكُ الْخَاصَّةِ</strong> — Jalan Muqarrabin</div>
              <div style="background:#fff; border:1px solid #a7f3d0; border-radius:8px; padding:0.55rem 0.7rem;"><strong>يُؤَدِّي إِلَى التَّوْحِيْدِ</strong> — Menuju hakikat tauhid & yaqin</div>
              <div style="background:#064e3b; color:#d1fae5; border-radius:8px; padding:0.55rem 0.7rem; text-align:center; font-weight:700;">النِّعَمُ الْجَزِيْلَةُ — Nikmat agung tanpa cacat</div>
            </div>
          </div>
        </div>
        <div style="background:#fef3c7; border-top:1px solid #fde68a; padding:0.7rem 1rem; text-align:center; font-size:0.78rem; color:#78350f; font-weight:700;">
          وَأَيْنَ مَا تُهْدِيهِ إِلَيْهِ مِمَّا هُوَ مُوْرِدُهُ عَلَيْكَ — Sangat jauh tak sebanding!
        </div>
      </div>

      <!-- ================= MITSAL BALA' ================= -->
      <div style="background:#fff; border:1px solid #e7e5e4; border-radius:16px; padding:1.25rem; margin-bottom:1.5rem; box-shadow:0 8px 20px rgba(15,23,42,0.05);">
        <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:1rem;">
          <span style="width:32px; height:32px; border-radius:8px; background:#f59e0b; color:#fff; display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.75rem;">05</span>
          <div>
            <div style="font-size:0.62rem; letter-spacing:0.1em; color:#92400e; font-weight:700;">MITSAL • CONTOH NYATA</div>
            <div style="font-weight:800; color:#0f172a; font-size:0.95rem;">Ujian Sebagai Pintu Ta'arruf</div>
          </div>
        </div>
        <div style="background:#fefce8; border:1px solid #fde68a; border-radius:10px; padding:0.85rem 1rem; margin-bottom:1rem;">
          <p style="font-family:'Amiri',serif; font-size:1.05rem; line-height:1.85; direction:rtl; text-align:right; color:#78350f; margin:0; font-weight:600;">مِثَالُهُ: مَا يُصَابُ بِهِ الْإِنْسَانُ مِنَ الْبَلَايَا وَالشَّدَائِدِ الَّتِيْ تُنَغِّصُ عَلَيْهِ لَذَّاتِ الدُّنْيَا، وَتَمْنَعُهُ مِنْ تَكْثِيْرِ أَعْمَالِ الْبِرِّ</p>
          <p style="font-size:0.82rem; line-height:1.6; color:#57534e; margin:0.5rem 0 0;">Contohnya: cobaan & kesulitan yang <strong>تُنَغِّصُ</strong> — mengkeruhkan kelezatan dunia dan mencegahnya memperbanyak amal zhahir. Inilah pintu.</p>
        </div>
        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:0.85rem;">
          <div style="background:#fef2f2; border:1px solid #fecaca; border-radius:12px; padding:1rem;">
            <div style="font-size:0.65rem; letter-spacing:0.08em; color:#991b1b; font-weight:700; text-align:center; margin-bottom:0.6rem;">👤 مُرَادُ الْإِنْسَانِ</div>
            <p style="font-family:'Amiri',serif; font-size:0.95rem; direction:rtl; text-align:right; color:#7f1d1d; margin:0; line-height:1.7;">أَنْ يَسْتَمِرَّ بَقَاؤُهُ فِيْ دُنْيَاهُ طَيِّبَ الْعَيْشِ نَاعِمَ الْبَالِ</p>
            <p style="font-size:0.78rem; line-height:1.6; color:#57534e; margin:0.5rem 0 0;">Ingin hidup enak, pikiran tenang. Dalam ibadah pun maunya seperti <em>mutrafin mutawarri'in</em> — kaya yang wara' tapi santai. Jiwanya hanya mau amal ringan: <strong>لَا كَبِيْرَ مَؤُوْنَةٍ</strong> — tanpa beban, tanpa masyakkat, tidak memutus lezat & syahwat.</p>
          </div>
          <div style="background:#ecfdf5; border:1px solid #a7f3d0; border-radius:12px; padding:1rem;">
            <div style="font-size:0.65rem; letter-spacing:0.08em; color:#065f46; font-weight:700; text-align:center; margin-bottom:0.6rem;">☝️ مُرَادُ اللهِ مِنْهُ</div>
            <div style="display:flex; flex-direction:column; gap:0.4rem; font-size:0.78rem; color:#064e3b;">
              <div style="background:#fff; border:1px solid #a7f3d0; border-radius:8px; padding:0.5rem 0.65rem;">✦ <strong>أَنْ يُطَهِّرَهُ مِنْ أَخْلَاقِهِ اللَّئِيْمَةِ</strong> — Bersihkan akhlak tercela</div>
              <div style="background:#fff; border:1px solid #a7f3d0; border-radius:8px; padding:0.5rem 0.65rem;">✦ <strong>وَيَحُوْلَ بَيْنَهُ وَبَيْنَ صِفَاتِهِ الذَّمِيْمَةِ</strong> — Halangi sifat dzamimah</div>
              <div style="background:#064e3b; color:#d1fae5; border-radius:8px; padding:0.5rem 0.65rem; text-align:center; font-weight:700;">✦ وَيُخْرِجَهُ مِنْ أَسْرِ وُجُوْدِهِ إِلَى مُتَّسَعِ شُهُوْدِهِ</div>
              <div style="font-size:0.75rem; color:#065f46; text-align:center;">Keluarkan dari penjara wujud → keluasan syuhud</div>
            </div>
          </div>
        </div>
        <div style="margin-top:1rem; background:#0f172a; border-radius:10px; padding:0.85rem 1rem; color:#94a3b8; font-size:0.78rem; line-height:1.6;">
          <p style="font-family:'Amiri',serif; font-size:0.95rem; direction:rtl; text-align:center; color:#fde68a; margin:0 0 0.4rem; line-height:1.8;">وَلَا سَبِيْلَ لَهُ إِلَى الْوُصُوْلِ إِلَّا بِمَا يُضَادُّ مُرَادَهُ وَيُشَوِّشُ عَلَيْهِ مُعْتَادَهُ</p>
          <p style="margin:0; text-align:center;">Tidak ada jalan sampai maqom sempurna kecuali dengan <strong style="color:#fde68a;">yang berlawanan dengan keinginannya</strong> dan mengacaukan kebiasaannya. Saat itu <strong style="color:#fff;">الْمُعَامَلَةُ بِالْبَاطِنِ</strong> — mu'amalah batin yang tak sebanding dengan amal zhahir.</p>
        </div>
        <div style="margin-top:0.85rem; display:flex; align-items:center; justify-content:center; gap:0.4rem; flex-wrap:wrap; font-size:0.7rem; font-weight:700;">
          <span style="background:#fecaca; color:#7f1d1d; padding:4px 10px; border-radius:20px; border:1px solid #fca5a5;">أَسْرُ الْوُجُوْدِ</span>
          <span style="color:#c59b27;">→</span>
          <span style="background:#fde68a; color:#78350f; padding:4px 10px; border-radius:20px; border:1px solid #f59e0b;">الْبَلَاءُ</span>
          <span style="color:#c59b27;">→</span>
          <span style="background:#d1fae5; color:#065f46; padding:4px 10px; border-radius:20px; border:1px solid #a7f3d0;">تَطْهِيْرٌ</span>
          <span style="color:#c59b27;">→</span>
          <span style="background:#064e3b; color:#d1fae5; padding:4px 10px; border-radius:20px;">مُتَّسَعُ الشُّهُوْدِ</span>
        </div>
      </div>

      <!-- ================= KESIMPULAN 06 ================= -->
      <div style="background:linear-gradient(135deg,#fefce8,#fef3c7); border:1px solid #fde68a; border-radius:16px; padding:1.25rem; margin-bottom:1.5rem;">
        <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:0.75rem;">
          <span style="width:32px; height:32px; border-radius:8px; background:#0f172a; color:#fde68a; display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.7rem;">06</span>
          <div>
            <div style="font-size:0.62rem; letter-spacing:0.1em; color:#92400e; font-weight:700;">KESIMPULAN • KHULASHOH</div>
            <div style="font-weight:800; color:#78350f; font-size:0.95rem;">اخْتِيَارُ اللهِ خَيْرٌ مِنْ اخْتِيَارِ الْعَبْدِ</div>
          </div>
        </div>
        <div style="background:#fff; border:1px solid #fde68a; border-radius:10px; padding:0.9rem 1rem;">
          <p style="font-family:'Amiri',serif; font-size:1rem; line-height:1.8; direction:rtl; text-align:right; color:#78350f; margin:0; font-weight:600;">فَإِذَا فَهِمَ هَذَا عَلِمَ أَنَّ اخْتِيَارَ اللهِ لَهُ خَيْرٌ لَهُ مِنْ اخْتِيَارِهِ لِنَفْسِهِ</p>
          <p style="font-size:0.82rem; line-height:1.6; color:#57534e; margin:0.5rem 0 0;">Jika paham ini, ia tahu: <strong>pilihan Allah untuknya lebih baik</strong> daripada pilihannya sendiri. Allah pilih bala' agar bersih, pilih sedikit amal agar fokus batin, pilih yang berlawanan nafsu agar sampai maqom sempurna — ini <strong>mu'amalah batin</strong>, bukan hitungan amal.</p>
          <div style="margin-top:0.65rem; background:#064e3b; color:#d1fae5; border-radius:8px; padding:0.6rem 0.75rem; font-size:0.78rem; text-align:center; font-weight:600;">Jangan ukur kedekatan dengan banyaknya amal — ukur dengan apakah Allah membukakan pintu ma'rifat. Jika ya, syukuri, sabar, ridho.</div>
        </div>
      </div>

      <!-- ================= DALIL 07 ================= -->
      <div style="background:#0f172a; border:1px solid #1e3a5f; border-radius:16px; padding:1.25rem; margin-bottom:2rem; color:#f8fafc;">
        <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:1rem;">
          <span style="width:32px; height:32px; border-radius:8px; background:#c59b27; color:#0f172a; display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.7rem;">07</span>
          <div>
            <div style="font-size:0.62rem; letter-spacing:0.1em; color:#c59b27; font-weight:700;">DALIL PENGUAT • NASH WAHYU & HADITS</div>
            <div style="font-weight:700; color:#fff; font-size:0.95rem;">Bala' Adalah Rahmat & Ta'arruf</div>
          </div>
        </div>
        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:0.85rem;">
          <div style="background:#13223f; border:1px solid #1e3a5f; border-radius:12px; padding:1rem;">
            <div style="font-size:0.62rem; letter-spacing:0.08em; color:#fde68a; font-weight:700; text-align:center; margin-bottom:0.6rem;">WAHYU ILAHI — ISRĀILIYYĀT MAU'IZHAH</div>
            <p style="font-family:'Amiri',serif; font-size:1.05rem; line-height:1.85; direction:rtl; text-align:right; color:#fefce8; margin:0; font-weight:600;">أَنْزَلْتُ بِعَبْدِي بَلَائِي فَدَعَانِي، فَمَا أَطَلْتُهُ بِالْإِجَابَةِ فَشَكَانِي، فَقُلْتُ: عَبْدِي كَيْفَ أَرْحَمُكَ مِنْ شَيْءٍ بِهِ أَرْحَمُكَ</p>
            <div style="height:1px; background:#1e3a5f; margin:0.7rem 0;"></div>
            <p style="font-size:0.8rem; line-height:1.6; color:#cbd5e1; margin:0;">“Aku turunkan bala' kepada hamba-Ku, ia berdoa, Aku perlambat ijabah, ia mengeluhkan-Ku. Aku berfirman: <strong style=\"color:#fde68a;\">Wahai hamba-Ku, bagaimana Aku merahmatimu dengan menghilangkan sesuatu yang dengannya justru Aku merahmatimu?</strong>”</p>
            <div style="margin-top:0.6rem; display:flex; gap:0.35rem; flex-wrap:wrap; font-size:0.68rem;">
              <span style="background:rgba(197,155,39,0.15); border:1px solid rgba(197,155,39,0.25); color:#fde68a; padding:3px 7px; border-radius:20px;">أَنْزَلْتُ بَلَائِي — sengaja</span>
              <span style="background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); color:#cbd5e1; padding:3px 7px; border-radius:20px;">بِهِ أَرْحَمُكَ — dengannya rahmat</span>
            </div>
          </div>
          <div style="background:#064e3b; border:1px solid #065f46; border-radius:12px; padding:1rem;">
            <div style="font-size:0.62rem; letter-spacing:0.08em; color:#6ee7b7; font-weight:700; text-align:center; margin-bottom:0.6rem;">ﷺ HADITS QUDSI • ABU HURAIRAH — HASAN</div>
            <p style="font-family:'Amiri',serif; font-size:1rem; line-height:1.85; direction:rtl; text-align:right; color:#d1fae5; margin:0; font-weight:600;">إِذَا ابْتَلَيْتُ عَبْدِي الْمُؤْمِنَ فَلَمْ يَشْكُنِي إِلَى عُوَّادِهِ أَنْشَطْتُهُ مِنْ عِقَالِي، وَأَبْدَلْتُهُ لَحْمًا خَيْرًا مِنْ لَحْمِهِ وَدَمًا خَيْرًا مِنْ دَمِهِ، وَيَسْتَأْنِفُ الْعَمَلَ</p>
            <div style="height:1px; background:rgba(255,255,255,0.1); margin:0.7rem 0;"></div>
            <p style="font-size:0.8rem; line-height:1.6; color:#a7f3d0; margin:0;">“Jika Aku uji hamba mukmin lalu ia <strong style=\"color:#fff;\">tidak mengeluhkan-Ku kepada penjenguknya</strong>, Aku lepaskan dari belenggu-Ku, ganti daging & darah yang lebih baik, dan ia memulai amal dari nol — <em>seperti baru dilahirkan</em>.”</p>
            <div style="margin-top:0.65rem; display:grid; grid-template-columns:1fr 1fr 1fr; gap:0.4rem; font-size:0.68rem; text-align:center;">
              <div style="background:rgba(0,0,0,0.2); border-radius:8px; padding:0.4rem;"><div style="color:#6ee7b7; font-weight:700;">فَلَمْ يَشْكُنِي</div><div style="color:#d1fae5;">Syarat sabar</div></div>
              <div style="background:rgba(0,0,0,0.2); border-radius:8px; padding:0.4rem;"><div style="color:#6ee7b7; font-weight:700;">أَنْشَطْتُهُ</div><div style="color:#d1fae5;">Lepas ikatan</div></div>
              <div style="background:rgba(0,0,0,0.2); border-radius:8px; padding:0.4rem;"><div style="color:#6ee7b7; font-weight:700;">يَسْتَأْنِفُ</div><div style="color:#d1fae5;">Amal baru</div></div>
            </div>
          </div>
        </div>
        <div style="margin-top:0.85rem; background:rgba(197,155,39,0.1); border:1px solid rgba(197,155,39,0.18); border-radius:8px; padding:0.6rem 0.85rem; font-size:0.75rem; color:#fde68a; text-align:center;">✓ Korelasi Hikmah 08: Inilah <strong>wijhah min at-ta'arruf</strong> — sedikit amal zhahir saat sakit tidak masalah, Allah sendiri yang ganti daging, darah & lembaran amal.</div>
      </div>

      <!-- ========== BAGIAN 2 HEADER ========== -->
      <div style="background:#fef3c7; border:1px solid #fde68a; border-radius:12px; padding:0.85rem 1rem; text-align:center; font-weight:800; letter-spacing:0.06em; font-size:0.78rem; color:#78350f; margin-bottom:1.25rem;">— BAGIAN KEDUA: HADITS QUDSI, QOUL AL-HAKIM & KISAH PARA WALI —</div>

      <!-- ================= HADITS QUDSI 2 ================= -->
      <div style="background:#fff; border:1px solid #e7e5e4; border-radius:16px; padding:1.25rem; margin-bottom:1.5rem; box-shadow:0 8px 20px rgba(15,23,42,0.05);">
        <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:1rem;">
          <span style="width:32px; height:32px; border-radius:8px; background:#0f172a; color:#fde68a; display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.7rem;">01</span>
          <div>
            <div style="font-size:0.62rem; letter-spacing:0.1em; color:#64748b; font-weight:700;">HADITS QUDSI • LENGKAP 2 RIWAYAT</div>
            <div style="font-weight:800; color:#0f172a; font-size:0.95rem;">Abu Hurairah & Sa'id Al-Maqburi</div>
          </div>
          <span style="margin-left:auto; background:#ecfdf5; border:1px solid #a7f3d0; color:#065f46; font-size:0.65rem; font-weight:700; padding:4px 8px; border-radius:20px;">HASAN</span>
        </div>
        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:0.85rem;">
          <div>
            <div style="font-size:0.65rem; font-weight:700; color:#92400e; letter-spacing:0.06em; margin-bottom:0.4rem;">RIWAYAT 1 — ABU HURAIRAH</div>
            <div style="background:#0f172a; border:1px solid #1e3a5f; border-radius:10px; padding:0.85rem;">
              <p style="font-family:'Amiri',serif; font-size:1rem; line-height:1.85; direction:rtl; text-align:right; color:#fefce8; margin:0;">قَالَ اللهُ تَبَارَكَ وَتَعَالَى: إِذَا ابْتَلَيْتُ عَبْدِي الْمُؤْمِنَ فَلَمْ يَشْكُنِي إِلَى عُوَّادِهِ أَنْشَطْتُهُ مِنْ عِقَالِي، وَأَبْدَلْتُهُ لَحْمًا خَيْرًا مِنْ لَحْمِهِ وَدَمًا خَيْرًا مِنْ دَمِهِ، وَيَسْتَأْنِفُ الْعَمَلَ</p>
            </div>
            <div style="margin-top:0.5rem; display:flex; flex-direction:column; gap:0.35rem; font-size:0.75rem; color:#57534e;">
              <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:0.5rem 0.65rem;"><strong>عِقَالِي</strong> — 'Uqal = tali pengikat unta → belenggu dosa/sakit</div>
              <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:0.5rem 0.65rem;"><strong>لَحْمًا خَيْرًا...</strong> — Tajdid khalqi: tubuh dibersihkan, dosa gugur</div>
            </div>
          </div>
          <div>
            <div style="font-size:0.65rem; font-weight:700; color:#065f46; letter-spacing:0.06em; margin-bottom:0.4rem;">RIWAYAT 2 — SA'ID AL-MAQBURI: سَمِعْتُ أَبَا هُرَيْرَةَ</div>
            <div style="background:#064e3b; border:1px solid #065f46; border-radius:10px; padding:0.85rem;">
              <p style="font-family:'Amiri',serif; font-size:1rem; line-height:1.85; direction:rtl; text-align:right; color:#d1fae5; margin:0;">إِنِّي أَبْتَلِي عَبْدِي الْمُؤْمِنَ، فَإِذَا لَمْ يَشْكُنِي إِلَى عُوَّادِهِ حَلَلْتُ عَنْهُ عُقَدِي، وَبَدَّلْتُهُ لَحْمًا خَيْرًا مِنْ لَحْمِهِ وَدَمًا خَيْرًا مِنْ دَمِهِ، ثُمَّ قُلْتُ لَهُ: اسْتَأْنِفِ الْعَمَلَ</p>
            </div>
            <div style="margin-top:0.5rem; background:#fefce8; border:1px solid #fde68a; border-radius:8px; padding:0.5rem 0.65rem; font-size:0.75rem; color:#78350f;">
              <strong>حَلَلْتُ عَنْهُ عُقَدِي</strong> — Aku uraikan buhul-buhul sakitnya &bull; <strong>اسْتَأْنِفِ الْعَمَلَ</strong> — “Mulailah kembali beramal!” Perintah langsung dari Allah.
            </div>
          </div>
        </div>
        <div style="margin-top:0.85rem; background:#fefce8; border:1px solid #fde68a; border-radius:8px; padding:0.6rem 0.85rem; font-size:0.72rem; color:#92400e; text-align:center;">Footnote: Hadits (1)(2) riwayat Abu Hurairah • (3) riwayat Maqburi — makna sama: sabar tanpa syakwa kepada makhluk = kunci tajdid.</div>
      </div>

      <!-- ================= QOUL AL-HAKIM AT-TIRMIDZI ================= -->
      <div style="background:#0f172a; border:1px solid #1e3a5f; border-radius:16px; padding:1.25rem; margin-bottom:1.5rem; color:#f8fafc;">
        <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:0.85rem;">
          <span style="width:32px; height:32px; border-radius:8px; background:#c59b27; color:#0f172a; display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.7rem;">02</span>
          <div>
            <div style="font-size:0.62rem; letter-spacing:0.1em; color:#c59b27; font-weight:700;">QOUL AL-HAKIM • ABU ABDILLAH MUHAMMAD AT-TIRMIDZI</div>
            <div style="font-weight:700; color:#fff; font-size:0.95rem;">Memilih Tadbir Allah di Atas Ibadah Tsaqalain</div>
          </div>
          <span style="margin-left:auto; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); color:#94a3b8; font-size:0.62rem; padding:4px 8px; border-radius:20px;">Footnote 4</span>
        </div>
        <p style="font-size:0.75rem; color:#94a3b8; margin:0 0 0.85rem;">Al-Hakim At-Tirmidzi — bukan Imam Tirmidzi penulis Sunan. Kisah sakitnya sebagai laboratorium tadbir Ilahi.</p>

        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:0.75rem;">
          <div style="background:#13223f; border:1px solid #1e3a5f; border-radius:10px; padding:0.85rem;">
            <div style="font-size:0.62rem; color:#fde68a; font-weight:700; letter-spacing:0.06em;">01 • Sakit di Sālif Ayyāmi</div>
            <p style="font-family:'Amiri',serif; font-size:0.95rem; direction:rtl; text-align:right; color:#fefce8; margin:0.35rem 0; line-height:1.7;">وَلَقَدْ مَرِضْتُ فِي سَالِفِ أَيَّامِي مَرْضَةً، فَلَمَّا شَفَانِيَ اللهُ تَعَالَى مِنْهَا</p>
            <p style="font-size:0.78rem; line-height:1.6; color:#94a3b8; margin:0;">“Aku pernah sakit di masa lampau, ketika Allah menyembuhkanku...”</p>
          </div>
          <div style="background:#13223f; border:1px solid #1e3a5f; border-radius:10px; padding:0.85rem;">
            <div style="font-size:0.62rem; color:#fde68a; font-weight:700; letter-spacing:0.06em;">02 • Mumatsalah — Bandingkan</div>
            <p style="font-family:'Amiri',serif; font-size:0.92rem; direction:rtl; text-align:right; color:#fefce8; margin:0.35rem 0; line-height:1.7;">مَثَّلْتُ فِي نَفْسِي مَا دَبَّرَ اللهُ مِنْ هَذِهِ الْعِلَّةِ وَبَيْنَ عِبَادَةِ الثَّقَلَيْنِ</p>
            <p style="font-size:0.78rem; line-height:1.6; color:#94a3b8; margin:0;">Aku bandingkan: apa yang Allah atur dari penyakit ini vs ibadah <strong style="color:#fde68a;">Tsaqalain</strong> (jin & manusia) selama hari-hari sakit itu.</p>
          </div>
          <div style="background:#13223f; border:1px solid #1e3a5f; border-radius:10px; padding:0.85rem;">
            <div style="font-size:0.62rem; color:#fde68a; font-weight:700; letter-spacing:0.06em;">03 • Pertanyaan Pilihan</div>
            <p style="font-family:'Amiri',serif; font-size:0.9rem; direction:rtl; text-align:right; color:#fefce8; margin:0.35rem 0; line-height:1.7;">لَوْ خُيِّرْتُ بَيْنَ هَذِهِ الْعِلَّةِ وَعِبَادَةِ الثَّقَلَيْنِ إِلَى أَيِّهِمَا يَمِيلُ اخْتِيَارِي؟</p>
            <p style="font-size:0.78rem; line-height:1.6; color:#94a3b8; margin:0;">Jika diberi pilihan antara penyakit ini dan ibadah Tsaqalain — kemana condong pilihanku? <em>Maqam mukhayyar.</em></p>
          </div>
          <div style="background:#1a3a2a; border:1px solid #2d5a3a; border-radius:10px; padding:0.85rem;">
            <div style="font-size:0.62rem; color:#6ee7b7; font-weight:700; letter-spacing:0.06em;">04 • Tashīh 'Azam — Pilihan Allah Lebih Mulia</div>
            <p style="font-family:'Amiri',serif; font-size:0.92rem; direction:rtl; text-align:right; color:#d1fae5; margin:0.35rem 0; line-height:1.7;">فَصَحَّ عَزْمِي أَنَّ مُخْتَارَ اللهِ أَكْثَرُ شَرَفًا وَأَعْظَمُ خَطَرًا وَأَنْفَعُ عَاقِبَةً</p>
            <p style="font-size:0.78rem; line-height:1.6; color:#a7f3d0; margin:0;">Tekadku benar: pilihan Allah <strong style="color:#fff;">asyraf (mulia), a'zham khataran (agung), anfa' 'āqibatan (bermanfaat)</strong> — <em>lā syauba fīhi</em> murni tanpa syirik khafi karena ia fi'lullah.</p>
          </div>
          <div style="background:#451a03; border:1px solid #78350f; border-radius:10px; padding:0.85rem;">
            <div style="font-size:0.62rem; color:#fde68a; font-weight:700; letter-spacing:0.06em;">05 • Kalimat Kunci — Fi'lullah vs Fi'luka</div>
            <p style="font-family:'Amiri',serif; font-size:1rem; direction:rtl; text-align:center; color:#fef3c7; margin:0.4rem 0; font-weight:bold; line-height:1.7;">فَشَتَّانَ بَيْنَ فِعْلِهِ بِكَ لِتَنْجُوَ بِهِ وَبَيْنَ فِعْلِكَ لِتَنْجُوَ بِهِ</p>
            <p style="font-size:0.78rem; line-height:1.6; color:#fde68a; margin:0; text-align:center;">Sangat jauh antara <strong>perbuatan-Nya terhadapmu agar engkau selamat</strong> vs perbuatanmu sendiri agar selamat!</p>
          </div>
          <div style="background:#13223f; border:1px solid #1e3a5f; border-radius:10px; padding:0.85rem;">
            <div style="font-size:0.62rem; color:#fde68a; font-weight:700; letter-spacing:0.06em;">06 • Transformasi: 'Illah → Ni'mah → Minnah → Amal → 'Athf</div>
            <p style="font-family:'Amiri',serif; font-size:0.9rem; direction:rtl; text-align:right; color:#fefce8; margin:0.35rem 0; line-height:1.7;">فَصَارَتِ الْعِلَّةُ نِعْمَةً، وَالنِّعْمَةُ مِنَّةً، وَالْمِنَّةُ أَمَلًا، وَالْأَمَلُ عَطْفًا</p>
            <div style="display:flex; gap:0.3rem; flex-wrap:wrap; font-size:0.65rem; margin-top:0.4rem; justify-content:center;">
              <span style="background:#fef3c7; color:#78350f; padding:3px 7px; border-radius:20px; font-weight:700;">علة→نعمة</span>
              <span style="background:#fde68a; color:#78350f; padding:3px 7px; border-radius:20px; font-weight:700;">نعمة→منة</span>
              <span style="background:#f59e0b; color:#fff; padding:3px 7px; border-radius:20px; font-weight:700;">منة→أمل</span>
              <span style="background:#064e3b; color:#d1fae5; padding:3px 7px; border-radius:20px; font-weight:700;">أمل→عطف</span>
            </div>
          </div>
        </div>
        <div style="margin-top:0.85rem; background:rgba(197,155,39,0.1); border:1px solid rgba(197,155,39,0.18); border-radius:10px; padding:0.75rem 1rem;">
          <div style="font-size:0.62rem; color:#fde68a; font-weight:700; letter-spacing:0.06em; text-align:center;">07 • NATIJAH — GEMBIRA DALAM BALA'</div>
          <p style="font-family:'Amiri',serif; font-size:0.95rem; direction:rtl; text-align:center; color:#fefce8; margin:0.4rem 0; line-height:1.7;">بِهَذَا كَانُوا يَفْرَحُونَ بِالْبَلَاءِ</p>
          <p style="font-size:0.78rem; line-height:1.6; color:#cbd5e1; margin:0; text-align:center;">“Dengan inilah mereka (para arifin) terus dalam bala' dengan jiwa baik bersama Al-Haq — <strong style="color:#fde68a;">mereka bergembira dengan bala'!</strong>” Ibadah Tsaqalain menjadi kecil dibanding apa yang Allah datangkan.</p>
        </div>
      </div>

      <!-- ================= WIJHATUT TA'ARRUF + NASIHAT ================= -->
      <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:0.85rem; margin-bottom:1.5rem;">
        <div style="background:linear-gradient(135deg,#fefce8,#fef3c7); border:1px solid #fde68a; border-radius:16px; padding:1.15rem;">
          <div style="font-size:0.62rem; letter-spacing:0.1em; color:#92400e; font-weight:700; text-align:center;">FAEDAH • WIJHATUT TA'ARRUF</div>
          <p style="font-family:'Amiri',serif; font-size:1.05rem; line-height:1.85; direction:rtl; text-align:center; color:#78350f; margin:0.6rem 0; font-weight:bold;">فَهَذِهِ هِيَ وَجْهَةُ التَّعَرُّفِ الَّتِي فَتَحَهَا اللهُ لَهُ</p>
          <p style="font-size:0.82rem; line-height:1.6; color:#57534e; margin:0; text-align:center;">Inilah wijhah ta'arruf yang Allah bukakan — ia mendapat <strong>ghibthah</strong> (kebahagiaan mendalam) dan <strong>lebih memilihnya daripada ibadah Tsaqalain</strong>. Wallahu A'lam.</p>
          <div style="margin-top:0.7rem; background:#0f172a; color:#fde68a; border-radius:8px; padding:0.55rem; text-align:center; font-size:0.75rem; font-weight:700;">حَصَلَتْ لَهُ الْغِبْطَةُ بِهَا — Kebahagiaan mendalam</div>
        </div>
        <div style="background:#0f172a; border:1px solid #1e3a5f; border-radius:16px; padding:1.15rem; color:#f8fafc;">
          <div style="font-size:0.62rem; letter-spacing:0.1em; color:#c59b27; font-weight:700; text-align:center;">NASIHAT PRAKTIS KETIKA BALA' TURUN</div>
          <div style="display:flex; flex-direction:column; gap:0.5rem; margin-top:0.75rem;">
            <div style="background:#13223f; border:1px solid #1e3a5f; border-radius:8px; padding:0.6rem 0.75rem; display:flex; gap:0.6rem; align-items:center;">
              <span style="width:26px; height:26px; border-radius:8px; background:#c59b27; color:#0f172a; display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.7rem; flex-shrink:0;">1</span>
              <div><div style="font-weight:700; font-size:0.82rem; color:#fff;">Istihdhār — فَلْيَسْتَحْضِرْ مَا ذَكَرْنَاهُ</div><div style="font-size:0.75rem; color:#94a3b8;">Hadirkan di hati apa yang kami sebutkan</div></div>
            </div>
            <div style="background:#13223f; border:1px solid #1e3a5f; border-radius:8px; padding:0.6rem 0.75rem; display:flex; gap:0.6rem; align-items:center;">
              <span style="width:26px; height:26px; border-radius:8px; background:#c59b27; color:#0f172a; display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.7rem; flex-shrink:0;">2</span>
              <div><div style="font-weight:700; font-size:0.82rem; color:#fff;">Nashbu 'Ainihi — وَلْيَجْعَلْهُ نُصْبَ عَيْنَيْهِ</div><div style="font-size:0.75rem; color:#94a3b8;">Jadikan di depan pelupuk mata, jangan dilupakan</div></div>
            </div>
            <div style="background:#13223f; border:1px solid #1e3a5f; border-radius:8px; padding:0.6rem 0.75rem; display:flex; gap:0.6rem; align-items:center;">
              <span style="width:26px; height:26px; border-radius:8px; background:#c59b27; color:#0f172a; display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.7rem; flex-shrink:0;">3</span>
              <div><div style="font-weight:700; font-size:0.82rem; color:#fff;">Tajdīd Tadzkār — وَلْيُجَدِّدْ تَذْكَارَهُ</div><div style="font-size:0.75rem; color:#94a3b8;">Perbarui terus pengingat pada diri</div></div>
            </div>
            <div style="background:#064e3b; border:1px solid #065f46; border-radius:8px; padding:0.6rem 0.75rem; text-align:center;">
              <div style="font-weight:700; font-size:0.78rem; color:#d1fae5;">Natijah: Sukūn & Thuma'nīnah</div>
              <div style="font-size:0.72rem; color:#a7f3d0; margin-top:0.2rem;">حَتَّى يَحْصُلَ لَهُ السُّكُونُ وَالطُّمَأْنِينَةُ — membawa beban, hilang pahit, muncul manis</div>
            </div>
          </div>
        </div>
      </div>

      <!-- ================= MAQAM SYUKUR ================= -->
      <div style="background:linear-gradient(135deg,#ecfdf5,#d1fae5); border:1px solid #a7f3d0; border-radius:16px; padding:1.25rem; margin-bottom:1.5rem;">
        <div style="text-align:center; margin-bottom:0.85rem;">
          <span style="background:#064e3b; color:#d1fae5; font-size:0.62rem; font-weight:800; letter-spacing:0.08em; padding:4px 10px; border-radius:20px;">MAQAM SYUKUR DALAM BALA'</span>
          <p style="font-family:'Amiri',serif; font-size:1.05rem; line-height:1.85; direction:rtl; text-align:center; color:#064e3b; margin:0.6rem 0 0; font-weight:bold;">عِنْدَ ذَلِكَ يَكُونُ حَالُهُ فِي بَلَائِهِ حَالَ الشَّاكِرِينَ مِنَ الْفَرَحِ وَالْاِغْتِبَاطِ بِهِ</p>
        </div>
        <p style="font-size:0.82rem; line-height:1.6; color:#065f46; margin:0; text-align:center;">Keadaannya dalam bala' menjadi seperti orang bersyukur: <strong>gembira & ightibāth</strong>. Ia melihat hak syukurnya adalah melakukan semampunya amal birr.</p>
        <div style="margin-top:0.85rem; display:flex; align-items:center; justify-content:center; gap:0.3rem; flex-wrap:wrap; font-size:0.68rem; font-weight:700;">
          <span style="background:#fecaca; color:#7f1d1d; padding:4px 9px; border-radius:20px; border:1px solid #fca5a5;">الْبَلَاءُ</span>
          <span style="color:#065f46;">→</span>
          <span style="background:#fef3c7; color:#78350f; padding:4px 9px; border-radius:20px; border:1px solid #fde68a;">السُّكُونُ</span>
          <span style="color:#065f46;">→</span>
          <span style="background:#fed7aa; color:#7c2d12; padding:4px 9px; border-radius:20px; border:1px solid #fdba74;">يزيل المرارة</span>
          <span style="color:#065f46;">→</span>
          <span style="background:#d1fae5; color:#065f46; padding:4px 9px; border-radius:20px; border:1px solid #a7f3d0;">يوجد الحلاوة</span>
          <span style="color:#065f46;">→</span>
          <span style="background:#064e3b; color:#d1fae5; padding:4px 9px; border-radius:20px;">فَرَحٌ وَاغْتِبَاطٌ</span>
          <span style="color:#065f46;">→</span>
          <span style="background:#c59b27; color:#fff; padding:4px 9px; border-radius:20px;">أَعْمَالُ الْبِرِّ</span>
        </div>
      </div>

      <!-- ================= 3 KISAH WALI ================= -->
      <div style="margin-bottom:1.5rem;">
        <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:1rem;">
          <span style="width:4px; height:28px; border-radius:20px; background:#c59b27; display:inline-block;"></span>
          <div>
            <div style="font-size:0.62rem; letter-spacing:0.12em; color:#64748b; font-weight:700;">KITAB MIFTAHUS SA'ADAH • ABUL ABBAS IBNUL 'ARIF</div>
            <div style="font-weight:800; color:#0f172a; font-size:1rem;">Tiga Kisah Wali yang Meminta Bala'</div>
          </div>
        </div>
        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:0.85rem;">
          <!-- Kisah A -->
          <div style="background:#fff; border:1px solid #e7e5e4; border-radius:12px; padding:1rem; box-shadow:0 8px 20px rgba(15,23,42,0.05);">
            <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.6rem;">
              <span style="width:28px; height:28px; border-radius:8px; background:#0f172a; color:#fde68a; display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.65rem;">A</span>
              <span style="font-weight:800; font-size:0.85rem; color:#0f172a;">Abu al-Khiyār — Siqilliyah → Baghdad</span>
            </div>
            <p style="font-family:'Amiri',serif; font-size:0.85rem; line-height:1.7; direction:rtl; text-align:right; color:#44403c; margin:0;">كَانَ بِالْمَغْرِبِ رَجُلٌ يُدْعَى أَبَا الْخِيَارِ، أَصْلُهُ مِنْ صِقِلِّيَةَ، وَمَوْطِنُهُ بَغْدَادَ، وَجَاوَزَ سِنُّهُ التِّسْعِينَ وَهُوَ فِي الرِّقِّ لَمْ يُعْتِقْهُ مَوْلَاهُ</p>
            <div style="margin-top:0.6rem; display:flex; flex-direction:column; gap:0.35rem; font-size:0.75rem; color:#57534e;">
              <div style="display:flex; gap:0.4rem; flex-wrap:wrap;">
                <span style="background:#fef3c7; border:1px solid #fde68a; color:#78350f; padding:2px 7px; border-radius:20px; font-weight:600;">Umur &gt;90th masih riq — sengaja</span>
                <span style="background:#fecaca; border:1px solid #fca5a5; color:#7f1d1d; padding:2px 7px; border-radius:20px; font-weight:600;">Judzām di seluruh jasad</span>
              </div>
              <div style="background:#ecfdf5; border:1px solid #a7f3d0; border-radius:8px; padding:0.5rem 0.65rem; color:#065f46;"><strong>Karamah:</strong> Bau misik tercium jarak jauh — wangi ruhani mengalahkan busuk jasmani. Perawi: <em>رَأَيْتُهُ يُصَلِّي عَلَى الْمَاءِ</em> — sholat di atas air.</div>
            </div>
          </div>
          <!-- Kisah B -->
          <div style="background:#fff; border:1px solid #e7e5e4; border-radius:12px; padding:1rem; box-shadow:0 8px 20px rgba(15,23,42,0.05);">
            <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.6rem;">
              <span style="width:28px; height:28px; border-radius:8px; background:#c59b27; color:#0f172a; display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.65rem;">B</span>
              <span style="font-weight:800; font-size:0.85rem; color:#0f172a;">Muhammad al-Isfanji — al-Abras</span>
            </div>
            <p style="font-size:0.78rem; line-height:1.6; color:#57534e; margin:0; font-style:italic;">“Wahai tuanku, seakan Allah tidak menemukan tempat bala' pada musuh-Nya hingga menurunkannya pada kalian — padahal kalian khusus para wali-Nya?!”</p>
            <div style="margin-top:0.6rem; background:#0f172a; border:1px solid #1e3a5f; border-radius:10px; padding:0.75rem;">
              <p style="font-family:'Amiri',serif; font-size:0.95rem; line-height:1.75; direction:rtl; text-align:right; color:#fde68a; margin:0; font-weight:600;">اسْكُتْ! إِنَّهُ لَمَّا أَشْرَفْنَا عَلَى خَزَائِنِ الْعَطَاءِ لَمْ نَجِدْ شَيْئًا أَشْرَفَ وَلَا أَقْرَبَ إِلَيْهِ مِنَ الْبَلَاءِ، فَسَأَلْنَاهُ إِيَّاهُ</p>
              <p style="font-size:0.78rem; line-height:1.6; color:#94a3b8; margin:0.5rem 0 0; text-align:center;">“Diamlah! Ketika kami mengintip <strong style=\"color:#fde68a;\">khazāinul 'athā'</strong> — gudang pemberian Allah — tidak ada yang lebih mulia & lebih dekat kepada-Nya daripada bala', maka <strong style=\"color:#fff;\">kami sendiri yang memintanya!</strong>”</p>
            </div>
          </div>
          <!-- Kisah C -->
          <div style="background:#0f172a; border:1px solid #1e3a5f; border-radius:12px; padding:1rem; color:#f8fafc; grid-column:span 2;">
            <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.6rem;">
              <span style="width:28px; height:28px; border-radius:8px; background:#991b1b; color:#fecaca; display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.65rem;">C</span>
              <span style="font-weight:800; font-size:0.85rem; color:#fef3c7;">Sayyiduz Zuhhād — Ghar Ardhi Tharsus</span>
              <span style="margin-left:auto; background:rgba(239,68,68,0.15); border:1px solid rgba(239,68,68,0.25); color:#fecaca; font-size:0.62rem; padding:3px 7px; border-radius:20px;">Puncak Bala' & Puncak Syukur</span>
            </div>
            <p style="font-family:'Amiri',serif; font-size:0.92rem; line-height:1.8; direction:rtl; text-align:right; color:#fecaca; margin:0;">سَيِّدُ الزُّهَّادِ وَقُطْبُ الْعُبَّادِ وَإِمَامُ الْأَوْلِيَاءِ الْأَوْتَادِ، فِي غَارٍ فِي أَرْضِ طَرْسُوسَ لَحْمُهُ يَتَنَاثَرُ وَجِلْدُهُ يَسِيلُ قَيْحًا وَصَدِيدًا، وَقَدْ أَحَاطَ بِهِ الذُّبَابُ وَالنَّمْلُ</p>
            <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:0.6rem; margin-top:0.7rem;">
              <div style="background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:0.6rem;">
                <div style="font-size:0.65rem; color:#fca5a5; font-weight:700;">KEADAAN FISIK</div>
                <div style="font-size:0.75rem; color:#cbd5e1; line-height:1.6; margin-top:0.25rem;">Daging rontok, kulit mengalir nanah & darah, dikelilingi lalat & semut — di gua pegunungan Tharsus, uzlah total.</div>
              </div>
              <div style="background:rgba(197,155,39,0.08); border:1px solid rgba(197,155,39,0.18); border-radius:8px; padding:0.6rem;">
                <div style="font-size:0.65rem; color:#fde68a; font-weight:700;">AMALAN MALAM — SYUKUR MELAMPAUI BATAS</div>
                <div style="font-size:0.75rem; color:#fde68a; line-height:1.6; margin-top:0.25rem;">Tak cukup dzikir & syukur — ia <strong style="color:#fff;">ikat diri dengan besi (يَشُدُّ نَفْسَهُ بِالْحَدِيدِ)</strong> dan menghadap kiblat semalam suntuk hingga fajar! ⛓️🕋</div>
              </div>
            </div>
          </div>
        </div>
        <div style="margin-top:0.75rem; background:#fefce8; border:1px solid #fde68a; border-radius:8px; padding:0.6rem 0.85rem; font-size:0.72rem; color:#92400e; text-align:center;">
          Footnotes: (1) Ibn al-'Arif • (2) Siqilliyah = Sisilia • (3) Riq = perbudakan • (4) Tharsus = Tarsus • (5) Qaih & Shadid = nanah & darah kental
        </div>
      </div>

      <!-- ================= KHATIMAH ================= -->
      <div style="background:#0f172a; border:1px solid rgba(197,155,39,0.18); border-radius:16px; padding:1.4rem; color:#fff; margin-bottom:1.25rem;">
        <div style="display:flex; gap:1rem; align-items:flex-start;">
          <span style="width:48px; height:48px; border-radius:12px; background:linear-gradient(135deg,#c59b27,#b8941f); display:flex; align-items:center; justify-content:center; font-family:'Amiri',serif; font-size:1.05rem; font-weight:800; color:#0f172a; flex-shrink:0;">خلاصة</span>
          <div style="flex:1;">
            <div style="font-size:0.62rem; letter-spacing:0.12em; color:#c59b27; font-weight:700;">RINGKASAN AKHIR HIKMAH 08 • KHATIMAH</div>
            <div style="font-weight:800; font-size:1.02rem; margin-top:0.2rem; line-height:1.3;">Bala' Adalah Wijhah Ta'arruf — Pilihan Allah Paling Mulia</div>
          </div>
        </div>
        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:1rem; margin-top:1.15rem;">
          <div>
            <div style="background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); border-radius:12px; padding:0.85rem;">
              <p style="font-size:0.82rem; line-height:1.7; color:#cbd5e1; margin:0;"><strong style="color:#fff;">Bala' bukan hukuman — ia wijhah.</strong> Jika Allah bukakan pintu ta'arruf lewat bala', jangan hitung sedikitnya amal zhahir. Allah sedang memindahkanmu ke <strong style="color:#fde68a;">maslakul khawwash</strong> — hakikat tauhid tanpa kasab, warid langsung ke qalb.</p>
            </div>
            <div style="margin-top:0.75rem; background:linear-gradient(135deg,#fef3c7,#fde68a); border:1px solid rgba(197,155,39,0.25); border-radius:12px; padding:0.85rem;">
              <div style="font-size:0.62rem; font-weight:800; letter-spacing:0.06em; color:#92400e;">RUMUS EMAS IBNU 'ABBAD</div>
              <p style="font-size:0.82rem; line-height:1.6; color:#451a03; margin:0.4rem 0 0;"><strong>Fi'lullah bik khairun min fi'lika linafsik.</strong> Perbuatan Allah terhadapmu untuk menyelamatkanmu — jauh lebih mulia daripada perbuatanmu sendiri.</p>
              <div style="margin-top:0.55rem; background:#0f172a; color:#fde68a; font-family:'Amiri',serif; font-size:0.82rem; font-weight:800; text-align:center; padding:6px 10px; border-radius:8px;" dir="rtl">فِعْلُهُ بِكَ خَيْرٌ مِنْ فِعْلِكَ لِنَفْسِكَ</div>
            </div>
          </div>
          <div style="display:flex; flex-direction:column; gap:0.7rem;">
            <div style="background:rgba(30,41,59,0.5); border:1px solid #334155; border-radius:12px; padding:0.85rem;">
              <div style="font-size:0.62rem; font-weight:700; color:#94a3b8; letter-spacing:0.06em;">UNTUK HATI YANG SEDANG DIUJI</div>
              <p style="font-size:0.78rem; line-height:1.6; color:#cbd5e1; margin:0.4rem 0 0;">Jika hari ini engkau sakit, sempit, gagal — dan amal zhahirmu berkurang — ingat: <strong style="color:#fff;">mungkin itu wijhah ta'arruf</strong>. Jangan mengeluh kepada makhluk. Sabar, hadirkan makna ini, jadikan di pelupuk mata — hingga datang sukun, hilang pahit, muncul manis.</p>
              <p style="font-family:'Amiri',serif; font-size:0.88rem; color:#c59b27; text-align:center; margin:0.55rem 0 0;">فَاصْبِرْ فَإِنَّ الْبَلَاءَ وِجْهَةُ التَّعَرُّفِ</p>
            </div>
            <div style="background:#13223f; border:1px solid #1e3a5f; border-radius:12px; padding:0.75rem;">
              <div style="font-size:0.62rem; color:#94a3b8; font-weight:700; letter-spacing:0.06em;">JEJAK SELANJUTNYA</div>
              <p style="font-family:'Amiri',serif; font-size:0.85rem; direction:rtl; text-align:right; color:#fde68a; margin:0.35rem 0 0; line-height:1.7;">وَسَيَأْتِي شَيْءٌ مِنْ كَلَامِ الْمُؤَلِّفِ فِي هَذَا الْمَعْنَى</p>
              <p style="font-size:0.72rem; color:#64748b; margin:0.25rem 0 0;">Akan datang lagi kalam muallif (Ibnu 'Athaillah) dalam makna ini — Wallahu Waliyyut Taufiq.</p>
            </div>
          </div>
        </div>
        <div style="margin-top:1.1rem; padding-top:0.85rem; border-top:1px solid rgba(255,255,255,0.08); display:flex; justify-content:space-between; gap:0.75rem; flex-wrap:wrap; font-size:0.62rem; color:#64748b;">
          <span style="letter-spacing:0.06em;">HIKMAH 08 • SYARAH IBNU 'ABBAD • KITAB AL-HIKAM AL-ATHAIYYAH • 2 BAGIAN</span>
          <span style="font-family:'Amiri',serif; color:#475569; font-size:0.72rem;">تمت بحمد الله — إِذَا فَتَحَ لَكَ وِجْهَةً مِنَ التَّعَرُّفِ</span>
        </div>
      </div>

      <div style="text-align:center; font-size:0.7rem; color:var(--text-muted); padding-top:0.2rem;">
        <em>Visual diselaraskan dari infografis sumber 2 bagian — 100% poin syarah tanpa terlewat • ponytail: rantai 'Illah→Ni'mah→Minna→'Athf skematis, upgrade ke SVG interaktif bila perlu.</em>
      </div>
    `;
  },
};
