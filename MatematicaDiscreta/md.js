// dati macro categorie
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
    { id: 'combinatoria', title: '10. Combinatoria', desc: 'Inclusione-Esclusione, Piccioni', icon: '🎲', customColor: null },
    { id: 'ordini', title: '11. Relazioni Ordine', desc: 'Reticoli, Hasse, estremi', icon: '≤', customColor: null },
    { id: 'geometria', title: '12. Geometria', desc: 'Rette, piani nello spazio', icon: '📐', customColor: null }
];

// appunti specifici
const mdNotes = [
    // --- 1. INSIEMI ---
    { 
        id: 101, 
        category: 'insiemi', 
        title: "1. Appartenenza vs Inclusione", 
        summary: "Differenza tra elemento e sottoinsieme.", 
        details: `
            <p>È fondamentale distinguere tra il simbolo $\\in$ (appartenenza) e $\\subseteq$ (inclusione).</p>
            <ul>
                <li>$x \\in A$: x è un <b>oggetto</b> dentro la scatola A.</li>
                <li>$B \\subseteq A$: B è una <b>scatola</b> contenuta nella scatola A.</li>
            </ul>
        `,
        examples: `
            <div style="background: #f0fdf4; padding: 15px; border-radius: 10px; border-left: 4px solid #16a34a;">
                <p><b>Esercizio "Tricky" (Struttura H):</b></p>
                <p>Dato $H = \\{ 2, \\{2, 4\\} \\}$.</p>
                <ul>
                    <li>$\\{2\\} \\in H$? <b>FALSO</b>. L'elemento $\{2\}$ (scatola con dentro il 2) non è nella lista. C'è il 2 "nudo".</li>
                    <li>$\\{2\\} \\subseteq H$? <b>VERO</b>. Costruisco un insieme prendendo il 2 da H.</li>
                    <li>$\\{2, 4\\} \\in H$? <b>VERO</b>. È il secondo elemento della lista.</li>
                </ul>
            </div>
        `
    },
    { 
        id: 105, 
        category: 'insiemi', 
        title: "2. Insieme delle Parti P(A)", 
        summary: "Calcolo dei sottoinsiemi e cardinalità.", 
        details: `
            <p><b>$\\mathcal{P}(A)$:</b> È l'insieme di tutti i sottoinsiemi di A.</p>
            <p>Se $|A| = n$, allora $|\\mathcal{P}(A)| = 2^n$.</p>
            <p>Ricorda: $\\emptyset \\in \\mathcal{P}(A)$ e $A \\in \\mathcal{P}(A)$.</p>
        `,
        examples: `
            <div style="background: #f0fdf4; padding: 15px; border-radius: 10px; border-left: 4px solid #16a34a;">
                <p><b>Esercizio:</b> Scrivere $\\mathcal{P}(A)$ per $A = \\{a, 1\\}$.</p>
                <p><b>Svolgimento:</b> $n=2$, quindi avrò $2^2=4$ elementi.</p>
                <p>$\\mathcal{P}(A) = \\{\\emptyset, \\{a\\}, \\{1\\}, \\{a, 1\\}\\}$.</p>
            </div>
        `
    },
    { 
        id: 106, 
        category: 'insiemi', 
        title: "3. Partizioni", 
        summary: "Suddivisione di un insieme in parti disgiunte.", 
        details: `
            <p>Una <b>partizione</b> di un insieme $A$ è una collezione di sottoinsiemi $A_1, A_2, ..., A_n$ che soddisfano tre regole d'oro:</p>
            <ol>
                <li><b>Non vuoti:</b> Nessun sottoinsieme è vuoto ($A_i \\neq \\emptyset$).</li>
                <li><b>Disgiunti:</b> Non hanno elementi in comune ($A_i \\cap A_j = \\emptyset$ se $i \\neq j$).</li>
                <li><b>Ricoprimento:</b> La loro unione forma tutto l'insieme di partenza ($\\bigcup A_i = A$).</li>
            </ol>
            <p><i>Nota bene:</i> C'è un legame strettissimo con le <b>Relazioni di Equivalenza</b>: ogni partizione crea una relazione (elementi nello stesso gruppo sono in relazione) e viceversa.</p>
        `,
        examples: `
            <div style="background: #f0fdf4; padding: 15px; border-radius: 10px; border-left: 4px solid #16a34a;">
                <p><b>Esercizio: Riconoscere una Partizione</b></p>
                <p>Dato $A = \\{1, 2, 3\\}$, quali sono partizioni valide?</p>
                <ul>
                    <li>$\\{\\{1, 2\\}, \\{3\\}\\}$: <b>SÌ</b>. Sono disgiunti, non vuoti e c'è tutto A.</li>
                    <li>$\\{\\{1, 2\\}, \\{2, 3\\}\\}$: <b>NO</b>. C'è intersezione (il 2 è ripetuto).</li>
                    <li>$\\{\\{1\\}, \\{2\\}\\}$: <b>NO</b>. Manca il 3 (l'unione non fa A).</li>
                    <li>$\\{\\{1, 2, 3\\}, \\emptyset\\}$: <b>NO</b>. Non sono ammessi insiemi vuoti.</li>
                </ul>
            </div>
            <br>
            <div style="background: #f0fdf4; padding: 15px; border-radius: 10px; border-left: 4px solid #16a34a;">
                <p><b>Esercizio tipo Esame (Quesito 10):</b></p>
                <p>Se $a, b, v$ devono stare insieme e $w$ deve stare separato da $a$...</p>
                <p>La partizione corretta raggruppa chi è in relazione e separa gli altri: $\\{\\{a, b, v\\}, \\{w, c\\}\\}$.</p>
            </div>
        `
    },

    // --- 2. APPLICAZIONI ---
    { 
        id: 201, 
        category: 'applicazioni', 
        title: "1. Definizione di Funzione", 
        summary: "Esistenza e Unicità (Analisi errori comuni).", 
        details: `
            <p>Un'applicazione $f: A \\to B$ deve rispettare:</p>
            <ol>
                <li><b>Esistenza:</b> Ogni elemento di A deve avere una destinazione.</li>
                <li><b>Unicità:</b> Nessun elemento di A può avere due destinazioni diverse.</li>
            </ol>
        `,
        examples: `
            <div style="background: #fefce8; padding: 15px; border-radius: 10px; border-left: 4px solid #eab308;">
                <p><b>Esercizio: Caccia all'errore</b></p>
                <p>Quale definisce un'applicazione?</p>
                <ul>
                    <li>$A: 2x^3 - 2x^2 = y$ da $\\mathbb{Z} \\to \\mathbb{N}$.<br>
                    <b>FALSO:</b> Se $x=-1$, $y=-4$. Ma $-4 \\notin \\mathbb{N}$. Fallisce l'esistenza.</li>
                    <li>$D: y^2 - x = 1$ da $\\mathbb{Z} \\to \\mathbb{Z}$.<br>
                    <b>FALSO:</b> Se $x=3$, $y^2=4 \\to y=\\pm 2$. Due risultati. Fallisce l'unicità.</li>
                    <li>$C: 2x = -3y$ da $\\mathbb{Z} \\to \\mathbb{Q}$.<br>
                    <b>VERO:</b> $y = -2/3 x$. Per ogni intero x ottengo una sola frazione.</li>
                </ul>
            </div>
        ` 
    },
    { 
        id: 204, 
        category: 'applicazioni', 
        title: "2. Conteggio Funzioni Suriettive", 
        summary: "Il problema dei Piccioni e Stirling.", 
        details: `
            <p>Quante funzioni suriettive ci sono da un insieme di $n$ elementi a uno di $m$ elementi?</p>
            <ul>
                <li>Se $n < m$: <b>ZERO</b> (impossibile coprire tutti i bersagli).</li>
                <li>Se $n \ge m$: Si usa il principio di Inclusione-Esclusione o i numeri di Stirling.</li>
            </ul>
             
        `,
        examples: `
            <div style="background: #fefce8; padding: 15px; border-radius: 10px; border-left: 4px solid #eab308;">
                <p><b>Caso 1:</b> Da $S=\\{1,2,3\\}$ a $T=\\{a,b,c,d\\}$.<br>
                $|S|=3, |T|=4$. Impossibile coprire T.<br>
                <b>Risposta: 0</b>.</p>
                <hr>
                <p><b>Caso 2:</b> Da $T=\\{1,2,3,4\\}$ a $S=\\{a,b,c\\}$.<br>
                Si usa la formula o il ragionamento logico (1 coppia + 2 singoli).<br>
                Modi di fare la coppia: $\\binom{4}{2} = 6$.<br>
                Modi di distribuire (3!): $6$.<br>
                Totale: $6 \\times 6 = \\mathbf{36}$.</p>
            </div>
        `
    },

    // --- 3. RELAZIONI ---
    { 
        id: 301, 
        category: 'relazioni', 
        title: "1. Proprietà delle Relazioni", 
        summary: "Riflessiva, Simmetrica, Transitiva (Esempi pratici).", 
        details: `
            <p>Una relazione è di <b>Equivalenza</b> se è R, S, T.</p>
            <p>Una relazione è d'<b>Ordine</b> se è R, Antisimmetrica, T.</p>
        `,
        examples: `
            <div style="background: #eff6ff; padding: 15px; border-radius: 10px; border-left: 4px solid #3b82f6;">
                <p><b>Esercizio "Parentela":</b></p>
                <p>Quale relazione è Simmetrica, Transitiva ma NON Riflessiva?</p>
                <ul>
                    <li>"Essere padre di": No simmetrica.</li>
                    <li>"Avere gli occhi azzurri":<br>
                    - Simmetrica: Sì (se io ho gli occhi azzurri come te, tu li hai come me).<br>
                    - Transitiva: Sì (tutti nel gruppo).<br>
                    - Riflessiva? <b>NO</b> universale. Chi ha gli occhi neri non è in relazione con se stesso in questo contesto specifico.</li>
                </ul>
            </div>
        ` 
    },
    { 
        id: 302, 
        category: 'relazioni', 
        title: "2. Partizioni e Classi", 
        summary: "Costruire l'insieme quoziente.", 
        details: `
            <p>Se $a,b,v$ sono in relazione tra loro, devono stare nello stesso "sacchetto" (insieme della partizione).</p>
            <p>Se $w$ non è in relazione con $a$, deve stare in un sacchetto diverso.</p>
        `,
        examples: `
            <div style="background: #eff6ff; padding: 15px; border-radius: 10px; border-left: 4px solid #3b82f6;">
                <p><b>Esercizio:</b></p>
                <p>Dati $a\\mathcal{R}v$, $b\\mathcal{R}v$, $a \\notin [w]$, $b \\notin [c]$. Trovare la partizione.</p>
                <p><b>Soluzione:</b><br>
                $\{a,b,v\}$ devono stare insieme (transitiva).<br>
                $w$ e $c$ devono stare separati dal primo gruppo.<br>
                Partizione corretta: $\\{\\{a, b, v\\}, \\{w, c\\}\\}$.</p>
            </div>
        ` 
    },

    // --- 4. ARITMETICA ---
    { 
        id: 402, 
        category: 'aritmetica', 
        title: "1. MCD e Bèzout", 
        summary: "Algoritmo Euclideo Esteso.", 
        details: `
            <p><b>Teorema:</b> $MCD(a,b)$ è scrivibile come $ax + by$.</p>
            

[Image of flowchart of Euclidean algorithm]

        `,
        examples: `
            <div style="background: #fff1f2; padding: 15px; border-radius: 10px; border-left: 4px solid #e11d48;">
                <p><b>Esercizio:</b> Trovare soluzioni di $13x + 19y = 1$.</p>
                <p>Euclide: $19 = 13(1) + 6 \\to 13 = 6(2) + 1$.<br>
                Risalita: $1 = 13 - 6(2) = 13 - (19-13)(2) = 13(3) - 19(2)$.<br>
                Soluzione: $x=3, y=-2$.</p>
            </div>
        ` 
    },

    // --- 5. MATRICI ---
    { 
        id: 501, 
        category: 'matrici', 
        title: "1. Rango e Trappole", 
        summary: "Il rango con righe uguali.", 
        details: `
            <p><b>Rango:</b> Numero massimo di righe/colonne indipendenti.</p>
            <p><b>Regola aurea:</b> $rank(A) \\le \\min(\\text{righe}, \\text{colonne})$.</p>
        `,
        examples: `
            <div style="background: #fdf2f8; padding: 15px; border-radius: 10px; border-left: 4px solid #db2777;">
                <p><b>Esercizio "Trappola":</b></p>
                <p>Matrice $4 \\times 3$ con due righe uguali. Cosa è certo?</p>
                <p>Molti dicono rango 2. <b>Errore!</b><br>
                Se tolgo la riga doppia, me ne restano 3. Potrebbero essere tutte indipendenti.<br>
                L'unica certezza è che avendo 3 colonne, il rango è $\\le 3$.</p>
            </div>
        ` 
    },
    { 
        id: 502, 
        category: 'matrici', 
        title: "2. Rango con Parametro", 
        summary: "Quando il determinante si annulla.", 
        details: `
            <p>Per abbassare il rango di una matrice quadrata $n \\times n$, il determinante deve essere 0.</p>
        `,
        examples: `
            <div style="background: #fdf2f8; padding: 15px; border-radius: 10px; border-left: 4px solid #db2777;">
                <p><b>Esercizio:</b></p>
                <p>Per quale $k$ la matrice $3 \\times 3$ ha rango 2?</p>
                <p>Calcolo $Det(A) = 2k - 1$.<br>
                Impongo $Det = 0 \\Rightarrow k = 1/2$.</p>
            </div>
        ` 
    },

    // --- 8. SISTEMI LINEARI ---
    { 
        id: 801, 
        category: 'sistemi', 
        title: "1. Rouchè-Capelli e Cramer", 
        summary: "Condizioni di risolubilità.", 
        details: `
            <p><b>Rouchè-Capelli:</b> Un sistema ha soluzioni $\\iff rank(A) = rank(A|b)$.</p>
            <p>Se $rank = n$ (incognite), soluzione unica (Cramer).</p>
            <p>Se $rank < n$, infinite soluzioni ($\infty^{n-rank}$).</p>
        `,
        examples: `
            <div style="background: #f0f9ff; padding: 15px; border-radius: 10px; border-left: 4px solid #0ea5e9;">
                <p><b>Nota sui sistemi omogenei ($Ax=0$):</b></p>
                <p>Hanno sempre almeno una soluzione (quella nulla). Non sono mai impossibili.</p>
            </div>
        ` 
    },

    // --- 9. DIAGONALIZZAZIONE ---
    { 
        id: 901, 
        category: 'diagonalizzazione', 
        title: "1. Autovalori e Trucchi", 
        summary: "Matrici triangolari e molteplicità.", 
        details: `
            <p><b>Autovalori ($\lambda$):</b> Soluzioni di $\det(A - \lambda I) = 0$.</p>
            <p><b>Trucco:</b> Se la matrice è triangolare (zeri sotto la diagonale), gli autovalori sono i numeri sulla diagonale!</p>
             
        `,
        examples: `
            <div style="background: #faf5ff; padding: 15px; border-radius: 10px; border-left: 4px solid #9333ea;">
                <p><b>Esercizio:</b> $M = \\begin{pmatrix} 0 & 2 & 1 \\\\ 0 & 6 & -2 \\\\ 0 & 0 & 6 \\end{pmatrix}$.</p>
                <p>Autovalori visibili sulla diagonale: $0, 6, 6$.</p>
                <p>L'affermazione "Ha un unico autovalore 6" è <b>FALSA</b> (c'è anche lo 0).</p>
            </div>
        ` 
    },
    { 
        id: 902, 
        category: 'diagonalizzazione', 
        title: "2. Condizioni Diagonalizzabilità", 
        summary: "Distinti vs Coincidenti.", 
        details: `
            <p>1. Se una matrice $n \\times n$ ha $n$ autovalori <b>tutti distinti</b> $\\Rightarrow$ È <b>sicuramente</b> diagonalizzabile.</p>
            <p>2. Se ha autovalori coincidenti, bisogna controllare che $m_{alg} = m_{geom}$.</p>
        `,
        examples: `
            <div style="background: #faf5ff; padding: 15px; border-radius: 10px; border-left: 4px solid #9333ea;">
                <p><b>Teorema:</b> Se ho 3 autovalori distinti in $\\mathbb{R}^3$, ho 3 autovettori indipendenti che formano una base. Quindi diagonalizzo.</p>
            </div>
        ` 
    },

    // --- 10. COMBINATORIA ---
    { 
        id: 1001, 
        category: 'combinatoria', 
        title: "1. Principio Inclusione-Esclusione", 
        summary: "Contare unioni di insiemi.", 
        details: `
            <p>$|A \\cup B \\cup C| = |A| + |B| + |C| - (|A \\cap B| + ...) + |A \\cap B \\cap C|$.</p>
        `,
        examples: `
            <div style="background: #fff7ed; padding: 15px; border-radius: 10px; border-left: 4px solid #f97316;">
                <p><b>Esercizio: Divisibilità</b></p>
                <p>Numeri < 900 divisibili per 11, 23, 29.</p>
                <p>Calcolo i singoli: $\\lfloor 899/11 \\rfloor$, ecc.<br>
                Tolgo le intersezioni a coppie: $\\lfloor 899/(11\\cdot23) \\rfloor$, ecc.<br>
                Aggiungo la tripla (qui era 0).<br>
                Risultato: $151 - 6 + 0 = 145$.</p>
            </div>
        ` 
    },

    // --- 11. RELAZIONI D'ORDINE ---
    { 
        id: 1101, 
        category: 'ordini', 
        title: "1. Reticoli e Divisibilità", 
        summary: "Sup (mcm) e Inf (MCD).", 
        details: `
            <p>In un insieme ordinato dalla divisibilità $(\\mathbb{N}, |)$:</p>
            <ul>
                <li><b>Supremo (Sup):</b> Minimo Comune Multiplo (mcm).</li>
                <li><b>Estremo Inferiore (Inf):</b> Massimo Comun Divisore (MCD).</li>
            </ul>
             

[Image of Hasse diagram example]

        `,
        examples: `
            <div style="background: #f0fdfa; padding: 15px; border-radius: 10px; border-left: 4px solid #14b8a6;">
                <p><b>Esercizio Sup:</b> Insieme $\{20, 2, 5, 15, 50\}$.<br>
                Cerco mcm. Fattori vincenti: $2^2$ (dal 20), $3^1$ (dal 15), $5^2$ (dal 50).<br>
                $4 \\cdot 3 \\cdot 25 = 300$.</p>
                <hr>
                <p><b>Esercizio Inf:</b> Insieme $\{4, 16, 20, 32\}$.<br>
                Cerco MCD. Fattori comuni: solo il 2.<br>
                Esponente più basso: $2^2$ (dal 4). Risultato: 4.</p>
            </div>
        ` 
    },
    { 
        id: 1102, 
        category: 'ordini', 
        title: "2. Minimi, Massimi e Ben Ordinato", 
        summary: "Differenze tra N e Z.", 
        details: `
            <p><b>Ben Ordinato:</b> Ogni sottoinsieme non vuoto ha un minimo.</p>
            <p>$\\mathbb{N}$ è ben ordinato. $\\mathbb{Z}$ <b>NO</b> (i negativi vanno all'infinito giù).</p>
        `,
        examples: `
            <div style="background: #f0fdfa; padding: 15px; border-radius: 10px; border-left: 4px solid #14b8a6;">
                <p><b>Esercizio Minimo:</b> Insieme $\{x, 3, 4, 6, 8\}$.<br>
                Affinché esista un minimo, $x$ deve dividere tutti.<br>
                Se $x=1$, divide 3, 4, 6, 8. Quindi 1 è il minimo.</p>
            </div>
        ` 
    }
];

document.addEventListener('DOMContentLoaded', () => {
    initPage(mdCategories, mdNotes, "Matematica Discreta");
});