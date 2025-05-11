    let acilanKartlar = [];
    let kartAdlari = ["ts", "ts2", "bs", "bs2", "ads", "ads2", "krgmrk", "krgmrk2", "kysr", "kysr2", "alyn", "alyn2", "gs", "gs2", "fb", "fb2"];
    let skorElemani = document.getElementById("skor");
    let skor = 0;
    let username = prompt("İsminizi girin");
    while (username == "") {
        alert("Lütfen ismi boş bırakmayınız!");
        username = prompt("İsminizi girin");
    }
    if (document.querySelectorAll('.butonlar[style="display: none;"]').length === kartAdlari.length) {
        oyunKazanıldı();
    }
    let isim = document.getElementById("username");
    isim.innerText = username;
    function kartlariKaristir() {
        for (let i = kartAdlari.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [kartAdlari[i], kartAdlari[j]] = [kartAdlari[j], kartAdlari[i]];
        }
    }
    let sureElemani = document.getElementById("sure");
    let kalanSure = 60; // saniye cinsinden sayacın başlangıç değeri
    let oyunBitti = false; // Oyunun bitip bitmediğini kontrol etmek için bir değişken
    function sayaciGuncelle() {
        if (!oyunBitti) {
            // Sayacı güncelle
            
            kalanSure--;

            // Eğer sayac sıfıra ulaştıysa, oyunu bitir
            if (kalanSure === 0) {
                oyunBitti = true;
                clearInterval(sureInterval); // Zamanlayıcıyı durdur
                alert("Süre doldu! Oyun bitti.");
            }

            // Sayacı HTML'de görüntüle
            sureElemani.innerText = kalanSure + " saniye";
            if (document.querySelectorAll('.butonlar[style="display: none;"]').length === kartAdlari.length) {
                oyunKazanıldı();
            }
        }
        
    }
    // 1000 milisaniyede bir (1 saniyede bir) sayaciGuncelle fonksiyonunu çağıran bir zamanlayıcı oluştur
    let sureInterval = setInterval(sayaciGuncelle, 1000);
    function oyunKazanıldı(){
        oyunBitti = true; // Oyunu bitir
        clearInterval(sureInterval); // Zamanlayıcıyı durdur
        alert("Tebrikler! Oyunu tamamladınız! Toplam Skor: " + skor);
    }
    
    function kartiAc(btnId, kartAdi) {
        if (!oyunBitti) { // Oyun bitmediyse kartı aç
            let imgElemani = document.getElementById(btnId).querySelector('img');
           // Kartın daha önce açılıp açılmadığını ve tıklanabilir olup olmadığını kontrol et
            if (!imgElemani.classList.contains("animate-fade-in") && imgElemani.style.visibility !== "hidden") {
                if (acilanKartlar.length === 1 || acilanKartlar.length === 0) {
                    if (kartAdi.charAt(kartAdi.length - 1) === "2") {
                        imgElemani.src = `resim/${kartAdi.slice(0, -1)}.png`;
                        acilanKartlar.push({
                            btnId,
                            kartAdi,
                            imgElemani
                        });
                    } else {
                        imgElemani.src = `resim/${kartAdi}.png`;
                        acilanKartlar.push({
                            btnId,
                            kartAdi,
                            imgElemani
                        });
                    }
                   imgElemani.classList.add("animate-fade-in");
                   // Tıklanabilirliği kapat
                    imgElemani.classList.add("non-clickable");
                }

                // Tüm kartlar açıldı mı kontrolü
                

                // Eşleşme kontrolü
                if (acilanKartlar.length === 2) {
                    setTimeout(function () {
                        kartlariKapat();
                    }, 640);
                }
            }
        }
        
    }

    function kartlariKapat() {
        if (acilanKartlar[0].imgElemani.src === acilanKartlar[1].imgElemani.src && acilanKartlar[0].btnId !== acilanKartlar[1].btnId) {
            document.getElementById(acilanKartlar[0].btnId).style.display = "none";
            document.getElementById(acilanKartlar[1].btnId).style.display = "none";
            acilanKartlar = [];
            skor += 125;
            skorElemani.innerText = skor;
        } else {
            // Eşleşme yoksa kartları kapat
            acilanKartlar.forEach(item => {
                item.imgElemani.src = "resim/trendyol-super-lig-dikey.png";
                item.imgElemani.classList.remove("animate-fade-in");
                // Tıklanabilirliği geri aç
                item.imgElemani.classList.remove("non-clickable");
            });
            acilanKartlar = [];
        }
    }


    // Oyunu başlat
    kartlariKaristir();
    // Buton dinleyicilerini ekleyin
    document.getElementById("tsbtn").addEventListener('click', function () {
        kartiAc("tsbtn", kartAdlari[0]);
    });
    document.getElementById("ts2btn").addEventListener('click', function () {
        kartiAc("ts2btn", kartAdlari[1]);
    });
    document.getElementById("bsbtn").addEventListener('click', function () {
        kartiAc("bsbtn", kartAdlari[2]);
    });
    document.getElementById("bs2btn").addEventListener('click', function () {
        kartiAc("bs2btn", kartAdlari[3]);
    });
    document.getElementById("adsbtn").addEventListener('click', function () {
        kartiAc("adsbtn", kartAdlari[4]);
    });
    document.getElementById("ads2btn").addEventListener('click', function () {
        kartiAc("ads2btn", kartAdlari[5]);
    });
    document.getElementById("krgmrkbtn").addEventListener('click', function () {
        kartiAc("krgmrkbtn", kartAdlari[6]);
    });
    document.getElementById("krgmrk2btn").addEventListener('click', function () {
        kartiAc("krgmrk2btn", kartAdlari[7]);
    });
    document.getElementById("kysrbtn").addEventListener('click', function () {
        kartiAc("kysrbtn", kartAdlari[8]);
    });
    document.getElementById("kysr2btn").addEventListener('click', function () {
        kartiAc("kysr2btn", kartAdlari[9]);
    });
    document.getElementById("alynbtn").addEventListener('click', function () {
        kartiAc("alynbtn", kartAdlari[10]);
    });
    document.getElementById("alyn2btn").addEventListener('click', function () {
        kartiAc("alyn2btn", kartAdlari[11]);
    });
    document.getElementById("gsbtn").addEventListener('click', function () {
        kartiAc("gsbtn", kartAdlari[12]);
    });
    document.getElementById("gs2btn").addEventListener('click', function () {
        kartiAc("gs2btn", kartAdlari[13]);
    });
    document.getElementById("fbbtn").addEventListener('click', function () {
        kartiAc("fbbtn", kartAdlari[14]);
    });
    document.getElementById("fb2btn").addEventListener('click', function () {
        kartiAc("fb2btn", kartAdlari[15]);
    });