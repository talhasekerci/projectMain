let isActive = false; // Quiz'in aktif olup olmadığını belirleyen değişken

// "Başlat" butonuna tıklandığında quiz'i başlatmak için event listener ekleme
document.getElementById("start").addEventListener("click", function () {
    document.querySelector(".quiz").classList.add("active"); // Quiz'i aktif hale getir
    document.querySelector(".introduction").classList.add("inactive"); // Giriş kısmını pasif hale getir
    startTimer(); // Zamanlayıcıyı başlat
    loadQuestion(); // Soruyu yükle
    isActive = true; // Sayfa aktif hale geldi
});

let questions = []; // Quiz sorularını saklayacak dizi

// Soruları bir API'dan çekme
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        if (response.ok) {
            return response.json(); // Eğer cevap başarılıysa JSON verisini al
        }
        throw new Error('Network response was not ok.'); // Aksi durumda hata fırlat
    })
    .then(posts => {
        const shuffledPosts = posts.sort(() => Math.random() - 0.5); // Gelen postları karıştır
        const selectedPosts = shuffledPosts.slice(0, 10); // Karıştırılmış postlardan 10 tanesini seç
        selectedPosts.forEach((post, index) => {
            let question = {}; // Her bir soruyu temsil edecek obje
            question.text = post.title; // Soru metni
            question.options = post.body.split('\n').map((option, idx) => ({ // Seçenekleri oluştur
                text: option,
                isCorrect: idx === 0 // İlk seçeneği doğru yap
            }));
            questions.push(question); // Oluşturulan soruyu diziye ekle
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch request:', error); // Fetch sırasında hata oluşursa logla
    });

// HTML'deki elementlere erişim için referanslar alınıyor
const questionNumberElement = document.getElementById("questionNumber"); // Soru numarası
const totalNumberElement = document.getElementById("totalNumber"); // Toplam soru sayısı
const questionTextElement = document.getElementById("questionText"); // Soru metni
const optionsContainer = document.getElementById("optionsContainer"); // Seçeneklerin bulunduğu container
const nextButton = document.getElementById("nextButton"); // Sonraki butonu

let currentQuestionIndex = 0; // Şu anki sorunun indeksi
let score = 0; // Toplam puan
let isAnswered = false; // Cevap verildi mi?
let timeoutID; // Zaman aşımı için timeout ID'si
let interval; // Zamanlayıcı için interval ID'si
let quizEnded = false; // Quiz'in sona erip ermediğini kontrol eden flag

// Zamanlayıcıyı başlatan fonksiyon
function startTimer() {
    const quizElement = document.querySelector(".quiz"); // Quiz'in elementi
    if (quizElement.classList.contains("active") && !quizEnded) { // Eğer quiz aktifse ve sona ermediyse
        const timer = document.querySelector('.timer'); // Zamanlayıcı elementi
        const duration = 30; // Her soru için 30 saniye süre
        const countdownElement = document.getElementById('countdown'); // Geri sayımı gösterecek element

        let timeLeft = duration; // Geriye kalan süre
        let width = 100; // Zamanlayıcı çubuğunun genişliği

        if (interval) { // Eğer önceki bir interval varsa temizle
            clearInterval(interval);
        }

        interval = setInterval(function () { // Zamanlayıcıyı başlat
            timeLeft--; // Her saniyede bir süreyi azalt

            if (timeLeft >= 0) { // Eğer süre bitmediyse
                const percent = (timeLeft / duration) * 100; // Yüzde hesapla
                width = percent < width ? percent : width; // Zamanlayıcı çubuğunun genişliğini güncelle
                timer.style.width = width + '%'; // Zamanlayıcı çubuğunun genişliğini ayarla
                countdownElement.textContent = timeLeft; // Geriye kalan süreyi göster
            } else { // Eğer süre dolduysa
                clearInterval(interval); // Zamanlayıcıyı durdur
                timer.style.width = '100%'; // Zamanlayıcı çubuğunun genişliğini tamamlanmış olarak ayarla
                loadQuestion(); // Bir sonraki soruya geç
            }
        }, 1000); // Her saniyede bir çalıştır
    }
}

let questionTimeoutID; // Soru yükleme timeout ID'si
let questionTimeoutID2; // Cevap kontrolü timeout ID'si
let isOptionsLocked = true; // Seçeneklerin kilidini açma/kapama flag'i

// Bir sonraki soruyu yükleyen fonksiyon
function loadQuestion() {
    isAnswered = false; // Cevap verilmedi
    const currentQuestion = questions[currentQuestionIndex]; // Şu anki soruyu al
    questionNumberElement.textContent = currentQuestionIndex + 1; // Soru numarasını göster
    totalNumberElement.textContent = questions.length; // Toplam soru sayısını göster
    questionTextElement.textContent = currentQuestion.text; // Soru metnini göster
    optionsContainer.innerHTML = ""; // Seçenekleri temizle
    clearTimeout(questionTimeoutID); // Önceki soru yükleme timeout'u temizle
    clearTimeout(questionTimeoutID2); // Önceki cevap kontrolü timeout'u temizle
    const shuffledOptions = shuffle(currentQuestion.options); // Seçenekleri karıştır

    shuffledOptions.forEach((option, index) => { // Her bir seçenek için
        const optionElement = document.createElement("div"); // Yeni bir seçenek elementi oluştur
        optionElement.classList.add("option"); // CSS sınıfını ekle
        optionElement.dataset.index = index; // Veri setine indeksi ekle
        optionElement.innerHTML = `<div>${String.fromCharCode(65 + index)})</div><span>${option.text}</span>`; // İçeriği oluştur
        optionsContainer.appendChild(optionElement); // Seçenekleri ekle
    });

    nextButton.disabled = true; // Sonraki butonunu devre dışı bırak
    questionTimeoutID = setTimeout(() => { // Soru yükleme işlemine bir süre sonra başla
        nextButton.disabled = false; // Sonraki butonunu etkinleştir
        isOptionsLocked = false; // 10 saniye sonra seçenekleri kilidi aç
        addEventListeners(); // Seçeneklere event listener'ları ekle
    }, 10000);

    questionTimeoutID2 = setTimeout(() => { // Cevabın kontrolünü bir süre sonra yap
        checkAnswer();
    }, 30000);
}

// Event listener'ları seçeneklere ekleyen fonksiyon
function addEventListeners() {
    const options = document.querySelectorAll(".option"); // Tüm seçenekleri al
    options.forEach(option => { // Her bir seçenek için
        option.addEventListener("click", function () { // Tıklama olayı
            document.querySelectorAll(".option").forEach(option => option.classList.remove("selected")); // Tüm seçeneklerden seçimi kaldır
            this.classList.add("selected"); // Tıklanan seçeneği işaretle
            isAnswered = true; // Cevap verildi
        });
    });
}

// Bir diziyi karıştıran fonksiyon
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Cevabı kontrol eden fonksiyon
function checkAnswer() {
    const selectedOption = document.querySelector(".option.selected"); // Seçilen seçeneği al
    let isCorrectAnswer = false; // Doğru cevap flag'i
    let hasResponded = false; // Cevap verilip verilmediğini kontrol eden flag

    if (selectedOption) { // Eğer seçenek seçilmişse
        hasResponded = true; // Cevap verildi
        const index = selectedOption.dataset.index; // Seçenek index'i
        const optionText = selectedOption.innerText.trim().split(')')[1].trim(); // Seçeneğin metni
        const options = questions[currentQuestionIndex].options; // Şu anki sorunun seçenekleri

        const correctOption = options.find(option => option.isCorrect === true); // Doğru seçeneği bul

        if (correctOption && optionText === correctOption.text.trim()) { // Eğer doğru seçenek varsa ve tıklanan seçenek doğruysa
            score++; // Puanı artır
            isCorrectAnswer = true; // Cevap doğru
        }

        localStorage.setItem(`Question${currentQuestionIndex}`, JSON.stringify({ // Cevabı yerel depolamada sakla
            question: questions[currentQuestionIndex].text,
            response: questions[currentQuestionIndex].options[index].text,
            isCorrect: isCorrectAnswer
        }));
    } else { // Eğer cevap verilmediyse
        localStorage.setItem(`Question${currentQuestionIndex}`, JSON.stringify({ // "Cevap verilmedi" bilgisini sakla
            question: questions[currentQuestionIndex].text,
            response: "Not answered",
            isCorrect: false
        }));
    }

    if (currentQuestionIndex < questions.length - 1) { // Eğer soru bittiği hala quiz devam ediyorsa
        currentQuestionIndex++; // Bir sonraki soruya geç
        loadQuestion(); // Soruyu yükle
        startTimer(); // Zamanlayıcıyı başlat
        nextButton.disabled = true; // Sonraki butonunu devre dışı bırak
    } else { // Eğer quiz sona erdiyse
        showResults(); // Sonuçları göster
    }
}

// Sonuçları gösteren fonksiyon
function showResults() {
    quizEnded = true; // Quiz sona erdi
    const timer = document.querySelector('.timer-container'); // Zamanlayıcı elementi
    timer.style.display = 'none'; // Zamanlayıcıyı gizle
    clearInterval(interval); // Zamanlayıcıyı durdur
    const totalQuestions = questions.length; // Toplam soru sayısı
    const resultMessage = `You answered ${score} out of ${totalQuestions} questions correctly.`; // Sonuç metni
    questionTextElement.textContent = resultMessage; // Sonucu göster
    optionsContainer.innerHTML = ""; // Seçenekleri temizle
    nextButton.style.display = "none"; // Sonraki butonunu gizle

    const table = document.createElement('table'); // Tablo oluştur
    const thead = document.createElement('thead'); // Tablo başlığı oluştur
    const tbody = document.createElement('tbody'); // Tablo gövdesi oluştur

    const headers = ['Question', 'Answer', 'Correct']; // Tablo başlıkları
    const headerRow = document.createElement('tr'); // Başlık satırı oluştur
    headers.forEach(headerText => { // Her bir başlık için
        const th = document.createElement('th'); // Başlık hücresi oluştur
        th.textContent = headerText; // Başlık metnini ata
        headerRow.appendChild(th); // Başlık satırına ekle
    });
    thead.appendChild(headerRow); // Tablo başlığını tabloya ekle
    table.appendChild(thead); // Tablo başlığını tabloya ekle

    for (let i = 0; i < totalQuestions; i++) { // Tüm sorular için
        const storedData = JSON.parse(localStorage.getItem(`Question${i}`)); // Yerel depodan soru verisini al
        const row = document.createElement('tr'); // Yeni bir satır oluştur
        const questionCell = document.createElement('td'); // Soru hücresi oluştur
        const answerCell = document.createElement('td'); // Cevap hücresi oluştur
        const correctCell = document.createElement('td'); // Doğru cevap hücresi oluştur

        questionCell.textContent = storedData.question; // Soru metnini hücreye ekle
        answerCell.textContent = storedData.response; // Cevabı hücreye ekle
        correctCell.textContent = storedData.isCorrect ? 'Yes' : 'No'; // Doğru cevabı hücreye ekle

        row.appendChild(questionCell); // Satıra soru hücresini ekle
        row.appendChild(answerCell); // Satıra cevap hücresini ekle
        row.appendChild(correctCell); // Satıra doğru cevap hücresini ekle
        tbody.appendChild(row); // Satırı tabloya ekle
    }

    table.appendChild(tbody); // Tabloya gövdeyi ekle
    document.body.appendChild(table); // Tabloyu belgeye ekle

    localStorage.clear(); // Yerel depoyu temizle
}

nextButton.addEventListener("click", checkAnswer); // Sonraki butonuna tıklandığında cevabı kontrol et

