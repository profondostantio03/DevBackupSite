// Dati macro categorie Analisi Matematica
const analisiCategories = [
    { id: '1_basi_complessi', title: '1. Basi e Complessi', desc: 'Precorso, Insiemi, Induzione, N. Complessi', icon: 'ℂ', customColor: null },
    { id: '2_funzioni', title: '2. Funzioni Reali', desc: 'Dominio, Segno, Equazioni/Disequazioni', icon: 'ƒ', customColor: null },
    { id: '3_limiti', title: '3. Successioni e Limiti', desc: 'Teoremi, Forme Indeterminate, Asintoti', icon: ' a', customColor: null },
    { id: '4_derivate', title: '4. Calcolo Differenziale', desc: 'Derivate, Rolle, Lagrange, Grafici', icon: '📈', customColor: null },
    { id: '5_integrali', title: '5. Calcolo Integrale', desc: 'Indefiniti, Definiti, Metodi risolutivi', icon: '∫', customColor: null },
    { id: '6_piu_variabili', title: '6. Più Variabili', desc: 'Limiti 2D, Derivate Parziali, Gradiente', icon: 'xyz', customColor: null },
    { id: '7_serie', title: '7. Taylor e Serie', desc: 'Sviluppi polinomiali, Serie Numeriche', icon: '∑', customColor: null }
];

// Appunti specifici strutturati per l'esame
const analisiNotes = [
    // --- 1. PRECORSO E COMPLESSI ---
    { 
        id: '101', 
        category: '1_basi_complessi', 
        title: "1. Le basi: Risolvere Equazioni e Disequazioni", 
        summary: "Metodo del Delta per il secondo grado e Disequazioni Irrazionali.", 
        details: `
            <p><b>Equazioni di 2° Grado ($ax^2 + bx + c = 0$):</b></p>
            <p>Si risolvono con la formula: $$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$</p>
            <p>Il termine $\\Delta = b^2 - 4ac$ determina le soluzioni: se $> 0$ sono due distinte, se $= 0$ sono coincidenti, se $< 0$ non ci sono soluzioni in $\\mathbb{R}$ (si passa ai Complessi).</p>
            <hr>
            <p><b>Disequazioni Irrazionali (Indice Pari):</b></p>
            <p>Per risolvere $\\sqrt{A(x)} < B(x)$, bisogna garantire l'esistenza della radice e la concordanza dei segni. Si imposta un sistema a 3 condizioni rigorose:</p>
            <ol>
                <li>$A(x) \\ge 0$ (Il radicando non può essere negativo).</li>
                <li>$B(x) > 0$ (Una radice pari restituisce valori positivi, quindi ciò che è strettamente maggiore di essa deve essere positivo).</li>
                <li>$A(x) < [B(x)]^2$ (Elevo tutto al quadrato).</li>
            </ol>
        `,
        examples: `
            <div style="background: #f0f9ff; padding: 15px; border-radius: 10px; border-left: 4px solid #0ea5e9;">
                <p><b>Esempio pratico (Esercitazione 1 e 25 Febbraio):</b></p>
                <p>Risolviamo $x^2 - 5x + 6 = 0$.</p>
                <p>1. Calcolo il $\\Delta$: $(-5)^2 - 4(1)(6) = 25 - 24 = 1$.</p>
                <p>2. Applico la formula: $x = \\frac{5 \\pm \\sqrt{1}}{2}$.</p>
                <p>3. Soluzioni: $x_1 = 3$ e $x_2 = 2$.</p>
            </div>
        `,
        exercises: ""
    },
    { 
        id: '102', 
        category: '1_basi_complessi', 
        title: "2. Numeri Complessi: Algebrica e Trigonometrica", 
        summary: "Piano di Gauss, Modulo, Anomalia e Potenze.", 
        details: `
            <p>Quando $\\Delta < 0$, si introduce l'unità immaginaria $i$ tale che $i^2 = -1$.</p>
            <p>Un numero complesso si scrive come $z = a + ib$ (Forma Algebrica). $a$ è la parte reale (asse X), $b$ è la parte immaginaria (asse Y).</p>
            <hr>
            <p><b>Forma Trigonometrica:</b> $z = \\rho(\\cos \\theta + i \\sin \\theta)$</p>
            <ul>
                <li><b>Modulo (Lunghezza):</b> $\\rho = \\sqrt{a^2 + b^2}$.</li>
                <li><b>Anomalia (Angolo):</b> $\\theta = \\arctan(\\frac{b}{a})$. Attenzione ai quadranti: se $a < 0$, aggiungi $\\pi$ (180 gradi) per posizionare l'angolo correttamente.</li>
            </ul>
        `,
        examples: `
            <div style="background: #fdf2f8; padding: 15px; border-radius: 10px; border-left: 4px solid #db2777;">
                <p><b>Esercizio d'Esame (Traccia 02/09/2020):</b></p>
                <p>Scrivere in forma trigonometrica $z = -\\sqrt{3} - i$.</p>
                <hr>
                <p>1. $a = -\\sqrt{3}$, $b = -1$. Entrambe negative: siamo nel <b>terzo quadrante</b>.</p>
                <p>2. Modulo: $\\rho = \\sqrt{(-\\sqrt{3})^2 + (-1)^2} = \\sqrt{3+1} = 2$.</p>
                <p>3. Angolo: $\\arctan(\\frac{-1}{-\\sqrt{3}}) = \\arctan(\\frac{1}{\\sqrt{3}}) = \\frac{\\pi}{6}$. Essendo nel terzo quadrante sommiamo $\\pi$: $\\theta = \\pi + \\frac{\\pi}{6} = \\frac{7\\pi}{6}$.</p>
                <p>4. Risultato: $z = 2(\\cos \\frac{7\\pi}{6} + i \\sin \\frac{7\\pi}{6})$.</p>
            </div>
        `,
        exercises: ""
    },

    // --- 2. FUNZIONI ---
    { 
        id: '201', 
        category: '2_funzioni', 
        title: "1. Il Dominio (Campo di Esistenza)", 
        summary: "Le tre regole d'oro per trovare dove una funzione esiste.", 
        details: `
            <p>Il Dominio (o C.E.) è l'insieme dei valori di $x$ per cui le operazioni della funzione hanno senso matematico. Cerca sempre questi 3 "punti critici":</p>
            <ol>
                <li><b>Frazioni:</b> Non si divide mai per zero. Poni il <b>Denominatore $\\neq 0$</b>.</li>
                <li><b>Radici Pari (es. $\\sqrt{x}$):</b> Non esistono radici reali di numeri negativi. Poni il <b>Radicando $\\ge 0$</b>. (Se la radice è dispari, esiste su tutto $\\mathbb{R}$).</li>
                <li><b>Logaritmi:</b> Esistono solo per numeri strettamente positivi. Poni l'<b>Argomento $> 0$</b>.</li>
            </ol>
            <p>Se ci sono più condizioni contemporaneamente, si mettono a <b>sistema</b> e si fa l'intersezione delle soluzioni.</p>
        `,
        examples: `
            <div style="background: #f0fdf4; padding: 15px; border-radius: 10px; border-left: 4px solid #16a34a;">
                <p><b>Esercizio Pratico (Esercitazione 20 Marzo):</b></p>
                <p>Trovare il dominio di $y = \\frac{x+2}{\\sqrt{x^2-x}}$.</p>
                <hr>
                <p>1. Abbiamo una frazione (denominatore $\\neq 0$) e una radice quadrata (radicando $\\ge 0$).</p>
                <p>2. Unendo le due regole, l'argomento della radice al denominatore deve essere STRETTAMENTE MAGGIORE di zero: $x^2 - x > 0$.</p>
                <p>3. Risolvo: $x(x - 1) > 0$. Radici: $0$ e $1$. Valori esterni (perché $> 0$): $x < 0 \\vee x > 1$.</p>
                <p>Dominio: $(-\\infty, 0) \\cup (1, +\\infty)$.</p>
            </div>
        `,
        exercises: ""
    },

    // --- 3. LIMITI ---
    { 
        id: '301', 
        category: '3_limiti', 
        title: "1. Sbloccare le Forme Indeterminate", 
        summary: "Limiti Notevoli, Asintotici e Regola di De L'Hopital.", 
        details: `
            <p>Quando il calcolo di un limite restituisce $\\frac{0}{0}$ oppure $\\frac{\\infty}{\\infty}$, bisogna sbloccarlo.</p>
            <p><b>1. Stime Asintotiche e Limiti Notevoli:</b> Quando $x \\to 0$, le funzioni si "semplificano" in polinomi:</p>
            <ul>
                <li>$\\sin(x) \\sim x$ (Il seno si comporta come il suo argomento).</li>
                <li>$1 - \\cos(x) \\sim \\frac{1}{2}x^2$.</li>
                <li>$e^x - 1 \\sim x$.</li>
                <li>$\\ln(1+x) \\sim x$.</li>
            </ul>
            <p><b>2. Regola di De L'Hopital:</b> Se hai $\\frac{0}{0}$ o $\\frac{\\infty}{\\infty}$, fai la derivata del numeratore da solo, poi la derivata del denominatore da solo, e riprova a calcolare il limite.</p>
            <p><b>3. Gerarchia degli Infiniti:</b> Per $x \\to +\\infty$, chi vince? Esponenziale ($e^x$) > Potenze ($x^n$) > Logaritmo ($\\ln x$).</p>
        `,
        examples: "",
        exercises: ""
    },

    // --- 4. DERIVATE E STUDIO DI FUNZIONE ---
    { 
        id: '401', 
        category: '4_derivate', 
        title: "1. Il significato della Derivata e i Punti Critici", 
        summary: "Cosa sono Crescenza, Decrescenza e Teorema di Rolle.", 
        details: `
            <p><b>Geometria della Derivata:</b> La derivata prima in un punto $f'(x_0)$ rappresenta il coefficiente angolare (la pendenza) della retta tangente al grafico in quel punto.</p>
            <ul>
                <li>Se $f'(x) > 0$: La funzione sta <b>crescendo</b> (va in salita).</li>
                <li>Se $f'(x) < 0$: La funzione sta <b>decrescendo</b> (va in discesa).</li>
                <li>Se $f'(x) = 0$: La tangente è piatta (orizzontale). È un <b>Punto Stazionario</b> (possibile Massimo, Minimo o Flesso a tangente orizzontale).</li>
            </ul>
            <hr>
            <p><b>Teorema di Rolle:</b> Se una funzione è continua su un intervallo chiuso $[a,b]$, derivabile all'interno, e ha la stessa altezza agli estremi ($f(a) = f(b)$), allora esiste <b>per forza</b> almeno un punto intermedio in cui la derivata è zero ($f'(c) = 0$).</p>
        `,
        examples: "",
        exercises: ""
    },

    // --- 5. INTEGRALI ---
    { 
        id: '501', 
        category: '5_integrali', 
        title: "1. Integrazione di Funzioni Razionali Fratte", 
        summary: "Come integrare i polinomi fratti con il metodo A e B.", 
        details: `
            <p>Sia da calcolare $\\int \\frac{N(x)}{D(x)} dx$.</p>
            <p><b>1. Gradi:</b> Se il Grado di $N(x) \\ge$ Grado di $D(x)$, la prima cosa da fare è la <b>divisione tra polinomi</b>.</p>
            <p><b>2. Denominatore di 2° grado ($\\Delta > 0$):</b> Se il denominatore ha due soluzioni $x_1$ e $x_2$, si scompone in $(x - x_1)(x - x_2)$. La frazione complessa si "spacca" nella somma di due frazioni semplici:</p>
            <p>$$\\frac{N(x)}{(x - x_1)(x - x_2)} = \\frac{A}{x - x_1} + \\frac{B}{x - x_2}$$</p>
            <p>L'integrale di $\\frac{A}{x - x_1}$ è sempre $A \\cdot \\ln|x - x_1|$.</p>
        `,
        examples: `
            <div style="background: #fffbeb; padding: 15px; border-radius: 10px; border-left: 4px solid #f59e0b;">
                <p><b>Esercizio d'Esame (Traccia 02/09/2020):</b></p>
                <p>Calcolare $\\int \\frac{5x-1}{x^2-x-2} dx$.</p>
                <hr>
                <p>1. Grado Num (1) < Grado Den (2). Niente divisione.</p>
                <p>2. Scompongo $x^2 - x - 2 = 0$. Soluzioni: $2$ e $-1$. Denominatore: $(x-2)(x+1)$.</p>
                <p>3. Imposto: $\\frac{5x-1}{(x-2)(x+1)} = \\frac{A}{x-2} + \\frac{B}{x+1}$.</p>
                <p>4. Faccio m.c.m. a destra: $A(x+1) + B(x-2) = 5x - 1$.</p>
                <p>5. Sostituisco $x=2 \\implies A(3) + B(0) = 9 \\implies A=3$.</p>
                <p>6. Sostituisco $x=-1 \\implies A(0) + B(-3) = -6 \\implies B=2$.</p>
                <p>7. Risolvo l'integrale: $\\int \\frac{3}{x-2} dx + \\int \\frac{2}{x+1} dx = 3\\ln|x-2| + 2\\ln|x+1| + C$.</p>
            </div>
        `,
        exercises: ""
    },

    // --- 7. SERIE NUMERICHE ---
    { 
        id: '701', 
        category: '7_serie', 
        title: "1. La Serie Geometrica (Focus 12 CFU)", 
        summary: "Il carattere della serie basato sulla Ragione q.", 
        details: `
            <p>La Serie Geometrica si presenta nella forma $\\sum_{n=0}^{\\infty} q^n$, dove $q$ è detta <b>Ragione</b>.</p>
            <p>Il comportamento della serie dipende esclusivamente da $q$:</p>
            <ul>
                <li>Se $|q| < 1$ (cioè $-1 < q < 1$): La serie <b>Converge</b> (ha un valore finito) e la sua somma è $S = \\frac{1}{1-q}$.</li>
                <li>Se $q \\ge 1$: La serie <b>Diverge</b> positivamente.</li>
                <li>Se $q \\le -1$: La serie è <b>Irregolare</b> (o indeterminata).</li>
            </ul>
        `,
        examples: `
            <div style="background: #f0fdf4; padding: 15px; border-radius: 10px; border-left: 4px solid #16a34a;">
                <p><b>Esercizio d'Esame (Traccia 02/09/2020):</b></p>
                <p>Studiare la serie numerica $\\sum_{n=0}^{\\infty} (\\frac{1}{2})^n$.</p>
                <hr>
                <p>1. È una serie geometrica con ragione $q = \\frac{1}{2}$.</p>
                <p>2. Poiché $-1 < \\frac{1}{2} < 1$, la serie <b>Converge</b>.</p>
                <p>3. Calcolo la somma: $S = \\frac{1}{1 - 1/2} = \\frac{1}{1/2} = 2$.</p>
            </div>
        `,
        exercises: ""
    }
];

document.addEventListener('DOMContentLoaded', () => {
    initPage(analisiCategories, analisiNotes, "Analisi Matematica - Archivio Universitario");
});