// Objek untuk menyimpan kategori BMI dan pesan terkaitnya
const BMI_CATEGORIES = {
    UNDERWEIGHT: 'Kekurangan berat badan',
    NORMAL: 'Normal (ideal)',
    OVERWEIGHT: 'Kelebihan berat badan',
    OBESITY: 'Obesitas',
};

// Objek untuk menyimpan pesan saran berdasarkan kategori BMI
const BMI_ADVICE = {
    UNDERWEIGHT: 'Anda berada dalam kategori kekurangan berat badan. ' +
                 'Usahakan untuk menambah berat badan dengan pola makan sehat dan olahraga yang cukup. ' +
                 'Konsultasikan dengan dokter atau ahli gizi untuk mendapatkan saran yang tepat.',
    NORMAL: 'Anda berada dalam kategori berat badan normal. ' +
            'Pertahankan pola hidup sehat dengan menjaga makan dan berolahraga secara rutin.',
    OVERWEIGHT: 'Anda berada dalam kategori kelebihan berat badan. ' +
                'Cobalah untuk menjaga pola makan seimbang dan meningkatkan aktivitas fisik untuk mencapai berat badan ideal.',
    OBESITY: 'Anda berada dalam kategori obesitas. ' +
             'Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik. ' +
             'Segera kunjungi dokter untuk dilakukan pemeriksaan kesehatan lanjutan untuk mengetahui risiko yang Anda miliki terkait berat badan Anda.'
};

function calculateBmi() {
    let resultbmi = document.getElementById('result-bmi');
    let resultIndicator = document.getElementById('result-desc');
    let adviceText = document.getElementById('advice-text');

    let weight = parseFloat(document.getElementById('input-berat-badan').value);
    let height = parseFloat(document.getElementById('input-tinggi-badan').value);
    let age = parseFloat(document.getElementById('input-usia').value);

    // Validasi input
    if (!isNaN(weight) && !isNaN(height) && !isNaN(age) && weight > 0 && height > 0 && age > 0) {
        // Menghitung BMI
        let bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        resultbmi.textContent = `BMI Anda: ${bmi}`;

        // Menentukan kategori BMI dan pesan saran
        let category = '';
        let advice = '';
        if (bmi < 18.5) {
            category = BMI_CATEGORIES.UNDERWEIGHT;
            advice = BMI_ADVICE.UNDERWEIGHT;
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = BMI_CATEGORIES.NORMAL;
            advice = BMI_ADVICE.NORMAL;
        } else if (bmi >= 25 && bmi < 29.9) {
            category = BMI_CATEGORIES.OVERWEIGHT;
            advice = BMI_ADVICE.OVERWEIGHT;
        } else {
            category = BMI_CATEGORIES.OBESITY;
            advice = BMI_ADVICE.OBESITY;
        }

        // Menampilkan kategori BMI
        resultIndicator.textContent = `Kategori: ${category}`;
        
        // Menampilkan pesan saran
        adviceText.textContent = advice;
    } else {
        alert('Tolong isi semua kolom dengan benar');
    }
}
