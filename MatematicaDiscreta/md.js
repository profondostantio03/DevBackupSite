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
                <ul style="list-style:none; padding-left:0;">
                    <li>A) $\\{2\\} \\subseteq H$</li>
                    <li>B) $\\{2,4\\} \\in H$</li>
                    <li>C) $\\{2\\} \\in H$</li>
                    <li>D) $\\{x\\} \\in H$</li>
                    <li>E) $\\emptyset \\subseteq H$</li>
                </ul>
                <hr>
                <p><b>Analisi delle Opzioni:</b></p>
                <ul>
                    <li><b>A) Vera.</b> $\\{2\\} \\subseteq H$ significa "l'elemento 2 sta in H?". Sì, il primo elemento è proprio 2.</li>
                    <li><b>B) Vera.</b> $\\{2,4\\} \\in H$ significa "il pacchetto $\\{2,4\\}$ è un elemento di H?". Sì, è il secondo elemento della lista.</li>
                    <li><b>C) FALSA (Risposta Corretta).</b> $\\{2\\} \\in H$ significa "il pacchetto $\\{2\\}$ è un elemento?". NO. C'è il numero 2 sciolto, e c'è il pacchetto $\\{2,4\\}$, ma il pacchetto $\\{2\\}$ da solo non c'è.</li>
                    <li><b>D) Vera.</b> $\\{x\\}$ è elencato come ultimo elemento.</li>
                    <li><b>E) Vera.</b> L'insieme vuoto è sempre sottoinsieme di qualsiasi insieme (assioma).</li>
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
        `,
        exercises: `
            <div style="border-left: 4px solid #16a34a; padding-left: 15px;">
                <p><b>Quesito (Prova 25/01/24):</b></p>
                <p>Si stabilisca quale tra le seguenti affermazioni è esatta riguardante $\\mathcal{P}(\\mathbb{N}_0) \\times \\mathbb{Z}$:</p>
                <ul style="list-style:none; padding-left:0;">
                    <li>A) $(\\mathbb{N}, -3) \\in \\mathcal{P}(\\mathbb{N}_0) \\times \\mathbb{Z}$</li>
                    <li>B) $(\\{2\\}, \\emptyset) \\in \\mathcal{P}(\\mathbb{N}_0) \\times \\mathbb{Z}$</li>
                    <li>C) $(4, 0) \\in \\mathcal{P}(\\mathbb{N}_0) \\times \\mathbb{Z}$</li>
                    <li>D) $(\\{-1, 1\\}, -5) \\in \\mathcal{P}(\\mathbb{N}_0) \\times \\mathbb{Z}$</li>
                    <li>E) $(7, \\{-2\\}) \\in \\mathcal{P}(\\mathbb{N}_0) \\times \\mathbb{Z}$</li>
                </ul>
                <hr>
                <p><b>Analisi delle Opzioni:</b></p>
                <p>Un elemento appartiene al prodotto cartesiano $A \\times B$ se la prima componente sta in A e la seconda in B.</p>
                <ul>
                    <li><b>A) ESATTA.</b> Prima componente: $\\mathbb{N}$. È un sottoinsieme di $\\mathbb{N}_0$? Sì. Quindi $\\mathbb{N} \\in \\mathcal{P}(\\mathbb{N}_0)$. Seconda componente: $-3$. È un numero intero? Sì. $-3 \\in \\mathbb{Z}$.</li>
                    <li><b>B) Errata.</b> La seconda componente è $\\emptyset$, che è un insieme, non un numero intero ($\\,\\emptyset \\notin \\mathbb{Z}$).</li>
                    <li><b>C) Errata.</b> La prima componente è $4$ (numero), ma $\\mathcal{P}$ contiene insiemi (doveva essere $\\{4\\}$).</li>
                    <li><b>D) Errata.</b> La prima componente $\\{-1, 1\\}$ contiene $-1$, che non è un numero naturale ($\\{...-1\\} \\not\\subseteq \\mathbb{N}_0$).</li>
                    <li><b>E) Errata.</b> Entrambe sbagliate: 7 non è un insieme, $\\{-2\\}$ non è un numero.</li>
                </ul>
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
                <ul style="list-style:none; padding-left:0;">
                    <li>A) $\\{(a,1), (i,7), (i,3), (o,6), (l,5)\\}$</li>
                    <li>B) $\\{(a,1), (i,1), (u,7), (o,6), (l,5)\\}$</li>
                    <li>C) $\\{(a,1), (u,2), (o,3), (l,4)\\}$</li>
                    <li>D) $\\{(a,1), (i,1), (u,7), (o,6)\\}$</li>
                    <li>E) Nessuna delle precedenti</li>
                </ul>
                <hr>
                <p><b>Analisi delle Opzioni:</b></p>
                <ul>
                    <li><b>A) Errata.</b> L'elemento 'i' ha due frecce (va in 7 e in 3). Viola l'unicità.</li>
                    <li><b>B) ESATTA.</b> Ogni vocale ha esattamente una freccia. (Anche se 'a' e 'i' vanno entrambe su 1, è permesso, non viola l'unicità dell'output).</li>
                    <li><b>C) Errata.</b> Manca la 'i'. Viola l'esistenza (deve essere definita ovunque).</li>
                    <li><b>D) Errata.</b> Manca la 'l'. Viola l'esistenza.</li>
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
        `,
        exercises: `
            <div style="border-left: 4px solid #eab308; padding-left: 15px;">
                <p><b>Quesito (Esercitazione 2):</b></p>
                <p>Per quale scelta di dominio e codominio $f(x) = |x-1|$ è <b>iniettiva</b>?</p>
                <ul style="list-style:none; padding-left:0;">
                    <li>A) $\\mathbb{Z} \\to \\mathbb{Z}$</li>
                    <li>B) $\\mathbb{N} \\to \\mathbb{N}$</li>
                    <li>C) $\\mathbb{N}_0 \\to \\mathbb{N}_0$</li>
                    <li>D) $[1, +\\infty) \\to \\mathbb{R}$</li>
                    <li>E) Nessuna delle precedenti</li>
                </ul>
                <hr>
                <p><b>Analisi delle Opzioni:</b></p>
                <p>Testiamo $f(x_1)=f(x_2) \\implies x_1=x_2$. Il valore assoluto $|x-1|$ ha forma a "V" centrata in 1.</p>
                <ul>
                    <li><b>A, B, C) Errate.</b> Prendi $x=0$ e $x=2$. <br>$f(0) = |0-1| = 1$. <br>$f(2) = |2-1| = 1$. <br>Ho output uguali per input diversi ($0 \\neq 2$). Quindi NON è iniettiva.</li>
                    <li><b>D) ESATTA.</b> Se il dominio è $x \\ge 1$, prendiamo solo il ramo destro della V ($y=x-1$), che è una retta crescente. Essendo strettamente crescente, è iniettiva.</li>
                </ul>
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
                <ul style="list-style:none; padding-left:0;">
                    <li>A) 24</li>
                    <li>B) 12</li>
                    <li>C) $4^3$</li>
                    <li>D) $3^4$</li>
                    <li>E) 0</li>
                </ul>
                <hr>
                <p><b>Analisi delle Opzioni:</b></p>
                <ul>
                    <li><b>E) 0 (Corretta).</b> Dominio ha 3 elementi, Codominio ne ha 4. È impossibile colpire 4 bersagli diversi tirando solo 3 frecce. Non può essere suriettiva.</li>
                    <li><b>A, B) Errate.</b> Calcoli casuali.</li>
                    <li><b>C, D) Errate.</b> $4^3$ e $3^4$ sono formule per il numero totale di funzioni ($m^n$ o $n^m$), non per le suriettive.</li>
                </ul>
                <br>
                <p><b>Quesito (Prova 09/01/24):</b></p>
                <p>Siano $A=\\{a,b,c,d,e\\}$ e $B=\\{1,2,3,4,5,6\\}$. Quante applicazioni <b>iniettive</b>?</p>
                <ul style="list-style:none; padding-left:0;">
                    <li>A) $6^5$</li>
                    <li>B) 30</li>
                    <li>C) 720</li>
                    <li>D) 60</li>
                    <li>E) 0</li>
                </ul>
                <p><b>Svolgimento:</b> $|A|=5, |B|=6$. Si usano le disposizioni semplici. $6 \\times 5 \\times 4 \\times 3 \\times 2 = 720$. <b>Risposta C.</b></p>
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
                <ul style="list-style:none; padding-left:0;">
                    <li>A) $x \\mathcal{R} y \\iff x \\le y$</li>
                    <li>B) $x \\mathcal{R} y \\iff x$ divide $y$</li>
                    <li>C) $x \\mathcal{R} y \\iff x + y$ è dispari</li>
                    <li>D) $7h+1 \\mathcal{R} 7k+1 \\iff |h-3| = |k-3|$</li>
                    <li>E) Nessuna</li>
                </ul>
                <hr>
                <p><b>Analisi delle Opzioni:</b></p>
                <ul>
                    <li><b>A) Errata.</b> $\\le$ è riflessiva e transitiva, ma <b>non simmetrica</b> (3 non è $\\le$ 2). È d'ordine.</li>
                    <li><b>B) Errata.</b> La divisibilità è d'ordine parziale, <b>non simmetrica</b>.</li>
                    <li><b>C) Errata.</b> $x+x = 2x$ (pari). Quindi non è mai dispari. Non è nemmeno <b>riflessiva</b>.</li>
                    <li><b>D) ESATTA.</b> È definita come uguaglianza di una funzione: $f(h) = f(k)$ con $f(x) = |x-3|$. Ogni relazione del tipo "hanno lo stesso valore di..." è sempre di equivalenza (eredita le proprietà dell'uguale).</li>
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
                $\\{a,b,v\\}$ devono stare insieme (transitiva).<br>
                $w$ e $c$ devono stare separati dal primo gruppo.<br>
                Partizione corretta: $\\{\\{a, b, v\\}, \\{w, c\\}\\}$.</p>
            </div>
        `,
        exercises: `
            <div style="border-left: 4px solid #3b82f6; padding-left: 15px;">
                <p><b>Quesito (Prova 09/01/24):</b></p>
                <p>Dato $T=\\{a,b,c,x,y,z\\}$ e le regole: $a\\mathcal{R}x$, $a\\mathcal{R}c$, $y\\mathcal{R}z$, $x \\notin [y]$, $z \\notin [b]$. Trova la partizione corretta.</p>
                <ul style="list-style:none; padding-left:0;">
                    <li>A) $\\{\\{a,x,c,y\\}, \\{z,b\\}\\}$</li>
                    <li>B) $\\{\\{a,x\\}, \\{c,y,z\\}, \\{b\\}\\}$</li>
                    <li>C) $\\{\\{a,x,c\\}, \\{y,z\\}, \\{b\\}\\}$</li>
                    <li>D) $\\{\\{a,x,c\\}, \\{y,z,b\\}\\}$</li>
                    <li>E) $\\{\\{a\\}, \\{b\\}, \\{c\\}, \\{x\\}, \\{y\\}, \\{z\\}\\}$</li>
                </ul>
                <hr>
                <p><b>Analisi delle Opzioni:</b></p>
                <ul>
                    <li><b>Step 1:</b> $a, x, c$ sono legati (proprietà transitiva $x \\sim a \\sim c$). Devono stare insieme. <br><i>(Esclude B e E che li separano).</i></li>
                    <li><b>Step 2:</b> $y, z$ sono legati. Devono stare insieme.</li>
                    <li><b>Step 3:</b> $x \\notin [y]$ significa che il gruppo $\\{a,x,c\\}$ e il gruppo $\\{y,z\\}$ sono separati. <br><i>(Esclude A che li mischia).</i></li>
                    <li><b>Step 4:</b> $z \\notin [b]$ significa che $b$ non può stare con $z$. Quindi $b$ sta da solo. <br><i>(Esclude D che mette b con z).</i></li>
                </ul>
                <p><b>Risposta: C (Rispetta tutto).</b></p>
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
            <p><b>Teorema della Divisione Euclidea:</b></p>
            <p>Dati $a, b \\in \\mathbb{Z}$ con $b \\neq 0$, esistono e sono unici $q, r \\in \\mathbb{Z}$ tali che:</p>
            <p>$$a = b \\cdot q + r \\quad \\text{con} \\quad \\mathbf{0 \\le r < |b|}$$</p>
            <p><i>Nota Fondamentale:</i> Il resto $r$ è sempre <b>non negativo</b> ($r \\ge 0$).</p>
            <hr>
            <p><b>Teorema Fondamentale dell'Aritmetica (Esistenza e Unicità):</b></p>
            <p>Ogni intero $n \\ge 2$ si può scrivere come prodotto di numeri primi:</p>
            <p>$$n = p_1 \\cdot p_2 \\cdot ... \\cdot p_k$$</p>
            <p>Tale fattorizzazione è <b>unica</b> a meno dell'ordine dei fattori.</p>
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
                <ul style="list-style:none; padding-left:0;">
                    <li>A) (27, 2301)</li>
                    <li>B) (3, 6171)</li>
                    <li>C) (27, 6171)</li>
                    <li>D) (27, 18513)</li>
                    <li>E) (9, 2301)</li>
                </ul>
                <hr>
                <p><b>Analisi delle Opzioni:</b></p>
                <p>Usiamo la proprietà fondamentale: $a \\cdot b = MCD(a,b) \\cdot mcm(a,b)$.</p>
                <p>Calcoliamo il prodotto target: $3 \\times 55539 = 166.617$.</p>
                <ul>
                    <li><b>A)</b> $27 \\times 2301 = 62.127$ (Errato).</li>
                    <li><b>B)</b> $3 \\times 6171 = 18.513$ (Errato).</li>
                    <li><b>C) ESATTA.</b> $27 \\times 6171 = 166.617$. (Il prodotto corrisponde). <br>Verifica MCD: $27 = 3^3$. $6171$ non è divisibile per 9 (somma cifre 15), ma per 3 sì. Quindi MCD è 3. Tutto torna.</li>
                    <li><b>D, E)</b> Prodotti diversi.</li>
                </ul>
            </div>
        `
    },
    { 
        id: 405, 
        category: 'aritmetica', 
        title: "2. Teorema di Euclide (Infinità dei Primi)", 
        summary: "Dimostrazione per assurdo classica.", 
        details: `
            <p><b>Enunciato:</b> Esistono infiniti numeri primi.</p>
            <p><b>Dimostrazione (per Assurdo):</b></p>
            <ol>
                <li>Supponiamo che i numeri primi siano in numero finito: $P = \\{p_1, p_2, ..., p_n\\}$.</li>
                <li>Consideriamo il numero $M = (p_1 \\cdot p_2 \\cdot ... \\cdot p_n) + 1$.</li>
                <li>$M$ è chiaramente maggiore di ogni $p_i$.</li>
                <li>Per il Teorema Fondamentale dell'Aritmetica, $M$ deve avere un divisore primo $q$.</li>
                <li>Questo $q$ deve essere uno dei primi nel nostro insieme finito $P$ (perché $P$ li contiene tutti).</li>
                <li>Ma se $q$ divide il prodotto $(p_1...p_n)$ e divide anche $M$ (che è il prodotto + 1), allora $q$ deve dividere la differenza: $M - (p_1...p_n) = 1$.</li>
                <li>Ma nessun numero primo divide 1. <b>Assurdo!</b></li>
            </ol>
            <p>Quindi l'insieme dei numeri primi deve essere infinito.</p>
        `,
        examples: "",
        exercises: ""
    },
    { 
        id: 402, 
        category: 'aritmetica', 
        title: "3. Congruenze e Bèzout", 
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
                <p><b>Quesito (Prova 09/01/24):</b></p>
                <p>Trova l'unico $x$ tra 55 e 110 tale che $Resto(x,5)=3$ e $Resto(x,11)=8$.</p>
                <ul style="list-style:none; padding-left:0;">
                    <li>A) 58</li>
                    <li>B) 63</li>
                    <li>C) 118</li>
                    <li>D) 98</li>
                    <li>E) 83</li>
                </ul>
                <hr>
                <p><b>Analisi delle Opzioni:</b></p>
                <ul>
                    <li><b>A) 58:</b> Diviso 5 dà resto 3 (58 = 5*11 + 3). OK. <br>Diviso 11? $58 = 11*5 + 3$. Resto 3 (non 8). <b>Errata.</b></li>
                    <li><b>B) 63:</b> Diviso 5 dà resto 3 ($63 = 5*12 + 3$). OK. <br>Diviso 11? $63 = 11*5 + 8$. Resto 8. OK. <b>ESATTA.</b></li>
                    <li><b>C) 118:</b> È fuori dall'intervallo richiesto (55-110). <b>Errata a priori.</b></li>
                    <li><b>D) 98:</b> Diviso 5 dà resto 3. Diviso 11? $98 = 11*8 + 10$. Resto 10. <b>Errata.</b></li>
                    <li><b>E) 83:</b> Diviso 5 dà resto 3. Diviso 11? $83 = 11*7 + 6$. Resto 6. <b>Errata.</b></li>
                </ul>
            </div>
        `
    },
    { 
        id: 403, 
        category: 'aritmetica', 
        title: "4. Principio di Induzione", 
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
        title: "5. Numeri in Base b", 
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
                <p>Dato il numero $1234_{10}$, quale uguaglianza è <b>FALSA</b>?</p>
                <ul style="list-style:none; padding-left:0;">
                    <li>A) $1234 = (10011010010)_2$</li>
                    <li>B) $1234 = (202)_5$</li>
                    <li>C) $1234 = (1200201)_3$</li>
                    <li>D) $1234 = (2322)_8$</li>
                    <li>E) $1234 = (4D2)_{16}$</li>
                </ul>
                <hr>
                <p><b>Analisi delle Opzioni:</b></p>
                <p>Strategia: Controllo veloce dell'ordine di grandezza o riconversione.</p>
                <ul>
                    <li><b>B) 202 in base 5 (Errata, quindi è la risposta).</b> Calcoliamo: $2 \\cdot 5^2 + 0 + 2 = 2 \\cdot 25 + 2 = 52$. È palesemente diverso da 1234.</li>
                    <li><b>C) Vera (Esempio).</b> $1\\cdot 3^6 (729) + 2\\cdot 3^5 (486) + ... + 1 = 1234$. Corretta.</li>
                </ul>
                <p>Le altre opzioni, se verificate, risulterebbero corrette.</p>
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
                <p>Date $A$ di tipo $2 \\times 1$ e $B$ di tipo $2 \\times 2$. Quale prodotto è possibile?</p>
                <ul style="list-style:none; padding-left:0;">
                    <li>A) $A \\cdot B$</li>
                    <li>B) $B \\cdot A$</li>
                    <li>C) $A + B$</li>
                    <li>D) $\\det(A)$</li>
                    <li>E) Nessuna</li>
                </ul>
                <hr>
                <p><b>Analisi delle Opzioni:</b></p>
                <ul>
                    <li><b>A) Errata.</b> $A(2\\times1) \\cdot B(2\\times2)$. Colonne di A (1) $\\neq$ Righe di B (2). Impossibile.</li>
                    <li><b>B) ESATTA.</b> $B(2\\times2) \\cdot A(2\\times1)$. Colonne di B (2) $=$ Righe di A (2). Possibile. Risultato $2\\times1$.</li>
                    <li><b>C) Errata.</b> Dimensioni diverse, non si sommano.</li>
                    <li><b>D) Errata.</b> Determinante solo per matrici quadrate.</li>
                </ul>
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
                <p>Se una matrice $4 \\times 3$ ha due righe uguali, cosa possiamo dire con certezza?</p>
                <ul style="list-style:none; padding-left:0;">
                    <li>A) Ha rango 4</li>
                    <li>B) Ha rango $\\le 2$</li>
                    <li>C) Le righe sono linearmente dipendenti</li>
                    <li>D) È invertibile</li>
                    <li>E) Ha rango 3</li>
                </ul>
                <hr>
                <p><b>Analisi delle Opzioni:</b></p>
                <ul>
                    <li><b>A) Errata.</b> Rango massimo è 3 (minimo tra 4 e 3).</li>
                    <li><b>C) ESATTA.</b> Se due righe sono uguali, sono dipendenti. Quindi l'insieme delle righe è linearmente dipendente.</li>
                    <li><b>E) Errata.</b> Potrebbe avere rango 3 (se le altre due righe sono indipendenti), ma potrebbe anche essere minore. Non è "con certezza".</li>
                </ul>
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
                <p>Se una matrice $3 \\times 5$ ha un minore di ordine 3 diverso da 0, cosa possiamo affermare sul Rango?</p>
                <ul style="list-style:none; padding-left:0;">
                    <li>A) $rk(A) = 2$</li>
                    <li>B) $rk(A) = 3$</li>
                    <li>C) $rk(A) \\le 3$</li>
                    <li>D) $rk(A) = 5$</li>
                    <li>E) $rk(A) = 0$</li>
                </ul>
                <hr>
                <p><b>Analisi delle Opzioni:</b></p>
                <ul>
                    <li><b>A) Errata.</b> Avendo un minore 3x3 non nullo, il rango è <i>almeno</i> 3.</li>
                    <li><b>B) ESATTA.</b> Il rango è almeno 3 (per il minore trovato). Ma la matrice ha solo 3 righe, quindi il rango non può essere superiore a 3. Dunque è esattamente 3.</li>
                    <li><b>C) Errata.</b> "Minore o uguale" è tecnicamente vero ma impreciso rispetto alla B che dà l'uguaglianza. Spesso nei quiz "C" qui intende dire "potrebbe essere 1 o 2", che è falso.</li>
                    <li><b>D) Errata.</b> Impossibile avere rango 5 con sole 3 righe.</li>
                    <li><b>E) Errata.</b> Il rango 0 è solo della matrice nulla.</li>
                </ul>
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
                <ul style="list-style:none; padding-left:0;">
                    <li>A) Sì, sempre</li>
                    <li>B) No</li>
                </ul>
                <hr>
                <p><b>Analisi:</b></p>
                <ul>
                    <li><b>B) No (Esatta).</b> Per avere rango $< 2$ (quindi 1), <b>TUTTI</b> i minori di ordine 2 devono essere nulli. Ne basta uno non nullo per avere rango $\\ge 2$. Averne uno nullo non significa nulla se ce n'è un altro diverso da zero.</li>
                </ul>
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
                <ul style="list-style:none; padding-left:0;">
                    <li>A) $11 \\cdot 11 = 2$</li>
                    <li>B) $11 = -1$</li>
                    <li>C) 5 è invertibile</li>
                    <li>D) 3 è un divisore dello zero</li>
                    <li>E) Gli elementi invertibili sono 4</li>
                </ul>
                <hr>
                <p><b>Analisi delle Opzioni:</b></p>
                <ul>
                    <li><b>A) ERRATA (Quindi è la risposta).</b> Calcoliamo $11 \\cdot 11$. <br>Modo veloce: $11 \\equiv -1 \\pmod{12}$. <br>$(-1) \\cdot (-1) = 1$. <br>L'opzione dice che fa 2, ma fa 1.</li>
                    <li><b>B) Vera.</b> $11 + 1 = 12 \\equiv 0$, quindi 11 è l'opposto di 1.</li>
                    <li><b>C) Vera.</b> $MCD(5, 12) = 1$, quindi 5 è invertibile.</li>
                    <li><b>D) Vera.</b> $3 \\cdot 4 = 12 \\equiv 0$. Poiché il prodotto fa 0 con fattori non nulli, 3 è divisore dello zero.</li>
                    <li><b>E) Vera.</b> Invertibili $\\{1, 5, 7, 11\\}$. Sono 4.</li>
                </ul>
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
                <ul style="list-style:none; padding-left:0;">
                    <li>A) $\\{(x,y,z) | z = 0\\}$</li>
                    <li>B) $\\{(x,y,z) | x=y=z\\}$</li>
                    <li>C) $\\{(0,0,0)\\}$</li>
                    <li>D) $\\{(x,y,z) | 3x+y-2z-2=0\\}$</li>
                    <li>E) $\\mathbb{R}^3$</li>
                </ul>
                <hr>
                <p><b>Analisi delle Opzioni:</b></p>
                <ul>
                    <li><b>A, B)</b> Sono piani/rette passanti per l'origine (omogenei). Sono sottospazi.</li>
                    <li><b>C)</b> Sottospazio banale.</li>
                    <li><b>D) NON è sottospazio (Risposta).</b> Sostituiamo l'origine $(0,0,0)$: $3(0)+0-2(0)-2 = -2 \\neq 0$. Non passa per l'origine.</li>
                    <li><b>E)</b> Lo spazio stesso è sottospazio.</li>
                </ul>
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
                <ul style="list-style:none; padding-left:0;">
                    <li>A) Impossibile</li>
                    <li>B) Unica soluzione</li>
                    <li>C) $\\infty^1$ soluzioni</li>
                    <li>D) $\\infty^2$ soluzioni</li>
                    <li>E) Nessuna delle precedenti</li>
                </ul>
                <hr>
                <p><b>Analisi delle Opzioni:</b></p>
                <ul>
                    <li><b>A) Errata.</b> Il rango massimo della completa è 3 (ha solo 3 righe). Quindi $rk(A) = rk(A|b) = 3$. È compatibile.</li>
                    <li><b>B) Errata.</b> $rk=3 < n=4$. Non è unica.</li>
                    <li><b>C) ESATTA.</b> Soluzioni = $\\infty^{n-k} = \\infty^{4-3} = \\infty^1$.</li>
                </ul>
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
                <p>Quanti sono i numeri < 900 divisibili per 11, 23, 29?</p>
                <ul style="list-style:none; padding-left:0;">
                    <li>A) 140</li>
                    <li>B) 150</li>
                    <li>C) 151</li>
                    <li>D) 147</li>
                    <li>E) 145</li>
                </ul>
                <hr>
                <p><b>Analisi delle Opzioni:</b></p>
                <ul>
                    <li><b>C) 151:</b> È la somma dei singoli $(81+39+31)$. <br><i>Errore comune:</i> dimenticare di sottrarre le intersezioni.</li>
                    <li><b>E) 145 (ESATTA).</b> <br>Singoli: $151$. <br>Coppie da togliere: $3+2+1 = 6$. <br>Tripla da aggiungere: $0$. <br>$151 - 6 = 145$.</li>
                    <li><b>A, B, D:</b> Risultati di calcoli errati.</li>
                </ul>
            </div>
        `
    },

    // --- 11. RELAZIONI D'ORDINE ---
    { 
        id: 1101, 
        category: 'ordini', 
        title: "1. Proprietà degli Insiemi Ordinati", 
        summary: "Ordinamento Totale, Ben Ordinato, Reticoli.", 
        details: `
            <p><b>Ben Ordinato:</b> Ogni sottoinsieme non vuoto ha un minimo.</p>
            <p><b>Reticolo:</b> Ogni coppia ha inf e sup.</p>
        `,
        examples: "",
        exercises: `
            <div style="border-left: 4px solid #f59e0b; padding-left: 15px;">
                <p><b>Quesito 22 (Prova 12/02/24):</b></p>
                <p>Considera $(\\mathbb{Z}, \\le)$ con l'ordine usuale. Quale è <b>ERRATA</b>?</p>
                <ul style="list-style:none; padding-left:0;">
                    <li>A) È totalmente ordinato</li>
                    <li>B) È ben ordinato</li>
                    <li>C) È un reticolo</li>
                    <li>D) Non ha minimo</li>
                    <li>E) Non ha massimo</li>
                </ul>
                <hr>
                <p><b>Analisi delle Opzioni:</b></p>
                <ul>
                    <li><b>A) Vera.</b> Dati due interi, uno è sempre minore dell'altro. (La linea è continua).</li>
                    <li><b>B) ERRATA (Risposta).</b> Perché sia ben ordinato, <i>ogni</i> sottoinsieme deve avere un minimo. L'insieme dei numeri interi negativi $\\{-1, -2, -3...\\}$ non ha un minimo (va a $-\\infty$).</li>
                    <li><b>C) Vera.</b> Sup = max(a,b), Inf = min(a,b). Esistono sempre.</li>
                    <li><b>D, E) Vere.</b> $\\mathbb{Z}$ è illimitato sia sopra che sotto.</li>
                </ul>
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