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
                <p><b>Esercizio 1:</b> Descrivere per elencazione $A = \\{ x \\in \\mathbb{Z} \\mid x^2 < 10 \\}$.</p>
                <p><b>Svolgimento:</b><br>
                Cerco gli interi il cui quadrato è minore di 10.<br>
                Quadrati: $0, 1, 4, 9, 16...$<br>
                Considero anche i negativi: $0, \\pm 1, \\pm 2, \\pm 3$.<br>
                <b>Soluzione:</b> $A = \\{-3, -2, -1, 0, 1, 2, 3\\}$.</p>
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
        id: 202, 
        category: 'applicazioni', 
        title: "1. Iniettiva e Suriettiva", 
        summary: "Definizioni e test pratici.", 
        details: `
            
            <p><b>Iniettiva:</b> $x_1 \\neq x_2 \\Rightarrow f(x_1) \\neq f(x_2)$.</p>
            <p><b>Suriettiva:</b> $\\forall y \\in B, \\exists x \\in A : f(x)=y$. (Tutto il codominio è coperto).</p>
            <p><b>Biettiva:</b> Iniettiva + Suriettiva.</p>
        `,
        examples: `
            <div style="background: #fefce8; padding: 15px; border-radius: 10px; border-left: 4px solid #eab308;">
                <p><b>Es 1:</b> $f: \\mathbb{R} \\to \\mathbb{R}, f(x) = 3x - 5$.</p>
                <p><b>Iniettiva?</b> $3x_1-5 = 3x_2-5 \\Rightarrow x_1=x_2$. (SÌ)</p>
                <p><b>Suriettiva?</b> $y = 3x-5 \\Rightarrow x = (y+5)/3$. Esiste sempre. (SÌ)</p>
                <hr>
                <p><b>Es 2:</b> $f: \\mathbb{Z} \\to \\mathbb{Z}, f(n) = n^2$.</p>
                <p><b>Iniettiva?</b> No, $f(2)=4, f(-2)=4$.</p>
                <p><b>Suriettiva?</b> No, i negativi non sono quadrati.</p>
            </div>
        `
    },
    { 
        id: 203, 
        category: 'applicazioni', 
        title: "2. Composizione e Inversa", 
        summary: "Calcolo di g(f(x)) e f^-1.", 
        details: `
            <p><b>Composizione:</b> $(g \\circ f)(x) = g(f(x))$. Si applica prima la funzione interna (f).</p>
            <p><b>Inversa:</b> Esiste solo se biettiva. Scambia dominio e codominio.</p>
        `,
        examples: `
            <div style="background: #fefce8; padding: 15px; border-radius: 10px; border-left: 4px solid #eab308;">
                <p><b>Dati:</b> $f(x) = x + 1$ e $g(x) = x^2$.</p>
                <p><b>Calcolo $g \\circ f$:</b><br>
                $(g \\circ f)(x) = g(x+1) = (x+1)^2 = x^2 + 2x + 1$.</p>
                <p><b>Calcolo Inversa di $y=3x-5$:</b><br>
                Isolo la x: $y+5 = 3x \\Rightarrow x = \\frac{y+5}{3}$.<br>
                $f^{-1}(y) = \\frac{y+5}{3}$.</p>
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
            <p>Una relazione è di equivalenza se è:</p>
            <ol>
                <li><b>Riflessiva:</b> $a \\sim a$</li>
                <li><b>Simmetrica:</b> $a \\sim b \\Rightarrow b \\sim a$</li>
                <li><b>Transitiva:</b> $a \\sim b \\land b \\sim c \\Rightarrow a \\sim c$</li>
            </ol>
        `,
        examples: `
            <div style="background: #eff6ff; padding: 15px; border-radius: 10px; border-left: 4px solid #3b82f6;">
                <p><b>Test:</b> $x \\sim y \\iff x - y$ è multiplo di 5 (in $\\mathbb{Z}$).</p>
                <p>1. <b>Rifl:</b> $x-x=0$ (è multiplo di 5). OK.</p>
                <p>2. <b>Simm:</b> Se $x-y=5k$, allora $y-x=-5k$. OK.</p>
                <p>3. <b>Trans:</b> Somma di multipli di 5 è multiplo di 5. OK.</p>
            </div>
        `
    },
    { 
        id: 302, 
        category: 'relazioni', 
        title: "2. Classi e Quoziente", 
        summary: "Calcolo delle classi [x].", 
        details: `
            <p><b>Classe [a]:</b> Tutti gli elementi in relazione con a.</p>
            <p><b>Quoziente $A/\\sim$:</b> L'insieme di tutte le classi distinte.</p>
        `,
        examples: `
            <div style="background: #eff6ff; padding: 15px; border-radius: 10px; border-left: 4px solid #3b82f6;">
                <p><b>Esercizio:</b> Trova le classi modulo 3 in $\\mathbb{Z}$.</p>
                <p>Ci sono 3 classi possibili (i resti della divisione per 3):</p>
                <ul>
                    <li>$[0] = \\{..., -3, 0, 3, 6, ...\\}$</li>
                    <li>$[1] = \\{..., -2, 1, 4, 7, ...\\}$</li>
                    <li>$[2] = \\{..., -1, 2, 5, 8, ...\\}$</li>
                </ul>
                <p>Quoziente $\\mathbb{Z}_3 = \\{[0], [1], [2]\\}$.</p>
            </div>
        `
    },
];

document.addEventListener('DOMContentLoaded', () => {
    initPage(mdCategories, mdNotes, "Matematica Discreta");
});