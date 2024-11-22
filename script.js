const contrastToggle = document.getElementById('contrast-toggle');

if (localStorage.getItem('high-contrast') === 'true') {
    document.body.classList.add('high-contrast');
    contrastToggle.checked = true;  
}

contrastToggle.addEventListener('change', () => {
    const isChecked = contrastToggle.checked;
    document.body.classList.toggle('high-contrast', isChecked);
    
    localStorage.setItem('high-contrast', isChecked);
});

function ativarLeituraVozAlta() {
    var texto = document.body.innerText;

    if (texto.length > 0) {
        var sintese = new SpeechSynthesisUtterance(texto);
        window.speechSynthesis.speak(sintese);
    } else {
        alert("Não há conteúdo para ler.");
    }
}

function pararLeituraVozAlta() {
    window.speechSynthesis.cancel();
}


