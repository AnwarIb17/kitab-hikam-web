// Data Materi Hikmah #07: Syarah Ibnu 'Abbad an-Nafzi ar-Rundi
const hikmah07 = {
  id: 7,
  nomor: "07",
  judul: "Menjaga Basirah Ketika Janji Tertunda",
  kategori: "Basirah & Yaqin",
  arab: "لَا يُشَكِّكَنَّكَ فِي الْوَعْدِ عَدَمُ وُقُوْعِ الْمَوْعُوْدِ وَإِنْ تَعَيَّنَ زَمَنُهُ لِئَلَّا يَكُوْنَ ذَلِكَ قَدْحًا فِي بَصِيْرَتِكَ وَإِخْمَادًا لِنُوْرِ سَرِيْرَتِكَ",
  terjemah:
    "Janganlah tidak terjadinya apa yang dijanjikan meragukanmu terhadap janji (Allah), sekalipun waktunya sudah ditentukan, agar hal itu tidak menjadi cacat pada mata hatimu dan pemadam cahaya batinmu.",
  isReady: true,
  renderContent: function () {
    return `
      <!-- ================= HEADER KAJIAN ================= -->
      <div style="text-align:center; margin-bottom:2rem; border-bottom:1px solid var(--border-color); padding-bottom:1rem;">
        <span class="meta-badge-top">HIKMAH 07 • SYARAH IBNU ABBAD AN-NAFZI AR-RUNDI</span>
        <div style="display:flex; justify-content:center; gap:1.2rem; font-size:0.78rem; color:var(--text-muted); margin-top:0.5rem; flex-wrap:wrap;">
          <span><strong>Fokus:</strong> Hifzh al-Bashirah</span>
          <span><strong>Kunci:</strong> لا يشككنك في الوعد</span>
          <span><strong>Bahaya:</strong> قدح / إخماد</span>
        </div>
      </div>

      <!-- ================= MATAN UTAMA ================= -->
      <div style="text-align:center; margin-bottom:2rem;">
        <div style="font-size:2rem; font-family:'Amiri',serif; line-height:2.1; color:var(--primary); direction:rtl; font-weight:bold; background:var(--bg-main); border-right:4px solid var(--accent); border-radius:12px; padding:1.5rem;">
          لَا يُشَكِّكَنَّكَ فِي الْوَعْدِ عَدَمُ وُقُوْعِ الْمَوْعُوْدِ<br>
          <span style="color:var(--accent);">وَإِنْ تَعَيَّنَ زَمَنُهُ لِئَلَّا يَكُوْنَ ذَلِكَ</span><br>
          قَدْحًا فِي بَصِيْرَتِكَ وَإِخْمَادًا لِنُوْرِ سَرِيْرَتِكَ
        </div>
        <div style="margin-top:1.25rem; background:rgba(197,155,39,0.06); border-left:4px solid var(--accent); padding:1rem 1.25rem; border-radius:8px; text-align:left;">
          <h4 style="margin-bottom:0.4rem; color:var(--primary); font-size:0.85rem; letter-spacing:0.08em;"><i class="fa-solid fa-language"></i> TERJEMAHAN LENGKAP PER KATA:</h4>
          <p style="font-size:0.95rem; line-height:1.8; font-weight:500; color:var(--text-main);">
            <strong>“Janganlah tidak terjadinya apa yang dijanjikan</strong> meragukanmu terhadap janji (Allah), <strong style="color:#92400e;">sekalipun waktunya sudah ditentukan,</strong> agar hal itu tidak menjadi <span style="background:#fee2e2; color:#991b1b; padding:1px 6px; border-radius:4px; border:1px solid #fecaca;">cacat pada mata hatimu</span> dan <span style="background:#0f172a; color:#fde68a; padding:1px 6px; border-radius:4px;">pemadam cahaya batinmu.”</span>
          </p>
          <div style="margin-top:0.75rem; display:flex; gap:0.5rem; flex-wrap:wrap; font-size:0.75rem;">
            <span style="background:#fef3c7; border:1px solid #fde68a; padding:3px 8px; border-radius:20px; color:#92400e;"><strong>وعد</strong> = al-wa'du (janji)</span>
            <span style="background:#f1f5f9; border:1px solid #e2e8f0; padding:3px 8px; border-radius:20px; color:#475569;"><strong>موعود</strong> = al-mau'ud (yang dijanjikan)</span>
            <span style="background:#0f172a; color:#94a3b8; padding:3px 8px; border-radius:20px;">لئلا يكون قدحاً في بصيرتك</span>
          </div>
        </div>
      </div>

      <!-- ================= KAIDAH QATH'I ================= -->
      <div style="background:linear-gradient(135deg,#fefce8,#fef3c7); border:1px solid #fde68a; border-radius:16px; padding:1.5rem; margin-bottom:2rem; position:relative; overflow:hidden;">
        <div style="display:flex; gap:1.25rem; align-items:flex-start; flex-wrap:wrap;">
          <div style="flex-shrink:0; text-align:center;">
            <span style="display:inline-block; background:#0f172a; color:#fde68a; font-size:0.65rem; font-weight:700; letter-spacing:0.12em; padding:4px 10px; border-radius:20px;">KAIDAH QATH'I • USHUL</span>
            <div style="margin-top:1rem; width:64px; height:64px; border-radius:16px; background:#0f172a; display:flex; align-items:center; justify-content:center; border:1px solid rgba(197,155,39,0.2); margin-left:auto; margin-right:auto;">
              <span style="font-family:'Amiri',serif; color:#fde68a; font-size:1.8rem; font-weight:bold;">حق</span>
            </div>
          </div>
          <div style="flex:1; min-width:260px;">
            <p style="font-family:'Amiri',serif; font-size:1.9rem; line-height:1.4; color:#0f172a; font-weight:bold; text-align:right;" dir="rtl">اَلْحَقُّ سُبْحَانَهُ لَا يُخْلِفُ الْمِيْعَادَ</p>
            <div style="margin-top:0.85rem; background:rgba(255,255,255,0.75); border:1px solid rgba(197,155,39,0.2); border-radius:10px; padding:0.9rem 1rem;">
              <p style="font-size:0.9rem; line-height:1.7; color:#1e293b;"><strong>Allah ﷻ tidak pernah mengingkari janji</strong> — ini kaidah <em>qath'i</em> (pasti), bukan zhanni. Setiap janji Allah pasti terjadi. Jika belum terjadi, masalahnya bukan pada janji-Nya, tapi pada ilmu kita yang terbatas tentang syarat ghaib di balik janji itu.</p>
              <div style="margin-top:0.6rem; display:flex; gap:0.5rem; flex-wrap:wrap;">
                <span style="background:#0f172a; color:#fef3c7; font-size:0.72rem; padding:4px 10px; border-radius:20px;">إِنَّ اللهَ لَا يُخْلِفُ الْمِيعَادَ</span>
                <span style="background:rgba(197,155,39,0.15); color:#92400e; font-size:0.72rem; padding:4px 10px; border-radius:20px;">QS. Ar-Ra'd: 31</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ================= SYARAH RINCI IBNU ABBAD (03) ================= -->
      <div style="background:#0f172a; border:1px solid #1e3a5f; border-radius:16px; padding:1.5rem; margin-bottom:2rem; color:#f8fafc;">
        <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:1rem;">
          <span style="width:32px; height:32px; border-radius:8px; background:#c59b27; color:#0f172a; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:0.8rem;">03</span>
          <div>
            <div style="font-size:0.65rem; letter-spacing:0.12em; color:#c59b27; font-weight:700;">SYARAH RINCI IBNU ABBAD</div>
            <div style="font-weight:700; font-size:0.95rem; color:#fff;">Penjelasan Realitas Janji yang Tertunda</div>
          </div>
        </div>
        <div style="background:#13223f; border:1px solid #1e3a5f; border-radius:12px; padding:1.25rem;">
          <p style="font-family:'Amiri',serif; font-size:1.35rem; line-height:2; direction:rtl; color:#fefce8; text-align:right; margin:0;">
            فَمَنْ وَعَدَهُ مَوْلَاهُ شَيْئًا وَإِنْ كَانَ مُعَيَّنَ الزَّمَنِ ثُمَّ لَمْ يَقَعْ ذَلِكَ الْمَوْعُوْدُ فَلَا يَنْبَغِي أَنْ يُشَكِّكَهُ ذَلِكَ فِي صِدْقِ وَعْدِ رَبِّهِ
          </p>
          <div style="height:1px; background:#1e3a5f; margin:1rem 0;"></div>
          <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); gap:1rem;">
            <div style="font-size:0.88rem; line-height:1.8; color:#cbd5e1;">
              <p style="margin:0 0 0.6rem;"><span style="color:#fff; font-weight:700;">Siapa yang dijanjikan Tuhannya sesuatu,</span> meski sudah ditentukan waktunya secara spesifik (<span style="font-family:'Amiri',serif; color:#fde68a;">مُعَيَّنَ الزَّمَنِ</span> — mu'ayyan az-zaman), lalu janji itu belum terjadi di waktu tersebut,</p>
              <p style="margin:0;">maka <strong style="color:#fca5a5;">jangan sampai</strong> keterlambatan itu membuatnya ragu akan benarnya janji Tuhannya. Keraguan itu pintu masuk rusaknya basirah.</p>
            </div>
            <div style="background:#0f172a; border:1px solid #1e3a5f; border-radius:10px; padding:0.9rem;">
              <div style="font-size:0.65rem; letter-spacing:0.1em; color:#94a3b8; font-weight:700; margin-bottom:0.5rem;">TAFSIR KATA KUNCI</div>
              <div style="display:flex; flex-direction:column; gap:0.45rem; font-size:0.82rem; color:#e2e8f0;">
                <div><span style="font-family:'Amiri',serif; color:#c59b27; font-weight:700;">مَوْلَاهُ</span> — Maulāhu: Tuhannya yang mengurusi, bukan manusia</div>
                <div><span style="font-family:'Amiri',serif; color:#c59b27; font-weight:700;">مُعَيَّنَ</span> — Mu'ayyan: sudah ditentukan, spesifik waktunya</div>
                <div><span style="font-family:'Amiri',serif; color:#c59b27; font-weight:700;">صِدْقِ</span> — Shidq: kebenaran mutlak yang tidak mungkin dusta</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ================= RAHASIA KENAPA BELUM TERJADI ================= -->
      <div style="background:linear-gradient(135deg,#ecfdf5,#d1fae5); border:1px solid #a7f3d0; border-radius:16px; padding:1.5rem; margin-bottom:2rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem; margin-bottom:1.25rem;">
          <div style="display:flex; align-items:center; gap:0.75rem;">
            <span style="width:36px; height:36px; border-radius:10px; background:#064e3b; color:#d1fae5; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:0.75rem;">INTI</span>
            <div>
              <div style="font-size:0.65rem; letter-spacing:0.12em; color:#047857; font-weight:700;">RAHASIA KENAPA BELUM TERJADI</div>
              <div style="font-weight:800; color:#064e3b; font-size:1rem;">Sebab &amp; Syarat yang Allah Simpan</div>
            </div>
          </div>
          <span style="background:#064e3b; color:#d1fae5; font-size:0.65rem; letter-spacing:0.08em; font-weight:700; padding:5px 10px; border-radius:20px;">HIKMAH TERDALAM HIKMAH 07</span>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:1.25rem; align-items:start;">
          <div style="background:rgba(255,255,255,0.85); border:1px solid #a7f3d0; border-radius:12px; padding:1.15rem;">
            <p style="font-family:'Amiri',serif; font-size:1.25rem; line-height:2; direction:rtl; color:#064e3b; text-align:right; margin:0;">
              وَيَجُوْزُ أَنْ يَكُوْنَ وُقُوْعُ ذَلِكَ الْوَعْدِ مُعَلَّقًا عَلَى أَسْبَابٍ وَشُرُوْطٍ اسْتَأْثَرَ الْحَقُّ تَعَالَى بِعِلْمِهَا دُوْنَ الْعَبْدِ
            </p>
            <div style="margin-top:0.9rem; background:#064e3b; color:#d1fae5; border-radius:10px; padding:0.9rem 1rem;">
              <p style="font-size:0.85rem; line-height:1.7; margin:0;"><strong style="color:#fff;">Boleh jadi terjadinya janji itu digantungkan</strong> pada sebab-sebab dan syarat-syarat yang Allah simpan ilmunya untuk Diri-Nya, tidak diberitahukan kepada hamba. Hamba hanya melihat janji, tapi tidak melihat rantai syarat ghaib di belakangnya.</p>
              <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.6rem; margin-top:0.75rem;">
                <div style="background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:0.6rem;">
                  <div style="font-size:0.65rem; color:#6ee7b7; font-weight:700; letter-spacing:0.08em;">أَسْبَابٍ</div>
                  <div style="font-size:0.75rem; line-height:1.5; color:#d1fae5; margin-top:2px;">Sebab kauniyah &amp; syar'iyah yang harus terpenuhi</div>
                </div>
                <div style="background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:0.6rem;">
                  <div style="font-size:0.65rem; color:#6ee7b7; font-weight:700; letter-spacing:0.08em;">شُرُوْطٍ</div>
                  <div style="font-size:0.75rem; line-height:1.5; color:#d1fae5; margin-top:2px;">Syarat batin: waktu terbaik, hikmah terbaik</div>
                </div>
              </div>
              <div style="margin-top:0.6rem; font-size:0.72rem; color:#6ee7b7; display:flex; align-items:center; gap:0.4rem;"><span style="width:6px; height:6px; border-radius:50%; background:#6ee7b7; display:inline-block;"></span>اسْتَأْثَرَ الْحَقُّ — Allah simpan, hamba tidak diberi tahu = adab tawakkal</div>
            </div>
          </div>

          <div style="background:#064e3b; border:1px solid #065f46; border-radius:12px; padding:1.15rem; color:#d1fae5;">
            <div style="font-size:0.65rem; letter-spacing:0.12em; color:#6ee7b7; font-weight:700; text-align:center; margin-bottom:0.85rem;">VISUAL RANTAI JANJI</div>
            <div style="background:#0f172a; border:1px solid rgba(197,155,39,0.18); border-radius:10px; padding:0.9rem; text-align:center;">
              <div style="display:inline-block; background:#c59b27; color:#064e3b; font-family:'Amiri',serif; font-size:0.85rem; font-weight:800; padding:3px 10px; border-radius:20px;">الحق تعالى — Kunci Syarat Ghaib 🔑</div>
              <div style="margin:0.7rem auto; width:2px; height:18px; background:linear-gradient(to bottom,rgba(197,155,39,0.6),rgba(197,155,39,0.15));"></div>
              <div style="display:flex; flex-direction:column; gap:0.4rem; align-items:center; font-size:0.7rem; color:#a7f3d0;">
                <span style="border:1.5px solid rgba(197,155,39,0.45); border-radius:20px; padding:3px 12px; background:#0f172a;">rantai syarat 1</span>
                <span style="border:1.5px solid rgba(197,155,39,0.45); border-radius:20px; padding:3px 12px; background:#0f172a;">rantai syarat 2</span>
                <span style="border:1.5px solid rgba(197,155,39,0.45); border-radius:20px; padding:3px 12px; background:#0f172a;">rantai syarat 3</span>
              </div>
              <div style="margin:0.7rem auto; width:2px; height:18px; background:rgba(197,155,39,0.4);"></div>
              <div style="background:linear-gradient(135deg,#fef3c7,#fde68a); border:1px solid #c59b27; border-radius:10px; padding:0.85rem; color:#064e3b;">
                <div style="font-family:'Amiri',serif; font-size:1.05rem; font-weight:800;">الوعد المعلق</div>
                <div style="font-size:0.72rem; color:#065f46;">Janji digantungkan pada sebab &amp; syarat — <strong>أسباب • شروط</strong></div>
              </div>
              <div style="margin-top:0.7rem; font-size:0.7rem; color:#a7f3d0; line-height:1.5;">Hamba tidak melihat rantai &amp; kunci<br>hanya melihat kotak janji belum turun — 🙏 العبد لا يرى</div>
            </div>
            <div style="margin-top:0.85rem; background:#022c22; border:1px solid #065f46; border-radius:8px; padding:0.65rem; font-size:0.78rem; line-height:1.6; color:#a7f3d0; text-align:center;">
              Maka jangan protes. Tugas hamba bukan membuka kunci ghaib, tapi menjaga adab menunggu.
            </div>
          </div>
        </div>
      </div>

      <!-- ================= MAQAM AL-UBUDIYAH (3 KARTU) ================= -->
      <div style="margin-bottom:2rem;">
        <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:1rem;">
          <span style="width:4px; height:28px; border-radius:20px; background:#0f172a; display:inline-block;"></span>
          <div>
            <div style="font-size:0.65rem; letter-spacing:0.14em; color:#64748b; font-weight:700;">MAQAM AL-UBUDIYAH</div>
            <div style="font-weight:800; color:#0f172a; font-size:1.05rem;">Adab Hamba Ketika Janji Tertunda</div>
          </div>
        </div>
        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:1rem;">
          <div style="background:#fff; border:1px solid #e2e8f0; border-radius:14px; padding:1.15rem; box-shadow:0 8px 20px rgba(15,23,42,0.06);">
            <span style="width:32px; height:32px; border-radius:8px; background:#0f172a; color:#c59b27; display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.75rem;">01</span>
            <p style="font-family:'Amiri',serif; font-size:1.15rem; line-height:1.8; direction:rtl; text-align:right; color:#0f172a; font-weight:bold; margin:0.75rem 0 0.5rem;">فَعَلَى الْعَبْدِ أَنْ يَعْرِفَ قَدْرَهُ</p>
            <div style="height:1px; background:#f1f5f9; margin:0.6rem 0;"></div>
            <div style="font-weight:800; font-size:0.88rem; color:#0f172a;">Hamba harus tahu kadar dirinya</div>
            <p style="font-size:0.82rem; line-height:1.6; color:#475569; margin:0.35rem 0 0;">Ia lemah, ilmunya terbatas, tidak tahu syarat ghaib. <strong>‘Irfu qadr an-nafs</strong> adalah awal adab. Yang tidak tahu kadar diri akan mudah su'udzan kepada Rabb.</p>
            <span style="margin-top:0.6rem; display:inline-block; background:#fef3c7; border:1px solid #fde68a; color:#92400e; font-size:0.68rem; font-weight:700; padding:3px 8px; border-radius:20px;">عرف قدره = tahu batas</span>
          </div>
          <div style="background:#fff; border:1px solid #e2e8f0; border-radius:14px; padding:1.15rem; box-shadow:0 8px 20px rgba(15,23,42,0.06);">
            <span style="width:32px; height:32px; border-radius:8px; background:#c59b27; color:#0f172a; display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.75rem;">02</span>
            <p style="font-family:'Amiri',serif; font-size:1.15rem; line-height:1.8; direction:rtl; text-align:right; color:#0f172a; font-weight:bold; margin:0.75rem 0 0.5rem;">وَيَتَأَدَّبَ مَعَ رَبِّهِ</p>
            <div style="height:1px; background:#f1f5f9; margin:0.6rem 0;"></div>
            <div style="font-weight:800; font-size:0.88rem; color:#0f172a;">Beradab dengan Tuhannya</div>
            <p style="font-size:0.82rem; line-height:1.6; color:#475569; margin:0.35rem 0 0;">Tidak su'udzan, tidak protes, tidak menuntut. Adab adalah menahan lisan dan hati dari tuduhan bahwa Allah ingkar janji. Diam dalam husnudzan.</p>
            <span style="margin-top:0.6rem; display:inline-block; background:#0f172a; color:#fef3c7; font-size:0.68rem; font-weight:700; padding:3px 8px; border-radius:20px;">تأدب = tidak protes, husnudzan</span>
          </div>
          <div style="background:#0f172a; border:1px solid #1e3a5f; border-radius:14px; padding:1.15rem; box-shadow:0 12px 30px rgba(15,23,42,0.25);">
            <span style="width:32px; height:32px; border-radius:8px; background:rgba(197,155,39,0.18); border:1px solid rgba(197,155,39,0.25); color:#c59b27; display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.75rem;">03</span>
            <p style="font-family:'Amiri',serif; font-size:1rem; line-height:2; direction:rtl; text-align:right; color:#fefce8; font-weight:bold; margin:0.75rem 0 0.5rem;">وَيَسْكُنَ إِلَيْهِ فِيْمَا وَعَدَهُ بِهِ وَيَطْمَئِنَّ إِلَيْهِ وَلَا يَتَشَكَّكَ فِي ذَلِكَ وَلَا يَتَزَلْزَلَ اعْتِقَادُهُ فِيْهِ</p>
            <div style="height:1px; background:rgba(255,255,255,0.1); margin:0.6rem 0;"></div>
            <div style="font-weight:800; font-size:0.88rem; color:#fefce8;">Tenang, tenteram, tidak ragu, tidak goyang</div>
            <p style="font-size:0.82rem; line-height:1.6; color:#94a3b8; margin:0.35rem 0 0;">Empat maqam: <span style="color:#fde68a; font-weight:700;">sukūn</span> (tenang), <span style="color:#fde68a; font-weight:700;">ithmi'nān</span> (tenteram), <span style="color:#fde68a; font-weight:700;">adam syakk</span> (tidak ragu), <span style="color:#fde68a; font-weight:700;">adam zalzalah</span> (i'tiqad tidak gempa).</p>
            <div style="margin-top:0.6rem; display:flex; gap:0.35rem; flex-wrap:wrap;">
              <span style="background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); color:#cbd5e1; font-size:0.65rem; padding:3px 7px; border-radius:20px;">سكون</span>
              <span style="background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); color:#cbd5e1; font-size:0.65rem; padding:3px 7px; border-radius:20px;">اطمئنان</span>
              <span style="background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); color:#cbd5e1; font-size:0.65rem; padding:3px 7px; border-radius:20px;">لا تشكك</span>
              <span style="background:rgba(197,155,39,0.15); border:1px solid rgba(197,155,39,0.22); color:#fde68a; font-size:0.65rem; padding:3px 7px; border-radius:20px;">لا تزلزل</span>
            </div>
          </div>
        </div>
      </div>

      <!-- ================= JIKA YAKIN vs JIKA RAGU ================= -->
      <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:1rem; margin-bottom:2rem;">
        <div style="background:linear-gradient(135deg,#ffffff,#fefce8); border:1px solid #fde68a; border-radius:16px; padding:1.25rem; box-shadow:0 10px 30px rgba(15,23,42,0.06);">
          <span style="display:inline-flex; align-items:center; gap:0.4rem; background:rgba(197,155,39,0.12); border:1px solid rgba(197,155,39,0.2); color:#92400e; font-size:0.62rem; font-weight:800; letter-spacing:0.08em; padding:4px 8px; border-radius:20px;"><span style="width:6px; height:6px; border-radius:50%; background:#c59b27; display:inline-block;"></span> JIKA YAKIN JANJI • BUAH CAHAYA — نور</span>
          <p style="font-family:'Amiri',serif; font-size:1.05rem; line-height:1.9; direction:rtl; text-align:center; color:#0f172a; font-weight:bold; margin:0.9rem 0;">فَمَنْ كَانَ عَلَى هَذَا الْوَصْفِ فَهُوَ عَارِفٌ بِاللهِ تَعَالَى سَالِمُ الْبَصِيْرَةِ مُنَوَّرُ السَّرِيْرَةِ</p>
          <div style="display:flex; flex-direction:column; gap:0.6rem;">
            <div style="background:#fff; border:1px solid #fde68a; border-radius:10px; padding:0.7rem; display:flex; gap:0.6rem; align-items:flex-start;">
              <span style="width:26px; height:26px; border-radius:8px; background:#0f172a; color:#c59b27; display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.65rem; flex-shrink:0;">01</span>
              <div><div style="font-weight:800; font-size:0.82rem; color:#0f172a;">‘Arif billah</div><div style="font-size:0.78rem; color:#57534e; line-height:1.5;">Mengenal Allah, bukan hanya tahu janji. Ma'rifah membuatnya tenang karena kenal siapa yang berjanji.</div></div>
            </div>
            <div style="background:#fff; border:1px solid #fde68a; border-radius:10px; padding:0.7rem; display:flex; gap:0.6rem; align-items:flex-start;">
              <span style="width:26px; height:26px; border-radius:8px; background:#c59b27; color:#0f172a; display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.65rem; flex-shrink:0;">02</span>
              <div><div style="font-weight:800; font-size:0.82rem; color:#0f172a;">Salim al-bashirah — سالم البصيرة</div><div style="font-size:0.78rem; color:#57534e; line-height:1.5;">Mata hatinya selamat, tidak cacat, tidak retak. Melihat janji dengan cahaya yakin.</div></div>
            </div>
            <div style="background:#0f172a; border:1px solid rgba(197,155,39,0.18); border-radius:10px; padding:0.7rem; display:flex; gap:0.6rem; align-items:flex-start;">
              <span style="width:26px; height:26px; border-radius:8px; background:rgba(197,155,39,0.15); border:1px solid rgba(197,155,39,0.22); color:#c59b27; display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.65rem; flex-shrink:0;">03</span>
              <div><div style="font-weight:800; font-size:0.82rem; color:#fef3c7;">Munawwar as-sarirah — منور السريرة</div><div style="font-size:0.78rem; color:#cbd5e1; line-height:1.5;">Batin bercahaya. Sirr-nya terang karena tidak dipadamkan oleh keraguan.</div></div>
            </div>
          </div>
        </div>

        <div style="background:#0a0f1e; border:1px solid #1e293b; border-radius:16px; padding:1.25rem; color:#f8fafc;">
          <span style="display:inline-flex; align-items:center; gap:0.4rem; background:rgba(239,68,68,0.1); border:1px solid rgba(239,68,68,0.18); color:#fca5a5; font-size:0.62rem; font-weight:800; letter-spacing:0.08em; padding:4px 8px; border-radius:20px;"><span style="width:6px; height:6px; border-radius:50%; background:#f87171; display:inline-block;"></span> JIKA RAGU JANJI • BUAH KEGELAPAN — إخماد</span>
          <p style="font-family:'Amiri',serif; font-size:1.15rem; line-height:1.8; direction:rtl; text-align:center; color:#e2e8f0; font-weight:bold; margin:0.9rem 0;">وَإِلَّا فَعَلَى الْعَكْسِ</p>
          <p style="font-size:0.78rem; color:#94a3b8; text-align:center; margin:0 0 0.85rem;">Jika tidak demikian (masih ragu), maka sebaliknya:</p>
          <div style="display:flex; flex-direction:column; gap:0.6rem;">
            <div style="background:rgba(30,41,59,0.6); border:1px solid #334155; border-radius:10px; padding:0.7rem; display:flex; gap:0.6rem; align-items:flex-start;">
              <span style="width:26px; height:26px; border-radius:8px; background:rgba(239,68,68,0.12); border:1px solid rgba(239,68,68,0.18); color:#fca5a5; display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.65rem; flex-shrink:0;">!</span>
              <div><div style="font-weight:800; font-size:0.82rem; color:#fecaca;">Jahil billah</div><div style="font-size:0.78rem; color:#94a3b8; line-height:1.5;">Bodoh tentang Allah. Mengira Allah seperti makhluk yang bisa ingkar janji.</div></div>
            </div>
            <div style="background:rgba(30,41,59,0.6); border:1px solid #334155; border-radius:10px; padding:0.7rem; display:flex; gap:0.6rem; align-items:flex-start;">
              <span style="width:26px; height:26px; border-radius:8px; background:rgba(239,68,68,0.12); border:1px solid rgba(239,68,68,0.18); color:#fca5a5; display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.65rem; flex-shrink:0;">02</span>
              <div>
                <div style="font-weight:800; font-size:0.82rem; color:#fecaca;">Math'unah bashiratuhu — tercacat mata hatinya</div>
                <div style="font-family:'Amiri',serif; font-size:0.85rem; color:#fca5a5;">قدحا في بصيرتك</div>
                <div style="font-size:0.78rem; color:#94a3b8; line-height:1.5;">Bashirah retak, tidak bisa melihat hikmah di balik penundaan.</div>
              </div>
            </div>
            <div style="background:rgba(69,10,10,0.22); border:1px solid rgba(127,29,29,0.4); border-radius:10px; padding:0.7rem; display:flex; gap:0.6rem; align-items:flex-start;">
              <span style="width:26px; height:26px; border-radius:8px; background:rgba(127,29,29,0.4); border:1px solid #991b1b; color:#fecaca; display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.65rem; flex-shrink:0;">03</span>
              <div>
                <div style="font-weight:800; font-size:0.82rem; color:#fecaca;">Mukhmadah nur sariiratihi — padam cahaya batinnya</div>
                <div style="font-family:'Amiri',serif; font-size:0.85rem; color:#fca5a5;">إخمادا لنور سريرتك</div>
                <div style="font-size:0.78rem; color:#94a3b8; line-height:1.5;">Sir yang tadinya bercahaya jadi gelap gulita karena asap keraguan.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ================= RABTH 06 ↔ 07 ================= -->
      <div style="background:#fff; border:1px solid #e2e8f0; border-radius:16px; overflow:hidden; margin-bottom:2rem; box-shadow:0 10px 30px rgba(15,23,42,0.06);">
        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr));">
          <div style="background:#0f172a; padding:1.25rem; color:#fff;">
            <div style="font-size:0.62rem; letter-spacing:0.12em; color:#c59b27; font-weight:700;">RABTH • KETERKAITAN</div>
            <div style="font-weight:800; font-size:1rem; margin-top:0.35rem; line-height:1.3;">Hikmah 06 ↔ Hikmah 07<br>Satu Napas: Jangan Ragu!</div>
            <div style="margin-top:1rem; display:flex; flex-direction:column; gap:0.6rem;">
              <div style="background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.08); border-radius:10px; padding:0.75rem;">
                <span style="background:rgba(197,155,39,0.18); color:#fde68a; font-size:0.62rem; font-weight:800; padding:3px 7px; border-radius:20px;">HIKMAH 06</span>
                <div style="font-size:0.82rem; color:#cbd5e1; line-height:1.5; margin-top:0.4rem;"><strong style="color:#fff;">Tentang ijabah doa yang tertunda</strong> — jangan ragu, Allah menjawab dengan yang terbaik menurut ilmu-Nya.</div>
              </div>
              <div style="text-align:center; color:#c59b27; font-size:0.9rem;">↕</div>
              <div style="background:rgba(197,155,39,0.1); border:1px solid rgba(197,155,39,0.18); border-radius:10px; padding:0.75rem;">
                <span style="background:#c59b27; color:#0f172a; font-size:0.62rem; font-weight:800; padding:3px 7px; border-radius:20px;">HIKMAH 07</span>
                <div style="font-size:0.82rem; color:#fef3c7; line-height:1.5; margin-top:0.4rem;"><strong style="color:#fff;">Tentang janji yang tertunda</strong> — jangan ragu, ada syarat ghaib yang Allah simpan.</div>
              </div>
              <div style="background:rgba(254,243,199,0.08); border:1px solid rgba(197,155,39,0.18); border-radius:8px; padding:0.6rem; font-size:0.72rem; color:#fde68a; text-align:center;">Keduanya sama: <strong style="color:#fff;">لا تشكك — jangan ragu!</strong> Penundaan bukan pembatalan, tapi penyempurnaan.</div>
            </div>
          </div>
          <div style="background:#FFFBEB; padding:1.25rem;">
            <div style="font-size:0.62rem; letter-spacing:0.1em; color:#92400e; font-weight:700;">DALIL &amp; CONTOH JANJI ALLAH YANG PASTI</div>
            <div style="margin-top:0.85rem; background:#0f172a; border:1px solid #1e3a5f; border-radius:12px; padding:1rem; text-align:center;">
              <div style="font-family:'Amiri',serif; font-size:1.4rem; color:#fefce8; font-weight:bold;">إِنَّ اللهَ لَا يُخْلِفُ الْمِيْعَادَ</div>
              <div style="font-size:0.7rem; color:#94a3b8; margin-top:0.25rem;">[ QS. Ar-Ra'd: 31 ] — Sesungguhnya Allah tidak menyelisihi janji</div>
              <div style="height:1px; background:rgba(255,255,255,0.08); margin:0.75rem 0;"></div>
              <p style="font-size:0.78rem; line-height:1.6; color:#cbd5e1; text-align:left; margin:0;">Ini bukan janji manusia. Manusia bisa lupa, lemah, berubah niat. Allah Maha Sempurna — mustahil ingkar. Jika Allah berjanji, <strong style="color:#fff;">pasti terjadi</strong>, meski akal kita belum melihat jalannya.</p>
            </div>
            <div style="margin-top:0.75rem; display:flex; flex-direction:column; gap:0.6rem;">
              <div style="background:#fff; border:1px solid #fde68a; border-radius:10px; padding:0.75rem;">
                <div style="font-weight:800; font-size:0.78rem; color:#0f172a;">Janji pertolongan bagi orang sabar</div>
                <div style="font-family:'Amiri',serif; font-size:0.95rem; color:#92400e; font-weight:bold; text-align:right;" dir="rtl">إِنَّ اللهَ مَعَ الصَّابِرِينَ</div>
                <div style="font-size:0.72rem; color:#78716c; line-height:1.5;">Boleh jadi sabar itu sendiri syaratnya — Allah simpan waktu terbaiknya</div>
              </div>
              <div style="background:#fff; border:1px solid #fde68a; border-radius:10px; padding:0.75rem;">
                <div style="font-weight:800; font-size:0.78rem; color:#0f172a;">Janji rizki yang sudah dijamin</div>
                <div style="font-family:'Amiri',serif; font-size:0.95rem; color:#92400e; font-weight:bold; text-align:right;" dir="rtl">وَمَا مِنْ دَابَّةٍ إِلَّا عَلَى اللهِ رِزْقُهَا</div>
                <div style="font-size:0.72rem; color:#78716c; line-height:1.5;">Rizki pasti datang, tapi sebab ikhtiar &amp; tawakkal digantungkan sebagai syarat ghaib</div>
              </div>
              <div style="background:#fff; border:1px solid #fde68a; border-radius:10px; padding:0.75rem;">
                <div style="font-weight:800; font-size:0.78rem; color:#0f172a;">Janji kemenangan bagi orang beriman</div>
                <div style="font-family:'Amiri',serif; font-size:0.95rem; color:#92400e; font-weight:bold; text-align:right;" dir="rtl">وَكَانَ حَقًّا عَلَيْنَا نَصْرُ الْمُؤْمِنِينَ</div>
                <div style="font-size:0.72rem; color:#78716c; line-height:1.5;">Kemenangan pasti, tapi Allah simpan syarat pembersihan hati &amp; persatuan</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ================= KHATIMAH ================= -->
      <div style="background:#0f172a; border:1px solid rgba(197,155,39,0.18); border-radius:16px; padding:1.5rem; color:#fff; margin-bottom:1.5rem;">
        <div style="display:flex; gap:1rem; align-items:flex-start;">
          <span style="width:48px; height:48px; border-radius:12px; background:linear-gradient(135deg,#c59b27,#b8941f); display:flex; align-items:center; justify-content:center; font-family:'Amiri',serif; font-size:1.15rem; font-weight:800; color:#0f172a; flex-shrink:0;">خلاصة</span>
          <div style="flex:1;">
            <div style="font-size:0.62rem; letter-spacing:0.12em; color:#c59b27; font-weight:700;">RINGKASAN AKHIR HIKMAH 07 • KHATIMAH</div>
            <div style="font-weight:800; font-size:1.05rem; margin-top:0.25rem; line-height:1.3;">Janji Allah Haqq, Tugas Hamba Adab Menunggu</div>
          </div>
        </div>
        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:1.15rem; margin-top:1.25rem;">
          <div>
            <div style="background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); border-radius:12px; padding:0.9rem;">
              <p style="font-size:0.82rem; line-height:1.7; color:#cbd5e1; margin:0;"><strong style="color:#fff;">Janji Allah haqq (benar) —</strong> tidak mungkin ingkar. Waktu yang ditentukan (<span style="font-family:'Amiri',serif; color:#fde68a;">تعين زمنه</span>) bukan berarti pasti terjadi di waktu itu <strong style="color:#fde68a;">jika ada syarat ghaib</strong> yang belum terpenuhi. Syarat itu Allah simpan ilmunya.</p>
            </div>
            <div style="margin-top:0.9rem;">
              <div style="font-size:0.62rem; letter-spacing:0.08em; color:#94a3b8; font-weight:700; margin-bottom:0.5rem;">6 TUGAS HAMBA — RUKUN ADAB MENUNGGU JANJI:</div>
              <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:0.5rem;">
                <div style="background:#13223f; border:1px solid #1e3a5f; border-radius:10px; padding:0.6rem; text-align:center;">
                  <div style="font-family:'Amiri',serif; font-size:0.9rem; font-weight:800; color:#c59b27; text-align:right;" dir="rtl">عرف قدره</div>
                  <div style="font-size:0.68rem; font-weight:800; color:#fff; margin-top:2px;">‘irf qadrah</div>
                  <div style="font-size:0.62rem; color:#94a3b8;">Tahu kadar diri</div>
                </div>
                <div style="background:#13223f; border:1px solid #1e3a5f; border-radius:10px; padding:0.6rem; text-align:center;">
                  <div style="font-family:'Amiri',serif; font-size:0.9rem; font-weight:800; color:#c59b27; text-align:right;" dir="rtl">تأدب</div>
                  <div style="font-size:0.68rem; font-weight:800; color:#fff; margin-top:2px;">ta'addub</div>
                  <div style="font-size:0.62rem; color:#94a3b8;">Husnudzan</div>
                </div>
                <div style="background:#13223f; border:1px solid #1e3a5f; border-radius:10px; padding:0.6rem; text-align:center;">
                  <div style="font-family:'Amiri',serif; font-size:0.9rem; font-weight:800; color:#c59b27; text-align:right;" dir="rtl">سكون</div>
                  <div style="font-size:0.68rem; font-weight:800; color:#fff; margin-top:2px;">sukūn</div>
                  <div style="font-size:0.62rem; color:#94a3b8;">Tenang hati</div>
                </div>
                <div style="background:#13223f; border:1px solid #1e3a5f; border-radius:10px; padding:0.6rem; text-align:center;">
                  <div style="font-family:'Amiri',serif; font-size:0.9rem; font-weight:800; color:#c59b27; text-align:right;" dir="rtl">اطمئنان</div>
                  <div style="font-size:0.68rem; font-weight:800; color:#fff; margin-top:2px;">ithmi'nān</div>
                  <div style="font-size:0.62rem; color:#94a3b8;">Tenteram jiwa</div>
                </div>
                <div style="background:#13223f; border:1px solid #1e3a5f; border-radius:10px; padding:0.6rem; text-align:center;">
                  <div style="font-family:'Amiri',serif; font-size:0.9rem; font-weight:800; color:#c59b27; text-align:right;" dir="rtl">عدم الشك</div>
                  <div style="font-size:0.68rem; font-weight:800; color:#fff; margin-top:2px;">adam syakk</div>
                  <div style="font-size:0.62rem; color:#94a3b8;">Tidak ragu</div>
                </div>
                <div style="background:#13223f; border:1px solid #1e3a5f; border-radius:10px; padding:0.6rem; text-align:center;">
                  <div style="font-family:'Amiri',serif; font-size:0.9rem; font-weight:800; color:#c59b27; text-align:right;" dir="rtl">عدم زلزلة</div>
                  <div style="font-size:0.68rem; font-weight:800; color:#fff; margin-top:2px;">adam zalzalah</div>
                  <div style="font-size:0.62rem; color:#94a3b8;">I'tiqad kokoh</div>
                </div>
              </div>
            </div>
          </div>
          <div style="display:flex; flex-direction:column; gap:0.75rem;">
            <div style="background:linear-gradient(135deg,#fef3c7,#fde68a); border:1px solid rgba(197,155,39,0.25); border-radius:12px; padding:0.9rem;">
              <div style="font-size:0.62rem; font-weight:800; letter-spacing:0.08em; color:#92400e;">RUMUS EMAS IBNU ABBAD</div>
              <p style="font-size:0.82rem; line-height:1.6; color:#451a03; margin:0.45rem 0 0;"><strong>Janji tertunda ≠ janji batal.</strong> Janji tertunda = janji disempurnakan dengan syarat ghaib terbaik menurut ilmu Allah.</p>
              <div style="margin-top:0.6rem; background:#0f172a; color:#fde68a; font-family:'Amiri',serif; font-size:0.85rem; font-weight:800; text-align:center; padding:6px 10px; border-radius:8px;" dir="rtl">التأخير تكميل لا إبطال</div>
            </div>
            <div style="background:rgba(30,41,59,0.5); border:1px solid #334155; border-radius:12px; padding:0.9rem;">
              <div style="font-size:0.62rem; font-weight:700; color:#94a3b8; letter-spacing:0.06em;">UNTUK HATI YANG SEDANG MENUNGGU</div>
              <p style="font-size:0.78rem; line-height:1.6; color:#cbd5e1; margin:0.45rem 0 0;">Jika hari ini janji Allah untukmu belum terjadi — rizki, jodoh, kesembuhan, kemudahan — ingat: kuncinya masih di tangan Allah. Tugasmu bukan mendobrak pintu ghaib, tapi menjaga agar cahaya batinmu tidak padam oleh keraguan.</p>
              <p style="font-family:'Amiri',serif; font-size:0.9rem; color:#c59b27; text-align:center; margin:0.6rem 0 0;">فاصبر واطمئن فإن وعد الله حق</p>
            </div>
          </div>
        </div>
        <div style="margin-top:1.15rem; padding-top:0.85rem; border-top:1px solid rgba(255,255,255,0.08); display:flex; justify-content:space-between; gap:0.75rem; flex-wrap:wrap; font-size:0.62rem; color:#64748b;">
          <span style="letter-spacing:0.06em;">HIKMAH 07 • SYARAH IBNU ABBAD • KITAB AL-HIKAM AL-ATHAIYYAH</span>
          <span style="font-family:'Amiri',serif; color:#475569; font-size:0.75rem;">تمت بحمد الله — لا يشككنك في الوعد</span>
        </div>
      </div>

      <div style="text-align:center; font-size:0.72rem; color:var(--text-muted); padding-top:0.25rem;">
        <em>Visual diselaraskan dari infografis sumber — 100% poin syarah Ibnu Abbad tanpa terlewat • ponytail: rantai syarat digambar skematis, upgrade ke SVG interaktif bila perlu.</em>
      </div>
    `;
  },
};
