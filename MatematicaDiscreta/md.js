// dati macro categorie (Invariato)
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

// appunti specifici (CORRETTO con doppio backslash)
const mdNotes = [
    // --- 1. INSIEMI ---
    { 
        id: 101, 
        category: 'insiemi', 
        title: "1. Appartenenza vs Inclusione", 
        summary: "Definizioni formali e Doppia Inclusione.", 
        details: `
            <p><b>Definizione di Inclusione ($\\subseteq$):</b></p>
            <p>Siano $A$ e $B$ due insiemi. Diciamo che $A \\subseteq B$ se e solo se:</p>
            <p>$$\\forall x, \\quad x \\in A \\implies x \\in B$$</p>
            <p><b>Principio della Doppia Inclusione (Uguaglianza):</b></p>
            <p>Per dimostrare che due insiemi sono uguali ($A=B$), è necessario dimostrare che:</p>
            <ol>
                <li>$A \\subseteq B$ (ogni elemento di A sta in B)</li>
                <li>$B \\subseteq A$ (ogni elemento di B sta in A)</li>
            </ol>
            <p><b>Differenza formale $\\in$ vs $\\subseteq$:</b></p>
            <ul>
                <li>$\\in$ relaziona un <i>elemento</i> a un insieme.</li>
                <li>$\\subseteq$ relaziona un <i>insieme</i> a un altro insieme.</li>
            </ul>
        `,
        examples: `
            <div style="background: #f0fdf4; padding: 15px; border-radius: 10px; border-left: 4px solid #16a34a;">
                <p><b>Esercizio "Tricky" (Struttura H):</b></p>
                <p>Dato $H = \\{ 2, \\{2, 4\\} \\}$.</p>
                <ul>
                    <li>$\\{2\\} \\in H$? <b>FALSO</b>. L'elemento $\\{2\\}$ non è elencato. Gli elementi sono $2$ e $\\{2,4\\}$.</li>
                    <li>$\\{2\\} \\subseteq H$? <b>VERO</b>. Perché l'elemento $2$ appartiene ad $H$.</li>
                    <li>$\\{2, 4\\} \\subseteq H$? <b>FALSO</b>. Affinché fosse vero, sia 2 che 4 dovrebbero essere elementi "liberi" in H. Il 4 non c'è.</li>
                    <li>$\\{2, 4\\} \\in H$? <b>VERO</b>. È esattamente il secondo elemento.</li>
                </ul>
            </div>
        `
    },
    { 
        id: 105, 
        category: 'insiemi', 
        title: "2. Insieme delle Parti P(S)", 
        summary: "Definizione rigorosa e Teorema sulla Cardinalità.", 
        details: `
            <p><b>Definizione:</b> Dato un insieme $S$, l'insieme delle parti $\\mathcal{P}(S)$ è l'insieme costituito da <b>tutti</b> i sottoinsiemi di $S$.</p>
            <p>$$\\mathcal{P}(S) := \\{ X \\mid X \\subseteq S \\}$$</p>
            <p><b>Proprietà fondamentali:</b></p>
            <ul>
                <li>$\\emptyset \\in \\mathcal{P}(S)$ (l'insieme vuoto è sottoinsieme di chiunque).</li>
                <li>$S \\in \\mathcal{P}(S)$ (ogni insieme è sottoinsieme di se stesso).</li>
            </ul>
            <p><b>Teorema (Cardinalità):</b></p>
            <p>Se $S$ è un insieme finito con $|S| = n$, allora $|\\mathcal{P}(S)| = 2^n$.</p>
        `,
        examples: `
            <div style="background: #f0fdf4; padding: 15px; border-radius: 10px; border-left: 4px solid #16a34a;">
                <p><b>Esercizio:</b> Scrivere $\\mathcal{P}(A)$ per $A = \\{a, 1\\}$.</p>
                <p><b>Svolgimento:</b> $n=2$, quindi avrò $2^2=4$ elementi (che sono insiemi!).</p>
                <p>$\\mathcal{P}(A) = \\{ \\emptyset, \\{a\\}, \\{1\\}, \\{a, 1\\} \\}$.</p>
                <p><i>Nota:</i> Non dimenticare le parentesi graffe interne.</p>
            </div>
        `
    },
    { 
        id: 106, 
        category: 'insiemi', 
        title: "3. Partizioni", 
        summary: "Teorema fondamentale sulle Partizioni.", 
        details: `
            <p><b>Definizione:</b> Una famiglia di sottoinsiemi $\\{A_i\\}_{i \\in I}$ di $S$ è una <b>partizione</b> di $S$ se valgono:</p>
            <ol>
                <li><b>Non vuoti:</b> $\\forall i, A_i \\neq \\emptyset$.</li>
                <li><b>A due a due disgiunti:</b> $\\forall i \\neq j, A_i \\cap A_j = \\emptyset$.</li>
                <li><b>Ricoprimento totale:</b> $\\bigcup_{i \\in I} A_i = S$.</li>
            </ol>
            <p><b>Teorema Fondamentale (Lezione 10):</b></p>
            <p>Esiste una corrispondenza biunivoca tra le <i>Relazioni di Equivalenza</i> su $S$ e le <i>Partizioni</i> di $S$.</p>
            <p>Ogni relazione di equivalenza definisce una partizione (l'Insieme Quoziente $S/\\mathcal{R}$) e viceversa.</p>
        `,
        examples: `
            <div style="background: #f0fdf4; padding: 15px; border-radius: 10px; border-left: 4px solid #16a34a;">
                <p><b>Esempio di Errore:</b></p>
                <p>Dato $A = \\{1, 2, 3\\}$. La famiglia $\\mathcal{F} = \\{ \\{1,2\\}, \\{3\\}, \\emptyset \\}$</p>
                <p><b>NON</b> è una partizione perché contiene l'insieme vuoto.</p>
                <p>La famiglia $\\mathcal{G} = \\{ \\{1,2\\}, \\{2,3\\} \\}$</p>
                <p><b>NON</b> è una partizione perché l'intersezione non è vuota ($2$ è ripetuto).</p>
            </div>
        `
    },

    // --- 2. APPLICAZIONI ---
    { 
        id: 201, 
        category: 'applicazioni', 
        title: "1. Definizione di Applicazione", 
        summary: "Totale e Funzionale (Esistenza e Unicità).", 
        details: `
            <p><b>Definizione Rigorosa (Lezione 5):</b></p>
            <p>Siano $S, T$ insiemi. Una relazione $f \\subseteq S \\times T$ è un'<b>applicazione</b> $f: S \\to T$ se:</p>
            <ol>
                <li><b>Ovunque definita (Esistenza):</b> $\\forall x \\in S, \\exists y \\in T$ t.c. $(x,y) \\in f$.</li>
                <li><b>Funzionale (Unicità):</b> $\\forall x \\in S, \\forall y_1, y_2 \\in T$, se $(x,y_1) \\in f \\land (x,y_2) \\in f \\implies y_1=y_2$.</li>
            </ol>
            <p>In sintesi: $\\forall x \\in S, \\exists! y \\in T$ tale che $y = f(x)$.</p>
        `,
        examples: `
            <div style="background: #fefce8; padding: 15px; border-radius: 10px; border-left: 4px solid #eab308;">
                <p><b>Esercizio: Caccia all'errore</b></p>
                <ul>
                    <li>$f: \\mathbb{Z} \\to \\mathbb{N}, f(x) = x$. <br><b>NON è applicazione</b>. Se $x=-2$, $-2 \\notin \\mathbb{N}$. Viola l'esistenza.</li>
                    <li>$f: \\mathbb{R} \\to \\mathbb{R}, f(x) = \\pm\\sqrt{x}$. <br><b>NON è applicazione</b>. Per $x=4$ ho due valori ($\\pm 2$). Viola l'unicità.</li>
                </ul>
            </div>
        ` 
    },
    { 
        id: 202, 
        category: 'applicazioni', 
        title: "2. Tipi di Applicazioni", 
        summary: "Definizioni formali: Iniettiva, Suriettiva, Biettiva.", 
        details: `
            <p><b>1. Iniettiva:</b> Elementi distinti hanno immagini distinte.</p>
            <p>$$\\forall x_1, x_2 \\in S, f(x_1) = f(x_2) \\implies x_1 = x_2$$</p>
            <p><b>2. Suriettiva:</b> L'immagine coincide col codominio.</p>
            <p>$$\\forall y \\in T, \\exists x \\in S \\text{ tale che } f(x) = y$$</p>
            <p><b>3. Biettiva:</b> Sia iniettiva che suriettiva.</p>
            <p><b>Teorema dell'Invertibilità:</b> $f$ è invertibile $\\iff f$ è biettiva.</p>
        `,
        examples: `
             <div style="background: #fefce8; padding: 15px; border-radius: 10px; border-left: 4px solid #eab308;">
                <p><b>Esempio $f(x) = x^2$:</b></p>
                <ul>
                    <li>Su $\\mathbb{R} \\to \\mathbb{R}$: Né iniettiva ($f(-2)=f(2)$), né suriettiva ($-1$ non è quadrato).</li>
                    <li>Su $\\mathbb{N} \\to \\text{Quadrati Perfetti}$: È biettiva.</li>
                </ul>
                <p><i>Morale:</i> Il dominio e il codominio sono parte integrante della definizione!</p>
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
                <li>Se $n \\ge m$: Si usa il principio di Inclusione-Esclusione o i numeri di Stirling.</li>
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
        title: "1. Relazioni di Equivalenza", 
        summary: "Le 3 proprietà formali e l'Insieme Quoziente.", 
        details: `
            <p>Una relazione $\\mathcal{R} \\subseteq S \\times S$ è di <b>Equivalenza</b> se è:</p>
            <ol>
                <li><b>Riflessiva:</b> $\\forall x \\in S, x\\mathcal{R}x$.</li>
                <li><b>Simmetrica:</b> $\\forall x,y \\in S, x\\mathcal{R}y \\implies y\\mathcal{R}x$.</li>
                <li><b>Transitiva:</b> $\\forall x,y,z \\in S, x\\mathcal{R}y \\land y\\mathcal{R}z \\implies x\\mathcal{R}z$.</li>
            </ol>
            <p><b>Classe di equivalenza $[x]_\\mathcal{R}$:</b> L'insieme di tutti gli $y$ in relazione con $x$.</p>
            <p><b>Insieme Quoziente $S/\\mathcal{R}$:</b> L'insieme delle classi di equivalenza (che formano una partizione).</p>
        `,
        examples: `
            <div style="background: #eff6ff; padding: 15px; border-radius: 10px; border-left: 4px solid #3b82f6;">
                <p><b>Esercizio sulle proprietà:</b></p>
                <p>Relazione $\\le$ su $\\mathbb{Z}$.</p>
                <ul>
                    <li>Riflessiva? SÌ ($a \\le a$).</li>
                    <li>Transitiva? SÌ.</li>
                    <li>Simmetrica? <b>NO</b>. $2 \\le 3$ ma $3 \\not\\le 2$.</li>
                </ul>
                <p>Quindi $\\le$ NON è equivalenza (è d'Ordine!).</p>
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
                $\\{a,b,v\\}$ devono stare insieme (transitiva).<br>
                $w$ e $c$ devono stare separati dal primo gruppo.<br>
                Partizione corretta: $\\{\\{a, b, v\\}, \\{w, c\\}\\}$.</p>
            </div>
        ` 
    },

    // --- 4. ARITMETICA ---
    { 
        id: 401, 
        category: 'aritmetica', 
        title: "1. Divisione Euclidea e Primi", 
        summary: "Teoremi di Esistenza e Unicità.", 
        details: `
            <p><b>Teorema della Divisione Euclidea (Lezione 11):</b></p>
            <p>Dati $a, b \\in \\mathbb{Z}$ con $b \\neq 0$, esistono e sono unici $q, r \\in \\mathbb{Z}$ tali che:</p>
            <p>$$a = b \\cdot q + r \\quad \\text{con} \\quad \\mathbf{0 \\le r < |b|}$$</p>
            <p><i>Nota:</i> Il resto $r$ deve essere sempre non negativo!</p>
            <p><b>Teorema Fondamentale dell'Aritmetica:</b> Ogni intero $n \\ge 2$ si scrive in modo unico (a meno dell'ordine) come prodotto di numeri primi.</p>
        `,
        examples: `
            <div style="background: #fff1f2; padding: 15px; border-radius: 10px; border-left: 4px solid #e11d48;">
                <p><b>Trappola del Resto Negativo:</b></p>
                <p>Dividere $-13$ per $5$.</p>
                <p>Errato: $-13 = 5(-2) - 3$ (Resto negativo!)</p>
                <p>Corretto: $-13 = 5(-3) + 2$. Quoziente $-3$, Resto $2$.</p>
            </div>
        ` 
    },
    { 
        id: 402, 
        category: 'aritmetica', 
        title: "2. Congruenze e Bèzout", 
        summary: "MCD, Identità di Bézout e Classi di Resto.", 
        details: `
            <p><b>Identità di Bézout:</b> $d = MCD(a,b) \\implies \\exists x,y \\in \\mathbb{Z} : ax+by=d$.</p>
            <p><b>Definizione di Congruenza Modulo $m$:</b></p>
            <p>$$a \\equiv b \\pmod m \\iff m \\mid (b-a)$$</p>
            <p>È una relazione di equivalenza compatibile con somma e prodotto.</p>
            <p><b>Criterio risolubilità equazioni $ax \\equiv b \\pmod m$:</b></p>
            <p>Ha soluzioni $\\iff MCD(a,m)$ divide $b$.</p>
        `,
        examples: `
            <div style="background: #fff1f2; padding: 15px; border-radius: 10px; border-left: 4px solid #e11d48;">
                <p><b>Esercizio Bèzout:</b> $13x + 19y = 1$.</p>
                <p>Euclide: $19 = 13(1) + 6 \\to 13 = 6(2) + 1$.</p>
                <p>Risalita (Inversa): $1 = 13 - 6(2) = 13 - (19-13)(2) = 13(3) - 19(2)$.</p>
                <p>Soluzione: $x=3, y=-2$.</p>
            </div>
        ` 
    },
    { 
        id: 403, 
        category: 'aritmetica', 
        title: "3. Principio di Induzione", 
        summary: "Le due forme del Principio.", 
        details: `
            <p>Sia $P(n)$ una proprietà definita su $\\mathbb{N}$.</p>
            <p><b>Prima Forma (Debole):</b></p>
            <ol>
                <li><b>Passo Base:</b> $P(n_0)$ è vera.</li>
                <li><b>Passo Induttivo:</b> $\\forall t \\ge n_0, P(t) \\implies P(t+1)$.</li>
            </ol>
            <p>Allora $P(n)$ è vera per ogni $n$.</p>
            <p><b>Seconda Forma (Forte):</b> Nel passo induttivo assumo che la proprietà valga per <i>tutti</i> i $k \\le t$ per dimostrare $t+1$.</p>
        `,
        examples: `
             <div style="background: #fff1f2; padding: 15px; border-radius: 10px; border-left: 4px solid #e11d48;">
                <p><b>Dimostrazione classica:</b> $\\sum_{i=1}^n (2i-1) = n^2$.</p>
                <p>Base $n=1$: $1 = 1^2$ (OK).</p>
                <p>Passo: Assumo $\\sum^t (..) = t^2$.</p>
                <p>Calcolo $\\sum^{t+1} = t^2 + (2(t+1)-1) = t^2 + 2t + 1 = (t+1)^2$. (CVD).</p>
            </div>
        `
    },

    // --- 5. MATRICI ---
    { 
        id: 501, 
        category: 'matrici', 
        title: "1. Determinante e Rango", 
        summary: "Sviluppo di Laplace e Binet.", 
        details: `
            <p><b>Teorema di Laplace:</b> Il determinante si calcola sviluppando lungo una riga/colonna:</p>
            <p>$$\\det(A) = \\sum_{j=1}^n a_{ij} (-1)^{i+j} \\det(A_{ij})$$</p>
            <p><b>Teorema di Binet:</b> $\\det(A \\cdot B) = \\det(A) \\cdot \\det(B)$.</p>
            <p><b>Matrice Invertibile:</b> $A$ è invertibile $\\iff \\det(A) \\neq 0$.</p>
            <p><b>Definizione Rango:</b> Ordine massimo di un minore non nullo estraibile dalla matrice.</p>
        `,
        examples: `
            <div style="background: #fdf2f8; padding: 15px; border-radius: 10px; border-left: 4px solid #db2777;">
                <p><b>Trappola Rango:</b></p>
                <p>Matrice $4 \\times 3$ (4 righe, 3 colonne).</p>
                <p>Il rango massimo possibile è $\\min(4,3) = 3$.</p>
                <p>Se ha due righe uguali, il rango non è per forza 2, ma sicuramente $< 4$.</p>
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
            <p>Se $rank < n$, infinite soluzioni ($\\infty^{n-rank}$).</p>
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
            <p><b>Autovalori ($\\lambda$):</b> Soluzioni di $\\det(A - \\lambda I) = 0$.</p>
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
        title: "1. Ordinamenti e Reticoli", 
        summary: "Proprietà e Hasse.", 
        details: `
            <p>Una relazione d'ordine $\\le$ deve essere:</p>
            <ol>
                <li><b>Riflessiva</b> ($a \\le a$)</li>
                <li><b>Antisimmetrica</b> ($a \\le b \\land b \\le a \\implies a=b$)</li>
                <li><b>Transitiva</b> ($a \\le b \\land b \\le c \\implies a \\le c$)</li>
            </ol>
            <p><b>Reticolo:</b> Un insieme ordinato dove ogni coppia di elementi ha un Inf (MCD) e un Sup (mcm).</p>
        `,
        examples: `
            <div style="background: #f0fdfa; padding: 15px; border-radius: 10px; border-left: 4px solid #14b8a6;">
                <p><b>Differenza $\\mathbb{N}$ vs $\\mathbb{Z}$:</b></p>
                <p>$\\mathbb{N}$ è <b>Ben Ordinato</b> (ogni sottoinsieme non vuoto ha un minimo).</p>
                <p>$\\mathbb{Z}$ <b>NON</b> lo è (es. i pari negativi non hanno minimo).</p>
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
            <p>$\\mathbb{N}$ è ben ordinato. $\\mathbb{Z}$ <b>NON</b> lo è (i negativi vanno all'infinito giù).</p>
        `,
        examples: `
            <div style="background: #f0fdfa; padding: 15px; border-radius: 10px; border-left: 4px solid #14b8a6;">
                <p><b>Esercizio Minimo:</b> Insieme $\\{x, 3, 4, 6, 8\\}$.<br>
                Affinché esista un minimo, $x$ deve dividere tutti.<br>
                Se $x=1$, divide 3, 4, 6, 8. Quindi 1 è il minimo.</p>
            </div>
        ` 
    }
];

document.addEventListener('DOMContentLoaded', () => {
    initPage(mdCategories, mdNotes, "Matematica Discreta - Teoria Rigorosa");
});