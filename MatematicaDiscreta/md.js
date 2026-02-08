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

// appunti specifici (AGGIORNATI CON ESERCIZI D'ESAME E SIMULAZIONI)
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
        `,
        exercises: `
            <div style="border-left: 4px solid #16a34a; padding-left: 15px;">
                <p><b>Quesito (Prova 25/01/24):</b></p>
                <p>Si stabilisca quale tra le seguenti affermazioni è esatta riguardante $\\mathcal{P}(\\mathbb{N}_0) \\times \\mathbb{Z}$:</p>
                <p>A) $(\\mathbb{N}, -3) \\in \\mathcal{P}(\\mathbb{N}_0) \\times \\mathbb{Z}$</p>
                <p>B) $(\\{2\\}, \\emptyset) \\in \\mathcal{P}(\\mathbb{N}_0) \\times \\mathbb{Z}$</p>
                <hr>
                <p><b>Svolgimento:</b></p>
                <p>Un elemento appartiene al prodotto cartesiano $A \\times B$ se la prima componente sta in A e la seconda in B.</p>
                <p><b>Analisi A:</b></p>
                <ul>
                    <li>Prima componente: $\\mathbb{N}$. È un sottoinsieme di $\\mathbb{N}_0$? Sì. Quindi $\\mathbb{N} \\in \\mathcal{P}(\\mathbb{N}_0)$. (OK)</li>
                    <li>Seconda componente: $-3$. È un numero intero? Sì. $-3 \\in \\mathbb{Z}$. (OK)</li>
                </ul>
                <p>L'affermazione A è corretta.</p>
                <p><b>Analisi B:</b> $\\emptyset$ è un insieme, non un numero intero ($\\,\\emptyset \\notin \\mathbb{Z}$). Quindi falsa.</p>
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
                <p><b>Quesito (Esercitazione 2):</b></p>
                <p>Sia $S=\\{a,i,u,o,l\\}$ e $T=\\mathbb{N}$. Quale è un'applicazione?</p>
                <p>A) $\\{(a,1), (i,7), (i,3), (o,6), (l,5)\\}$</p>
                <p>B) $\\{(a,1), (i,1), (u,7), (o,6), (l,5)\\}$</p>
                <hr>
                <p><b>Svolgimento:</b></p>
                <p>Analizziamo A: L'elemento 'i' ha due frecce (va in 7 e in 3). Viola l'unicità. NO.</p>
                <p>Analizziamo B: Ogni vocale ha esattamente una freccia. (Anche se 'a' e 'i' vanno entrambe su 1, è permesso, non viola l'unicità dell'output). SI.</p>
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
        `,
        exercises: `
            <div style="border-left: 4px solid #eab308; padding-left: 15px;">
                <p><b>Quesito (Esercitazione 2):</b></p>
                <p>Per quale scelta di dominio e codominio $f(x) = |x-1|$ è <b>iniettiva</b>?</p>
                <p>A) $\\mathbb{Z} \\to \\mathbb{Z}$</p>
                <p>B) $\\mathbb{N} \\to \\mathbb{N}$</p>
                <hr>
                <p><b>Svolgimento:</b></p>
                <p>Testiamo $f(x_1)=f(x_2) \\implies x_1=x_2$.</p>
                <p><b>Caso A e B:</b> Prendo $x=0$ e $x=2$.</p>
                <p>$f(0) = |0-1| = 1$.</p>
                <p>$f(2) = |2-1| = 1$.</p>
                <p>Ho output uguali per input diversi ($0 \\neq 2$). Quindi NON è iniettiva su $\\mathbb{Z}$ o $\\mathbb{N}$.</p>
                <p>Sarebbe iniettiva se il dominio fosse ad esempio $x \\ge 1$ (es. $[1, +\\infty)$).</p>
            </div>
        `
    },
    { 
        id: 204, 
        category: 'applicazioni', 
        title: "2. Conteggio Funzioni", 
        summary: "Il problema dei Piccioni e Stirling.", 
        details: `
            <p>Siano $|S|=n$ e $|T|=m$.</p>
            <ul>
                <li><b>Totale funzioni:</b> $m^n$.</li>
                <li><b>Funzioni Iniettive:</b> $D_{m,n} = m(m-1)...(m-n+1)$ (Solo se $m \\ge n$, altrimenti 0).</li>
                <li><b>Funzioni Suriettive:</b> Se $n < m$ sono <b>ZERO</b> (impossibile coprire T). Se $n \\ge m$ si usa Stirling.</li>
            </ul>
        `,
        examples: `
            <div style="background: #fefce8; padding: 15px; border-radius: 10px; border-left: 4px solid #eab308;">
                <p><b>Caso 1:</b> Da $S=\\{1,2,3\\}$ a $T=\\{a,b,c,d\\}$.<br>
                $|S|=3, |T|=4$. Impossibile coprire T.<br>
                <b>Suriettive: 0</b>.</p>
                <hr>
                <p><b>Caso 2:</b> Da $T=\\{1,2,3,4\\}$ a $S=\\{a,b,c\\}$.<br>
                Modi di fare la coppia: $\\binom{4}{2} = 6$.<br>
                Modi di distribuire (3!): $6$.<br>
                Totale: $6 \\times 6 = \\mathbf{36}$.</p>
            </div>
        `,
        exercises: `
            <div style="border-left: 4px solid #eab308; padding-left: 15px;">
                <p><b>Quesito (Prova 12/02/24):</b></p>
                <p>Siano $S=\\{1,2,3\\}$ e $T=\\{a,b,c,d\\}$. Quante sono le applicazioni <b>suriettive</b> di S in T?</p>
                <hr>
                <p><b>Svolgimento:</b></p>
                <p>Dominio $n=3$, Codominio $m=4$.</p>
                <p>Dobbiamo colpire 4 bersagli avendo solo 3 frecce.</p>
                <p>È impossibile colpirli tutti.</p>
                <p><b>Risposta: 0.</b></p>
                <br>
                <p><b>Quesito (Prova 09/01/24):</b></p>
                <p>Siano $A=\\{a,b,c,d,e\\}$ e $B=\\{1,2,3,4,5,6\\}$. Quante applicazioni <b>iniettive</b>?</p>
                <p><b>Svolgimento:</b></p>
                <p>$|A|=5, |B|=6$. Si usano le disposizioni semplici.</p>
                <p>$6 \\times 5 \\times 4 \\times 3 \\times 2 = 720$.</p>
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
                <p><b>Quesito (Prova 12/02/24):</b></p>
                <p>Insieme $V = \\{7h+1 | h \\in \\mathbb{Z}\\}$. Quale relazione è di equivalenza?</p>
                <p>D) $7h+1 \\mathcal{R} 7k+1 \\iff |h-3| = |k-3|$</p>
                <hr>
                <p><b>Svolgimento (Trucco della Funzione):</b></p>
                <p>La relazione è definita come l'uguaglianza di una funzione calcolata sui parametri: $f(h) = f(k)$ dove $f(x) = |x-3|$.</p>
                <p>Ogni relazione del tipo "ho lo stesso valore di..." ("avere lo stesso colore", "avere la stessa età") è sempre di equivalenza perché l'uguaglianza $=$ lo è.</p>
                <ul>
                    <li><b>Riflessiva:</b> $|h-3| = |h-3|$ (Sì)</li>
                    <li><b>Simmetrica:</b> Se A=B allora B=A (Sì)</li>
                    <li><b>Transitiva:</b> Se A=B e B=C allora A=C (Sì)</li>
                </ul>
                <p><b>Risposta: D è corretta.</b></p>
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
                    <li>$a, x, c$ sono legati tra loro $\\to$ Gruppo 1: $\\{a,x,c\\}$.</li>
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
            <p><b>Teorema Fondamentale dell'Aritmetica:</b> Ogni intero $n \\ge 2$ si scrive in modo unico come prodotto di numeri primi.</p>
        `,
        examples: `
            <div style="background: #fff1f2; padding: 15px; border-radius: 10px; border-left: 4px solid #e11d48;">
                <p><b>Trappola del Resto Negativo:</b></p>
                <p>Dividere $-13$ per $5$.</p>
                <p>Errato: $-13 = 5(-2) - 3$ (Resto negativo!)</p>
                <p>Corretto: $-13 = 5(-3) + 2$. Quoziente $-3$, Resto $2$.</p>
            </div>
        `,
        exercises: `
            <div style="border-left: 4px solid #e11d48; padding-left: 15px;">
                <p><b>Quesito (Esercitazione 4):</b></p>
                <p>La coppia $(3, 55539)$ rappresenta $(MCD, mcm)$ di quale coppia di numeri?</p>
                <p>Opzioni: A) (27, 2301) ... C) (27, 6171)</p>
                <hr>
                <p><b>Svolgimento:</b></p>
                <p>Usiamo la proprietà fondamentale: $a \\cdot b = MCD(a,b) \\cdot mcm(a,b)$.</p>
                <p>Calcoliamo il prodotto target: $3 \\times 55539 = 166.617$.</p>
                <p>Proviamo l'opzione C ($27, 6171$):</p>
                <p>$27 \\times 6171 = 166.617$. (Il prodotto corrisponde).</p>
                <p>Controlliamo il MCD: $27 = 3^3$. $6171$ è divisibile per 27? $6171/27 = 228.5$ (No). È divisibile per 9? Somma cifre $6+1+7+1=15$ (No). È divisibile per 3? Sì. Quindi MCD è 3.</p>
                <p><b>Risposta: C</b></p>
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
                <p><b>Risposta: 63</b></p>
            </div>
        `
    },
    { 
        id: 403, 
        category: 'aritmetica', 
        title: "3. Principio di Induzione", 
        summary: "Base, Ipotesi e Tesi Induttiva.", 
        details: `
            <p>Sia $P(n)$ una proprietà definita su $\\mathbb{N}$.</p>
            <p>Per dimostrare $P(n)$ $\\forall n \\ge n_0$:</p>
            <ol>
                <li><b>Base:</b> Dimostro $P(n_0)$ vera.</li>
                <li><b>Passo:</b> Assumo $P(t)$ vera (Ipotesi) $\\implies$ Dimostro $P(t+1)$ vera (Tesi).</li>
            </ol>
            <p><b>Induzione Forte:</b> Assumo vera per tutti i $k < n$ per dimostrare $n$.</p>
        `,
        examples: `
             <div style="background: #fff1f2; padding: 15px; border-radius: 10px; border-left: 4px solid #e11d48;">
                <p><b>Dimostrazione classica:</b> $\\sum_{i=1}^n (2i-1) = n^2$.</p>
                <p>Base $n=1$: $1 = 1^2$ (OK).</p>
                <p>Passo: Assumo $\\sum^t (..) = t^2$.</p>
                <p>Calcolo $\\sum^{t+1} = t^2 + (2(t+1)-1) = t^2 + 2t + 1 = (t+1)^2$. (CVD).</p>
            </div>
        `,
        exercises: `
            <div style="border-left: 4px solid #e11d48; padding-left: 15px;">
                <p><b>Esercizio (Esame 04/02/22):</b></p>
                <p>Dimostrare che per ogni $n \\ge 8$ esistono $a,b \\in \\mathbb{N}_0$ tali che $n = 3a + 5b$.</p>
                <hr>
                <p><b>Svolgimento (Induzione Forte):</b></p>
                <p><b>Base:</b> Verifichiamo i primi casi.<br>
                $n=8: 3(1)+5(1)$ (OK)<br>
                $n=9: 3(3)+5(0)$ (OK)<br>
                $n=10: 3(0)+5(2)$ (OK)</p>
                <p><b>Passo:</b> Sia $n > 10$. Supponiamo vero per tutti i $k < n$.<br>
                Consideriamo $n-3$. Poiché $n > 10$, $n-3 \\ge 8$.<br>
                Per ipotesi induttiva, $n-3 = 3a' + 5b'$.<br>
                Aggiungiamo 3 ad entrambi i lati:<br>
                $n = (n-3) + 3 = 3a' + 5b' + 3 = 3(a'+1) + 5b'$.<br>
                Abbiamo trovato $a=a'+1$ e $b=b'$. <b>CVD</b>.</p>
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
        examples: "",
        exercises: `
            <div style="border-left: 4px solid #e11d48; padding-left: 15px;">
                <p><b>Quesito (Esercitazione 4):</b></p>
                <p>Dato il numero $1234_{10}$, quale uguaglianza è FALSA?</p>
                <p>A) $1234 = (10011010010)_2$</p>
                <p>B) $1234 = (1200201)_3$</p>
                <hr>
                <p><b>Svolgimento (Controllo veloce con Base 3):</b></p>
                <p>Convertiamo $(1200201)_3$ in base 10:</p>
                <p>$1\\cdot3^6 + 2\\cdot3^5 + 0 + 0 + 2\\cdot3^2 + 0 + 1\\cdot3^0$</p>
                <p>$= 729 + 2(243) + 18 + 1$</p>
                <p>$= 729 + 486 + 19 = 1234$.</p>
                <p>La B è vera. Bisogna controllare le altre dividendo 1234 per le basi.</p>
            </div>
        `
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
            </ul>
        `,
        examples: `
            <div style="background: #fdf2f8; padding: 15px; border-radius: 10px; border-left: 4px solid #db2777;">
                <p><b>Proprietà Triangolari:</b></p>
                <p>Il determinante di una matrice triangolare è il <b>prodotto degli elementi sulla diagonale principale</b>.</p>
            </div>
        `,
        exercises: `
            <div style="border-left: 4px solid #db2777; padding-left: 15px;">
                <p><b>Quesito (Esercitazione 4):</b></p>
                <p>Date $A$ di tipo $2 \\times 1$ e $B$ di tipo $2 \\times 2$.</p>
                <p>Si può fare $A \\cdot B$? NO (1 colonna vs 2 righe).</p>
                <p>Si può fare $B \\cdot A$? SI (2 colonne vs 2 righe). Il risultato sarà $2 \\times 1$.</p>
            </div>
        `
    },
    { 
        id: 502, 
        category: 'matrici', 
        title: "2. Operazioni Matriciali", 
        summary: "Prodotto righe per colonne e non commutatività.", 
        details: `
            <p><b>Prodotto $A \\cdot B$:</b> Possibile solo se colonne di A = righe di B.</p>
            <p>L'elemento $c_{ij}$ è il prodotto scalare della riga $i$ di A per la colonna $j$ di B.</p>
            <p><b>Attenzione:</b> Il prodotto <b>NON è commutativo</b>.</p>
        `,
        examples: "",
        exercises: `
            <div style="border-left: 4px solid #db2777; padding-left: 15px;">
                <p><b>Quesito (Esercitazione 4):</b></p>
                <p>Se una matrice $4 \\times 3$ ha due righe uguali, cosa possiamo dire?</p>
                <p><b>Svolgimento:</b></p>
                <p>Se ha due righe uguali, le righe sono linearmente dipendenti.</p>
                <p>Il rango massimo teorico è 3 (minimo tra 4 e 3).</p>
                <p>Poiché c'è dipendenza, il rango sarà sicuramente minore del numero di righe coinvolte se fossero tutte dipendenti, ma qui basta dire che non è rango massimo per righe? No, attenzione.</p>
                <p>In una $4 \\times 3$, il rango è al massimo 3. Avere due righe uguali non abbassa necessariamente il rango sotto il 3 (potrebbero essercene altre 2 indipendenti + 1 uguale). Ma sicuramente il determinante di qualsiasi minore $4x4$ (che non esiste) o se fosse quadrata sarebbe 0.</p>
                <p>L'informazione utile è: <b>Le righe sono linearmente dipendenti.</b></p>
            </div>
        `
    },
    { 
        id: 503, 
        category: 'matrici', 
        title: "3. Matrice Inversa", 
        summary: "Condizione di invertibilità.", 
        details: `
            <p>Una matrice quadrata $A$ è <b>invertibile</b> se esiste $B$ tale che $AB = BA = I_n$.</p>
            <p><b>Teorema:</b> $A$ è invertibile $\\iff \\det(A) \\neq 0$.</p>
        `,
        examples: "",
        exercises: `
            <div style="border-left: 4px solid #db2777; padding-left: 15px;">
                <p><b>Esercizio Base:</b></p>
                <p>Per quali $k$ la matrice $\\begin{pmatrix} 1 & k \\\\ 2 & 4 \\end{pmatrix}$ è invertibile?</p>
                <p><b>Svolgimento:</b></p>
                <p>Calcolo il determinante: $ad - bc = 1(4) - 2(k) = 4 - 2k$.</p>
                <p>Invertibile se $\\det \\neq 0 \\implies 4 - 2k \\neq 0 \\implies 2k \\neq 4 \\implies k \\neq 2$.</p>
            </div>
        `
    },
    { 
        id: 504, 
        category: 'matrici', 
        title: "4. Rango e Gauss", 
        summary: "Riduzione a scala e calcolo del rango.", 
        details: `
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
                <p>Poiché abbiamo trovato un minore di ordine 3 non nullo, il rango è <b>esattamente 3</b>.</p>
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
            </div>
        `,
        exercises: `
            <div style="border-left: 4px solid #db2777; padding-left: 15px;">
                <p><b>Quesito (Esercitazione 4):</b></p>
                <p>Si consideri una matrice con un minore di ordine 2 uguale a 0. Il rango è per forza $< 2$?</p>
                <p><b>Svolgimento:</b></p>
                <p>NO. Per avere rango $< 2$ (quindi 1), <b>TUTTI</b> i minori di ordine 2 devono essere nulli.</p>
                <p>Ne basta uno non nullo per avere rango $\\ge 2$.</p>
            </div>
        `
    },

    // --- 6. STRUTTURE ALGEBRICHE ---
    { 
        id: 601, 
        category: 'strutture', 
        title: "1. Anelli e Campi", 
        summary: "Differenze e Invertibilità in Zn.", 
        details: `
            <p><b>Anello Commutativo Unitario:</b> Somma (gruppo abeliano), Prodotto (associativo, commutativo, neutro 1).</p>
            <p><b>Campo:</b> Anello dove <b>ogni elemento non nullo è invertibile</b>.</p>
            <p><b>Divisori dello Zero:</b> Elementi non nulli $a, b$ tali che $a \\cdot b = 0$.</p>
        `,
        examples: `
            <div style="background: #f3e8ff; padding: 15px; border-radius: 10px; border-left: 4px solid #9333ea;">
                <p><b>Il caso $\\mathbb{Z}_n$:</b></p>
                <p>$\\mathbb{Z}_n$ è un <b>Campo</b> se e solo se $n$ è <b>primo</b>.</p>
                <p>Se $n$ non è primo, ha divisori dello zero.</p>
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

    // --- 7. VETTORI ---
    { 
        id: 701, 
        category: 'vettori', 
        title: "1. Definizione Spazio Vettoriale", 
        summary: "Assiomi e Sottospazi.", 
        details: `
            <p><b>Sottospazio Vettoriale ($W \\subseteq V$):</b></p>
            <p>Un sottoinsieme $W$ è sottospazio se:</p>
            <ol>
                <li>Il vettore nullo appartiene a $W$ ($\\mathbf{0} \\in W$).</li>
                <li>È chiuso rispetto alla somma e al prodotto per scalare.</li>
            </ol>
        `,
        examples: `
            <div style="background: #e0f2fe; padding: 15px; border-radius: 10px; border-left: 4px solid #0284c7;">
                <p><b>Esempio da MD2511:</b></p>
                <p>$V = \\{(x,y,z) \\in \\mathbb{R}^3 \\mid x^2+y^2=1\\}$</p>
                <p><b>NO</b>. Non contiene il vettore nullo $(0,0,0)$.</p>
            </div>
        `,
        exercises: `
            <div style="border-left: 4px solid #0284c7; padding-left: 15px;">
                <p><b>Quesito (Esercitazione 6):</b></p>
                <p>Quale NON è un sottospazio di $\\mathbb{R}^3$?</p>
                <p>D) $\\{(x,y,z) | 3x+y-2z-2=0\\}$</p>
                <hr>
                <p><b>Svolgimento:</b></p>
                <p>Un sottospazio deve contenere l'origine $(0,0,0)$.</p>
                <p>Sostituiamo nell'equazione di D: $3(0)+0-2(0)-2 = -2 \\neq 0$.</p>
                <p>L'equazione non è soddisfatta dall'origine. Quindi non è un sottospazio (è un piano affine non passante per l'origine).</p>
            </div>
        `
    },
    { 
        id: 702, 
        category: 'vettori', 
        title: "2. Generatori e Basi", 
        summary: "Span e Indipendenza Lineare.", 
        details: `
            <p><b>Indipendenza Lineare:</b> I vettori sono indipendenti se l'unica combinazione lineare che dà il vettore nullo è quella con tutti i coefficienti nulli.</p>
            <p><b>Base:</b> Un insieme di generatori linearmente indipendenti.</p>
        `,
        examples: "",
        exercises: `
            <div style="border-left: 4px solid #0284c7; padding-left: 15px;">
                <p><b>Esercizio:</b></p>
                <p>I vettori $v_1=(1,0), v_2=(2,0)$ sono indipendenti?</p>
                <p><b>Svolgimento:</b></p>
                <p>No, perché $v_2 = 2v_1$. Uno è multiplo dell'altro.</p>
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
            <p>Se $rank = n$ (incognite), soluzione unica.</p>
            <p>Se $rank < n$, infinite soluzioni ($\\infty^{n-rank}$).</p>
        `,
        examples: `
            <div style="background: #f0f9ff; padding: 15px; border-radius: 10px; border-left: 4px solid #0ea5e9;">
                <p><b>Nota sui sistemi omogenei ($Ax=0$):</b></p>
                <p>Hanno sempre almeno una soluzione (quella nulla).</p>
            </div>
        `,
        exercises: `
            <div style="border-left: 4px solid #0ea5e9; padding-left: 15px;">
                <p><b>Quesito (Esercitazione 4):</b></p>
                <p>Il sistema $Ax=b$ è compatibile se...</p>
                <p><b>Soluzione:</b> Se la colonna dei termini noti $b$ è combinazione lineare delle colonne di A. (Che equivale a dire rango incompleta = rango completa).</p>
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
                <li>Se $k = n$: <b>Soluzione Unica</b>.</li>
                <li>Se $k < n$: <b>Infinite soluzioni</b> ($\\infty^{n-k}$).</li>
            </ul>
        `,
        examples: `
            <div style="background: #f0f9ff; padding: 15px; border-radius: 10px; border-left: 4px solid #0ea5e9;">
                <p><b>Sistemi Omogenei:</b></p>
                <p>Hanno soluzioni non banali solo se $rk(A) < n$.</p>
            </div>
        `,
        exercises: `
            <div style="border-left: 4px solid #0ea5e9; padding-left: 15px;">
                <p><b>Quesito 14 (Prova 09/01/24):</b></p>
                <p>Sistema di 3 equazioni in 4 incognite. Matrice incompleta ha rango 3. Cosa succede?</p>
                <hr>
                <p><b>Svolgimento:</b></p>
                <p>Abbiamo $n=4$ incognite. Il rango è $k=3$.</p>
                <p>Poiché il rango massimo della completa (3x5) non può superare il numero di righe (3), anche la completa avrà rango 3 (se il sistema è compatibile, e lo è quasi sempre se non contraddittorio).</p>
                <p>Avremo $\\infty^{n-k} = \\infty^{4-3} = \\infty^1$ soluzioni.</p>
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
            <p><b>Definizione:</b> $A$ è diagonalizzabile se è simile a una matrice diagonale $D$.</p>
            <p>La matrice $P$ che diagonalizza è la matrice formata dagli <b>autovettori</b>.</p>
        `,
        examples: "",
        exercises: `
            <div style="border-left: 4px solid #9333ea; padding-left: 15px;">
                <p><b>Esercizio:</b></p>
                <p>Trovare gli autovalori di $A = \\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix}$.</p>
                <p><b>Svolgimento:</b></p>
                <p>È una matrice triangolare inferiore.</p>
                <p>Gli autovalori sono semplicemente gli elementi sulla diagonale.</p>
                <p>$\\lambda_1 = 2, \\lambda_2 = 3$.</p>
            </div>
        `
    },
    { 
        id: 902, 
        category: 'diagonalizzazione', 
        title: "2. Criterio di Diagonalizzabilità", 
        summary: "Molteplicità Algebrica e Geometrica.", 
        details: `
            <p>Una matrice è diagonalizzabile se e solo se:</p>
            <ol>
                <li>La somma delle molteplicità algebriche è $n$.</li>
                <li>Per ogni autovalore, $m_g(\\lambda) = m_a(\\lambda)$.</li>
            </ol>
            <p>$$m_g(\\lambda) = n - rk(A - \\lambda I)$$</p>
        `,
        examples: `
            <div style="background: #faf5ff; padding: 15px; border-radius: 10px; border-left: 4px solid #9333ea;">
                <p><b>Caso semplice:</b></p>
                <p>Se una matrice $n \\times n$ ha $n$ autovalori <b>tutti distinti</b>, è sicuramente diagonalizzabile.</p>
            </div>
        `,
        exercises: ""
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
        examples: "",
        exercises: `
            <div style="border-left: 4px solid #f97316; padding-left: 15px;">
                <p><b>Quesito 19 (Prova 12/02/24):</b></p>
                <p>Quanti sono i numeri interi positivi minori di 900 divisibili per almeno uno dei numeri 11, 23, 29?</p>
                <hr>
                <p><b>Svolgimento:</b></p>
                <p>Calcoliamo le parti intere delle divisioni:</p>
                <p>$|A_{11}| = [899/11] = 81$</p>
                <p>$|A_{23}| = [899/23] = 39$</p>
                <p>$|A_{29}| = [899/29] = 31$</p>
                <p>Intersezioni (mcm è il prodotto perché sono primi):</p>
                <p>$|A_{11,23}| = [899/253] = 3$</p>
                <p>$|A_{11,29}| = [899/319] = 2$</p>
                <p>$|A_{23,29}| = [899/667] = 1$</p>
                <p>Intersezione tripla: $[899/7337] = 0$.</p>
                <p>Formula: $(81+39+31) - (3+2+1) + 0 = 151 - 6 = 145$.</p>
                <p><b>Risposta: 145</b></p>
            </div>
        `
    },

    // --- 11. RELAZIONI D'ORDINE ---
    { 
        id: 1101, 
        category: 'ordini', 
        title: "1. Definizione Relazione d'Ordine", 
        summary: "Le 3 proprietà e il confronto.", 
        details: `
            <p>Una relazione $\\le$ è d'<b>Ordine</b> se è:</p>
            <ol>
                <li><b>Riflessiva:</b> $\\forall x, x \\le x$.</li>
                <li><b>ANTISIMMETRICA:</b> $\\forall x,y$, se $x \\le y$ e $y \\le x \\implies x=y$.</li>
                <li><b>Transitiva:</b> $\\forall x,y,z$, se $x \\le y$ e $y \\le z \\implies x \\le z$.</li>
            </ol>
        `,
        examples: `
            <div style="background: #fffbeb; padding: 15px; border-radius: 10px; border-left: 4px solid #f59e0b;">
                <p><b>Esempio Classico: Divisibilità su $\\mathbb{N}$:</b></p>
                <p>$a \\mathcal{R} b \\iff a$ divide $b$.</p>
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
                <p>Un insieme è <b>Ben Ordinato</b> se ogni sottoinsieme non vuoto ha un minimo.</p>
                <p>Ma in $\\mathbb{Z}$ i numeri negativi $\\{-1, -2, -3...\\}$ non hanno minimo (vanno a $-\\infty$).</p>
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
                <li><b>Ordine Totale:</b> Tutti gli elementi sono confrontabili tra loro.</li>
                <li><b>Ordine Parziale:</b> Esistono coppie non confrontabili.</li>
            </ul>
        `,
        examples: `
            <div style="background: #fffbeb; padding: 15px; border-radius: 10px; border-left: 4px solid #f59e0b;">
                <p><b>Esercizio Divisibilità:</b></p>
                <p>In $(\\mathbb{N}, |)$, 2 e 3 non sono confrontabili (nessuno divide l'altro). Ordine Parziale.</p>
            </div>
        `,
        exercises: `
            <div style="border-left: 4px solid #f59e0b; padding-left: 15px;">
                <p><b>Quesito 22 (Prova 25/01/24):</b></p>
                <p>Insieme $V=\\{3^h 5 | h \\in \\mathbb{N}_0\\}$. Quale relazione lo rende <b>Totalmente Ordinato</b>?</p>
                <p>Opzione E: $x \\mathcal{R} y \\iff k|h$ (divisibilità esponenti).</p>
                <p>Opzione D: $x \\mathcal{R} y \\iff h \\le k$ (ordine usuale esponenti).</p>
                <hr>
                <p><b>Svolgimento:</b></p>
                <p>Gli elementi sono determinati solo dall'esponente $h$.</p>
                <p>L'ordine usuale su $\\mathbb{N}_0$ ($h \\le k$) è totale (dati due numeri, uno è sempre minore dell'altro). Quindi rende anche V totalmente ordinato.</p>
                <p>La divisibilità invece è parziale (2 non divide 3 e viceversa).</p>
                <p><b>Risposta: D</b></p>
            </div>
        `
    },
    { 
        id: 1103, 
        category: 'ordini', 
        title: "3. Elementi Notevoli (TRAPPOLA)", 
        summary: "Massimo/Minimo vs Massimale/Minimale.", 
        details: `
            <p><b>1. Massimo (Max):</b> Un elemento $M$ tale che $x \\le M$ per <b>TUTTI</b> gli $x$. (Unico se esiste).</p>
            <p><b>2. Massimale:</b> Un elemento $m$ tale che <b>NON ESISTE</b> nessun $x$ con $m < x$. (Possono essercene tanti).</p>
        `,
        examples: `
            <div style="background: #fffbeb; padding: 15px; border-radius: 10px; border-left: 4px solid #f59e0b;">
                <p><b>Esempio visuale:</b></p>
                <p>Insieme $\\{2, 3\\}$ ordinato per divisibilità.</p>
                <ul>
                    <li><b>Massimo:</b> Non esiste.</li>
                    <li><b>Massimali:</b> Sia 2 che 3 sono massimali.</li>
                </ul>
            </div>
        `,
        exercises: `
            <div style="border-left: 4px solid #f59e0b; padding-left: 15px;">
                <p><b>Quesito 21 (Prova 12/02/24):</b></p>
                <p>Definizione esatta di Massimo.</p>
                <p><b>Soluzione:</b></p>
                <p>$h$ è il massimo di $T \\iff h \\in T$ e $t \\mathcal{R} h$ per ogni $t \\in T$.</p>
            </div>
        `
    },
    { 
        id: 1104, 
        category: 'ordini', 
        title: "4. Reticoli (Lattices)", 
        summary: "Sup e Inf per ogni coppia.", 
        details: `
            <p>Un insieme ordinato è un <b>Reticolo</b> se <b>per ogni coppia</b> di elementi $x, y$ esistono:</p>
            <ul>
                <li><b>Estremo Inferiore (Inf / $\\wedge$):</b> MCD (se divisibilità).</li>
                <li><b>Estremo Superiore (Sup / $\\vee$):</b> mcm (se divisibilità).</li>
            </ul>
        `,
        examples: "",
        exercises: `
            <div style="border-left: 4px solid #f59e0b; padding-left: 15px;">
                <p><b>Quesito (Esercitazione 5):</b></p>
                <p>$(\\mathbb{N}_0 \\setminus \\{1\\}, |)$ è un reticolo?</p>
                <hr>
                <p><b>Svolgimento:</b></p>
                <p>Prendiamo la coppia 2 e 3. Il loro Infimo naturale sarebbe MCD(2,3) = 1.</p>
                <p>Ma abbiamo rimosso l'1 dall'insieme!</p>
                <p>Quindi nell'insieme non c'è nessun elemento che divida sia 2 che 3.</p>
                <p>Manca l'estremo inferiore $\\implies$ <b>NON è un reticolo.</b></p>
            </div>
        `
    }
];

document.addEventListener('DOMContentLoaded', () => {
    initPage(mdCategories, mdNotes, "Matematica Discreta - Teoria Rigorosa");
});