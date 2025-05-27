tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Inter', 'sans-serif'],
            },
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let ecriture = document.getElementById("ecriture");
    let ecriture_text = "AHOMBO Kossi Georges-Noé";
    let ecriture_index = 0;
    setInterval(function () {
        if (ecriture_index < ecriture_text.length) {
            ecriture.textContent += ecriture_text[ecriture_index];
            ecriture_index++;
        }
    }, 100);
})