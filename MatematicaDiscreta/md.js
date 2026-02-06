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

// appunti specifici (AGGIORNATI CON ESERCIZI D'ESAME)
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
        `,
        exercises: `
            <div style="border-left: 4px solid #16a34a; padding-left: 15px;">
                <p><b>Quesito (Prova 12/02/24):</b></p>
                <p>Si consideri l'insieme $H = \\{2, \\{2,4\\}, x, y, \\{x\\}\\}$. Quale affermazione è <b>ERRATA</b>?</p>
                <p>A) $\\{2\\} \\subseteq H$<br>
                   B) $\\{2,4\\} \\in H$<br>
                   C) $\\{2\\} \\in H$<br>
                   D) $\\{x\\} \\in H$<br>
                   E) $\\emptyset \\subseteq H$</p>
                <hr>
                <p><b>Svolgimento:</b></p>
                <p>Analizziamo gli elementi di H: $2$, $\\{2,4\\}$, $x$, $y$, $\\{x\\}$.</p>
                <ul>
                    <li><b>A)</b> $\\{2\\} \\subseteq H$: Vero se $2 \\in H$. Sì, c'è. (VERA)</li>
                    <li><b>B)</b> $\\{2,4\\} \\in H$: Cerco il pacchetto $\\{2,4\\}$. Sì, è il secondo elemento. (VERA)</li>
                    <li><b>C)</b> $\\{2\\} \\in H$: Cerco il pacchetto $\\{2\\}$. Non c'è! C'è il numero 2 slegato, e il pacchetto $\\{2,4\\}$, ma non $\\{2\\}$. (FALSA)</li>
                    <li><b>D)</b> $\\{x\\} \\in H$: Sì, è l'ultimo elemento. (VERA)</li>
                    <li><b>E)</b> $\\emptyset \\subseteq H$: L'insieme vuoto è sottoinsieme di chiunque. (VERA)</li>
                </ul>
                <p><b>Risposta: C</b></p>
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
        `,
        exercises: `
            <div style="border-left: 4px solid #eab308; padding-left: 15px;">
                <p><b>Quesito (Prova 25/01/24):</b></p>
                <p>Quale delle seguenti applicazioni di $\\mathbb{N}_0$ in $\\mathbb{Z}$ è <b>iniettiva</b>?</p>
                <p>A) $f(n) = |12 - 2n|$</p>
                <hr>
                <p><b>Svolgimento:</b></p>
                <p>Testiamo l'iniettività ($f(n) = f(m) \\implies n=m$?).</p>
                <p>Proviamo valori per $n$:<br>
                - Se $n=0 \\to |12-0| = 12$<br>
                - Se $n=12 \\to |12-24| = |-12| = 12$</p>
                <p>Abbiamo trovato che $f(0) = 12$ e $f(12) = 12$.<br>
                Due input diversi (0 e 12) danno lo stesso output.</p>
                <p><b>Conclusione:</b> Non è iniettiva.</p>
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
        `,
        exercises: `
            <div style="border-left: 4px solid #3b82f6; padding-left: 15px;">
                <p><b>Quesito 5 (Prova 12/02/24):</b></p>
                <p>Insieme $V = \\{7h+1 | h \\in \\mathbb{Z}\\}$. Quale relazione è di equivalenza?</p>
                <p>D) $7h+1 \\mathcal{R} 7k+1 \\iff |h-3| = |k-3|$</p>
                <hr>
                <p><b>Svolgimento (Trucco della Funzione):</b></p>
                <p>La relazione è definita come l'uguaglianza di una funzione calcolata sui parametri: $f(h) = f(k)$ dove $f(x) = |x-3|$.</p>
                <p>Ogni relazione del tipo "ho lo stesso valore di..." è sempre:</p>
                <ul>
                    <li><b>Riflessiva:</b> $|h-3| = |h-3|$ (Sì)</li>
                    <li><b>Simmetrica:</b> Se A=B allora B=A (Sì)</li>
                    <li><b>Transitiva:</b> Se A=B e B=C allora A=C (Sì)</li>
                </ul>
                <p><b>Risposta: D</b></p>
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
        `,
        exercises: `
            <div style="border-left: 4px solid #3b82f6; padding-left: 15px;">
                <p><b>Quesito 5 (Prova 09/01/24):</b></p>
                <p>Dato $T=\\{a,b,c,x,y,z\\}$ e le regole: $a\\mathcal{R}x$, $a\\mathcal{R}c$, $y\\mathcal{R}z$, $x \\notin [y]$, $z \\notin [b]$. Trova la partizione.</p>
                <hr>
                <p><b>Svolgimento:</b></p>
                <ol>
                    <li>$a, x, c$ sono legati $\\to$ Gruppo 1: $\\{a,x,c\\}$.</li>
                    <li>$y, z$ sono legati $\\to$ Gruppo 2: $\\{y,z\\}$.</li>
                    <li>$b$ non può stare con $z$ (Gruppo 2) e non è legato ad $a$ $\\to$ Gruppo 3: $\\{b\\}$.</li>
                </ol>
                <p><b>Partizione Corretta:</b> $\\{\\{a,x,c\\}, \\{y,z\\}, \\{b\\}\\}$</p>
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
        `,
        exercises: `
            <div style="border-left: 4px solid #e11d48; padding-left: 15px;">
                <p><b>Quesito 8 (Prova 09/01/24):</b></p>
                <p>Trova l'unico $x$ tra 55 e 110 tale che:</p>
                <p>$Resto(x,5)=3 \\implies x \\equiv 3 \\pmod 5$</p>
                <p>$Resto(x,11)=8 \\implies x \\equiv 8 \\pmod{11}$</p>
                <hr>
                <p><b>Svolgimento:</b></p>
                <p>Dalla seconda: $x = 11k + 8$.</p>
                <p>Sostituisco nella prima: $11k + 8 \\equiv 3 \\pmod 5$.</p>
                <p>Riduco modulo 5: $1k + 3 \\equiv 3 \\pmod 5 \\implies k \\equiv 0 \\pmod 5$.</p>
                <p>Quindi $k$ è un multiplo di 5 (0, 5, 10...).</p>
                <p>Se $k=5 \\to x = 11(5) + 8 = 55 + 8 = 63$. (Compreso tra 55 e 110).</p>
                <p>Se $k=10 \\to x = 110 + 8 = 118$ (Fuori).</p>
                <p><b>Risposta: 63</b></p>
            </div>
        `
    },
    { 
        id: 403, 
        category: 'aritmetica', 
        title: "3. Principio di Induzione", 
        summary: "Base, Ipotesi e Tesi Induttiva e le due Forme del principio", 
        details: `
            <p>Sia $P(n)$ una proprietà definita su $\\mathbb{N}$.</p>
            <p>Per dimostrare $P(n)$ $\\forall n \\ge n_0$:</p>
            <ol>
                <li><b>Base:</b> Dimostro $P(n_0)$ vera.</li>
                <li><b>Passo:</b> Assumo $P(t)$ vera (Ipotesi) $\\implies$ Dimostro $P(t+1)$ vera (Tesi).</li>
            </ol>
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
    { 
        id: 404, 
        category: 'aritmetica', 
        title: "3. Numeri in Base b", 
        summary: "Rappresentazione posizionale.", 
        details: `
            <p>Fissata una base $b \\ge 2$, ogni numero $n$ si scrive in modo unico come:</p>
            <p>$$n = c_k b^k + \\dots + c_1 b + c_0$$</p>
            <p>con $0 \\le c_i < b$.</p>
            <p>Si ottengono le cifre con <b>divisioni successive</b> per $b$.</p>
        `,
        examples: ""
    },

    // --- 5. MATRICI ---
    { 
        id: 501, 
        category: 'matrici', 
        title: "1. Definizioni e Tipologie", 
        summary: "Matrici quadrate, triangolari, diagonali.", 
        details: `
            <p>Una matrice $A \\in M_{m,n}(\\mathbb{R})$ ha $m$ righe e $n$ colonne.</p>
            <ul>
                <li><b>Quadrata:</b> $m=n$.</li>
                <li><b>Diagonale:</b> $a_{ij} = 0$ per ogni $i \\neq j$.</li>
                <li><b>Triangolare Superiore:</b> $a_{ij} = 0$ per ogni $i > j$ (tutti zeri sotto la diagonale).</li>
                <li><b>Triangolare Inferiore:</b> $a_{ij} = 0$ per ogni $i < j$.</li>
                <li><b>Identica ($I_n$):</b> Diagonale con tutti 1. Elemento neutro del prodotto.</li>
            </ul>
        `,
        examples: `
            <div style="background: #fdf2f8; padding: 15px; border-radius: 10px; border-left: 4px solid #db2777;">
                <p><b>Proprietà Triangolari:</b></p>
                <p>Il determinante di una matrice triangolare (o diagonale) è semplicemente il <b>prodotto degli elementi sulla diagonale principale</b>.</p>
            </div>
        ` 
    },
    { 
        id: 502, 
        category: 'matrici', 
        title: "2. Operazioni Matriciali", 
        summary: "Prodotto righe per colonne e non commutatività.", 
        details: `
            <p><b>Somma:</b> Elemento per elemento (stesse dimensioni).</p>
            <p><b>Prodotto $A \\cdot B$:</b> Possibile solo se colonne di A = righe di B.</p>
            <p>L'elemento $c_{ij}$ è il prodotto scalare della riga $i$ di A per la colonna $j$ di B.</p>
            <p><b>Attenzione:</b> Il prodotto <b>NON è commutativo</b> ($AB \\neq BA$ in generale).</p>
        `,
        examples: ""
    },
    { 
        id: 503, 
        category: 'matrici', 
        title: "3. Matrice Inversa", 
        summary: "Condizione di invertibilità.", 
        details: `
            <p>Una matrice quadrata $A$ è <b>invertibile</b> se esiste $B$ tale che $AB = BA = I_n$.</p>
            <p><b>Teorema:</b> $A$ è invertibile $\\iff \\det(A) \\neq 0$.</p>
            <p>L'inversa è unica.</p>
        `,
        examples: ""
    },
    { 
        id: 504, 
        category: 'matrici', 
        title: "4. Rango e Gauss", 
        summary: "Riduzione a scala e calcolo del rango.", 
        details: `
            <p><b>Algoritmo di Gauss:</b> Usa operazioni elementari sulle righe per trasformare la matrice in una matrice <b>a scala</b> (a gradini).</p>
            <p><b>Rango ($rk(A)$):</b></p>
            <ul>
                <li>È il numero di righe non nulle nella matrice ridotta a scala (numero di Pivot).</li>
                <li>È l'ordine del massimo minore con determinante diverso da 0.</li>
            </ul>
        `,
        examples: `
            <div style="background: #fdf2f8; padding: 15px; border-radius: 10px; border-left: 4px solid #db2777;">
            <p><b>Esercizio:</b></p>
            <p>Per quale $k$ la matrice $3 \\times 3$ ha rango 2?</p>
            <p>Calcolo $Det(A) = 2k - 1$.<br>
            Impongo $Det = 0 \\Rightarrow k = 1/2$.</p>
            </div>
        `,
        exercises: `
            <div style="border-left: 4px solid #db2777; padding-left: 15px;">
                <p><b>Quesito 10 (Prova 12/02/24):</b></p>
                <p>Se una matrice $3 \\times 5$ ha un minore di ordine 3 diverso da 0, cosa possiamo affermare?</p>
                <hr>
                <p><b>Svolgimento:</b></p>
                <p>La matrice ha 3 righe. Il rango massimo possibile è 3.</p>
                <p>La definizione dice che il rango è l'ordine massimo di un minore non nullo.</p>
                <p>Poiché abbiamo trovato un minore di ordine 3 non nullo, il rango è <b>esattamente 3</b> (non può essere di più perché ci sono solo 3 righe).</p>
            </div>
        `
    },
    { 
        id: 505, 
        category: 'matrici', 
        title: "5. Determinante (Laplace)", 
        summary: "Sviluppo e Binet.", 
        details: `
            <p><b>Laplace:</b> $\\det(A) = \\sum (-1)^{i+j} a_{ij} \\det(A_{ij})$. Si sviluppa lungo una riga/colonna.</p>
            <p><b>Binet:</b> $\\det(AB) = \\det(A)\\det(B)$.</p>
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

    // --- 6. STRUTTURE ALGEBRICHE (Dedotto da Lezione 11 - Congruenze) ---
    { 
        id: 601, 
        category: 'strutture', 
        title: "1. Anelli e Campi", 
        summary: "Differenze e Invertibilità in Zn.", 
        details: `
            <p><b>Anello Commutativo Unitario $(A, +, \\cdot)$:</b> Insieme con due operazioni. La somma è gruppo abeliano, il prodotto è associativo, commutativo, distributivo e ha elemento neutro $1$.</p>
            <p><b>Campo:</b> È un anello commutativo unitario in cui <b>ogni elemento non nullo è invertibile</b>.</p>
            <p><b>Divisori dello Zero:</b> Elementi non nulli $a, b$ tali che $a \\cdot b = 0$. In un Campo non esistono divisori dello zero.</p>
        `,
        examples: `
            <div style="background: #f3e8ff; padding: 15px; border-radius: 10px; border-left: 4px solid #9333ea;">
                <p><b>Il caso $\\mathbb{Z}_n$:</b></p>
                <p>$\\mathbb{Z}_n$ è un <b>Campo</b> se e solo se $n$ è <b>primo</b>.</p>
                <p>Se $n$ non è primo (es. $\\mathbb{Z}_6$), ci sono divisori dello zero (es. $[2]\\cdot[3]=[6]=[0]$) e non è un campo.</p>
            </div>
        `,
        exercises: `
            <div style="border-left: 4px solid #9333ea; padding-left: 15px;">
                <p><b>Quesito 11 (Prova 12/02/24):</b></p>
                <p>In $(\\mathbb{Z}_{12}, +, \\cdot)$, quale affermazione è <b>ERRATA</b>?</p>
                <p>A) $11 \\cdot 11 = 2$</p>
                <hr>
                <p><b>Svolgimento:</b></p>
                <p>Facciamo i calcoli in modulo 12:</p>
                <p>$11 \\equiv -1 \\pmod{12}$.</p>
                <p>Quindi $11 \\cdot 11 \\equiv (-1) \\cdot (-1) = 1$.</p>
                <p>L'affermazione A dice che fa 2. Ma fa 1.</p>
                <p><b>Quindi la A è l'affermazione ERRATA.</b></p>
            </div>
        `
    },

    // --- 7. VETTORI (Dedotto da Matrici 1 e Rango) ---
    { 
        id: 701, 
        category: 'vettori', 
        title: "1. Definizione Spazio Vettoriale", 
        summary: "Assiomi e Sottospazi.", 
        details: `
            <p>Uno <b>Spazio Vettoriale</b> $V$ su un campo $K$ è un insieme dotato di due operazioni:</p>
            <ul>
                <li>Somma interna ($+: V \\times V \\to V$) che rende $V$ un gruppo abeliano.</li>
                <li>Prodotto per scalare ($\\cdot: K \\times V \\to V$) con proprietà distributive e associative miste.</li>
            </ul>
            <p><b>Sottospazio Vettoriale ($W \\subseteq V$):</b></p>
            <p>Un sottoinsieme $W$ è sottospazio se:</p>
            <ol>
                <li>Il vettore nullo appartiene a $W$ ($\\mathbf{0} \\in W$).</li>
                <li>È chiuso rispetto alla somma: $\\forall u, v \\in W \\implies u+v \\in W$.</li>
                <li>È chiuso rispetto al prodotto per scalare: $\\forall \\lambda \\in K, v \\in W \\implies \\lambda v \\in W$.</li>
            </ol>
        `,
        examples: `
            <div style="background: #e0f2fe; padding: 15px; border-radius: 10px; border-left: 4px solid #0284c7;">
                <p><b>Esempio da MD2511:</b></p>
                <p>$V = \\{(x,y,z) \\in \\mathbb{R}^3 \\mid x^2+y^2=0\\}$</p>
                <p>È sottospazio? Sì, nei reali l'unica soluzione è $(0,0,z)$, che è una retta (sottospazio).</p>
                <p>$V = \\{(x,y,z) \\in \\mathbb{R}^3 \\mid x^2+y^2=1\\}$</p>
                <p><b>NO</b>. Non contiene il vettore nullo $(0,0,0)$.</p>
            </div>
        `
    },
    { 
        id: 702, 
        category: 'vettori', 
        title: "2. Generatori e Basi", 
        summary: "Span e Indipendenza Lineare.", 
        details: `
            <p><b>Span (Generazione):</b> $\\langle v_1, ..., v_n \\rangle$ è l'insieme di tutte le combinazioni lineari dei vettori.</p>
            <p><b>Indipendenza Lineare:</b> I vettori sono indipendenti se l'unica combinazione lineare che dà il vettore nullo è quella con tutti i coefficienti nulli.</p>
            <p><b>Base:</b> Un insieme di generatori che è anche linearmente indipendente.</p>
            <p><b>Dimensione:</b> Il numero di elementi di una base (è un invariante).</p>
        `,
        examples: ""
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
    { 
        id: 802, 
        category: 'sistemi', 
        title: "2. Numero di Soluzioni", 
        summary: "Unica o Infinite.", 
        details: `
            <p>Sia $n$ il numero delle incognite e $k = rk(A) = rk(A|b)$.</p>
            <ul>
                <li>Se $k = n$: <b>Soluzione Unica</b> (Cramer generalizzato).</li>
                <li>Se $k < n$: <b>Infinite soluzioni</b>. Ci sono $\\infty^{n-k}$ soluzioni (dipendono da $n-k$ parametri liberi).</li>
            </ul>
        `,
        examples: `
            <div style="background: #f0f9ff; padding: 15px; border-radius: 10px; border-left: 4px solid #0ea5e9;">
                <p><b>Sistemi Omogenei ($Ax=0$):</b></p>
                <p>Hanno sempre almeno la soluzione nulla. Hanno soluzioni non banali solo se $rk(A) < n$.</p>
            </div>
        `,
        exercises: `
            <div style="border-left: 4px solid #0ea5e9; padding-left: 15px;">
                <p><b>Quesito 14 (Prova 09/01/24):</b></p>
                <p>Sistema di 3 equazioni in 4 incognite. Matrice incompleta ha rango 3. Cosa succede?</p>
                <hr>
                <p><b>Svolgimento:</b></p>
                <p>Abbiamo $n=4$ incognite. Il rango è $k=3$.</p>
                <p>Poiché il rango massimo della completa (3x5) non può superare il numero di righe (3), anche la completa avrà rango 3 (se il sistema è compatibile).</p>
                <p>Se è compatibile, avremo $\\infty^{n-k} = \\infty^{4-3} = \\infty^1$ soluzioni.</p>
                <p>Cioè infinite soluzioni dipendenti da 1 parametro.</p>
            </div>
        `
    },

    // --- 9. DIAGONALIZZAZIONE ---
    { 
        id: 901, 
        category: 'diagonalizzazione', 
        title: "1. Matrici Simili e Diagonalizzazione", 
        summary: "Definizione algebrica.", 
        details: `
            <p>Due matrici $A, B \\in M_n(K)$ si dicono <b>simili</b> se esiste una matrice invertibile $P$ tale che:</p>
            <p>$$B = P^{-1}AP$$</p>
            <p><b>Definizione:</b> $A$ è diagonalizzabile se è simile a una matrice diagonale $D$.</p>
            <p>La matrice $P$ che diagonalizza è la matrice formata dagli <b>autovettori</b>.</p>
        `,
        examples: ""
    },
    { 
        id: 902, 
        category: 'diagonalizzazione', 
        title: "2. Criterio di Diagonalizzabilità", 
        summary: "Molteplicità Algebrica e Geometrica.", 
        details: `
            <p>Una matrice è diagonalizzabile se e solo se valgono entrambe:</p>
            <ol>
                <li>La somma delle molteplicità algebriche degli autovalori è $n$ (il polinomio caratteristico si spezza interamente in $K$).</li>
                <li>Per ogni autovalore $\\lambda$, la molteplicità geometrica coincide con quella algebrica ($m_g(\\lambda) = m_a(\\lambda)$).</li>
            </ol>
            <p>$$m_g(\\lambda) = \\dim(\\text{Autospazio}) = n - rk(A - \\lambda I)$$</p>
        `,
        examples: `
            <div style="background: #faf5ff; padding: 15px; border-radius: 10px; border-left: 4px solid #9333ea;">
                <p><b>Caso semplice:</b></p>
                <p>Se una matrice $n \\times n$ ha $n$ autovalori <b>tutti distinti</b>, è sicuramente diagonalizzabile.</p>
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

    // 11. RELAZIONI D'ORDINE (MASSICCIAMENTE ESPANSO da MD1711, MD2411) 

    { 
        id: 1101, 
        category: 'ordini', 
        title: "1. Definizione Relazione d'Ordine", 
        summary: "Le 3 proprietà e il confronto.", 
        details: `
            <p>Una relazione $\\mathcal{R}$ su $S$ (spesso indicata con $\\le$) è d'<b>Ordine</b> se è:</p>
            <ol>
                <li><b>Riflessiva:</b> $\\forall x, x \\le x$.</li>
                <li><b>ANTISIMMETRICA:</b> $\\forall x,y$, se $x \\le y$ e $y \\le x \\implies x=y$.</li>
                <li><b>Transitiva:</b> $\\forall x,y,z$, se $x \\le y$ e $y \\le z \\implies x \\le z$.</li>
            </ol>
            <p><b>Nota Bene:</b> A differenza dell'equivalenza, qui la simmetria è proibita (tranne se $x=y$).</p>
        `,
        examples: `
            <div style="background: #fffbeb; padding: 15px; border-radius: 10px; border-left: 4px solid #f59e0b;">
                <p><b>Esempio Classico: Divisibilità su $\\mathbb{N}$:</b></p>
                <p>$a \\mathcal{R} b \\iff a$ divide $b$.</p>
                <ul>
                    <li>$a|a$ (Sì)</li>
                    <li>$a|b$ e $b|a$ $\\implies a=b$ (sui positivi Sì).</li>
                    <li>$a|b$ e $b|c$ $\\implies a|c$ (Sì).</li>
                </ul>
                <p>È una relazione d'ordine.</p>
            </div>
        `,
        exercises: `
            <div style="border-left: 4px solid #f59e0b; padding-left: 15px;">
                <p><b>Quesito 22 (Prova 12/02/24):</b></p>
                <p>Considera $(\\mathbb{Z}, \\le)$ con l'ordine usuale. Quale è <b>ERRATA</b>?</p>
                <p>A) Totalmente ordinato (Vero)<br>
                   B) Ben ordinato (Falso)<br>
                   C) Reticolo (Vero)<br>
                   D) Non ha minimo (Vero)<br>
                   E) Non ha massimo (Vero)</p>
                <hr>
                <p><b>Svolgimento:</b></p>
                <p>$\\mathbb{Z}$ va da $-\\infty$ a $+\\infty$.</p>
                <p>Un insieme è <b>Ben Ordinato</b> se ogni sottoinsieme non vuoto ha un minimo. Ma i negativi $\\{-1, -2, -3...\\}$ non hanno minimo.</p>
                <p><b>Risposta: B (è l'errata).</b></p>
            </div>
        `
    },
    { 
        id: 1102, 
        category: 'ordini', 
        title: "2. Totale vs Parziale", 
        summary: "Confrontabilità e Diagrammi di Hasse.", 
        details: `
            
            <p><b>Confrontabilità:</b> Due elementi $x,y$ si dicono confrontabili se $x \\le y$ oppure $y \\le x$.</p>
            <ul>
                <li><b>Ordine Totale:</b> Tutti gli elementi sono confrontabili tra loro (es. $\\le$ su $\\mathbb{R}$). I diagrammi di Hasse sono linee dritte.</li>
                <li><b>Ordine Parziale:</b> Esistono coppie non confrontabili. I diagrammi di Hasse hanno ramificazioni.</li>
            </ul>
        `,
        examples: `
            <div style="background: #fffbeb; padding: 15px; border-radius: 10px; border-left: 4px solid #f59e0b;">
                <p><b>Esercizio Divisibilità (MD2411):</b></p>
                <p>In $(\\mathbb{N}, |)$, prendi 2 e 3.</p>
                <p>2 divide 3? NO.</p>
                <p>3 divide 2? NO.</p>
                <p>Quindi 2 e 3 <b>non sono confrontabili</b>. L'ordine è parziale.</p>
            </div>
        `
    },
    { 
        id: 1103, 
        category: 'ordini', 
        title: "3. Elementi Notevoli (TRAPPOLA)", 
        summary: "Massimo/Minimo vs Massimale/Minimale.", 
        details: `
            <p>Questa è la domanda classica dell'algebrista. Non confonderli!</p>
            <p><b>1. Massimo (Max):</b> Un elemento $M \\in S$ tale che $x \\le M$ per <b>TUTTI</b> gli $x \\in S$. (Se esiste, è unico. È la punta unica del diagramma).</p>
            <p><b>2. Massimale:</b> Un elemento $m \\in S$ tale che <b>NON ESISTE</b> nessun $x \\in S$ con $m < x$. (Non ha nessuno sopra di sé, ma non deve per forza essere maggiore degli altri).</p>
            <p><i>Relazione:</i> Se esiste il Massimo, è l'unico Massimale. Ma possono esistere più Massimali senza che ci sia un Massimo.</p>
            <p>(Stesso discorso per Minimo vs Minimale).</p>
        `,
        examples: `
            <div style="background: #fffbeb; padding: 15px; border-radius: 10px; border-left: 4px solid #f59e0b;">
                <p><b>Esempio visuale:</b></p>
                <p>Immagina un insieme $\\{2, 3\\}$ ordinato per divisibilità.</p>
                <ul>
                    <li><b>Massimo:</b> Non esiste (nessuno è diviso da tutti).</li>
                    <li><b>Massimali:</b> Sia 2 che 3 sono massimali (non hanno multipli nell'insieme).</li>
                </ul>
            </div>
        `
    },
    { 
        id: 1104, 
        category: 'ordini', 
        title: "4. Reticoli (Lattices)", 
        summary: "Sup e Inf per ogni coppia.", 
        details: `
            <p>Un insieme ordinato $(L, \\le)$ è un <b>Reticolo</b> se <b>per ogni coppia</b> di elementi $x, y \\in L$ esistono:</p>
            <ol>
                <li><b>Estremo Inferiore (Inf / $\\wedge$):</b> Il più grande dei minoranti (es. MCD).</li>
                <li><b>Estremo Superiore (Sup / $\\vee$):</b> Il più piccolo dei maggioranti (es. mcm).</li>
            </ol>
            <p>Se anche solo una coppia non ha sup o inf (che stia nell'insieme!), non è un reticolo.</p>
        `,
        examples: ""
    }
];

document.addEventListener('DOMContentLoaded', () => {
    initPage(mdCategories, mdNotes, "Matematica Discreta - Teoria Rigorosa");
});