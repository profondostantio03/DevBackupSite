// --- STATO GLOBALE ---
let appData = {
    categories: [], 
    notes: []       
};

// Configurazione Stili
const colorStyles = ['style-orange', 'style-purple', 'style-blue', 'style-green', 'style-dark'];
let currentEditId = null;
let selectedColorClass = '';

// --- INIZIALIZZAZIONE ---
function initPage(categoriesData, notesData, pageTitleText) {
    appData.categories = categoriesData;
    appData.notes = notesData;

    if(pageTitleText) {
        document.title = pageTitleText;
    }

    if(document.getElementById('math-grid')) {
        loadMacroCategories();
    }
}

// --- HELPER COLORI ---
function resolveColor(item, index) {
    if (item.customColor) return item.customColor;
    return colorStyles[index % colorStyles.length];
}

// --- HOME: MACRO CATEGORIE ---
function loadMacroCategories() {
    const grid = document.getElementById('math-grid');
    const title = document.getElementById('pageTitle');
    const backBtn = document.getElementById('backBtn');
    
    if(!grid) return;

    grid.innerHTML = ''; 
    title.innerText = "Scegli Argomento";
    backBtn.style.display = 'none';

    appData.categories.forEach((topic, index) => {
        const card = document.createElement('div');
        const colorClass = resolveColor(topic, index);
        
        card.className = `modern-card ${colorClass}`;

        // Clic sulla card -> Vai agli appunti
        card.onclick = () => loadNotesByCategory(topic.id, topic.title, colorClass);
        
        card.innerHTML = `
            <div class="card-header">
                <div class="card-icon">${topic.icon}</div>
            </div>
            <div class="card-body">
                <h3 class="card-title">${topic.title}</h3>
                <p class="card-text">${topic.desc}</p>
                
                <button class="card-pill edit-btn" onclick="openEditModal(event, '${topic.id}')">
                    EDIT ✏️
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// --- DETTAGLIO: APPUNTI ---
function loadNotesByCategory(catId, catTitle, parentColorClass) {
    const grid = document.getElementById('math-grid');
    const title = document.getElementById('pageTitle');
    const backBtn = document.getElementById('backBtn');
    
    grid.innerHTML = '';
    title.innerText = catTitle; 
    backBtn.style.display = 'block'; 
    backBtn.onclick = loadMacroCategories; 

    let notesToShow = (catId === 'all') 
        ? appData.notes 
        : appData.notes.filter(item => item.category === catId);

    if (notesToShow.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align:center; color:#666; font-size:1.1rem;">Nessun appunto trovato.</p>';
        return;
    }

    notesToShow.forEach((item, index) => {
        const card = document.createElement('div');
        const colorClass = parentColorClass || colorStyles[index % colorStyles.length];
        
        card.className = `modern-card ${colorClass} note-item`;
        
        // 1. CLIC SULLA CARTA -> Apre la TEORIA (passiamo 'theory')
        card.onclick = () => openModal(null, item.id, 'theory'); 
        
        // ATTENZIONE: Qui ho aggiunto pointer-events: auto per rendere il bottone cliccabile
        card.innerHTML = `
            <div class="card-header" style="height: 100px;">
                <div class="card-icon" style="font-size: 2rem; width: 60px; height: 60px;">📝</div>
            </div>
            <div class="card-body">
                <h3 class="card-title" style="font-size: 1.1rem;">${item.title}</h3>
                <p class="card-text" style="font-size: 0.85rem;">${item.summary}</p>
                
                <button class="card-pill" 
                        style="cursor:pointer; border:none; pointer-events: auto;" 
                        onclick="openModal(event, ${item.id}, 'examples')">
                    ESEMPI 💡
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// --- GESTIONE MODALE (UNICA FUNZIONE) ---
function openModal(event, id, type) {
    // Se il clic viene dal bottone (c'è l'evento), fermiamo la propagazione
    // così non si attiva anche il click sulla carta sottostante
    if(event) event.stopPropagation();

    // Usa == invece di === per essere sicuro che numeri e stringhe matchino
    const item = appData.notes.find(d => d.id == id); 
    if (!item) return;
    
    const mTitle = document.getElementById('modalTitle');
    const mBody = document.getElementById('modalBody');
    const mDiv = document.getElementById('topicModal');
    
    if(mTitle && mBody) {
        // Logica per decidere cosa mostrare
        if (type === 'examples') {
            mTitle.innerText = "Esempi: " + item.title;
            // Se non ci sono esempi, mostra un messaggio cortese
            mBody.innerHTML = item.examples ? item.examples : "<p style='text-align:center; padding:20px; color:#666;'>Nessun esempio disponibile per questo argomento.</p>";
        } else {
            // Default: Teoria
            mTitle.innerText = item.title;
            mBody.innerHTML = item.details;
        }

        // Renderizza la matematica (MathJax) se presente
        if(window.MathJax) {
            MathJax.typesetPromise([mBody]).then(() => {});
        }
    }
    
    if(mDiv) mDiv.style.display = 'flex';
}

function closeModal(event) {
    if (event.target.classList.contains('modal-overlay') || event.target.classList.contains('close-modal')) {
        document.getElementById('topicModal').style.display = 'none';
    }
}

// --- GESTIONE EDITING ---
function openEditModal(event, id) {
    event.stopPropagation();
    
    const item = appData.categories.find(t => t.id === id);
    if(!item) return;

    currentEditId = id;
    
    const titleInput = document.getElementById('editTitleInput');
    if(titleInput) titleInput.value = item.title;

    document.querySelectorAll('.color-circle').forEach(c => c.classList.remove('selected'));
    
    selectedColorClass = item.customColor || '';

    if(selectedColorClass) {
        const existingBtn = document.querySelector(`.color-circle.${selectedColorClass}-bg`); 
        if(existingBtn) existingBtn.classList.add('selected');
    }

    const modal = document.getElementById('editModal');
    if(modal) modal.style.display = 'flex';
}

function selectEditColor(colorClass) {
    selectedColorClass = colorClass;
    document.querySelectorAll('.color-circle').forEach(c => c.classList.remove('selected'));
    if(event && event.target) event.target.classList.add('selected');
}

function saveEdit() {
    const titleInput = document.getElementById('editTitleInput');
    const newTitle = titleInput ? titleInput.value : null;
    
    const index = appData.categories.findIndex(t => t.id === currentEditId);
    
    if(index !== -1) {
        if(newTitle) appData.categories[index].title = newTitle;
        if(selectedColorClass) appData.categories[index].customColor = selectedColorClass;
        
        closeEditModal();
        loadMacroCategories(); 
    }
}

function closeEditModal(event) {
    if (!event || event.target.id === 'editModal' || event.target.classList.contains('close-modal')) {
        document.getElementById('editModal').style.display = 'none';
    }
}

// --- UTILITIES (Zoom, Ricerca) ---
let currentFontSize = 16; 
function toggleZoomMenu() { 
    const z = document.getElementById('zoomActions');
    if(z) z.classList.toggle('show'); 
}

function resizeText(multiplier) {
    if (multiplier === 1 && currentFontSize >= 24) return;
    if (multiplier === -1 && currentFontSize <= 12) return;
    currentFontSize += (multiplier * 2);
    document.querySelectorAll('p, li, pre, h3, .card-text').forEach(el => el.style.fontSize = currentFontSize + 'px');
}

function filterNotes() {
    let input = document.getElementById('searchInput');
    if(!input) return;
    let filter = input.value.toUpperCase();
    let items = document.getElementsByClassName('note-item');
    
    for (let i = 0; i < items.length; i++) {
        let txtValue = items[i].innerText; 
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            items[i].style.display = "flex"; 
        } else {
            items[i].style.display = "none";
        }
    }
}