// --- DATI MACRO CATEGORIE PSD AGGIORNATI ---
const psdCategories = [
    { id: 'progettazione', title: '1. Progettazione e Moduli', desc: 'Principi, Information Hiding e Makefile', icon: '🏗️', customColor: 'style-blue' },
    { id: 'ordinamento', title: '2. Algoritmi Base', desc: 'Ordinamento, Ricerca e Complessità', icon: '🔄', customColor: 'style-orange' },
    { id: 'adt_base', title: '3. ADT e Information Hiding', desc: 'Tipi di Dati Astratti e Pseudo-Generics', icon: '📦', customColor: 'style-purple' },
    { id: 'strutture_dinamiche', title: '4. Strutture Dati Dinamiche', desc: 'Liste, Pile (Stack), Code (Queue) e Complessità', icon: '🔗', customColor: 'style-green' },
    { id: 'alberi', title: '5. Alberi Binari', desc: 'ADT BTree, Visite Iterative e Algoritmi Avanzati', icon: '🌳', customColor: 'style-teal' }
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
    {
        id: 21,
        category: 'ordinamento',
        title: "2. Selection Sort Ricorsivo (Lab 8)",
        summary: "Ordinamento per selezione in chiave ricorsiva.",
        details: `
            <p>Il <b>Selection Sort Ricorsivo</b> scompone il problema dividendo l'array in una parte ordinata ed una non ordinata. Trova ricorsivamente l'indice del valore minimo nella sotto-sequenza corrente e lo scambia con l'elemento all'indice iniziale di partenza.</p>
            <h4>Equazione di Ricorrenza e Complessità</h4>
            <p>L'equazione associata è $T(n) = T(n-1) + b \cdot n + d$, dove il termine lineare rappresenta il lavoro di combinazione necessario per estrarre il valore minimo tramite scansione sequenziale[cite: 20].</p>
            <ul>
                <li><b>Complessità Asintotica:</b> $O(n^2)$[cite: 19].</li>
                <li><b>Giustificazione:</b> Vengono eseguite $n$ chiamate ricorsive totali di partizionamento; ciascuna di esse invoca una ricerca del minimo a costo lineare $O(n)$.</li>
            </ul>
        `,
        examples: `
<pre style="background: #2d2d2d; color: #fff; padding: 10px; border-radius: 5px;">
// Ricerca ricorsiva dell'indice del minimo
int trova_min_ric(Item v[], int start, int end) {
    if (start == end) return start;
    int min_rest = trova_min_ric(v, start + 1, end);
    return (cmpItem(v[start], v[min_rest]) < 0) ? start : min_rest;
}

// Funzione di ordinamento principale
void selection_sort_ric(Item v[], int n, int start) {
    if (start >= n - 1) return;
    int indice_min = trova_min_ric(v, start, n - 1);
    
    Item temp = v[start];
    v[start] = v[indice_min];
    v[indice_min] = temp;
    
    selection_sort_ric(v, n, start + 1);
}</pre>`
    },
    {
        id: 22,
        category: 'ordinamento',
        title: "3. MergeSort Iterativo (Lab 11)",
        summary: "Algoritmo di ordinamento ottimizzato Bottom-Up senza ricorsione.",
        details: `
            <p>Il <b>MergeSort Iterativo</b> elimina l'overhead dello Stack di sistema lavorando in modalità Bottom-Up[cite: 245, 246]. Ordina e fonde prima sotto-vettori contigui di dimensione unitaria, passando poi a dimensioni doppie (2, 4, 8, ...) fino ad elaborare l'intero array di $n$ elementi[cite: 248].</p>
            <ul>
                <li><b>Complessità Asintotica:</b> $O(n \log n)$ nel caso migliore, medio e peggiore.</li>
                <li><b>Vantaggi:</b> Stabilità garantita e assenza del rischio di Stack Overflow su input massivi.</li>
            </ul>
        `,
        examples: `
<pre style="background: #2d2d2d; color: #fff; padding: 10px; border-radius: 5px;">
void mergeSortIterativo(Item arr[], int n) {
    int curr_size;  // Dimensione corrente delle sotto-sequenze
    int left_start; // Indice iniziale del blocco sinistro

    for (curr_size = 1; curr_size <= n - 1; curr_size = 2 * curr_size) {
        for (left_start = 0; left_start < n - 1; left_start += 2 * curr_size) {
            int mid = left_start + curr_size - 1;
            int right_end = (left_start + 2 * curr_size - 1 < n - 1) ? 
                             left_start + 2 * curr_size - 1 : n - 1;
            
            if (mid < n - 1) {
                merge(arr, left_start, mid, right_end);
            }
        }
    }
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

    // --- 4. STRUTTURE DINAMICHE ---
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
    {
        id: 41,
        category: 'strutture_dinamiche',
        title: "2. Complessità Operatori Ricorsivi su Lista (Lab 8)",
        summary: "Valutazione asintotica delle funzioni ricorsive core sulle liste.",
        details: `
            <p>L'analisi delle funzioni ricorsive applicate ai nodi di una lista monoconnessa evidenzia equazioni di ricorrenza basate su lavoro di combinazione costante ($a=1$, lavoro=$b$)[cite: 9, 23].</p>
            <table style="width:100%; border-collapse: collapse; margin-top: 10px;">
                <thead>
                    <tr style="background-color: #333; color: white;">
                        <th style="padding: 8px; border: 1px solid #ddd;">Funzione</th>
                        <th style="padding: 8px; border: 1px solid #ddd;">Equazione</th>
                        <th style="padding: 8px; border: 1px solid #ddd;">Complessità</th>
                        <th style="padding: 8px; border: 1px solid #ddd;">Giustificazione</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;"><code>destroyNode</code></td>
                        <td style="padding: 8px; border: 1px solid #ddd;">$T(n) = T(n-1) + b$</td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><b>$O(n)$</b></td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Dealloca ricorsivamente in modalità post-order visitando ogni nodo una volta[cite: 74].</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;"><code>countItemNode</code></td>
                        <td style="padding: 8px; border: 1px solid #ddd;">$T(n) = T(n-1) + b$</td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><b>$O(n)$</b></td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Scansione lineare dell'intera lista per il conteggio occorrenze[cite: 76].</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;"><code>searchNode</code></td>
                        <td style="padding: 8px; border: 1px solid #ddd;">$T(n) = T(n-1) + b$</td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><b>$O(n)$</b></td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Caso peggiore: l'elemento cercato è situato in coda o assente[cite: 79].</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;"><code>printNode</code></td>
                        <td style="padding: 8px; border: 1px solid #ddd;">$T(n) = T(n-1) + b$</td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><b>$O(n)$</b></td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Stampa sequenziale a video dei singoli campi Item dei nodi[cite: 81].</td>
                    </tr>
                </tbody>
            </table>
        `
    },
    { 
        id: 5, 
        category: 'strutture_dinamiche', 
        title: "3. Pila (Stack) e Coda (Queue)", 
        summary: "Logiche LIFO e FIFO ed Esercizi di Inversione.", 
        details: `
            <h4>Pila (Stack) - LIFO</h4>
            <p>Ultimo inserito, primo a uscire. Operazioni: <b>Push</b> (inserimento) e <b>Pop</b> (estrazione).</p>
            
            <h4>Coda (Queue) - FIFO</h4>
            <p>Primo inserito, primo a uscire. Operazioni: <b>Enqueue</b> e <b>Dequeue</b>.</p>
            
            <h4>Esercizio Pratico: Inversione Ricorsiva di una Coda (Lab 8)</h4>
            <p>Consiste nello svuotare ricorsivamente una coda estraendo gli elementi, per poi reinserirli durante la fase di risalita sfruttando lo Stack di attivazione del sistema[cite: 64].</p>
            <ul>
                <li><b>Complessità Asintotica:</b> $O(n)$[cite: 66].</li>
                <li><b>Giustificazione:</b> Viene eseguita una sola chiamata ricorsiva per ognuno dei nodi presenti. Le operazioni interne di estrazione e inserimento costano $O(1)$.</li>
            </ul>
        `,
        examples: `
<pre style="background: #2d2d2d; color: #fff; padding: 10px; border-radius: 5px;">
// Algoritmo di inversione ricorsiva di una coda
void inverti_coda_ric(Queue q) {
    if (isEmptyQueue(q)) return;

    Item it = dequeue(q);   // Estrazione dell'elemento in testa
    inverti_coda_ric(q);    // Chiamata ricorsiva sul resto della coda
    enqueue(q, it);         // Reinserimento in coda durante la risalita
}</pre>`,
        exercises: `
            <div style="border-left: 4px solid #10b981; padding-left: 15px;">
                <p><b>Domanda d'esame:</b> Come si distingue una coda vuota da una piena in un array circolare?</p>
                <hr>
                <p><b>Risposta:</b> Si lascia una cella dell'array costantemente inutilizzata. La coda risulta <b>vuota</b> se <code>head == tail</code>; risulta invece <b>piena</b> se <code>(tail + 1) % N == head</code>.</p>
            </div>
        `
    },
    {
        id: 42,
        category: 'strutture_dinamiche',
        title: "4. Caso d'Esame: Coda implementata con due Stack (Lab 11)",
        summary: "Sviluppo di un ADT composto sfruttando la logica della doppia inversione.",
        details: `
            <p>Questo modulo realizza una struttura FIFO (Coda) utilizzando internamente due strutture LIFO (Stack 1 per il deposito principale dei dati e Stack 2 come area temporanea di supporto)[cite: 256, 257].</p>
            <h4>Analisi dei Costi Computazionali delle Operazioni</h4>
            <ul>
                <li><b>newQueue / isEmptyQueue:</b> Costo $O(1)$[cite: 259, 260].</li>
                <li><b>enqueue:</b> Costo $O(n)$[cite: 261]. Svuota l'intero Stack principale nel secondo Stack (invertendo l'ordine), inserisce il nuovo elemento sul fondo ed infine riposiziona tutto nel primo Stack ripristinando l'assetto.</li>
                <li><b>dequeue:</b> Costo $O(1)$[cite: 262]. Poiché lo Stack principale mantiene l'ordine di uscita corretto sul suo elemento in cima, basta eseguire una singola <code>pop()</code> immediata.</li>
            </ul>
        `,
        examples: `
<pre style="background: #2d2d2d; color: #fff; padding: 10px; border-radius: 5px;">
struct queue {
    Stack s1; // Stack principale
    Stack s2; // Stack di supporto
};

void enqueue(Queue q, Item it) {
    // Trasferimento di inversione in s2
    while (!isEmptyStack(q->s1)) {
        push(q->s2, pop(q->s1));
    }
    // Inserimento del nuovo elemento in s1
    push(q->s1, it);
    // Ripristino dell'ordine in s1
    while (!isEmptyStack(q->s2)) {
        push(q->s1, pop(q->s2));
    }
}

Item dequeue(Queue q) {
    if (isEmptyQueue(q)) return NULL;
    return pop(q->s1); // Estrazione O(1)
}</pre>`
    },

    // --- 5. ALBERI BINARI ---
    {
        id: 51,
        category: 'alberi',
        title: "1. ADT Albero Binario e Analisi Geometrica (Lab 9)",
        summary: "Definizione geometrica, calcolo ricorsivo di nodi ed altezza.",
        details: `
            <p>Un <b>Albero Binario</b> è una struttura non lineare definita ricorsivamente come un insieme vuoto o come un nodo radice collegato a due sottoalberi disgiunti (figlio sinistro e destro)[cite: 85].</p>
            <ul>
                <li><b>Altezza:</b> Lunghezza del cammino massimo dalla radice ad una foglia[cite: 98]. L'albero vuoto ha convenzionalmente altezza $-1$, un nodo singolo ha altezza $0$.</li>
                <li><b>Numero di Nodi:</b> Somma della radice corrente ($1$) più i nodi del sottoalbero sinistro e destro.</li>
                <li><b>Complessità Computazionale:</b> Entrambi gli algoritmi costano <b>$O(n)$</b> poiché analizzano ogni nodo esattamente una volta.</li>
            </ul>
        `,
        examples: `
<pre style="background: #2d2d2d; color: #fff; padding: 10px; border-radius: 5px;">
int contaNodi(BTree t) {
    if (isEmptyBTree(t)) return 0;
    return 1 + contaNodi(getLeft(t)) + contaNodi(getRight(t));
}

int altezza(BTree t) {
    if (isEmptyBTree(t)) return -1;
    int sx = altezza(getLeft(t));
    int dx = altezza(getRight(t));
    return (sx > dx) ? (1 + sx) : (1 + dx);
}</pre>`
    },
    {
        id: 52,
        category: 'alberi',
        title: "2. Visita per Livelli (Lab 9)",
        summary: "Scansione Breadth-First di un albero binario tramite Coda.",
        details: `
            <p>La <b>Visita per Livelli</b> (BFS - Breadth-First Search) analizza i nodi in modo orizzontale, strato dopo strato (L1, L2, L3...)[cite: 88, 107, 109, 113]. Non potendo essere implementata nativamente via ricorsione, necessita di una <b>Coda</b> d'appoggio per memorizzare i nodi da elaborare[cite: 111].</p>
            <h4>Algoritmo:</h4>
            <ol>
                <li>Si inserisce la radice dell'albero nella Coda.</li>
                <li>Finché la coda non è vuota, si estrae il nodo corrente e lo si stampa.</li>
                <li>Se presenti, si inseriscono in coda i suoi figli sinistro e destro.</li>
            </ol>
        `,
        examples: `
<pre style="background: #2d2d2d; color: #fff; padding: 10px; border-radius: 5px;">
void visitaLivelli(BTree t) {
    if (isEmptyBTree(t)) return;
    Queue q = newQueue();
    enqueue(q, t);

    while (!isEmptyQueue(q)) {
        BTree curr = (BTree)dequeue(q);
        outputItem(getRoot(curr));
        
        if (!isEmptyBTree(getLeft(curr)))
            enqueue(q, getLeft(curr));
        if (!isEmptyBTree(getRight(curr)))
            enqueue(q, getRight(curr));
    }
    printf("\\n");
}</pre>`
    },
    {
        id: 53,
        category: 'alberi',
        title: "3. Visite Iterative in Profondità (Lab 9 e 10)",
        summary: "Simulazione della ricorsione tramite Stack per visite DFS.",
        details: `
            <p>Le visite DFS (Depth-First Search) possono essere implementate in forma iterativa disattivando la ricorsione ed introducendo uno <b>Stack</b> per la memorizzazione degli indirizzi di tracciamento dei nodi[cite: 89, 203].</p>
            <ul>
                <li><b>Pre-Order Iterativo:</b> Si stampa la radice ed inserisce nello Stack prima il figlio destro e poi il sinistro (a causa della natura LIFO dello stack).</li>
                <li><b>In-Order Iterativo:</b> Si effettua una discesa estrema lungo i rami sinistri inserendo i nodi incontrati nello Stack. Raggiunto il limite NULL, si fa pop dell'ultimo elemento, lo si stampa, e si passa al suo ramo destro.</li>
            </ul>
        `,
        examples: `
<pre style="background: #2d2d2d; color: #fff; padding: 10px; border-radius: 5px;">
// Visita Pre-Order Iterativa (Radice, Sinistra, Destra)
void preOrderIterativo(BTree t) {
    if (isEmptyBTree(t)) return;
    Stack s = newStack();
    push(s, t);

    while (!isEmptyStack(s)) {
        BTree curr = (BTree)pop(s);
        outputItem(getRoot(curr));

        if (!isEmptyBTree(getRight(curr))) push(s, getRight(curr));
        if (!isEmptyBTree(getLeft(curr)))  push(s, getLeft(curr));
    }
    printf("\\n");
}

// Visita In-Order Iterativa (Sinistra, Radice, Destra)
void inOrderIterativo(BTree t) {
    if (isEmptyBTree(t)) return;
    Stack s = newStack();
    BTree curr = t;

    while (curr != NULL || !isEmptyStack(s)) {
        while (curr != NULL) {
            push(s, curr);
            curr = getLeft(curr);
        }
        curr = (BTree)pop(s);
        outputItem(getRoot(curr));
        curr = getRight(curr);
    }
    printf("\\n");
}</pre>`
    },
    {
        id: 54,
        category: 'alberi',
        title: "4. Operatori Avanzati su Alberi Binari (Lab 10)",
        summary: "Ricerca di chiavi, calcolo del massimo valore ed estrazione nodi condizionata.",
        details: `
            <p>Funzioni utili alla manipolazione e verifica di proprietà strutturali e informative interne ad alberi a valori interi[cite: 439, 440, 441, 442].</p>
            <h4>Algoritmi Implementati:</h4>
            <ul>
                <li><b>cercaK:</b> Effettua una scansione esaustiva dell'albero restituendo 1 se la chiave $k$ è presente, 0 altrimenti[cite: 453].</li>
                <li><b>maxAlbero:</b> Restituisce il valore massimo estratto dal confronto tra la radice corrente ed i massimi locali dei sottoalberi[cite: 460].</li>
                <li><b>nodiPari:</b> Scorre l'albero e colleziona all'interno di una <code>List</code> gli elementi posizionati a profondità pari (livelli 0, 2, 4...)[cite: 468, 472].</li>
            </ul>
        `,
        examples: `
<pre style="background: #2d2d2d; color: #fff; padding: 10px; border-radius: 5px;">
int cercaK(BTree t, int k) {
    if (isEmptyBTree(t)) return 0;
    if (*(int*)getRoot(t) == k) return 1;
    return cercaK(getLeft(t), k) || cercaK(getRight(t), k);
}

int maxAlbero(BTree t) {
    if (isEmptyBTree(t)) return -1;
    int max_corrente = *(int*)getRoot(t);
    int max_sx = maxAlbero(getLeft(t));
    int max_dx = maxAlbero(getRight(t));
    
    if (max_sx > max_corrente) max_corrente = max_sx;
    if (max_dx > max_corrente) max_corrente = max_dx;
    return max_corrente;
}

void nodiPari(BTree t, int livello, List l) {
    if (isEmptyBTree(t)) return;
    if (livello % 2 == 0) addHead(l, getRoot(t));
    nodiPari(getLeft(t), livello + 1, l);
    nodiPari(getRight(t), livello + 1, l);
}</pre>`
    }
];

// --- INIZIALIZZAZIONE ---
document.addEventListener('DOMContentLoaded', () => {
    initPage(psdCategories, psdNotes, "PSD - Archivio Completo");
});