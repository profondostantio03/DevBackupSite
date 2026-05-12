// --- DATI MACRO CATEGORIE PSD AGGIORNATI ---
const psdCategories = [
    { id: 'progettazione', title: '1. Progettazione e Moduli', desc: 'Principi, Information Hiding e Makefile', icon: '🏗️', customColor: 'style-blue' },
    { id: 'ordinamento', title: '2. Algoritmi Base', desc: 'Ordinamento, Ricerca e Complessità', icon: '🔄', customColor: 'style-orange' },
    { id: 'adt_base', title: '3. ADT e Information Hiding', desc: 'Tipi di Dati Astratti e Pseudo-Generics', icon: '📦', customColor: 'style-purple' },
    { id: 'strutture_dinamiche', title: '4. Strutture Dati Dinamiche', desc: 'Liste, Pile (Stack) e Code (Queue)', icon: '🔗', customColor: 'style-green' }
];

// --- APPUNTI SPECIFICI PSD AGGIORNATI ---
const psdNotes = [
    // --- 1. PROGETTAZIONE ---
    { 
        id: 1, 
        category: 'progettazione', 
        title: "1. Ciclo di Vita e Testing", 
        summary: "Dallo sviluppo alla verifica del software.", 
        details: `
            <p>Lo sviluppo di un programma segue fasi precise: Analisi, Progettazione, Codifica e <b>Testing</b>.</p>
            <h4>Testing (Black Box vs White Box)</h4>
            <ul>
                <li><b>Black Box:</b> Si testa la funzionalità senza conoscere il codice, basandosi su input/output.</li>
                <li><b>White Box:</b> Si analizza la logica interna del codice per testare tutti i cammini possibili.</li>
            </ul>
            <p>Per test automatizzati, si usano i <b>Driver</b> (moduli che chiamano le funzioni da testare) e gli <b>Stub</b> (moduli fittizi che simulano parti non ancora scritte).</p>
        `
    },

    // --- 2. ORDINAMENTO E RICERCA ---
    { 
        id: 2, 
        category: 'ordinamento', 
        title: "1. Ricerca in Array", 
        summary: "Lineare, Ordinata e Binaria.", 
        details: `
            <p>La ricerca può essere di diversi tipi a seconda dello stato dell'array:</p>
            <ul>
                <li><b>Ricerca Lineare:</b> Visita finalizzata su array non ordinato. Costo $O(n)$.</li>
                <li><b>Ricerca Ordinata:</b> Si ferma appena trova un elemento maggiore del target.</li>
                <li><b>Ricerca Binaria (Dicotomica):</b> Richiede array ordinato. Divide lo spazio di ricerca a metà ogni volta. Costo $O(\log n)$.</li>
            </ul>
        `,
        examples: `
            <pre style="background: #2d2d2d; color: #fff; padding: 10px; border-radius: 5px;">
// Ricerca Binaria (Logica)
while (begin <= end) {
    center = (begin + end) / 2;
    if (val == a[center]) return center;
    else if (val < a[center]) end = center - 1;
    else begin = center + 1;
}</pre>`
    },

    // --- 3. ADT E GENERICS ---
    { 
        id: 3, 
        category: 'adt_base', 
        title: "1. ADT e Information Hiding", 
        summary: "Puntatori opachi e Pseudo-Generics.", 
        details: `
            <p>Un <b>ADT (Abstract Data Type)</b> distingue tra <b>Specifica</b> (cosa fa) e <b>Implementazione</b> (come lo fa).</p>
            <h4>Information Hiding in C</h4>
            <p>Per nascondere la struttura dei dati (es. ADT Punto):</p>
            <ol>
                <li>Si dichiara un puntatore a una struct incompleta nel file <code>.h</code>: <code>typedef struct punto *Punto;</code>.</li>
                <li>Si definisce la struct reale solo nel file <code>.c</code>.</li>
            </ol>
            <h4>Pseudo-Generics</h4>
            <p>In C si simulano i Generics definendo un tipo <code>Item</code> tramite <code>typedef</code> o usando <code>void*</code> per rendere gli algoritmi (es. Bubble Sort) indipendenti dal tipo di dato.</p>
        `
    },

    // --- 4. STRUTTURE DINAMICHE: LISTE ---
    { 
        id: 4, 
        category: 'strutture_dinamiche', 
        title: "1. ADT Lista Concatenata", 
        summary: "Gestione dinamica dei nodi.", 
        details: `
            <p>La lista è una sequenza dinamica di nodi collegati tramite puntatori.</p>
            <ul>
                <li><b>Vantaggio:</b> Inserimento/Cancellazione $O(1)$ in testa.</li>
                <li><b>Svantaggio:</b> Accesso sequenziale $O(n)$.</li>
            </ul>
            <h4>Operazioni Avanzate</h4>
            <p><b>Reverse:</b> Inverte i legami dei nodi usando 3 puntatori (<code>prev</code>, <code>curr</code>, <code>temp</code>).</p>
            <p><b>Clonazione:</b> Può essere <i>Shallow</i> (superficiale) o <i>Deep</i> (copia profonda dei dati).</p>
        `,
        examples: `
            <p><b>Struttura Nodo:</b></p>
            <pre style="background: #2d2d2d; color: #fff; padding: 10px; border-radius: 5px;">
struct node {
    Item value;
    struct node *next;
};</pre>`
    },

    // --- 5. STACK E QUEUE (Sotto categoria 4) ---
    { 
        id: 5, 
        category: 'strutture_dinamiche', 
        title: "2. Pila (Stack) e Coda (Queue)", 
        summary: "Logiche LIFO e FIFO.", 
        details: `
            <h4>Pila (Stack) - LIFO</h4>
            <p>Ultimo inserito, primo a uscire. Operazioni: <b>Push</b> (inserimento) e <b>Pop</b> (estrazione). Si implementa facilmente con una lista inserendo sempre in testa.</p>
            
            <h4>Coda (Queue) - FIFO</h4>
            <p>Primo inserito, primo a uscire. Operazioni: <b>Enqueue</b> e <b>Dequeue</b>.</p>
            <ul>
                <li><b>Implementazione con Array Circolare:</b> Usa il modulo <code>%</code> per far "girare" gli indici <code>head</code> e <code>tail</code> nell'array.</li>
                <li><b>Implementazione con Lista:</b> Richiede due puntatori (<code>head</code> e <code>tail</code>) per garantire inserimento $O(1)$ in fondo.</li>
            </ul>
        `,
        exercises: `
            <div style="border-left: 4px solid #10b981; padding-left: 15px;">
                <p><b>Domanda:</b> Come si distingue una coda vuota da una piena nell'array circolare?</p>
                <hr>
                <p><b>Risposta:</b> Si lascia una cella dell'array sempre vuota. La coda è <b>vuota</b> se <code>head == tail</code>; è <b>piena</b> se <code>(tail + 1) % N == head</code>.</p>
            </div>
        `
    }
];

// --- INIZIALIZZAZIONE ---
document.addEventListener('DOMContentLoaded', () => {
    initPage(psdCategories, psdNotes, "PSD - Archivio Completo");
});