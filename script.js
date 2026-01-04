let currentFontSize = 16; // dimensione base in pixel

function openExam(examId, btnElement) {
    const contents = document.getElementsByClassName('exam-content');
    for (let i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
    }

    const buttons = document.querySelectorAll('nav button');
    buttons.forEach(btn => btn.classList.remove('active-btn'));

    const selectedContent = document.getElementById(examId);
    if (selectedContent) selectedContent.classList.add('active');
    
    if (btnElement) btnElement.classList.add('active-btn');

    // reset ricerca
    document.getElementById('searchInput').value = '';
    filterNotes();
}

function filterNotes() {
    let input = document.getElementById('searchInput');
    let filter = input.value.toUpperCase();
    let activeDiv = document.querySelector('.exam-content.active');
    
    if (!activeDiv) return;

    let items = activeDiv.getElementsByClassName('note-item');

    for (let i = 0; i < items.length; i++) {
        let txtValue = items[i].textContent || items[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
}

// logica zoom
function toggleZoomMenu() {
    const actions = document.getElementById('zoomActions');
    actions.classList.toggle('show');
}

function resizeText(multiplier) {
    // limiti massimo e minimo 
    if (multiplier === 1 && currentFontSize >= 24) return;
    if (multiplier === -1 && currentFontSize <= 12) return;

    currentFontSize += (multiplier * 2); // aumenta o diminuisce di 2px

    // applica la dimensione a paragrafi, liste e codice
    const textElements = document.querySelectorAll('p, li, pre');
    
    textElements.forEach(el => {
        el.style.fontSize = currentFontSize + 'px';
    });
}