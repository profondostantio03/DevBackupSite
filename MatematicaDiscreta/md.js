const mdCategories = [
    { id: 'insiemi', title: '1. Insiemi', desc: 'Operazioni, parti e partizioni', icon: '∅', customColor: null },
    { id: 'applicazioni', title: '2. Applicazioni', desc: 'Iniettive, suriettive, biettive', icon: 'ƒ', customColor: null },
    { id: 'relazioni', title: '3. Relazioni Eq.', desc: 'Equivalenza e quozienti', icon: '≡', customColor: null },
    { id: 'aritmetica', title: '4. Aritmetica', desc: 'Induzione, divisibilità, congruenze', icon: '🔢', customColor: null },
    { id: 'matrici', title: '5. Matrici', desc: 'Operazioni, determinante, rango', icon: '▦', customColor: null },
    { id: 'strutture', title: '6. Strutture Alg.', desc: 'Gruppi, campi, operazioni', icon: '⚙️', customColor: null },
    { id: 'vettori', title: '7. Spazi Vettoriali', desc: 'Basi, dimensione, generatori', icon: '↗️', customColor: null },
    { id: 'sistemi', title: '8. Sistemi Lineari', desc: 'Rouchè-Capelli, Cramer, Gauss', icon: '🟰', customColor: null },
    { id: 'diagonalizzazione', title: '9. Diagonalizzazione', desc: 'Autovalori e autovettori', icon: '📉', customColor: null },
    { id: 'combinatoria', title: '10. Combinatoria', desc: 'Disposizioni, combinazioni', icon: '🎲', customColor: null },
    { id: 'ordini', title: '11. Relazioni Ordine', desc: 'Reticoli, Hasse, estremi', icon: '≤', customColor: null },
    { id: 'geometria', title: '12. Geometria', desc: 'Rette, piani nello spazio', icon: '📐', customColor: null }
];

// appunti specifici
const mdNotes = [
    // --- 1. INSIEMI (Aggiornato con i tuoi appunti) ---
    { 
        id: 101, 
        category: 'insiemi', 
        title: "Definizioni e Rappresentazione", 
        summary: "Concetti primitivi, Tabulazione vs Proprietà.", 
        details: `
            <p>Un insieme è una collezione di oggetti (elementi). È un concetto primitivo. In un insieme <b>non conta l'ordine</b> e <b>non contano le ripetizioni</b> ({a,b,a} = {a,b}).</p>
            <ul>
                <li><b>Tabulazione (Elenco):</b> $A = \\{a, b, 3\\}$</li>
                <li><b>Proprietà (Comprensione):</b> $B = \\{x \\mid P(x)\\}$<br>
                <i>Esempio:</i> $\{x \\mid x \\text{ è lettera di 'casa'}\} = \{a, c, s\}$.</li>
            </ul>
        ` 
    },
    { 
        id: 102, 
        category: 'insiemi', 
        title: "Simboli e Insiemi Numerici", 
        summary: "Appartenenza, Vuoto, N, Z, Q, R, C.", 
        details: `
            <p><b>Simboli:</b> $\\in$ (appartiene), $\\notin$ (non appartiene).</p>
            <p><b>Insiemi Notevoli:</b></p>
            <ul>
                <li>$\\emptyset$: Insieme Vuoto (0 elementi). Da non confondere con lo zero numero!</li>
                <li>$\\{a\\}$: Singleton (1 elemento).</li>
                <li>$\\mathbb{N}$: Naturali $\{1, 2, ...\}$ ($\\{0, 1, ...\\}$ è $\\mathbb{N}_0$)</li>
                <li>$\\mathbb{Z}$: Interi relative</li>
                <li>$\\mathbb{Q}$: Razionali (frazioni)</li>
                <li>$\\mathbb{R}$: Reali (retta continua)</li>
                <li>$\\mathbb{C}$: Complessi</li>
            </ul>
        ` 
    },
    { 
        id: 103, 
        category: 'insiemi', 
        title: "Sottoinsiemi e Uguaglianza", 
        summary: "Inclusione, Sottoinsiemi propri, Doppia Inclusione.", 
        details: `
            <ul>
                <li><b>Sottoinsieme ($B \\subseteq A$):</b> Ogni elemento di B sta anche in A.</li>
                <li><b>Sottoinsieme Proprio ($B \\subset A$):</b> $B \\subseteq A$ ma $B \\neq A$ (c'è almeno un elemento di A fuori da B).</li>
                <li><b>Uguaglianza ($A = B$):</b> Si dimostra con la <b>Doppia Inclusione</b>: devo provare che $A \\subseteq B$ E $B \\subseteq A$.</li>
            </ul>
            <p><i>Nota:</i> $\\emptyset$ è sottoinsieme di tutti gli insiemi.</p>
        ` 
    },
    { 
        id: 104, 
        category: 'insiemi', 
        title: "Operazioni su Insiemi", 
        summary: "Unione, Intersezione, Differenza, Cartesiano.", 
        details: `
            [Image of Venn diagrams set operations]
            <ul>
                <li><b>Unione ($A \\cup B$):</b> $x \\in A$ OR $x \\in B$.</li>
                <li><b>Intersezione ($A \\cap B$):</b> $x \\in A$ AND $x \\in B$. (Se $\\emptyset$, sono disgiunti).</li>
                <li><b>Differenza ($A \\setminus B$):</b> $x \\in A$ ma $x \\notin B$.</li>
                <li><b>Prodotto Cartesiano ($A \\times B$):</b> Tutte le coppie ordinate $(a,b)$. Qui l'ordine conta!</li>
            </ul>
        ` 
    },
    { 
        id: 105, 
        category: 'insiemi', 
        title: "Parti e Partizioni", 
        summary: "Insieme delle parti P(A) e regole partizioni.", 
        details: `
            <p><b>Insieme delle Parti $\\mathcal{P}(A)$:</b> L'insieme di tutti i possibili sottoinsiemi di A.<br>
            Se $|A| = n$, allora $|\\mathcal{P}(A)| = 2^n$.</p>
            <p><b>Partizione:</b> Suddivisione di A in blocchi tali che:
            1. Nessun blocco è vuoto.
            2. Sono disgiunti a due a due.
            3. La loro unione ricrea A.</p>
        ` 
    },
    { 
        id: 106, 
        category: 'insiemi', 
        title: "Tecniche di Dimostrazione", 
        summary: "Dimostrare Uguaglianze e De Morgan.", 
        details: `
            <ul>
                <li><b>Per dimostrare $A = B$:</b> Uso la doppia inclusione ($A \\subseteq B \\land B \\subseteq A$) prendendo un elemento generico.</li>
                <li><b>Per dimostrare $A \\neq B$:</b> Basta un <b>Controesempio</b> (un solo elemento che sta in uno ma non nell'altro).</li>
                <li><b>Logica e Insiemi:</b> Tradurre i simboli:<br>
                $\\cup \\to \\lor$ (vel), $\\cap \\to \\land$ (et), $A^c \\to \\neg$.<br>
                Utile per dimostrare leggi come De Morgan: $(A \\cup B)^c = A^c \\cap B^c$.</li>
            </ul>
        ` 
    },

    // --- 2. APPLICAZIONI ---
    { 
        id: 201, category: 'applicazioni', title: "Immagini e Controimmagini", 
        summary: "Definizioni base di f(A) e f^-1(B).", 
        details: `<p>L'immagine è l'insieme dei valori assunti dalla funzione. La controimmagine è l'insieme degli elementi del dominio che vengono mappati in un dato sottoinsieme del codominio.</p>` 
    },
    { 
        id: 202, category: 'applicazioni', title: "Tipologie di Applicazioni", 
        summary: "Iniettive, Suriettive, Biettive.", 
        details: `<ul><li><b>Iniettiva:</b> Elementi distinti hanno immagini distinte.</li><li><b>Suriettiva:</b> L'immagine coincide col codominio.</li><li><b>Biettiva:</b> Sia iniettiva che suriettiva.</li></ul>` 
    },
    { 
        id: 203, category: 'applicazioni', title: "Composte e Inverse", 
        summary: "Funzioni composte e funzione inversa.", 
        details: `<p><b>Composizione:</b> (g ∘ f)(x) = g(f(x)).<br><b>Inversa:</b> Esiste solo se la funzione è biettiva. Mappa l'immagine al suo unico antecedente.</p>` 
    },

    // --- 3. RELAZIONI DI EQUIVALENZA ---
    { 
        id: 301, category: 'relazioni', title: "Classi e Quoziente", 
        summary: "Proprietà riflessiva, simmetrica, transitiva.", 
        details: `<p>Una relazione d'equivalenza partiziona l'insieme in <b>classi di equivalenza</b> (elementi in relazione tra loro). L'insieme di queste classi è l'<b>Insieme Quoziente</b>.</p>` 
    },
    { 
        id: 302, category: 'relazioni', title: "Teorema Fondamentale", 
        summary: "Relazione tra partizioni e relazioni d'equivalenza.", 
        details: `<p>Ogni relazione d'equivalenza su A determina una partizione di A, e viceversa ogni partizione determina una relazione d'equivalenza.</p>` 
    },

    // --- 4. ARITMETICA ---
    { 
        id: 401, category: 'aritmetica', title: "Induzione e Naturali", 
        summary: "Numeri N, Z e Principio di Induzione.", 
        details: `<p><b>Principio di Induzione:</b> Se P(0) è vera e [P(n) implica P(n+1)], allora P(n) è vera per ogni n.</p>` 
    },
    { 
        id: 402, category: 'aritmetica', title: "Divisibilità e Primi", 
        summary: "Divisione euclidea, Primi, Teorema Fondamentale.", 
        details: `<p>Ogni intero > 1 è prodotto di numeri primi in modo unico (Teorema Fondamentale). Esistono infiniti numeri primi (Teorema di Euclide).</p>` 
    },
    { 
        id: 403, category: 'aritmetica', title: "MCD, mcm e Bezout", 
        summary: "Algoritmo di Euclide e identità di Bèzout.", 
        details: `<p><b>MCD(a,b):</b> Massimo Comun Divisore.<br><b>Algoritmo Euclideo:</b> Metodo delle divisioni successive.<br><b>Bèzout:</b> Esistono x,y tali che ax + by = MCD(a,b).</p>` 
    },
    { 
        id: 404, category: 'aritmetica', title: "Congruenze", 
        summary: "Modulo m, equazioni lineari, Teorema Cinese.", 
        details: `<p><b>a ≡ b (mod m):</b> m divide (a-b).<br>Il Teorema Cinese del Resto risolve sistemi di congruenze con moduli coprimi.</p>` 
    },

    // --- 5. MATRICI ---
    { 
        id: 501, category: 'matrici', title: "Operazioni su Matrici", 
        summary: "Somma, prodotto, trasposta, scala.", 
        details: `<p>Include prodotto righe per colonne. Matrici a scala (ridotta) ottenute tramite eliminazione di Gauss.</p>` 
    },
    { 
        id: 502, category: 'matrici', title: "Determinante e Inversa", 
        summary: "Teorema di Binet, calcolo inversa.", 
        details: `<p><b>Determinante:</b> Unico solo per matrici quadrate. Se det(A) ≠ 0, la matrice è invertibile.<br><b>Binet:</b> det(AB) = det(A)det(B).</p>` 
    },
    { 
        id: 503, category: 'matrici', title: "Rango", 
        summary: "Definizione e calcolo del rango.", 
        details: `<p>Il massimo numero di righe (o colonne) linearmente indipendenti. Fondamentale per i sistemi lineari.</p>` 
    },

    // --- 6. STRUTTURE ALGEBRICHE ---
    { 
        id: 601, category: 'strutture', title: "Operazioni Interne", 
        summary: "Associatività, commutatività, neutro.", 
        details: `<p>Analisi delle tavole di moltiplicazione. Elementi invertibili e elemento neutro.</p>` 
    },
    { 
        id: 602, category: 'strutture', title: "Gruppi e Campi", 
        summary: "Definizioni delle strutture fondamentali.", 
        details: `<p><b>Gruppo:</b> Insieme con operazione associativa, neutro e inverso.<br><b>Campo:</b> Struttura commutativa con somma e prodotto (es. R, Q, Z_p con p primo).</p>` 
    },

    // --- 7. SPAZI VETTORIALI ---
    { 
        id: 701, category: 'vettori', title: "Definizioni e Sottospazi", 
        summary: "Vettori, generatori e dipendenza lineare.", 
        details: `<p>Combinazioni lineari. Un sottospazio deve essere chiuso rispetto a somma e prodotto per scalare.</p>` 
    },
    { 
        id: 702, category: 'vettori', title: "Basi e Dimensione", 
        summary: "Concetto di Base e dimensione finita.", 
        details: `<p><b>Base:</b> Insieme di generatori linearmente indipendenti.<br><b>Dimensione:</b> Numero di vettori in una base.</p>` 
    },
    { 
        id: 703, category: 'vettori', title: "Applicazioni Lineari", 
        summary: "Funzioni che conservano le operazioni.", 
        details: `<p>f(v+w) = f(v)+f(w) e f(kv) = kf(v). Nucleo e Immagine.</p>` 
    },

    // --- 8. SISTEMI LINEARI ---
    { 
        id: 801, category: 'sistemi', title: "Rouchè-Capelli", 
        summary: "Condizione di compatibilità.", 
        details: `<p>Un sistema Ax=b è compatibile se e solo se rango(A) = rango(A|b).</p>` 
    },
    { 
        id: 802, category: 'sistemi', title: "Metodi Risolutivi", 
        summary: "Cramer e Gauss-Jordan.", 
        details: `<p><b>Cramer:</b> Per sistemi quadrati con det ≠ 0.<br><b>Gauss:</b> Riduzione a scala per trovare le soluzioni generali.</p>` 
    },

    // --- 9. DIAGONALIZZAZIONE ---
    { 
        id: 901, category: 'diagonalizzazione', title: "Autovalori e Autovettori", 
        summary: "Polinomio caratteristico.", 
        details: `<p>Si risolve det(A - λI) = 0 per trovare gli autovalori λ.</p>` 
    },
    { 
        id: 902, category: 'diagonalizzazione', title: "Condizioni Diag.", 
        summary: "Molteplicità algebrica e geometrica.", 
        details: `<p>Una matrice è diagonalizzabile se per ogni autovalore la molteplicità geometrica coincide con quella algebrica.</p>` 
    },

    // --- 10. COMBINATORIA ---
    { 
        id: 1001, category: 'combinatoria', title: "Principi Base", 
        summary: "Addizione, Moltiplicazione, Inclusione-Esclusione.", 
        details: `<p>Regole fondamentali per il conteggio degli elementi.</p>` 
    },
    { 
        id: 1002, category: 'combinatoria', title: "Disposizioni e Fattoriale", 
        summary: "Calcolo fattoriale, disposizioni semplici/ripetute.", 
        details: `<p>n! = n(n-1)...1. Formule per ordinare k oggetti scelti da un insieme di n.</p>` 
    },

    // --- 11. RELAZIONI D'ORDINE ---
    { 
        id: 1101, category: 'ordini', title: "Maggioranti e Minoranti", 
        summary: "Estremo superiore, inferiore, max, min.", 
        details: `<p>Definizioni in insiemi ordinati. Differenza tra massimo (appartiene all'insieme) ed estremo superiore.</p>` 
    },
    { 
        id: 1102, category: 'ordini', title: "Reticoli e Hasse", 
        summary: "Diagrammi di Hasse, definizione di Reticolo.", 
        details: `<p>Un reticolo è un insieme ordinato dove ogni coppia di elementi ha un inf e un sup. Rappresentazione grafica tramite Hasse.</p>` 
    },

    // --- 12. GEOMETRIA ANALITICA ---
    { 
        id: 1201, category: 'geometria', title: "Vettori e Riferimenti", 
        summary: "Operazioni vettoriali e riferimenti affini.", 
        details: `<p>Somma vettori, prodotto scalare e vettoriale nello spazio.</p>` 
    },
    { 
        id: 1202, category: 'geometria', title: "Rette e Piani", 
        summary: "Equazioni parametriche e cartesiane.", 
        details: `<p>Descrizione di rette e piani nello spazio. Condizioni di parallelismo e incidenza.</p>` 
    }
];

// avvio pagina
document.addEventListener('DOMContentLoaded', () => {
    initPage(mdCategories, mdNotes, "Matematica Discreta");
});