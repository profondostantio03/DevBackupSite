// --- DATI MACRO CATEGORIE PSD ---
const psdCategories = [
    { id: 'progettazione', title: '1. Progettazione e Moduli', desc: 'Principi, Information Hiding e Makefile', icon: '🏗️', customColor: 'style-blue' },
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
    }
];

// --- INIZIALIZZAZIONE DELLA PAGINA PSD ---
document.addEventListener('DOMContentLoaded', () => {
    // Chiama la funzione initPage che hai definito nel file script.js generale
    initPage(psdCategories, psdNotes, "PSD - Archivio di Gigi");
});