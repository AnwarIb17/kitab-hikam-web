// Data Materi Hikmah #06: Syarah Lengkap Bagian 1 & Bagian 2 (Ibnu 'Abbad ar-Rundi)
const hikmah06 = {
  id: 6,
  nomor: "06",
  judul: "Adab Doa, Jaminan Ijabah, dan Rahasia Idthirar",
  kategori: "Doa & Tawakal",
  arab: "لَا يَكُنْ تَأَخُّرُ أَمَدِ الْعَطَاءِ مَعَ الْإِلْحَاحِ فِي الدُّعَاءِ مُوْجِبًا لِيَأْسِكَ فَهُوَ الَّذِي ضَمِنَ لَكَ الْإِجَابَةَ فِيْمَا يَخْتَارُهُ لَكَ لَا فِيْمَا تَخْتَارُهُ لِنَفْسِكَ وَفِي الْوَقْتِ الَّذِي يُرِيْدُ لَا فِي الْوَقْتِ الَّذِي تُرِيْدُ",
  terjemah:
    "Janganlah keterlambatan masa pemberian bersamaan dengan kesungguhanmu dalam doa menyebabkan keputusasaanmu, karena Dialah yang menjamin ijabah bagimu pada apa yang Dia pilihkan untukmu, bukan pada apa yang kamu pilih untuk dirimu, dan pada waktu yang Dia kehendaki bukan pada waktu yang kamu kehendaki.",
  isReady: true,
  renderContent: function () {
    return `
      <!-- ================= BAGIAN 1: MATAN & PONDASI IJABAH ================= -->
      <div class="meta-quote-pill" style="border-left: 4px solid var(--accent); background: rgba(197, 155, 39, 0.08); padding: 1.25rem; border-radius: 8px; margin-bottom: 1.5rem;">
        <span class="meta-badge-top" style="display:inline-block; margin-bottom: 0.5rem;">BAGIAN 1 • ADAB DOA & JAMINAN IJABAH</span>
        <h3 style="font-size: 1.2rem; color: var(--primary); margin-bottom: 0.5rem;">Prinsip Menjaga Hati dalam Menghadapi Doa yang Belum Terwujud</h3>
        <p style="font-size: 0.92rem; line-height: 1.7; color: var(--text-main);">
          Untaian ini merupakan penawar keraguan bagi seorang salik yang senantiasa berdoa namun belum menyaksikan tanda-tanda terkabulnya permohonan secara kasat mata. Syekh Ibnu Atha'illah mengingatkan bahwa keterlambatan masa pemberian (<em>ta'akhkhur amad al-'atha'</em>) di tengah desakan doa yang bersungguh-sungguh (<em>ma'al ilhah fid du'a'</em>) bukanlah tanda penolakan, melainkan manifestasi pemeliharaan Allah dengan hikmah dan kasih sayang-Nya yang mutlak.
        </p>
      </div>

      <!-- Teks Matan Berharakat -->
      <div class="arabic-container" style="background: var(--bg-main); border-right: 4px solid var(--accent); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; text-align: right;">
        <p class="arabic-text" style="font-family: 'Amiri', serif; font-size: 1.7rem; line-height: 2.2; direction: rtl; color: var(--primary);">
          لَا يَكُنْ تَأَخُّرُ أَمَدِ الْعَطَاءِ مَعَ الْإِلْحَاحِ فِي الدُّعَاءِ مُوْجِبًا لِيَأْسِكَ فَهُوَ الَّذِي ضَمِنَ لَكَ الْإِجَابَةَ فِيْمَا يَخْتَارُهُ لَكَ لَا فِيْمَا تَخْتَارُهُ لِنَفْسِكَ وَفِي الْوَقْتِ الَّذِي يُرِيْدُ لَا فِي الْوَقْتِ الَّذِي تُرِيْدُ
        </p>
      </div>

      <div class="translation-container" style="background: rgba(197, 155, 39, 0.06); border-left: 4px solid var(--accent); padding: 1.1rem 1.35rem; border-radius: 8px; margin-bottom: 1.75rem;">
        <h4 style="margin-bottom: 0.4rem; color: var(--primary);"><i class="fa-solid fa-language"></i> Terjemahan Lengkap:</h4>
        <p class="translation-text" style="font-size: 0.95rem; line-height: 1.75; font-weight: 500;">
          "Janganlah keterlambatan masa pemberian bersamaan dengan kesungguhanmu dalam doa menyebabkan keputusasaanmu, karena Dialah yang menjamin ijabah bagimu pada apa yang Dia pilihkan untukmu, bukan pada apa yang kamu pilih untuk dirimu, dan pada waktu yang Dia kehendaki bukan pada waktu yang kamu kehendaki."
        </p>
      </div>

      <!-- 3 Rukun Pemahaman Matan -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
        <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-top: 3px solid #b45309; padding: 1rem; border-radius: 10px;">
          <div style="font-size: 1.25rem; margin-bottom: 0.25rem;">⏳</div>
          <strong style="font-size: 0.88rem; color: #b45309; display: block; margin-bottom: 0.25rem;">Ta'akhkhur (التأخر)</strong>
          <span style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.5;">Penundaan masa pemberian oleh Allah bukanlah pembatalan, melainkan penetapan waktu yang paling tepat dan berhikmah.</span>
        </div>
        <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-top: 3px solid var(--accent); padding: 1rem; border-radius: 10px;">
          <div style="font-size: 1.25rem; margin-bottom: 0.25rem;">🤲</div>
          <strong style="font-size: 0.88rem; color: var(--accent); display: block; margin-bottom: 0.25rem;">Ilhah (الإلحاح)</strong>
          <span style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.5;">Kesungguhan, permohonan berulang-ulang tanpa rasa bosan sebagai bentuk penghambaan sejati dan penampakan kefakiran diri.</span>
        </div>
        <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-top: 3px solid var(--primary); padding: 1rem; border-radius: 10px;">
          <div style="font-size: 1.25rem; margin-bottom: 0.25rem;">✨</div>
          <strong style="font-size: 0.88rem; color: var(--primary); display: block; margin-bottom: 0.25rem;">Ijabah (الإجابة)</strong>
          <span style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.5;">Kepastian terkabulnya doa menurut ketetapan dan ilmu Allah, bukan mendikte selera hawa nafsu manusia.</span>
        </div>
      </div>

      <!-- Poin 2: Fiqh al-Ubudiyah -->
      <div class="syarah-container" style="margin-bottom: 2rem;">
        <h4 style="font-size: 1.05rem; color: var(--primary); margin-bottom: 0.75rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">
          <i class="fa-solid fa-scale-balanced"></i> 2. Hukum Hamba dalam Fiqh al-Ubudiyah (حكم العبد)
        </h4>
        <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 12px; padding: 1.25rem; margin-bottom: 1rem;">
          <p class="arabic-text" style="font-family: 'Amiri', serif; font-size: 1.35rem; line-height: 2; direction: rtl; color: #1e3a8a; text-align: right; margin-bottom: 0.75rem;">
            حُكْمُ الْعَبْدِ أَنْ لَا يَخْتَارَ شَيْئًا عَلَى مَوْلَاهُ وَلَا يَجْزِمَ بِصَلَاحِيَّةِ حَالٍ مِنَ الْأَحْوَالِ لَهُ لِأَنَّهُ جَاهِلٌ مِنْ كُلِّ وَجْهٍ قَدْ يَكْرَهُ الشَّيْءَ وَهُوَ خَيْرٌ لَهُ وَيُحِبُّ الشَّيْءَ وَهُوَ شَرٌّ بِهِ
          </p>
          <div style="font-size: 0.92rem; line-height: 1.75; color: #1e293b;">
            <strong>Penjelasan Terperinci:</strong><br>
            Hukum seorang hamba adalah <strong>tidak memilih sesuatu di atas Tuhannya</strong> dan tidak memastikan suatu keadaan pasti baik untuknya. Mengapa? Karena manusia itu <em>jahil (bodoh dan serba terbatas) dari segala sisi</em> — tidak mengetahui masa depan, tidak mengetahui akibat akhir, dan tidak mengetahui rahasia hikmah ketetapan Allah.<br><br>
            Bisa jadi ia membenci sesuatu padahal di dalamnya tersimpan keselamatan hakiki baginya, dan mencintai sesuatu padahal di dalamnya ada kehancuran baginya.
          </div>
          <div style="margin-top: 0.75rem; background: #1e3a8a; color: #dbeafe; padding: 0.85rem 1rem; border-radius: 8px; font-size: 0.85rem; line-height: 1.6;">
            <span style="font-family: 'Amiri', serif; font-size: 1.15rem; display: block; margin-bottom: 0.2rem;" dir="rtl">وَعَسَىٰ أَنْ تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَكُمْ ۖ وَعَسَىٰ أَنْ تُحِبُّوا شَيْئًا وَهُوَ شَرٌّ لَكُمْ</span>
            <em>"Boleh jadi kamu membenci sesuatu padahal ia amat baik bagimu, dan boleh jadi kamu menyukai sesuatu padahal ia amat buruk bagimu."</em> (QS. Al-Baqarah: 216)
          </div>
        </div>
      </div>

      <!-- Poin 3: Kalam Abu Hasan Asy-Syadzili -->
      <div class="syarah-container" style="margin-bottom: 2rem;">
        <h4 style="font-size: 1.05rem; color: #92400e; margin-bottom: 0.75rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">
          <i class="fa-solid fa-feather-pointed"></i> 3. Kalam Waliyullah: Sidi Abu al-Hasan asy-Syadzili
        </h4>
        <div style="background: linear-gradient(135deg, #fffbeb, #fef3c7); border: 1px solid #fcd34d; border-radius: 12px; padding: 1.25rem;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
            <span style="background: #92400e; color: #fef3c7; font-size: 0.75rem; font-weight: 700; padding: 3px 10px; border-radius: 20px;">Qaul Auliya</span>
            <span style="font-family: 'Amiri', serif; font-size: 0.95rem; color: #78350f;">رضي الله عنه</span>
          </div>
          <p class="arabic-text" style="font-family: 'Amiri', serif; font-size: 1.4rem; line-height: 2.1; direction: rtl; color: #78350f; text-align: right; margin-bottom: 0.75rem;">
            قَالَ سَيِّدِي أَبُو الْحَسَنِ الشَّاذِلِيُّ رَضِيَ اللهُ عَنْهُ: لَا تَخْتَرْ مِنْ أَمْرِكَ شَيْئًا وَاخْتَرْ أَنْ لَا تَخْتَارَ وَفِرَّ مِنْ ذَلِكَ الْمُخْتَارِ وَمِنْ فِرَارِكَ وَمِنْ كُلِّ شَيْءٍ إِلَى اللهِ عَزَّ وَجَلَّ وَرَبُّكَ يَخْلُقُ مَا يَشَاءُ وَيَخْتَارُ
          </p>
          <p style="font-size: 0.9rem; line-height: 1.7; color: #78350f; margin-bottom: 1rem;">
            <em>"Jangan pilih apa pun dari urusanmu sendiri, pilihlah untuk tidak memilih, larilah dari pilihan itu, dari pelarianmu, dan dari segala sesuatu menuju Allah Azza wa Jalla. 'Dan Tuhanmu menciptakan apa yang Dia kehendaki dan memilih-Nya' (QS. Al-Qashash: 68)."</em>
          </p>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.75rem;">
            <div style="background: rgba(255,255,255,0.7); border: 1px solid #fde68a; padding: 0.75rem; border-radius: 8px;">
              <strong style="color: #92400e; font-size: 0.8rem; display: block;">01 • لَا تَخْتَرْ</strong>
              <span style="font-size: 0.82rem; color: #78350f;">Jangan pilih apa pun dari urusanmu sendiri dengan mendikte kehendak Allah.</span>
            </div>
            <div style="background: rgba(255,255,255,0.7); border: 1px solid #fde68a; padding: 0.75rem; border-radius: 8px;">
              <strong style="color: #92400e; font-size: 0.8rem; display: block;">02 • اخْتَرْ أَنْ لَا تَخْتَارَ</strong>
              <span style="font-size: 0.82rem; color: #78350f;">Pilihlah untuk tidak memilih — serahkan penentuan pilihan sepenuhnya kepada Allah.</span>
            </div>
            <div style="background: rgba(255,255,255,0.7); border: 1px solid #fde68a; padding: 0.75rem; border-radius: 8px;">
              <strong style="color: #92400e; font-size: 0.8rem; display: block;">03 • فِرَّ إِلَى اللهِ</strong>
              <span style="font-size: 0.82rem; color: #78350f;">Larilah dari pilihanmu, dari pelarianmu, dan dari segalanya menuju Allah.</span>
            </div>
            <div style="background: rgba(255,255,255,0.7); border: 1px solid #fde68a; padding: 0.75rem; border-radius: 8px;">
              <strong style="color: #92400e; font-size: 0.8rem; display: block;">04 • وَرَبُّكَ يَخْلُقُ...</strong>
              <span style="font-size: 0.82rem; color: #78350f;">Tuhanmu yang menciptakan apa yang Dia kehendaki dan hanya Dia yang berhak memilih.</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Poin 4: Kisah Sidi Abu Abbas Al-Mursi -->
      <div class="syarah-container" style="margin-bottom: 2rem;">
        <h4 style="font-size: 1.05rem; color: var(--primary); margin-bottom: 0.75rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">
          <i class="fa-solid fa-heart-pulse"></i> 4. Kisah Sidi Abu al-Abbas al-Mursi: Hakikat Keselamatan ('Afiyah) Sejati
        </h4>
        <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.25rem;">
          <p style="font-size: 0.9rem; line-height: 1.7; color: var(--text-muted); margin-bottom: 1rem;">
            Dikisahkan seorang lelaki masuk menjenguk <strong>Sidi Abu al-Abbas al-Mursi</strong> saat beliau sedang terbaring sakit dan menahan rasa pedih. Lelaki itu mendoakan:
          </p>
          <div style="display: flex; flex-direction: column; gap: 0.75rem; border-left: 2px dashed var(--accent); padding-left: 1rem; margin-bottom: 1.25rem;">
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 0.75rem 1rem; border-radius: 8px;">
              <div style="font-size: 0.75rem; font-weight: 700; color: #1e3a8a;">TAMU BERKATA:</div>
              <div class="font-arab" style="font-size: 1.1rem; color: #1e3a8a;" dir="rtl">عَافَاكَ اللهُ يَا سَيِّدِي</div>
              <div style="font-size: 0.82rem; color: var(--text-muted);">"Semoga Allah menyembuhkanmu ('afiyah) wahai tuanku." — <em>Syekh diam dan tidak menjawabnya (سَكَتَ وَلَمْ يُجَاوِبْهُ).</em></div>
            </div>
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 0.75rem 1rem; border-radius: 8px;">
              <div style="font-size: 0.75rem; font-weight: 700; color: #1e3a8a;">TAMU MENGULANG:</div>
              <div class="font-arab" style="font-size: 1.1rem; color: #1e3a8a;" dir="rtl">اللهُ يُعَافِيْكَ يَا سَيِّدِي</div>
              <div style="font-size: 0.82rem; color: var(--text-muted);">"Semoga Allah memberi 'afiyah padamu wahai tuanku."</div>
            </div>
            <div style="background: #0f172a; color: #fde68a; padding: 1rem 1.25rem; border-radius: 8px;">
              <div style="font-size: 0.75rem; font-weight: 700; color: #c59b27;">JAWABAN MENGGETARKAN SYEKH:</div>
              <div class="font-arab" style="font-size: 1.25rem; line-height: 1.8;" dir="rtl">وَأَنَا مَا سَأَلْتُ اللهَ الْعَافِيَةَ؟! فَقَدْ سَأَلْتُهُ الْعَافِيَةَ وَالَّذِي أَنَا فِيْهِ هُوَ الْعَافِيَةُ!</div>
              <div style="font-size: 0.88rem; color: #f1f5f9; margin-top: 0.3rem;">
                "Apakah engkau mengira aku tidak pernah meminta 'afiyah kepada Allah?! Sungguh aku telah meminta 'afiyah kepada-Nya, dan apa yang aku alami sekarang inilah 'afiyah itu!"
              </div>
            </div>
          </div>

          <strong style="font-size: 0.88rem; color: var(--primary); display: block; margin-bottom: 0.5rem;">
            Penjelasan Syekh Mengenai Para Tokoh Pilihan yang Memohon 'Afiyah:
          </strong>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 0.75rem; margin-bottom: 1rem;">
            <div style="background: #fffbeb; border: 1px solid #fde68a; padding: 0.75rem; border-radius: 8px;">
              <span style="font-size: 0.75rem; font-weight: 700; color: #92400e; display: block;">Rasulullah ﷺ (Wafat Karena Racun)</span>
              <div class="font-arab" style="font-size: 0.95rem; color: #78350f;" dir="rtl">هَذَا رَسُوْلُ اللهِ ﷺ قَدْ سَأَلَ اللهَ الْعَافِيَةَ وَقَدْ قَالَ مَا زَالَتْ أُكْلَةُ خَيْبَرَ تُعَاوِدُنِي وَالْآنَ قَدْ قَطَعَتْ أَبْهَرِي</div>
              <div style="font-size: 0.78rem; color: #78350f; margin-top: 0.25rem;">Racun Khaibar terus berulang hingga memutus urat jantung beliau.</div>
            </div>
            <div style="background: #fffbeb; border: 1px solid #fde68a; padding: 0.75rem; border-radius: 8px;">
              <span style="font-size: 0.75rem; font-weight: 700; color: #92400e; display: block;">Sayyidina Umar RA (Syahid Ditikam)</span>
              <div class="font-arab" style="font-size: 0.95rem; color: #78350f;" dir="rtl">وَهَذَا سَيِّدُنَا عُمَرُ رَضِيَ اللهُ عَنْهُ سَأَلَ اللهَ الْعَافِيَةَ وَبَعْدَ ذَلِكَ مَاتَ مَطْعُوْنًا</div>
              <div style="font-size: 0.78rem; color: #78350f; margin-top: 0.25rem;">Memohon 'afiyah, namun wafatnya adalah mati ditikam.</div>
            </div>
            <div style="background: #fffbeb; border: 1px solid #fde68a; padding: 0.75rem; border-radius: 8px;">
              <span style="font-size: 0.75rem; font-weight: 700; color: #92400e; display: block;">Sayyidina Utsman RA (Syahid Disembelih)</span>
              <div class="font-arab" style="font-size: 0.95rem; color: #78350f;" dir="rtl">وَسَيِّدُنَا عُثْمَانُ سَأَلَ الْعَافِيَةَ وَبَعْدَ ذَلِكَ مَاتَ مَذْبُوْحًا</div>
              <div style="font-size: 0.78rem; color: #78350f; margin-top: 0.25rem;">Memohon 'afiyah, namun takdir penutupnya wafat disembelih.</div>
            </div>
            <div style="background: #fffbeb; border: 1px solid #fde68a; padding: 0.75rem; border-radius: 8px;">
              <span style="font-size: 0.75rem; font-weight: 700; color: #92400e; display: block;">Sayyidina Ali RA (Syahid Terbunuh)</span>
              <div class="font-arab" style="font-size: 0.95rem; color: #78350f;" dir="rtl">وَسَيِّدُنَا عَلِيٌّ سَأَلَ الْعَافِيَةَ وَبَعْدَ ذَلِكَ مَاتَ مَقْتُوْلًا</div>
              <div style="font-size: 0.78rem; color: #78350f; margin-top: 0.25rem;">Memohon 'afiyah, namun wafatnya adalah gugur terbunuh.</div>
            </div>
          </div>

          <div style="background: #0f2d25; color: #fef08a; padding: 1rem; border-radius: 8px;">
            <p class="arabic-text" style="font-family: 'Amiri', serif; font-size: 1.25rem; line-height: 1.9; direction: rtl; text-align: right; margin-bottom: 0.4rem;">
              فَإِذَا سَأَلْتَ اللهَ الْعَافِيَةَ فَاسْأَلْهُ الْعَافِيَةَ مِنْ حَيْثُ يَعْلَمُهَا لَكَ أَنَّهَا عَافِيَةٌ
            </p>
            <p style="font-size: 0.85rem; color: #f3f4f6; margin: 0;">
              <em>"Maka apabila engkau memohon 'afiyah kepada Allah, mintalah 'afiyah dari sisi yang Dia ketahui bahwa itu benar-benar 'afiyah bagimu — bukan menurut seleramu. Inilah puncak tawakal."</em>
            </p>
          </div>
        </div>
      </div>

      <!-- Poin 5: Adab Hamba: Taslim & Yaqin Ijabah -->
      <div class="syarah-container" style="margin-bottom: 2rem;">
        <h4 style="font-size: 1.05rem; color: var(--primary); margin-bottom: 0.75rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">
          <i class="fa-solid fa-hand-holding-heart"></i> 5. Adab Hamba dalam Doa: Taslim & Yaqin Ijabah
        </h4>
        <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; padding: 1.25rem;">
          <p class="arabic-text" style="font-family: 'Amiri', serif; font-size: 1.35rem; line-height: 2; direction: rtl; color: #14532d; text-align: right; margin-bottom: 0.75rem;">
            فَعَلَى الْعَبْدِ أَنْ يُسَلِّمَ نَفْسَهُ إِلَى مَوْلَاهُ وَيَعْتَقِدَ أَنَّ الْخِيَرَةَ لَهُ فِي جَمِيْعِ مَا بِهِ يَتَوَلَّاهُ وَإِنْ خَالَفَ ذَلِكَ مُرَادَهُ وَهَوَاهُ فَإِذَا دَعَا وَطَلَبَ مِنْ مَوْلَاهُ شَيْئًا يَرَى أَنَّ لَهُ فِيْهِ مَصْلَحَةً أَيْقَنَ بِالْإِجَابَةِ لَا مَحَالَةَ
          </p>
          <div style="font-size: 0.92rem; line-height: 1.8; color: #1f2937;">
            Wajib atas hamba untuk <strong>menyerahkan dirinya secara penuh (taslim)</strong> kepada Pelindungnya dan meyakini bahwa pilihan terbaik baginya ada pada segala apa yang Allah atur, meskipun berlawanan dengan keinginan dan hawa nafsunya. Jika ia berdoa meminta sesuatu yang ia lihat ada maslahat di dalamnya, maka ia harus <strong>yakin dengan ijabah tanpa keraguan</strong> — bukan yakin pada bentuk barang yang ia mau, melainkan yakin pada kepastian Allah memberikan yang terbaik menurut ilmu-Nya.
          </div>
        </div>
      </div>

      <!-- Poin 6: Dalil Ijabah Mutlak -->
      <div class="syarah-container" style="margin-bottom: 2rem;">
        <h4 style="font-size: 1.05rem; color: var(--primary); margin-bottom: 0.75rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">
          <i class="fa-solid fa-book-quran"></i> 6. Empat Dalil Ijabah Mutlak dalam Al-Qur'an & As-Sunnah
        </h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 0.85rem;">
          <div style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 1rem; border-radius: 8px; border-left: 3px solid #1e3a8a;">
            <div style="display:flex; justify-content:space-between; font-size:0.75rem; font-weight:700; color:#1e3a8a; margin-bottom:0.3rem;">
              <span>DALIL 1 • AL-QUR'AN</span><span>Ghafir: 60</span>
            </div>
            <p class="font-arab" style="font-size: 1.25rem; color: var(--primary); margin-bottom:0.3rem;" dir="rtl">وَقَالَ رَبُّكُمُ ادْعُوْنِي أَسْتَجِبْ لَكُمْ</p>
            <p style="font-size:0.8rem; color:var(--text-muted); line-height:1.5;"><em>"Dan Tuhanmu berfirman: Berdoalah kepada-Ku, niscaya akan Aku ijabah bagimu."</em> Janji mutlak tanpa syarat kecuali keikhlasan.</p>
          </div>
          <div style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 1rem; border-radius: 8px; border-left: 3px solid #0d4a3e;">
            <div style="display:flex; justify-content:space-between; font-size:0.75rem; font-weight:700; color:#0d4a3e; margin-bottom:0.3rem;">
              <span>DALIL 2 • AL-QUR'AN</span><span>Al-Baqarah: 186</span>
            </div>
            <p class="font-arab" style="font-size: 1.2rem; color: var(--primary); margin-bottom:0.3rem;" dir="rtl">وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيْبٌ أُجِيْبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ</p>
            <p style="font-size:0.8rem; color:var(--text-muted); line-height:1.5;"><em>"Dan apabila hamba-hamba-Ku bertanya tentang Aku, maka sesungguhnya Aku dekat. Aku mengijabah doa orang yang berdoa."</em></p>
          </div>
          <div style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 1rem; border-radius: 8px; border-left: 3px solid #b45309;">
            <div style="display:flex; justify-content:space-between; font-size:0.75rem; font-weight:700; color:#b45309; margin-bottom:0.3rem;">
              <span>DALIL 3 • HADITS JABIR RA</span><span>HR. At-Tirmidzi</span>
            </div>
            <p class="font-arab" style="font-size: 1.15rem; color: #78350f; margin-bottom:0.3rem;" dir="rtl">مَا مِنْ أَحَدٍ يَدْعُوْ بِدُعَاءٍ إِلَّا آتَاهُ اللهُ مَا سَأَلَ أَوْ كَفَّ عَنْهُ مِنَ السُّوْءِ مِثْلَهُ مَا لَمْ يَدْعُ بِإِثْمٍ أَوْ قَطِيْعَةِ رَحِمٍ</p>
            <p style="font-size:0.8rem; color:var(--text-muted); line-height:1.5;">Allah berikan apa yang ia minta atau <strong>dicegah darinya keburukan semisalnya</strong> selama tidak memohon dosa.</p>
          </div>
          <div style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 1rem; border-radius: 8px; border-left: 3px solid #15803d;">
            <div style="display:flex; justify-content:space-between; font-size:0.75rem; font-weight:700; color:#15803d; margin-bottom:0.3rem;">
              <span>DALIL 4 • HADITS ANAS RA</span><span>HR. Al-Hakim</span>
            </div>
            <p class="font-arab" style="font-size: 1.15rem; color: #14532d; margin-bottom:0.3rem;" dir="rtl">مَا مِنْ دَاعٍ يَدْعُوْ إِلَّا اسْتَجَابَ اللهُ لَهُ دَعْوَتَهُ أَوْ صَرَفَ عَنْهُ مِثْلَهَا سُوْءًا أَوْ حَطَّ مِنْ ذُنُوْبِهِ بِقَدْرِهَا مَا لَمْ يَدْعُ بِإِثْمٍ أَوْ قَطِيْعَةِ رَحِمٍ</p>
            <p style="font-size:0.8rem; color:var(--text-muted); line-height:1.5;">Diijabah doanya, dipalingkan keburukan semisalnya, atau <strong>digugurkan dosa-dosanya seukuran doa itu</strong>.</p>
          </div>
        </div>
      </div>

      <!-- Poin 7: Hakikat Ijabah -->
      <div class="syarah-container" style="margin-bottom: 2rem;">
        <h4 style="font-size: 1.05rem; color: var(--primary); margin-bottom: 0.75rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">
          <i class="fa-solid fa-gem"></i> 7. Hakikat Ijabah: Ketika Penolakan ('Man'u) Adalah Pemberian ('Atha')
        </h4>
        <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.25rem;">
          <p class="arabic-text" style="font-family: 'Amiri', serif; font-size: 1.35rem; line-height: 2.1; direction: rtl; color: #78350f; text-align: right; margin-bottom: 0.75rem;">
            فَإِذَنِ الْإِجَابَةُ الْمُطْلَقَةُ حَاصِلَةٌ لِكُلِّ دَاعٍ بِحَقٍّ حَسْبَمَا وَرَدَ الْوَعْدُ الصِّدْقُ إِلَّا أَنَّ الْإِجَابَةَ أَمْرُهَا إِلَى اللهِ تَعَالَى يُعَجِّلُهَا مَتَى يَشَاءُ وَقَدْ يَكُوْنُ الْمَنْعُ وَتَأْخِيْرُ الْعَطَاءِ إِجَابَةً وَعَطَاءً لِمَنْ فَهِمَ عَنِ اللهِ تَعَالَى فِي ذَلِكَ فَلَمْ يَيْأَسِ الْعَبْدُ مِنْ فَضْلِ اللهِ تَعَالَى إِذَا رَأَى مَنْعًا أَوْ تَأْخِيْرًا وَإِنْ أَلَحَّ فِي دُعَائِهِ وَسُؤَالِهِ
          </p>
          <p style="font-size: 0.92rem; line-height: 1.8; color: var(--text-main); margin: 0;">
            Ijabah mutlak pasti terjadi bagi setiap pendoa yang benar. Namun, <strong>bentuk dan waktunya adalah hak mutlak Allah</strong>. Terkadang penolakan dan penundaan itu sendiri adalah wujud pengabulan dan pemberian terbaik bagi orang yang paham dari Allah. Maka jangan pernah putus asa dari karunia Allah tatkala melihat penolakan atau penundaan, meski engkau telah bersungguh-sungguh dalam doa.
          </p>
        </div>
      </div>

      <!-- Poin 8: Ijabah di Akhirat -->
      <div class="syarah-container" style="margin-bottom: 2.5rem;">
        <h4 style="font-size: 1.05rem; color: #1e3a8a; margin-bottom: 0.75rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">
          <i class="fa-solid fa-cloud-sun"></i> 8. Ijabah di Akhirat: Tabungan Cahaya yang Mengagumkan
        </h4>
        <div style="background: linear-gradient(135deg, #0f172a, #1e293b); color: #f8fafc; border-radius: 12px; padding: 1.25rem;">
          <p class="arabic-text" style="font-family: 'Amiri', serif; font-size: 1.3rem; line-height: 2.1; direction: rtl; color: #dbeafe; text-align: right; margin-bottom: 0.75rem;">
            وَقَدْ يَكُوْنُ تَأْخِيْرُ ذَلِكَ إِلَى الْآخِرَةِ خَيْرًا لَهُ فَقَدْ جَاءَ فِي بَعْضِ الْأَخْبَارِ: يُبْعَثُ عَبْدٌ فَيَقُوْلُ اللهُ تَعَالَى أَلَمْ آمُرْكَ بِرَفْعِ حَوَائِجِكَ إِلَيَّ فَيَقُوْلُ بَلَى وَقَدْ رَفَعْتُهَا إِلَيْكَ فَيَقُوْلُ اللهُ تَعَالَى مَا سَأَلْتَ شَيْئًا إِلَّا أَجَبْتُكَ فِيْهِ وَلَكِنْ أَنْجَزْتُ لَكَ الْبَعْضَ فِي الدُّنْيَا وَمَا لَمْ أُنْجِزْهُ فِي الدُّنْيَا فَهُوَ مُدَّخَرٌ لَكَ فَخُذْهُ الْآنَ حَتَّى يَقُوْلُ ذَلِكَ الْعَبْدُ لَيْتَهُ لَمْ يُقْضَ لِي حَاجَةٌ فِي الدُّنْيَا
          </p>
          <div style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); padding: 1rem; border-radius: 8px; font-size: 0.88rem; line-height: 1.7; color: #f1f5f9;">
            <p style="margin-bottom:0.4rem;"><strong style="color:#fde68a;">Allah Ta'ala berfirman:</strong> <em>"Bukankah Aku telah memerintahkanmu mengangkat segala hajatmu kepada-Ku?"</em></p>
            <p style="margin-bottom:0.4rem;"><strong style="color:#93c5fd;">Hamba menjawab:</strong> <em>"Benar ya Rabb, dan telah kuangkat semua kepada-Mu."</em></p>
            <p style="margin-bottom:0.4rem;"><strong style="color:#fde68a;">Allah Ta'ala berfirman:</strong> <em>"Tidaklah engkau meminta sesuatu melainkan telah Aku ijabah. Sebagian telah Kutunaikan di dunia, dan apa yang belum Kutunaikan maka itu simpanan pahala bagimu, ambillah sekarang!"</em></p>
            <p style="margin:0; color:#86efac;"><strong>Hamba menangis takjub seraya berkata:</strong> <em>"Duhai, seandainya dahulu tidak satu pun hajat dan doaku ditunaikan di dunia!"</em> — karena ia melihat betapa agungnya pahala doa yang tertunda di akhirat.</p>
          </div>
        </div>
      </div>

      <!-- ================= BAGIAN 2: RAHASIA ISTI'JAL & MAQAM IDTHIRAR ================= -->
      <div class="meta-quote-pill" style="border-left: 4px solid #8b1e18; background: rgba(139, 30, 24, 0.06); padding: 1.25rem; border-radius: 8px; margin-bottom: 1.5rem;">
        <span class="meta-badge-top" style="display:inline-block; margin-bottom: 0.5rem; background: rgba(139, 30, 24, 0.12); color: #8b1e18; border-color: #8b1e18;">BAGIAN 2 • RAHASIA ISTI'JAL & IDTHIRAR</span>
        <h3 style="font-size: 1.2rem; color: #8b1e18; margin-bottom: 0.5rem;">Bahaya Ketergesa-gesaan dan Maqam Kepasrahan Tertinggi</h3>
        <p style="font-size: 0.92rem; line-height: 1.7; color: var(--text-main);">
          Pada bagian kedua syarah ini, Al-Imam Ibnu 'Abbad membedah penyakit batin yang paling sering merusak doa hamba: <strong>isti'jal (tergesa-gesa menuntut hasil)</strong>, hikmah penundaan doa para nabi puluhan tahun, rahasia di balik cinta Allah kepada orang yang merengek (<em>al-mulihhin</em>), hingga puncak kunci ijabah: <strong>keadaan idthirar (kefakiran mutlak)</strong>.
        </p>
      </div>

      <!-- Poin 01 Bagian 2: Larangan Isti'jal -->
      <div class="syarah-container" style="margin-bottom: 2rem;">
        <h4 style="font-size: 1.05rem; color: #8b1e18; margin-bottom: 0.75rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">
          <i class="fa-solid fa-triangle-exclamation"></i> 01. Peringatan Keras: Larangan Isti'jal dalam Doa
        </h4>
        <div style="background: linear-gradient(135deg, #fff5f4, #ffeae9); border: 1px solid rgba(192, 57, 43, 0.2); border-radius: 12px; padding: 1.25rem;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
            <span style="font-size:0.75rem; font-weight:700; color:#8b1e18; letter-spacing:1px;">HADITS SHAHIH</span>
            <span style="font-size:0.8rem; color:#8b1e18; font-weight:600;">HR. Bukhari & Muslim</span>
          </div>
          <p class="arabic-text" style="font-family: 'Amiri', serif; font-size: 1.4rem; line-height: 2; direction: rtl; color: #0f1d32; text-align: right; margin-bottom: 0.75rem;">
            يُسْتَجَابُ لِأَحَدِكُمْ مَا لَمْ يَعْجَلْ فَيَقُوْلُ قَدْ دَعَوْتُ فَلَمْ يُسْتَجَبْ لِي
          </p>
          <p style="font-size: 0.92rem; line-height: 1.75; color: #1a2a44; margin-bottom: 1rem;">
            <strong>Terjemahan Terperinci:</strong><br>
            <em>"Akan diijabah (dikabulkan) doa salah seorang di antara kalian selama ia tidak tergesa-gesa (isti'jal) dengan berkata: 'Aku telah memanjatkan doa, tetapi doaku tidak kunjung dikabulkan bagiku!'"</em>
          </p>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.75rem;">
            <div style="background: #fff; border: 1px solid rgba(139,30,24,0.15); padding: 0.75rem; border-radius: 8px;">
              <strong style="color: #8b1e18; font-size: 0.8rem; display: block;">MAKNA ISTI'JAL</strong>
              <span style="font-size: 0.82rem; color: #1a2a44; line-height: 1.5;">Menganggap doa tertolak hanya karena belum melihat hasil instan, lalu berhenti berdoa dan berburuk sangka kepada Allah.</span>
            </div>
            <div style="background: #fff; border: 1px solid rgba(139,30,24,0.15); padding: 0.75rem; border-radius: 8px;">
              <strong style="color: #8b1e18; font-size: 0.8rem; display: block;">AKIBAT FATAL</strong>
              <span style="font-size: 0.82rem; color: #1a2a44; line-height: 1.5;">Terhalang dari ijabah karena hamba itu sendiri yang memutus tali pengharapan dengan keluh kesah isti'jal-nya.</span>
            </div>
            <div style="background: #fff; border: 1px solid rgba(139,30,24,0.15); padding: 0.75rem; border-radius: 8px;">
              <strong style="color: #8b1e18; font-size: 0.8rem; display: block;">ADAB SALIK</strong>
              <span style="font-size: 0.82rem; color: #1a2a44; line-height: 1.5;">Tetap istiqamah berdoa tanpa menentukan target waktu kepada Allah, seraya ridha penuh pada pilihan-Nya.</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Poin 02 Bagian 2: Kisah 40 Tahun Musa & Harun -->
      <div class="syarah-container" style="margin-bottom: 2rem;">
        <h4 style="font-size: 1.05rem; color: var(--primary); margin-bottom: 0.75rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">
          <i class="fa-solid fa-hourglass-half"></i> 02. Inti Hikmah: 40 Tahun Antara Doa Nabi Musa & Tenggelamnya Firaun
        </h4>
        <div style="background: #0f1d32; color: #fdfbf6; border-radius: 12px; padding: 1.25rem; margin-bottom: 1rem;">
          <p style="font-size: 0.88rem; line-height: 1.7; color: rgba(255,255,255,0.7); margin-bottom: 1rem;">
            Allah SWT berfirman: <em>قَدْ أُجِيبَتْ</em> — "Sungguh telah diijabah doa kamu berdua". Namun realisasi binasanya Firaun di alam nyata baru terjadi <strong>40 tahun kemudian!</strong> Ini adalah dalil terkuat akan bahaya isti'jal.
          </p>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin-bottom: 1rem;">
            <div style="background: #12243d; border: 1px solid rgba(42, 74, 112, 0.5); padding: 1rem; border-radius: 8px;">
              <span style="font-size: 0.75rem; font-weight: 700; color: var(--accent); display: block; margin-bottom: 0.3rem;">DOA MUSA & HARUN (QS. YUNUS: 88)</span>
              <div class="font-arab" style="font-size: 1.2rem; color: #fff; line-height: 1.8;" dir="rtl">رَبَّنَا اطْمِسْ عَلَىٰ أَمْوَالِهِمْ وَاشْدُدْ عَلَىٰ قُلُوْبِهِمْ فَلَا يُؤْمِنُوْا حَتَّىٰ يَرَوُا الْعَذَابَ الْأَلِيْمَ</div>
              <div style="font-size: 0.78rem; color: rgba(255,255,255,0.7); margin-top: 0.4rem;">"Ya Rabb kami, hapuskanlah harta mereka dan kunci matilah hati mereka, maka mereka tidak beriman hingga melihat azab yang pedih."</div>
            </div>

            <div style="background: #12243d; border: 1px solid rgba(201, 168, 106, 0.3); padding: 1rem; border-radius: 8px;">
              <span style="font-size: 0.75rem; font-weight: 700; color: #e8cda0; display: block; margin-bottom: 0.3rem;">JAWABAN ALLAH (QS. YUNUS: 89)</span>
              <div class="font-arab" style="font-size: 1.2rem; color: #ffe9c2; line-height: 1.8;" dir="rtl">قَالَ قَدْ أُجِيْبَتْ دَّعْوَتُكُمَا فَاسْتَقِيْمَا وَلَا تَتَّبِعَانِّ سَبِيْلَ الَّذِيْنَ لَا يَعْلَمُوْنَ</div>
              <div style="font-size: 0.78rem; color: rgba(255,255,255,0.7); margin-top: 0.4rem;">"Sesungguhnya telah diperkenankan doa kamu berdua, maka tetaplah kamu berdua pada jalan yang lurus (istiqamah) dan janganlah sekali-kali mengikuti jalan orang-orang yang tidak mengetahui."</div>
            </div>
          </div>

          <!-- Penegasan Jarak 40 Tahun -->
          <div style="background: rgba(201, 168, 106, 0.15); border: 1px solid rgba(201, 168, 106, 0.3); padding: 0.85rem 1rem; border-radius: 8px; margin-bottom: 1rem;">
            <p class="arabic-text" style="font-family: 'Amiri', serif; font-size: 1.25rem; color: #ffe9c2; text-align: right; margin-bottom: 0.3rem;" dir="rtl">
              وَكَانَ بَيْنَ قَوْلِ اللهِ لَهُمَا قَدْ أُجِيْبَتْ دَعْوَتُكُمَا وَهَلَاكِ فِرْعَوْنَ أَرْبَعُوْنَ سَنَةً
            </p>
            <p style="font-size: 0.85rem; color: #e8cda0; margin: 0;">
              <em>"Dan jarak masa antara firman Allah kepada keduanya: 'Sungguh telah diijabah doa kalian berdua' dengan tenggelamnya Firaun adalah <strong>empat puluh tahun lamanya!</strong>"</em>
            </p>
          </div>

          <!-- Tafsir Sayyidi Abu al-Hasan asy-Syadzili -->
          <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 1rem; border-radius: 8px;">
            <strong style="color: var(--accent); font-size: 0.82rem; display: block; margin-bottom: 0.3rem;">TAFSIR SAYYIDI ABU HASAN ASY-SYADZILI رضي الله عنه:</strong>
            <p class="arabic-text" style="font-family: 'Amiri', serif; font-size: 1.25rem; line-height: 1.95; color: #ffe9c2; text-align: right; margin-bottom: 0.5rem;" dir="rtl">
              فِي قَوْلِهِ فَاسْتَقِيْمَا أَيْ عَلَى عَدَمِ اسْتِعْجَالِ مَا طَلَبْتُمَا وَلَا تَتَّبِعَانِّ سَبِيْلَ الَّذِيْنَ لَا يَعْلَمُوْنَ وَهُمُ الَّذِيْنَ يَسْتَعْجِلُوْنَ الْإِجَابَةَ
            </p>
            <p style="font-size: 0.85rem; line-height: 1.6; color: rgba(255,255,255,0.8); margin: 0;">
              Maksud firman-Nya <em>فَاسْتَقِيْمَا</em> adalah: <strong>istiqamahlah di atas ketidaktergesa-gesaan atas apa yang kalian berdua minta</strong>, dan janganlah mengikuti jalan orang-orang yang tidak mengetahui — yaitu mereka yang tergesa-gesa (isti'jal) menuntut ijabah lahiriah!
            </p>
          </div>
        </div>
      </div>

      <!-- Poin 03 & 04 Bagian 2: Al-Mulihhin & Bahaya Disegerakan -->
      <div class="syarah-container" style="margin-bottom: 2rem;">
        <h4 style="font-size: 1.05rem; color: #7a5a24; margin-bottom: 0.75rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">
          <i class="fa-solid fa-heart"></i> 03 & 04. Kemuliaan Al-Mulihhin dan Bahaya Doa yang Terlalu Cepat Diberi
        </h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(270px, 1fr)); gap: 1rem; margin-bottom: 1rem;">
          <!-- Kemuliaan Al-Mulihhin -->
          <div style="background: linear-gradient(135deg, #fffaf0, #fff0c6); border: 1px solid rgba(201, 168, 106, 0.4); padding: 1.15rem; border-radius: 12px;">
            <span style="font-size: 0.75rem; font-weight: 700; color: #7a5a24; display: block; margin-bottom: 0.3rem;">KEMULIAAN AL-MULIHHIN (BOX EMAS)</span>
            <p class="font-arab" style="font-size: 1.3rem; color: #0f1d32; text-align: center; margin-bottom: 0.4rem;" dir="rtl">
              إِنَّ اللهَ يُحِبُّ الْمُلِحِّيْنَ فِي الدُّعَاءِ
            </p>
            <p style="font-size: 0.82rem; color: #7a5a24; line-height: 1.6; margin-bottom: 0.5rem;">
              <em>"Sesungguhnya Allah mencintai orang-orang yang terus-menerus mendesak (al-mulihhin) dalam berdoa."</em>
            </p>
            <div style="background: #0f1d32; color: #e8cda0; padding: 0.75rem; border-radius: 8px; font-size: 0.8rem; line-height: 1.6;">
              <strong>Hadits Qudsi Riwayat Sahabat Anas RA:</strong><br>
              <span class="font-arab" style="display:block; color:#ffe9c2; font-size:1rem; margin: 0.3rem 0;" dir="rtl">قَالَ جِبْرِيْلُ يَا رَبِّ عَبْدُكَ فُلَانٌ اِقْضِ لَهُ حَاجَتَهُ فَيَقُوْلُ دَعُوْا عَبْدِي فَإِنِّي أُحِبُّ أَنْ أَسْمَعَ صَوْتَهُ</span>
              Jibril AS memohon: <em>"Ya Rabb, hamba-Mu si fulan, tunaikanlah hajatnya!"</em> Namun Allah berfirman: <em>"Biarkan hamba-Ku, karena sungguh Aku sangat cinta mendengar suaranya (rintihannya)."</em> Penundaan dari Allah adalah jamuan cinta.
            </div>
          </div>

          <!-- Bahaya Disegerakan Karena Dibenci -->
          <div style="background: #1a1a1a; color: #f8fafc; border: 1px solid #333; padding: 1.15rem; border-radius: 12px;">
            <span style="font-size: 0.75rem; font-weight: 700; color: #ff8a7a; display: block; margin-bottom: 0.3rem;">PERINGATAN GELAP: BAHAYA DISEGERAKAN</span>
            <p class="font-arab" style="font-size: 1.2rem; color: #ffcec5; line-height: 1.8; text-align: right; margin-bottom: 0.4rem;" dir="rtl">
              وَمُقْتَضَى هَذَا أَنَّ مِنَ النَّاسِ مَنْ يُعَجِّلُ اللهُ لَهُ نَوَالَ حَاجَتِهِ لِكَرَاهَةِ صَوْتِهِ، فَلْيَكُنِ الْعَبْدُ خَائِفًا مِنْ ذَلِكَ عِنْدَ تَعْجِيْلِ إِجَابَةِ دُعَائِهِ
            </p>
            <p style="font-size: 0.82rem; color: rgba(255,255,255,0.7); line-height: 1.6; margin-bottom: 0.5rem;">
              <strong>Konsekuensi Logis yang Menakutkan:</strong><br>
              Ada sebagian manusia yang Allah segerakan pemberian hajatnya <strong>bukan karena cinta, tetapi karena Allah benci mendengar suaranya</strong> dan ingin hamba itu lekas pergi menjauh!
            </p>
            <div style="background: rgba(192, 57, 43, 0.2); border: 1px solid rgba(192, 57, 43, 0.3); padding: 0.75rem; border-radius: 8px; font-size: 0.78rem; color: #ffcec5; line-height: 1.5;">
              Maka hendaklah seorang hamba selalu waspada dan takut ketika doanya langsung cepat terkabul — jangan-jangan hal itu adalah bentuk pemutusan hubungan, bukan pemuliaan.
            </div>
          </div>
        </div>
      </div>

      <!-- Poin 05 Bagian 2: Kalam Al-Mahdawi -->
      <div class="syarah-container" style="margin-bottom: 2rem;">
        <h4 style="font-size: 1.05rem; color: #1e3a8a; margin-bottom: 0.75rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">
          <i class="fa-solid fa-compass"></i> 05. Kalam Syekh Abu Muhammad al-Mahdawi رضي الله عنه
        </h4>
        <div style="background: linear-gradient(135deg, #0f1d32, #162d4f); border: 1px solid #2a4a70; border-radius: 12px; padding: 1.25rem; color: #f8fafc;">
          <p class="arabic-text" style="font-family: 'Amiri', serif; font-size: 1.35rem; line-height: 2; direction: rtl; color: #d8e6ff; text-align: right; margin-bottom: 1rem;">
            كُلُّ مَنْ لَمْ يَكُنْ فِي دُعَائِهِ تَارِكًا لِاخْتِيَارِهِ وَرَاضِيًا بِاخْتِيَارِ الْحَقِّ فَهُوَ مُسْتَدْرَجٌ وَهُوَ مِمَّنْ قِيْلَ لَهُ اِقْضُوْا حَاجَتَهُ فَإِنِّي أَكْرَهُ أَنْ أَسْمَعَ صَوْتَهُ، فَإِذَا كَانَ فِي دُعَائِهِ مَعَ اخْتِيَارِ الْحَقِّ تَعَالَى لَا مَعَ اخْتِيَارِ نَفْسِهِ كَانَ مُجَابًا وَإِنْ لَمْ يُعْطَ وَالْأَعْمَالُ بِخَوَاتِيْمِهَا
          </p>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.75rem;">
            <div style="background: rgba(139, 30, 24, 0.2); border: 1px solid rgba(192, 57, 43, 0.3); padding: 0.85rem; border-radius: 8px;">
              <strong style="color: #ff8a7a; font-size: 0.82rem; display: block; margin-bottom: 0.25rem;">KONDISI MUSTADRAJ (TERPERANGKAP)</strong>
              <span style="font-size: 0.8rem; color: rgba(255,255,255,0.8); line-height: 1.5;">Siapa yang dalam doanya tidak meninggalkan pilihan hawa nafsunya dan tidak ridha dengan pilihan Allah, maka ia sedang diistidraj (diulur menuju kehancuran) meski permintaannya terpenuhi.</span>
            </div>
            <div style="background: rgba(201, 168, 106, 0.15); border: 1px solid rgba(201, 168, 106, 0.3); padding: 0.85rem; border-radius: 8px;">
              <strong style="color: #fde68a; font-size: 0.82rem; display: block; margin-bottom: 0.25rem;">KONDISI MUJAB (SEJATI DIKABULKAN)</strong>
              <span style="font-size: 0.8rem; color: rgba(255,255,255,0.8); line-height: 1.5;">Jika ia bersama pilihan Allah, bukan bersama pilihan nafsunya, maka ia hakikatnya adalah <strong>MUJAB (telah diijabah)</strong> walaupun secara kasat mata barang yang diminta belum diberikan. <em>Wal a'maalu bi khawaatiimihaa</em> (Amal itu bergantung pada penutupnya).</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Poin 06 Bagian 2: Syarat Ijabah: Idthirar -->
      <div class="syarah-container" style="margin-bottom: 2rem;">
        <h4 style="font-size: 1.05rem; color: #14532d; margin-bottom: 0.75rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">
          <i class="fa-solid fa-anchor"></i> 06. Syarat Tersembunyi Ijabah: Menunggu Wujudnya Idthirar (الاضطرار)
        </h4>
        <div style="background: linear-gradient(135deg, #f0faf3, #e6f5e9); border: 1px solid rgba(46, 125, 74, 0.25); border-radius: 12px; padding: 1.25rem;">
          <p class="arabic-text" style="font-family: 'Amiri', serif; font-size: 1.35rem; line-height: 2; direction: rtl; color: #0f2a1a; text-align: right; margin-bottom: 0.75rem;">
            وَقَدْ تَكُوْنُ الْإِجَابَةُ مُرَتَّبَةً عَلَى شُرُوْطٍ لَا عِلْمَ لِلدَّاعِي بِهَا فَتَتَأَخَّرُ لِعَدَمِ وُقُوْعِ ذَلِكَ أَوْ بَعْضِهِ وَذَلِكَ مِثْلُ وُجُوْدِ الِاضْطِرَارِ
          </p>
          <p style="font-size: 0.92rem; line-height: 1.75; color: #0f2a1a; margin-bottom: 1rem;">
            <strong>Penjelasan Rahasia Penundaan:</strong><br>
            Terkadang pengabulan suatu doa terikat pada syarat-syarat batin yang sama sekali tidak diketahui oleh orang yang berdoa. Maka ijabah tertunda semata-mata karena syarat tersebut belum terwujud, seperti <strong>wujudnya rasa idthirar (keterdesakan dan kehancuran hati yang mutlak)</strong>.
          </p>

          <div style="background: #0f2a1a; color: #fff; padding: 1rem; border-radius: 8px; text-align: center; margin-bottom: 1rem;">
            <span style="font-size: 0.75rem; color: #a8e0b6; letter-spacing: 1px;">DALIL AYAT IDTHIRAR (QS. AN-NAML: 62)</span>
            <div class="font-arab" style="font-size: 1.4rem; color: #fde68a; margin: 0.4rem 0;" dir="rtl">أَمَّنْ يُجِيْبُ الْمُضْطَرَّ إِذَا دَعَاهُ</div>
            <div style="font-size: 0.85rem; color: rgba(255,255,255,0.7);">"Atau siapakah yang mengijabah orang yang dalam keadaan terdesak (mudhtharr) apabila ia berdoa kepada-Nya?"</div>
          </div>

          <!-- Kalam Arif & Definisi Mudhtharr -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.75rem; margin-bottom: 1rem;">
            <div style="background: #fff; border: 1px solid rgba(46, 125, 74, 0.2); padding: 0.85rem; border-radius: 8px;">
              <strong style="color: #2e7d4a; font-size: 0.82rem; display: block; margin-bottom: 0.25rem;">KALAM AHLI MA'RIFAT:</strong>
              <div class="font-arab" style="font-size: 1.1rem; color: #0f2a1a;" dir="rtl">إِذَا أَرَادَ اللهُ أَنْ يَسْتَجِيْبَ دُعَاءَ عَبْدٍ رَزَقَهُ الِاضْطِرَارَ فِي الدُّعَاءِ</div>
              <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.25rem;">"Jika Allah menghendaki untuk mengijabah doa seorang hamba, Allah menganugerahinya rezeki berupa rasa idthirar dalam berdoa."</div>
            </div>

            <div style="background: #0f2a1a; color: #fff; border: 1px solid rgba(46, 125, 74, 0.3); padding: 0.85rem; border-radius: 8px;">
              <strong style="color: #a8e0b6; font-size: 0.82rem; display: block; margin-bottom: 0.25rem;">DEFINISI AL-MUDHTHARR SEJATI:</strong>
              <div class="font-arab" style="font-size: 1.15rem; color: #fde68a;" dir="rtl">الْمُضْطَرُّ الَّذِي إِذَا رَفَعَ إِلَى اللهِ يَدَهُ لَمْ يَرَ لِنَفْسِهِ عَمَلًا</div>
              <div style="font-size: 0.8rem; color: rgba(255,255,255,0.8); margin-top: 0.25rem;">Mudhtharr adalah orang yang tatkala mengangkat kedua tangannya kepada Allah, <strong>ia sama sekali tidak memandang dirinya memiliki amal perbuatan apa pun untuk diandalkan!</strong> Hampa, kosong, fakir, hanya Allah.</div>
            </div>
          </div>

          <div style="background: #fff7d6; border: 1px solid rgba(201, 168, 106, 0.4); padding: 0.85rem 1rem; border-radius: 8px;">
            <p class="arabic-text" style="font-family: 'Amiri', serif; font-size: 1.2rem; color: #5a3d00; text-align: right; margin-bottom: 0.25rem;" dir="rtl">
              وَهَذَا حَالٌ شَرِيْفٌ وَمَقَامٌ مَنِيْفٌ يَعِزُّ عَلَى أَكْثَرِ النَّاسِ الْوُصُوْلُ إِلَيْهِ فَكَيْفَ يَتَحَقَّقُ مِمَّا يَنْبَنِي عَلَيْهِ
            </p>
            <p style="font-size: 0.82rem; color: #5a3d00; margin: 0; line-height: 1.6;">
              <em>"Dan ini adalah keadaan yang sangat mulia dan maqam yang agung, yang sangat sulit dicapai oleh kebanyakan manusia. Maka bagaimana mungkin ia menuntut terwujudnya hal yang dibangun di atasnya (yakni ijabah mutlak) jika pondasinya (idthirar) belum ia capai?!"</em>
            </p>
          </div>
        </div>
      </div>

      <!-- Poin 07: Penghubung ke Hikmah Berikutnya -->
      <div style="background: #0f1d32; border: 1px solid rgba(201, 168, 106, 0.25); border-radius: 12px; padding: 1.25rem; color: #fdfbf6; margin-bottom: 2rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
          <span style="font-size:0.75rem; font-weight:700; color:var(--accent); letter-spacing:1px;">07 • PENGHUBUNG KE HIKMAH BERIKUTNYA</span>
          <span style="font-size:0.8rem; color:#e8cda0; font-weight:600;">Hikmah #07 Menanti</span>
        </div>
        <p class="arabic-text" style="font-family: 'Amiri', serif; font-size: 1.3rem; color: #e8cda0; text-align: right; margin-bottom: 0.5rem;" dir="rtl">
          وَفِي الْمَسْأَلَةِ الَّتِي تَأْتِي بِأَثَرِ هَذَا تَنْبِيْهٌ عَلَى هَذَا الْمَعْنَى
        </p>
        <p style="font-size: 0.85rem; color: rgba(255,255,255,0.7); line-height: 1.6; margin: 0;">
          "Dan pada masalah yang akan datang setelah ini (Hikmah ke-07) terdapat penegasan serta peringatan atas makna ini — yakni makna idthirar dan syarat-syarat ijabah yang tersembunyi."
        </p>
      </div>

      <!-- Ringkasan Lengkap 9 Kaidah Inti Hikmah 06 -->
      <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.25rem; margin-bottom: 1rem;">
        <h4 style="font-size: 0.95rem; color: var(--primary); margin-bottom: 0.75rem; font-weight: 700;">
          <i class="fa-solid fa-list-check"></i> Rangkuman 9 Kaidah Inti Hikmah Ke-06 (Bagian 1 & 2):
        </h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 0.6rem; font-size: 0.82rem;">
          <div style="background: var(--bg-main); padding: 0.6rem 0.8rem; border-radius: 6px;"><strong>1. Larangan Isti'jal:</strong> Jangan berkata <em>"Aku sudah berdoa tapi tak dikabulkan"</em> karena membatalkan ijabah.</div>
          <div style="background: var(--bg-main); padding: 0.6rem 0.8rem; border-radius: 6px;"><strong>2. Teladan 40 Tahun:</strong> Doa Nabi Musa & Harun diijabah seketika di Lauh Mahfuzh, namun realisasinya berjarak 40 tahun.</div>
          <div style="background: var(--bg-main); padding: 0.6rem 0.8rem; border-radius: 6px;"><strong>3. Makna Fastiqima:</strong> Istiqamahlah di atas tidak tergesa-gesa; orang yang isti'jal adalah yang tidak mengetahui tadbir Allah.</div>
          <div style="background: var(--bg-main); padding: 0.6rem 0.8rem; border-radius: 6px;"><strong>4. Cinta pada Al-Mulihhin:</strong> Allah sangat mencintai rintihan hamba yang mengulang-ulang doa dengan penuh harap.</div>
          <div style="background: var(--bg-main); padding: 0.6rem 0.8rem; border-radius: 6px;"><strong>5. Hadits Qudsi Jibril:</strong> Penundaan bisa terjadi karena Allah rindu mendengar tangis dan suara hamba-Nya di sepertiga malam.</div>
          <div style="background: var(--bg-main); padding: 0.6rem 0.8rem; border-radius: 6px;"><strong>6. Bahaya Disegerakan:</strong> Ada hamba yang cepat diberi semata-mata karena Allah murka dan benci mendengar suaranya.</div>
          <div style="background: var(--bg-main); padding: 0.6rem 0.8rem; border-radius: 6px;"><strong>7. Rumus Al-Mahdawi:</strong> Yang ngotot pada pilihan nafsunya adalah mustadraj; yang ridha pada pilihan Allah adalah mujab meski tak diberi.</div>
          <div style="background: var(--bg-main); padding: 0.6rem 0.8rem; border-radius: 6px;"><strong>8. Kunci Idthirar:</strong> Ijabah terikat pada rasa keterdesakan mutlak (<em>mudhtharr</em>), yakni hamba yang merasa tak punya amal apa pun.</div>
          <div style="background: var(--bg-main); padding: 0.6rem 0.8rem; border-radius: 6px;"><strong>9. Tabungan Akhirat:</strong> Hajat yang disimpan di akhirat jauh lebih indah dan kekal daripada terkabulnya di alam dunia yang fana.</div>
        </div>
      </div>

      <div style="text-align: center; font-size: 0.8rem; color: var(--text-muted); padding-top: 0.5rem;">
        <em>تَمَّتْ حِكْمَةُ ٠٦ كَامِلَةً بِحَمْدِ اللهِ • Selesai Syarah Hikmah Ke-06 Utuh (Bagian 1 & Bagian 2)</em>
      </div>
    `;
  },
};
