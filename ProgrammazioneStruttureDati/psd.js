// --- DATI MACRO CATEGORIE PSD ---
const psdCategories = [
    { id: 'progettazione', title: '1. Progettazione e Moduli', desc: 'Principi, Information Hiding e Makefile', icon: '🏗️', customColor: 'style-blue' },
    { id: 'ordinamento', title: '2. Ordinamento Base', desc: 'Proprietà, Insertion Sort e Bubble Sort', icon: '🔄', customColor: 'style-orange' }
];

// --- APPUNTI SPECIFICI PSD ---
const psdNotes = [
    // --- 1. PROGETTAZIONE ---
    { 
        id: 101, 
        category: 'progettazione', 
        title: "1. Principi di Progettazione", 
        summary: "Astrazione, Information Hiding e Modularità in C.", 
        details: `
            <p>Prima di scrivere codice, è fondamentale la <b>fase di progettazione</b> (definizione dell'architettura e analisi dei dati). I 4 principi fondamentali sono:</p>
            
            <h4>1. Astrazione</h4>
            <p>Evidenzia le caratteristiche essenziali ignorando i dettagli secondari.</p>
            <ul>
                <li><b>Astrazione funzionale/procedurale:</b> delegare un compito a una funzione (usabile indipendentemente dall'algoritmo interno).</li>
                <li><b>Astrazione sui dati:</b> definire un tipo di dato e le operazioni su di esso, nascondendone l'implementazione.</li>
            </ul>

            <h4>2. Information Hiding</h4>
            <p>Nascondere il funzionamento interno di un modulo. Vantaggi:</p>
            <ul>
                <li><b>Inaccessibilità:</b> i clienti non possono modificare parti delicate.</li>
                <li><b>Manutenibilità:</b> gli errori si isolano e si correggono in un solo modulo.</li>
            </ul>
            <div style="background: rgba(139, 92, 246, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid var(--primary-color); margin-bottom: 15px;">
                <b>Best Practice in C:</b> Evitare le variabili globali e mantenere le funzioni di "servizio" nascoste (non dichiarandole nell'header file <code>.h</code>).
            </div>

            <h4>3. Riuso del Codice</h4>
            <p>Evitare di riscrivere codice già fatto, utilizzando funzioni e librerie dedicate (Moduli).</p>

            <h4>4. Modularità</h4>
            <p>Suddividere il progetto per gestire la complessità. Un modulo deve avere:</p>
            <ul>
                <li><b>Elevata coesione:</b> le funzioni interne devono essere strettamente correlate.</li>
                <li><b>Indipendenza:</b> testabile e compilabile separatamente.</li>
                <li><b>Interfacce definite:</b> modalità di interazione chiare.</li>
            </ul>

            <div style="background: rgba(16, 185, 129, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #10b981;">
                <b>Il Modulo in C:</b> Non esiste nativamente. Si realizza usando:
                <br>1. <b>Interfaccia (.h):</b> visibile ai clienti (definisce risorse e servizi).
                <br>2. <b>Implementazione (.c):</b> occulta ai clienti (contiene il codice reale).
            </div>
            <p><i>Definizione extra:</i> Le <b>Procedure</b> sono funzioni che restituiscono <code>void</code>, le <b>Funzioni</b> restituiscono un valore.</p>
        `,
        examples: `
            <div style="background: #f0f9ff; padding: 15px; border-radius: 10px; border-left: 4px solid #0ea5e9;">
                <h4 style="margin-top:0;">Compilazione separata e Makefile</h4>
                <p>Per non dover scrivere lunghi comandi <code>gcc</code>, si usa un file chiamato semplicemente <b>makefile</b> (senza estensione).</p>
                
                <p><b>Fasi della compilazione:</b></p>
                <ol>
                    <li><b>Compilazione:</b> <code>gcc -c vettore.c</code> (Crea il file oggetto <code>.o</code> non eseguibile).</li>
                    <li><b>Linking:</b> <code>gcc utils.o vettore.o main.o -o programma.exe</code> (Collega gli oggetti nell'eseguibile).</li>
                </ol>

                <p><b>Struttura di una regola nel Makefile:</b></p>
                <pre>
target: dipendenze
    comandi (preceduti da TAB)
                </pre>

                <p><b>Comandi utili da terminale:</b></p>
                <ul>
                    <li><code>make</code>: esegue la prima regola del Makefile.</li>
                    <li><code>make clean</code>: regola solitamente usata per eliminare i file <code>.o</code> e pulire la cartella di lavoro.</li>
                </ul>
            </div>
        `,
        exercises: `
            <div style="border-left: 4px solid #0ea5e9; padding-left: 15px;">
                <p><b>Domanda di Teoria:</b></p>
                <p>Qual è la differenza tra l'astrazione funzionale e l'astrazione sui dati?</p>
                <hr>
                <p><b>Risposta:</b></p>
                <p>L'<b>astrazione funzionale</b> si concentra sulle operazioni: delega un'azione a una funzione nascondendo <i>come</i> l'algoritmo la esegue (es. chiamo <code>sort()</code> senza sapere se usa QuickSort o MergeSort).<br><br>
                L'<b>astrazione sui dati</b> si concentra sulla struttura: definisce un tipo di dato e l'insieme delle operazioni lecite su di esso, nascondendo come il dato è effettivamente salvato in memoria (es. una pila PUSH/POP senza sapere se usa array o liste).</p>
            </div>
        `
    },

    // --- 2. ORDINAMENTO ---
    { 
        id: 102, 
        category: 'ordinamento', 
        title: "1. Insertion e Bubble Sort", 
        summary: "Proprietà algoritmi (Stabile, In loco) e metodi di base.", 
        details: `
            <p>Il problema dell'ordinamento consiste nell'elencare gli elementi di un insieme secondo una sequenza stabilita da una <b>relazione d'ordine</b> (es. ordine alfabetico o numerico). L'ordinamento avviene in base a una <b>chiave</b>.</p>
            
            <h4 style="color: #f59e0b;">Proprietà degli algoritmi (Domanda d'esame)</h4>
            <ul>
                <li><b>Stabile:</b> Due elementi con la medesima chiave mantengono lo stesso ordine relativo che avevano prima dell'ordinamento.</li>
                <li><b>In loco (In-place):</b> Usa un numero costante di variabili ausiliarie oltre all'array da ordinare (non richiede di duplicare l'array in memoria).</li>
                <li><b>Adattivo:</b> Il numero di operazioni effettuate dipende positivamente dall'ordine iniziale dell'input (è più veloce se l'array è già quasi ordinato).</li>
                <li><b>Interno vs Esterno:</b> Interno se i dati stanno in RAM; Esterno se risiedono su disco perché troppo grandi.</li>
            </ul>

            <h4 style="color: #f59e0b;">Classificazione (Costo Temporale)</h4>
            <ul>
                <li><b>Semplici $O(n^2)$:</b> Selection, Insertion, Bubble Sort.</li>
                <li><b>Avanzati $O(n \\log n)$:</b> Merge Sort, QuickSort (che però ha un caso pessimo $O(n^2)$).</li>
            </ul>

            <h4 style="color: #f59e0b;">Insertion Sort</h4>
            <p>Si basa su una visita totale: ad ogni passo <i>i</i>, la sottosequenza che precede l'elemento corrente <code>a[i]</code> è già ordinata. L'algoritmo inserisce l'elemento corrente nella posizione corretta shiftando in avanti gli elementi maggiori.</p>

            <h4 style="color: #f59e0b;">Bubble Sort</h4>
            <p>Confronta coppie di elementi adiacenti e le scambia se non sono in ordine. Ad ogni passo, l'elemento più grande della parte non ordinata "risale" verso la sua posizione finale a destra come una bolla.</p>
            <p><i>Nota:</i> La versione standard <b>non è adattiva</b> perché esegue sempre tutti i cicli anche se l'array è già ordinato.</p>
        `,
        examples: `
            <div style="background: #fff7ed; padding: 15px; border-radius: 10px; border-left: 4px solid #f97316; margin-bottom: 15px;">
                <h4 style="margin-top:0;">Insertion Sort in C</h4>
                <pre style="background: #2d2d2d; color: #fff; padding: 10px; border-radius: 5px;">
for(i = 1; i < n; i++) {
   // Inserisce l'elemento i-esimo nella sottosequenza a[0..i-1]
   Inserisci_ordinato(a, a[i], i); 
}</pre>
            </div>

            <div style="background: #fff7ed; padding: 15px; border-radius: 10px; border-left: 4px solid #f97316;">
                <h4 style="margin-top:0;">Bubble Sort Adattivo (Ottimizzato)</h4>
                <p>Per renderlo adattivo si usa un flag booleano. Se in una passata non avviene alcuno scambio, l'array è ordinato e l'algoritmo si ferma.</p>
                <pre style="background: #2d2d2d; color: #fff; padding: 10px; border-radius: 5px;">
boolean ordinato = false;
for(i = 1; i < n && !ordinato; i++) {
    ordinato = true; // Assumiamo sia ordinato
    for(j = 0; j < n - i; j++) {
        if(a[j] > a[j+1]) {
            scambia(&a[j], &a[j+1]);
            ordinato = false; // Se scambiamo, non siamo certi sia ordinato
        }
    }
}</pre>
            </div>
        `,
        exercises: `
            <div style="border-left: 4px solid #f97316; padding-left: 15px;">
                <p><b>Domanda d'Esame:</b></p>
                <p>Perché l'Insertion Sort è considerato un algoritmo "Adattivo"?</p>
                <hr>
                <p><b>Risposta:</b></p>
                <p>L'Insertion Sort è adattivo perché il numero di operazioni che esegue dipende dall'ordinamento iniziale dei dati. <br><br>
                Quando la funzione <code>Inserisci_ordinato</code> cerca la posizione corretta in cui inserire l'elemento corrente, effettua una visita <b>a ritroso</b>. Se l'array è già perfettamente ordinato, l'elemento corrente risulterà sùbito maggiore (o uguale) al suo precedente diretto: l'algoritmo effettuerà quindi <b>un solo confronto</b> e nessuno spostamento (shift) per ogni iterazione, riducendo drasticamente i tempi di esecuzione rispetto al caso pessimo (array ordinato al contrario).</p>
            </div>
        `
    }
];

// --- INIZIALIZZAZIONE DELLA PAGINA PSD ---
document.addEventListener('DOMContentLoaded', () => {
    // Chiama la funzione initPage che hai definito nel file script.js generale
    initPage(psdCategories, psdNotes, "PSD - Archivio di Gigi");
});