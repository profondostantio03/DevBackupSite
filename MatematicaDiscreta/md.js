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
    { id: 'combinatoria', title: '10. Combinatoria', desc: 'Disposizioni, combinazioni', icon: '🎲', customColor: null },
    { id: 'ordini', title: '11. Relazioni Ordine', desc: 'Reticoli, Hasse, estremi', icon: '≤', customColor: null },
    { id: 'geometria', title: '12. Geometria', desc: 'Rette, piani nello spazio', icon: '📐', customColor: null }
];

// appunti specifici
const mdNotes = [
    // --- 1. INSIEMI ---
    { 
        id: 101, 
        category: 'insiemi', 
        title: "1. Basi e Rappresentazione", 
        summary: "Tabulazione, proprietà e insiemi vuoti.", 
        details: `
            <p>Un insieme è una collezione non ordinata di oggetti distinti.</p>
            <ul>
                <li><b>Tabulazione:</b> $A = \\{a, b, 3\\}$.</li>
                <li><b>Proprietà:</b> $B = \\{x \\mid P(x)\\}$.</li>
            </ul>
            <p><b>Nota:</b> In un insieme non conta l'ordine e non ci sono ripetizioni.</p>
        `,
        examples: `
            <div style="background: #f0fdf4; padding: 15px; border-radius: 10px; border-left: 4px solid #16a34a;">
                <p><b>Esercizio: Elencazione</b></p>
                <p>Descrivere $A = \\{ x \\in \\mathbb{Z} \\mid x^2 < 10 \\}$.</p>
                <p><b>Svolgimento:</b><br>
                Cerco gli interi (anche negativi) il cui quadrato è minore di 10.<br>
                Quadrati: $0, 1, 4, 9$. ($16$ è troppo grande).<br>
                Radici in $\\mathbb{Z}$: $0, \\pm 1, \\pm 2, \\pm 3$.<br>
                <b>Soluzione:</b> $A = \\{-3, -2, -1, 0, 1, 2, 3\\}$.</p>
            </div>
            <br>
            <div style="background: #f0fdf4; padding: 15px; border-radius: 10px; border-left: 4px solid #16a34a;">
                <p><b>Esercizio: Dimostrazione Insiemistica</b></p>
                <p>Dimostrare che $X \\setminus (A \\cup B) = (X \\setminus A) \\cap (X \\setminus B)$.</p>
                <p><b>Svolgimento logico:</b><br>
                $x \\in X \\setminus (A \\cup B) \\iff x \\in X \\land x \\notin (A \\cup B)$<br>
                $\\iff x \\in X \\land (x \\notin A \\land x \\notin B)$ (De Morgan)<br>
                $\\iff (x \\in X \\land x \\notin A) \\land (x \\in X \\land x \\notin B)$<br>
                $\\iff x \\in (X \\setminus A) \\cap (X \\setminus B)$.</p>
            </div>
        `
    },
    { 
        id: 104, 
        category: 'insiemi', 
        title: "2. Operazioni (Unione/Intersezione)", 
        summary: "Esercizi su unione, intersezione e differenza.", 
        details: `
            
            <ul>
                <li><b>Unione ($A \\cup B$):</b> Elementi in A oppure in B.</li>
                <li><b>Intersezione ($A \\cap B$):</b> Elementi comuni ad A e B.</li>
                <li><b>Differenza ($A \\setminus B$):</b> Elementi in A ma non in B.</li>
            </ul>
        `,
        examples: `
            <div style="background: #f0fdf4; padding: 15px; border-radius: 10px; border-left: 4px solid #16a34a;">
                <p><b>Dati:</b> $A = \\{1, 2, 3, 4\\}$ e $B = \\{3, 4, 5, 6\\}$.</p>
                <ul>
                    <li>$A \\cup B = \\{1, 2, 3, 4, 5, 6\\}$ (Tutti)</li>
                    <li>$A \\cap B = \\{3, 4\\}$ (Comuni)</li>
                    <li>$A \\setminus B = \\{1, 2\\}$ (In A tolto B)</li>
                    <li>$B \\setminus A = \\{5, 6\\}$ (In B tolto A)</li>
                </ul>
            </div>
        `
    },
    { 
        id: 105, 
        category: 'insiemi', 
        title: "3. Insieme delle Parti P(A)", 
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
                <ol>
                    <li>$\\emptyset$</li>
                    <li>$\\{a\\}$</li>
                    <li>$\\{1\\}$</li>
                    <li>$\\{a, 1\\}$</li>
                </ol>
                <p>$\\mathcal{P}(A) = \\{\\emptyset, \\{a\\}, \\{1\\}, \\{a, 1\\}\\}$.</p>
            </div>
        `
    },

    // --- 2. APPLICAZIONI ---
    { 
        id: 201, 
        category: 'applicazioni', 
        title: "1. Definizioni Base", 
        summary: "Dominio, Codominio, Immagine, Controimmagine.", 
        details: `
            <p>Un'applicazione $f: A \\to B$ deve rispettare esistenza (tutti partono) e unicità (una sola freccia).</p>
            <p><b>Immagine ($Im(f)$):</b> Sottoinsieme di B degli elementi raggiunti.</p>
            <p><b>Controimmagine ($f^{-1}(Y)$):</b> Sottoinsieme di A degli elementi che "finiscono" in Y.</p>
        `,
        examples: `
            <div style="background: #fefce8; padding: 15px; border-radius: 10px; border-left: 4px solid #eab308;">
                <p><b>Esercizio: Controimmagini finite</b></p>
                <p><b>Dati:</b> $X=\\{1..8\\}$, $Y=\\{a,b,c\\}$.<br>
                $f(1)=a, f(2)=a, f(3)=c, f(4)=b, f(5)=a, f(6)=b, f(7)=c, f(8)=a$.</p>
                <p><b>Calcolare $f^{-1}(\\{a\\})$:</b><br>
                Cerco tutte le x che vanno in 'a'.<br>
                $f^{-1}(\\{a\\}) = \\{1, 2, 5, 8\\}$.</p>
                <p><b>È suriettiva?</b> Sì, a, b, c sono tutti raggiunti.</p>
            </div>
        ` 
    },
    { 
        id: 202, 
        category: 'applicazioni', 
        title: "2. Iniettiva e Suriettiva", 
        summary: "Definizioni formali e test pratici.", 
        details: `
            
            <p><b>Iniettiva:</b> $x_1 \\neq x_2 \\Rightarrow f(x_1) \\neq f(x_2)$.</p>
            <p><b>Suriettiva:</b> $\\forall y \\in B, \\exists x : f(x)=y$.</p>
            <p><b>Biettiva:</b> Entrambe.</p>
        `,
        examples: `
            <div style="background: #fefce8; padding: 15px; border-radius: 10px; border-left: 4px solid #eab308;">
                <p><b>Esercizio con Parametro</b></p>
                <p>Discutere $f_c: \\mathbb{Z} \\to \\mathbb{Z}$ definita da $f_c(x) = x(1-c) + c$.</p>
                <p><b>Iniettività:</b><br>
                $x_1(1-c) = x_2(1-c)$. Se $c \\neq 1$, divido $\\Rightarrow x_1=x_2$. (Sì).<br>
                Se $c=1$, $f(x)=1$ (costante, no).</p>
                <p><b>Suriettività:</b><br>
                $y = x(1-c)+c \\Rightarrow x = \\frac{y-c}{1-c}$.<br>
                Affinché $x$ sia sempre intero, $1-c$ deve essere $\\pm 1$.<br>
                Quindi biettiva solo per $c=0$ o $c=2$.</p>
            </div>
        ` 
    },
    { 
        id: 203, 
        category: 'applicazioni', 
        title: "3. Composizione e Inversa", 
        summary: "Regole g(f(x)) e Teorema Invertibilità.", 
        details: `
            <p><b>Composizione:</b> $(g \\circ f)(x) = g(f(x))$. Prima la destra.</p>
            <p><b>Inversa:</b> Esiste solo se biettiva. $f^{-1}(y) = x \\iff f(x) = y$.</p>
        `,
        examples: `
            <div style="background: #fefce8; padding: 15px; border-radius: 10px; border-left: 4px solid #eab308;">
                <p><b>Dati:</b> $f(x) = x+1$, $g(x) = x^2$.</p>
                <p><b>$g \\circ f$:</b> Prima $+1$, poi $\\text{quadrato}$. $(x+1)^2$.</p>
                <p><b>$f \\circ g$:</b> Prima $\\text{quadrato}$, poi $+1$. $x^2+1$.</p>
                <hr>
                <p><b>Inversa di $y=3x-5$:</b><br>
                Isolo x: $y+5 = 3x \\Rightarrow x = \\frac{y+5}{3}$.</p>
            </div>
        ` 
    },

    // --- 3. RELAZIONI ---
    { 
        id: 301, 
        category: 'relazioni', 
        title: "1. Relazioni di Equivalenza", 
        summary: "Riflessiva, Simmetrica, Transitiva.", 
        details: `
            <p>Proprietà obbligatorie:</p>
            <ol>
                <li><b>Riflessiva:</b> $a \\sim a$</li>
                <li><b>Simmetrica:</b> $a \\sim b \\Rightarrow b \\sim a$</li>
                <li><b>Transitiva:</b> $a \\sim b \\land b \\sim c \\Rightarrow a \\sim c$</li>
            </ol>
        `,
        examples: `
            <div style="background: #eff6ff; padding: 15px; border-radius: 10px; border-left: 4px solid #3b82f6;">
                <p><b>Esercizio: Relazione su Coppie</b></p>
                <p>Su $\\mathbb{N} \\times \\mathbb{N}$: $(a,b)\\mathcal{R}(c,d) \\iff a+d = b+c$.</p>
                <p><b>Riflessiva:</b> $(a,b)\\mathcal{R}(a,b) \\iff a+b = b+a$. OK.</p>
                <p><b>Simmetrica:</b> Se $a+d=b+c$, sposto i termini $\\Rightarrow c+b=d+a$. OK.</p>
                <p><b>Classe $[(1,1)]$:</b> Coppie $(x,y)$ tali che $1+y = 1+x \\Rightarrow x=y$.<br>
                È la diagonale (bisettrice).</p>
            </div>
        ` 
    },
    { 
        id: 301, 
        category: 'relazioni', 
        title: "1. Proprietà Equivalenza (RST)", 
        summary: "Riflessiva, Simmetrica, Transitiva.", 
        details: `
            <p>Una relazione $\\mathcal{R} \\subseteq A \\times A$ è di <b>Equivalenza</b> se è:</p>
            <ol>
                <li><b>Riflessiva:</b> Ognuno con se stesso ($a \\mathcal{R} a$).</li>
                <li><b>Simmetrica:</b> Se vado, torno ($a \\mathcal{R} b \\Rightarrow b \\mathcal{R} a$).</li>
                <li><b>Transitiva:</b> Ponte ($a \\mathcal{R} b \\land b \\mathcal{R} c \\Rightarrow a \\mathcal{R} c$).</li>
            </ol>
            <p><i>Nota:</i> Serve a "raggruppare" elementi simili.</p>
        `,
        examples: `
            <div style="background: #eff6ff; padding: 15px; border-radius: 10px; border-left: 4px solid #3b82f6;">
                <p><b>Intuizione: "Avere la stessa età"</b><br>
                - Io ho la mia età (Rifl).<br>
                - Se ho la tua età, tu hai la mia (Simm).<br>
                - Se Io=Tu e Tu=Lui, allora Io=Lui (Trans).</p>
                <hr>
                <p><b>Matematica: Congruenza Modulo $n$</b><br>
                $a \\equiv b \\pmod n$ (hanno lo stesso resto divisi per $n$).<br>
                È sempre una relazione di equivalenza.</p>
            </div>
        ` 
    },
    { 
        id: 305, 
        category: 'relazioni', 
        title: "2. Classi e Insieme Quoziente", 
        summary: "Definizione [a] e partizione indotta.", 
        details: `
            <p><b>Classe di Equivalenza $[a]$:</b> L'insieme di tutti gli elementi in relazione con $a$.<br>
            $[a] = \\{x \\in A \\mid x \\mathcal{R} a\\}$.</p>
            <p><b>Proprietà Fondamentale:</b> Due classi o sono <b>identiche</b> o sono <b>disgiunte</b> (non si sovrappongono).</p>
            <p><b>Insieme Quoziente $A/\\mathcal{R}$:</b> L'insieme che contiene le classi (le "scatole").</p>
        `,
        examples: `
            <div style="background: #eff6ff; padding: 15px; border-radius: 10px; border-left: 4px solid #3b82f6;">
                <p><b>Esempio:</b> $\\mathbb{Z}$ modulo 2 (Pari/Dispari).</p>
                <p>Ci sono solo 2 classi ("scatole"):</p>
                <ul>
                    <li>$[0]$: I numeri pari $\\{..., 0, 2, 4 ...\\}$</li>
                    <li>$[1]$: I numeri dispari $\\{..., 1, 3, 5 ...\\}$</li>
                </ul>
                <p>Il quoziente ha solo 2 elementi: $\\mathbb{Z}/_2 = \\{[0], [1]\\}$.</p>
            </div>
        ` 
    },
    { 
        id: 302, 
        category: 'relazioni', 
        title: "2. Classi e Quoziente", 
        summary: "Definizione [a] e partizione indotta.", 
        details: `
            <p><b>Classe $[a]$:</b> Tutti gli elementi in relazione con a.</p>
            <p><b>Quoziente $A/\\sim$:</b> L'insieme delle classi.</p>
            <p><b>Teorema Fondamentale:</b> Ogni relazione di equivalenza crea una partizione.</p>
        `,
        examples: `
            <div style="background: #eff6ff; padding: 15px; border-radius: 10px; border-left: 4px solid #3b82f6;">
                <p><b>Esempio: Congruenza Modulo 5</b></p>
                <p>$x \\sim y \\iff x-y$ è multiplo di 5.</p>
                <p><b>Chi sta in $[1]$?</b><br>
                $y$ tali che $1-y = 5k \\Rightarrow y = 1-5k$.<br>
                $\\{... -9, -4, 1, 6, 11 ...\\}$.</p>
                <p><b>Quoziente:</b> $\\{[0], [1], [2], [3], [4]\\}$.</p>
            </div>
        ` 
    },
    { 
        id: 303, 
        category: 'relazioni', 
        title: "3. Teorema Fondamentale (Rel vs Part)", 
        summary: "Corrispondenza tra Relazioni e Partizioni.", 
        details: `
            <p>C'è un legame profondo tra Relazioni e Partizioni:</p>
            <ul>
                <li><b>Relazione $\\to$ Partizione:</b> Le classi di equivalenza "tagliano" l'insieme in fette (blocchi) disgiunte.</li>
                <li><b>Partizione $\\to$ Relazione:</b> Se ho delle scatole, posso dire che "due elementi sono in relazione se stanno nella stessa scatola".</li>
            </ul>
            <p><b>Concetto:</b> La relazione è la <i>Regola</i>, la Partizione è il <i>Risultato</i> (i gruppi formati).</p>
        `,
        examples: `
            <div style="background: #eff6ff; padding: 15px; border-radius: 10px; border-left: 4px solid #3b82f6;">
                <p><b>Dalla Partizione alla Relazione:</b></p>
                <p>Immagina di dividere gli studenti in 3 aule (A, B, C).</p>
                <p>Questa è una <b>Partizione</b>.</p>
                <p>La <b>Relazione</b> indotta è:<br>
                $x \\sim y$ se e solo se $x$ e $y$ sono nella stessa aula.</p>
            </div>
        ` 
    },

    // --- 4. ARITMETICA (CORRETTO: Contenuti Espansi, Riassunti Puliti) ---
    { 
        id: 401, 
        category: 'aritmetica', 
        title: "1. Principio di Induzione", 
        summary: "Dimostrazioni per P(n): Base e Passo (Debole/Forte).", 
        details: `
            <p>Il principio serve a dimostrare che una proprietà $P(n)$ è vera per ogni $n \\ge n_0$.</p>
            <h4>Induzione Classica (Debole)</h4>
            <ol>
                <li><b>Base:</b> Dimostro che $P(n_0)$ è vera.</li>
                <li><b>Passo:</b> Assumo $P(n)$ vera (Ipotesi) $\\Rightarrow$ Dimostro $P(n+1)$ vera (Tesi).</li>
            </ol>
            <hr>
            <h4>Induzione Forte</h4>
            <p>Nel passo induttivo, assumo che $P(k)$ sia vera per <b>tutti</b> i $k < n$, e dimostro per $n$.</p>
            <p><i>Fondamentale quando $P(n)$ dipende da valori precedenti non consecutivi (es. $n-2$ o $n-3$).</i></p>
        `,
        examples: `
            <div style="background: #fff1f2; padding: 15px; border-radius: 10px; border-left: 4px solid #e11d48;">
                <p><b>Esercizio (Esame 04/02/22):</b> Dimostrare che $\\forall n \\ge 8, \\exists a,b \\in \\mathbb{N}_0 : n = 3a + 5b$.</p>
                <p><b>1. Passo Base:</b> Verifico i primi casi manualmente.<br>
                $n=8: 3(1)+5(1)$ (OK)<br>
                $n=9: 3(3)+5(0)$ (OK)<br>
                $n=10: 3(0)+5(2)$ (OK)</p>
                <p><b>2. Passo Induttivo (Forte):</b><br>
                Voglio dimostrare per un generico $n > 10$.<br>
                Osservo che $n = (n-3) + 3$.<br>
                Poiché $n > 10$, allora $n-3 \\ge 8$.<br>
                Per <b>ipotesi induttiva</b>, la proprietà vale per $n-3$:<br>
                $n-3 = 3a' + 5b'$.<br>
                Sostituisco:<br>
                $n = (3a' + 5b') + 3 = 3(a' + 1) + 5b'$.<br>
                Ho trovato i nuovi coefficienti ($a=a'+1, b=b'$). <b>C.V.D.</b></p>
            </div>
        ` 
    },
    { 
        id: 402, 
        category: 'aritmetica', 
        title: "2. MCD e Bèzout", 
        summary: "Algoritmo Euclideo Esteso per trovare x, y.", 
        details: `
            <p><b>Teorema di Bèzout:</b> Dati $a, b \\in \\mathbb{Z}$, il loro massimo comun divisore $d = MCD(a,b)$ è l'unico intero positivo scrivibile come combinazione lineare:</p>
            <p>$$ax + by = d$$</p>
            

[Image of flowchart of Euclidean algorithm]

            <p>Per trovare $x$ e $y$ si usa l'<b>Algoritmo Euclideo Esteso</b>:</p>
            <ol>
                <li>Fai le divisioni successive finché il resto è 0 per trovare l'MCD.</li>
                <li><b>Torni indietro</b> (Sostituzione a ritroso) isolando i resti per esprimere l'MCD come combinazione di a e b.</li>
            </ol>
        `,
        examples: `
            <div style="background: #fff1f2; padding: 15px; border-radius: 10px; border-left: 4px solid #e11d48;">
                <p><b>Esercizio (Esame 04/02/22):</b> Trovare soluzioni intere di $13x + 19y = 1$.</p>
                <p><b>Fase 1: Divisioni (Euclide)</b><br>
                (a) $19 = 13 \\cdot 1 + 6$ $\\rightarrow$ (isolo resto: $6 = 19 - 13 \\cdot 1$)<br>
                (b) $13 = 6 \\cdot 2 + 1$ $\\rightarrow$ (isolo resto: $1 = 13 - 6 \\cdot 2$)<br>
                (c) $6 = 1 \\cdot 6 + 0$ (Stop, MCD è 1).</p>
                <p><b>Fase 2: Risalita (Bèzout)</b><br>
                Parto dall'equazione (b) che contiene l'MCD (1):<br>
                $1 = 13 - 6 \\cdot 2$<br>
                Sostituisco il 6 usando l'equazione (a):<br>
                $1 = 13 - (19 - 13 \\cdot 1) \\cdot 2$<br>
                Svolgo i calcoli trattando 13 e 19 come "lettere" (NON fare le somme!):<br>
                $1 = 13 - 19 \\cdot 2 + 13 \\cdot 2$<br>
                Raggruppo i 13 e i 19:<br>
                $1 = 13(1 + 2) - 19(2)$<br>
                $1 = 13(3) + 19(-2)$</p>
                <p><b>Soluzione:</b> $x = 3, y = -2$.</p>
            </div>
        ` 
    },
    { 
        id: 403, 
        category: 'aritmetica', 
        title: "3. Congruenze e Inversi", 
        summary: "Risolvere ax = b (mod n) e calcolo inversi.", 
        details: `
            <p>Un'equazione $ax \\equiv b \\pmod n$ ha soluzioni se e solo se $d = MCD(a,n)$ divide $b$.</p>
            <p>Se $d=1$, esiste un'unica soluzione modulo $n$.</p>
            <h4>Come si risolve?</h4>
            <ol>
                <li>Controlla se $MCD(a,n)$ divide $b$.</li>
                <li>Trova l'<b>inverso moltiplicativo</b> di $a$ modulo $n$. L'inverso è quel numero $a^{-1}$ tale che $a \\cdot a^{-1} \\equiv 1 \\pmod n$.</li>
                <li>L'inverso si trova con Bèzout: $as + nt = 1 \\Rightarrow as \\equiv 1 \\pmod n$. Quindi $s$ è l'inverso.</li>
                <li>Moltiplica tutto per l'inverso: $x \\equiv a^{-1}b \\pmod n$.</li>
            </ol>
        `,
        examples: `
            <div style="background: #fff1f2; padding: 15px; border-radius: 10px; border-left: 4px solid #e11d48;">
                <p><b>Esercizio Base:</b> Risolvere $5x \\equiv 3 \\pmod{14}$.</p>
                <p>1. $MCD(5, 14) = 1$. Esiste soluzione unica.</p>
                <p>2. Cerco inverso di 5 mod 14. Uso Bèzout su 14 e 5:<br>
                $14 = 5 \\cdot 2 + 4$<br>
                $5 = 4 \\cdot 1 + 1$<br>
                Risalgo:<br>
                $1 = 5 - 4$<br>
                $1 = 5 - (14 - 5 \\cdot 2)$<br>
                $1 = 5(3) - 14(1)$</p>
                <p>Quindi $5(3) \\equiv 1 \\pmod{14}$. L'inverso è <b>3</b>.</p>
                <p>3. Moltiplico l'equazione originale per 3:<br>
                $3 \\cdot (5x) \\equiv 3 \\cdot 3 \\pmod{14}$<br>
                $15x \\equiv 9 \\pmod{14}$<br>
                $1x \\equiv 9 \\pmod{14}$.<br>
                <b>Soluzione:</b> $x = 9$.</p>
            </div>
        ` 
    },
    { 
        id: 404, 
        category: 'aritmetica', 
        title: "4. Sistemi di Congruenze", 
        summary: "Teorema Cinese del Resto (Metodo Sostituzione).", 
        details: `
            <p><b>Teorema Cinese del Resto:</b> Se i moduli $n_1, n_2...$ sono <b>coprimi a due a due</b> (cioè $MCD(n_i, n_j)=1$), allora esiste una soluzione unica modulo $N = n_1 \\cdot n_2...$.</p>
            <p><b>Metodo Pratico (Sostituzione):</b></p>
            <ol>
                <li>Prendi la prima equazione: $x \\equiv a \\pmod n$.</li>
                <li>Scrivila come uguaglianza: $x = n\\cdot k + a$.</li>
                <li>Sostituisci questa $x$ nella seconda equazione.</li>
                <li>Risolvi per $k$.</li>
                <li>Sostituisci $k$ indietro per trovare $x$.</li>
            </ol>
        `,
        examples: `
            <div style="background: #fff1f2; padding: 15px; border-radius: 10px; border-left: 4px solid #e11d48;">
                <p><b>Esercizio (Esame 22/02/22):</b><br>
                $\\begin{cases} x \\equiv 3 \\pmod 7 \\\\ x \\equiv 6 \\pmod{11} \\end{cases}$</p>
                <p><b>1. Dalla prima:</b> $x = 7k + 3$.</p>
                <p><b>2. Sostituisco nella seconda:</b><br>
                $(7k + 3) \\equiv 6 \\pmod{11}$<br>
                $7k \\equiv 3 \\pmod{11}$</p>
                <p><b>3. Risolvo per k:</b><br>
                Devo eliminare il 7. Cerco inverso di 7 mod 11.<br>
                ... calcoli Bèzout ... oppure provo: $7 \\cdot 8 = 56 = 11 \\cdot 5 + 1$. L'inverso è 8.<br>
                Moltiplico per 8:<br>
                $56k \\equiv 24 \\pmod{11} \\Rightarrow 1k \\equiv 2 \\pmod{11}$.<br>
                Quindi $k = 11h + 2$.</p>
                <p><b>4. Sostituisco k nella x originale:</b><br>
                $x = 7(11h + 2) + 3$<br>
                $x = 77h + 14 + 3$<br>
                $x = 77h + 17$.</p>
                <p><b>Soluzione:</b> $x \\equiv 17 \\pmod{77}$.</p>
            </div>
        ` 
    },

    // --- 5. MATRICI ---
    { 
        id: 501, 
        category: 'matrici', 
        title: "1. Operazioni e Rango", 
        summary: "Prodotto righe per colonne e Gauss.", 
        details: `
            <p><b>Prodotto:</b> $(AB)_{ij}$ è il prodotto scalare della riga $i$ di A per la colonna $j$ di B.</p>
            <p><b>Rango:</b> Numero massimo di righe indipendenti (o numero di pivot nella scala).</p>
        `,
        examples: `
            <div style="background: #fdf2f8; padding: 15px; border-radius: 10px; border-left: 4px solid #db2777;">
                <p><b>Esercizio:</b> Calcolare il rango di $A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ 0 & 1 & 1 \\end{pmatrix}$.</p>
                <p><b>Gauss:</b><br>
                $R_2 \\leftarrow R_2 - 2R_1$: $\\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 0 & 0 \\\\ 0 & 1 & 1 \\end{pmatrix}$.<br>
                Scambio $R_2$ e $R_3$: $\\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 0 \\end{pmatrix}$.</p>
                <p>Ci sono 2 pivot (1 e 1). <b>Rango = 2</b>.</p>
            </div>
        ` 
    },

    // --- 6. STRUTTURE ALGEBRICHE ---
    { 
        id: 601, 
        category: 'strutture', 
        title: "1. Gruppi e Sottogruppi", 
        summary: "Verifica proprietà Gruppo (Abeliano).", 
        details: `
            <p><b>Gruppo:</b> Associativa, Neutro, Inverso.</p>
            <p><b>Sottogruppo:</b> Chiuso rispetto al prodotto e all'inverso.</p>
        `,
        examples: `
            <div style="background: #e0f2fe; padding: 15px; border-radius: 10px; border-left: 4px solid #0284c7;">
                <p><b>Esercizio: Sottogruppo Matrici</b></p>
                <p>Insieme $M = \\{ \\begin{pmatrix} 1 & 0 \\\\ a & 1 \\end{pmatrix} \\mid a \\in \\mathbb{R} \\}$.</p>
                <p><b>Chiusura Prodotto:</b><br>
                $\\begin{pmatrix} 1 & 0 \\\\ a & 1 \\end{pmatrix} \\begin{pmatrix} 1 & 0 \\\\ b & 1 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ a+b & 1 \\end{pmatrix}$.<br>
                Sta ancora in M? Sì ($a+b \\in \\mathbb{R}$).</p>
                <p><b>Inverso:</b> $\\begin{pmatrix} 1 & 0 \\\\ -a & 1 \\end{pmatrix}$. Sta in M. OK.</p>
            </div>
        ` 
    },
    { 
        id: 602, 
        category: 'strutture', 
        title: "2. Omomorfismi", 
        summary: "Funzioni che conservano l'operazione.", 
        details: `
            <p><b>Omomorfismo:</b> $f(x * y) = f(x) \\circ f(y)$.</p>
            <p><b>Isomorfismo:</b> Omomorfismo biettivo.</p>
        `,
        examples: `
            <div style="background: #e0f2fe; padding: 15px; border-radius: 10px; border-left: 4px solid #0284c7;">
                <p><b>Esercizio: Test Omomorfismo</b></p>
                <p>$f: \\mathbb{R} \\to \\mathbb{Z}$, $f(x) = \\text{parte intera}(x)$.</p>
                <p>È omomorfismo per la somma?<br>
                $f(0.5 + 0.5) = f(1) = 1$.<br>
                $f(0.5) + f(0.5) = 0 + 0 = 0$.<br>
                $1 \\neq 0$. <b>NO</b>.</p>
                <hr>
                <p>$f(x) = 2^x$ (da somma a prodotto).<br>
                $f(x+y) = 2^{x+y} = 2^x \\cdot 2^y = f(x) \\cdot f(y)$. <b>SÌ</b>.</p>
            </div>
        ` 
    },
    
    // --- 7. SPAZI VETTORIALI ---
    { 
        id: 701, 
        category: 'vettori', 
        title: "1. Basi e Dimensione", 
        summary: "Indipendenza lineare e generatori.", 
        details: `
            <p><b>Base:</b> Generatori linearmente indipendenti.</p>
            <p><b>Dimensione:</b> Numero di vettori nella base.</p>
        `,
        examples: `
            <div style="background: #fdf4ff; padding: 15px; border-radius: 10px; border-left: 4px solid #c026d3;">
                <p><b>Esercizio:</b> Verificare se $v_1=(1,0), v_2=(1,1)$ sono base di $\\mathbb{R}^2$.</p>
                <p><b>Indipendenza:</b><br>
                $a(1,0) + b(1,1) = (0,0)$.<br>
                Sistema: $a+b=0$ e $b=0$.<br>
                Quindi $b=0, a=0$. Sono indipendenti.</p>
                <p>Sono 2 vettori in dim 2 $\\Rightarrow$ Sono una Base.</p>
            </div>
        `
    },

    // --- 9. DIAGONALIZZAZIONE ---
    { 
        id: 901, 
        category: 'diagonalizzazione', 
        title: "1. Autovalori e Autovettori", 
        summary: "Polinomio caratteristico e diagnolizzabilità.", 
        details: `
            <p><b>Autovalori:</b> Radici di $det(A - \\lambda I) = 0$.</p>
            <p><b>Diagonalizzabile:</b> Se per ogni autovalore, la molteplicità algebrica e geometrica coincidono.</p>
        `,
        examples: `
            <div style="background: #faf5ff; padding: 15px; border-radius: 10px; border-left: 4px solid #9333ea;">
                <p><b>Esercizio:</b> Autovalori di $A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}$.</p>
                <p>Matrice triangolare: gli autovalori sono sulla diagonale.<br>
                $\\lambda_1 = 2, \\lambda_2 = 3$.</p>
                <p>Sono distinti $\\Rightarrow$ A è diagonalizzabile.</p>
            </div>
        `
    }
];

document.addEventListener('DOMContentLoaded', () => {
    initPage(mdCategories, mdNotes, "Matematica Discreta");
});