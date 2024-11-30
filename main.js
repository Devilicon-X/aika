// Elemen yang digunakan
const audio = document.getElementById('backgroundAudio');
const messageDiv = document.getElementById('message');
const nextButton = document.getElementById('nextButton');
const photoAnimation = document.getElementById('photo-animation');

// Pesan yang akan ditampilkan
const messages = [
    "from iam",
    "to aika",
    "haloo aikaa 💗",
    "klo boleh jujur",
    "aku masih sayang dan cinta banget sama kamu ka",
    "aku nyesel mutusin kamu ka",
    "aku kira dengan cara akhirin hubungan",
    "itu jalan yang terbaik",
    "tapi ternyata salah",
    "aku minta maaf",
    "aku kangen kisah kita yang dulu",
    "bisa kan kita bangun lagi hubungan yang lalu",
    "aku janji aku gk akan kasar lagi",
    "aku bener-bener sayang banget sama kamu ka",
    "yuk balikan yuk",
    "aku gk bisa klo gk ada kamu ka",
    "akhir-akhir ini aku jadi ancur berantakan pas putus sama kamu",
    "balikkan yaaaa....",
    "I 💗 U"
];

let currentMessageIndex = 0;
let isAudioPlayed = false; // Flag untuk mengecek apakah audio sudah dimainkan

// Fungsi untuk mengetik pesan
function typeMessage(message, callback) {
    let i = 0;
    messageDiv.textContent = ""; // Kosongkan teks sebelumnya
    const interval = setInterval(() => {
        if (i < message.length) {
            messageDiv.textContent += message[i];
            i++;
        } else {
            clearInterval(interval);
            if (callback) callback(); // Lanjutkan ke fungsi berikutnya
        }
    }, 100); // Kecepatan ketikan
}

// Fungsi untuk memulai menampilkan pesan
function startTyping() {
    if (currentMessageIndex < messages.length) {
        typeMessage(messages[currentMessageIndex], () => {
            nextButton.style.display = "block"; // Tampilkan tombol setelah pesan selesai
        });
    } else {
        // Tampilkan foto animasi di akhir
        messageDiv.style.display = "none"; // Sembunyikan pesan
        nextButton.style.display = "none"; // Sembunyikan tombol
        photoAnimation.style.display = "block"; // Tampilkan animasi foto
    }
}

// Event untuk tombol "Lanjut"
nextButton.addEventListener('click', () => {
    // Mainkan audio hanya saat tombol pertama kali ditekan
    if (!isAudioPlayed) {
        audio.play();
        isAudioPlayed = true;
    }
    nextButton.style.display = "none"; // Sembunyikan tombol setelah diklik
    currentMessageIndex++;
    startTyping();
});

// Mulai mengetikkan pesan pertama
startTyping();

// Fungsi untuk membuat efek hujan
function createRain() {
    const rain = document.createElement('div');
    rain.classList.add('rain');
    document.body.appendChild(rain);

    for (let i = 0; i < 100; i++) { // Jumlah tetesan hujan
        const drop = document.createElement('div');
        drop.classList.add('drop');
        drop.style.left = `${Math.random() * 100}vw`; // Posisi acak di sumbu X
        drop.style.animationDuration = `${Math.random() * 2 + 2}s`; // Durasi acak untuk setiap tetesan
        drop.style.animationDelay = `${Math.random() * 5}s`; // Delay acak untuk efek yang tidak seragam
        rain.appendChild(drop);
    }
}

// Panggil fungsi untuk menambahkan hujan
createRain();
