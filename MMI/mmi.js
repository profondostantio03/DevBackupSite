// --- DATI MACRO CATEGORIE MMI ---
const mmiCategories = [
    { id: 'orale', title: 'Esame Orale', desc: 'Discorso completo', icon: '🗣️', customColor: 'style-purple' }
];

// --- APPUNTI SPECIFICI MMI ---
const mmiNotes = [
    { 
        id: 1, 
        category: 'orale', 
        title: "Discorso Esame Orale (3 Minuti)", 
        summary: "Logica, Insiemi, Ricorsione e Alberi.", 
        details: `
            <h4 style="color: var(--primary-color);">Macroarea 1 – Logica Proposizionale</h4>
            <p>Il mio percorso parte dalla logica proposizionale, che è la forma più elementare di logica formale. Gli enunciati — chiamati proposizioni — possono assumere solo due valori di verità: <b>vero</b> o <b>falso</b>.</p>
            <p>Le proposizioni vengono combinate tra loro attraverso i connettivi logici. I principali sono cinque:</p>
            <ul>
                <li>La <b>congiunzione</b> ($\\land$) che è vera solo quando entrambe le proposizioni sono vere;</li>
                <li>La <b>disgiunzione</b> ($\\lor$), che è vera quando almeno una delle due proposizioni è vera;</li>
                <li>La <b>negazione</b> ($\\neg$), che inverte il valore di verità;</li>
                <li>L'<b>implicazione</b> ($\\rightarrow$), che è falsa solo quando l'antecedente è vero e il conseguente è falso;</li>
                <li>L'<b>equivalenza</b> ($\\leftrightarrow$), che è vera quando le due proposizioni hanno lo stesso valore di verità.</li>
            </ul>
            <p>Oltre all'implicazione originale $p \\rightarrow q$, abbiamo l'inverso ($q \\rightarrow p$), l'opposto ($\\neg p \\rightarrow \\neg q$) e il contronominale ($\\neg q \\rightarrow \\neg p$). Di questi, <b>solo il contronominale è logicamente equivalente all'implicazione originale.</b></p>
            <p>Per analizzare le proposizioni composte si usano le <b>tavole di verità</b>. Una proposizione vera per ogni possibile assegnazione è una <b>tautologia</b>; se è sempre falsa è una <b>contraddizione</b>.</p>
            <p>Esistono equivalenze notevoli per semplificare le formule:</p>
            <ul>
                <li>Leggi di De Morgan: $\\neg(p \\land q) \\equiv \\neg p \\lor \\neg q$ e $\\neg(p \\lor q) \\equiv \\neg p \\land \\neg q$;</li>
                <li>Il contronominale: $p \\rightarrow q \\equiv \\neg q \\rightarrow \\neg p$;</li>
                <li>La distributiva: $p \\land (q \\lor r) \\equiv (p \\land q) \\lor (p \\land r)$.</li>
            </ul>
            <p>La logica proposizionale ha però dei limiti: non gestisce variabili, non esprime proprietà generali e non modella relazioni. Non possiamo esprimere "ogni studente è diligente". Per superare questo limite si introduce la logica predicativa.</p>

            <hr style="margin: 20px 0; border: 1px solid var(--glass-border);">

            <h4 style="color: var(--primary-color);">Macroarea 2 – Logica Predicativa</h4>
            <p>La logica predicativa aggiunge e si basa su:</p>
            <ul>
                <li>Le <b>costanti</b>, che rappresentano oggetti specifici (il numero 3);</li>
                <li>Le <b>variabili</b> ($x, y$), che rappresentano oggetti generici;</li>
                <li>I <b>predicati</b>, che esprimono proprietà o relazioni. $P(x)$ può significare "x è uno studente", $A(x,y)$ "x è amico di y";</li>
                <li>Il <b>dominio</b>, l'insieme degli oggetti che le variabili possono assumere.</li>
            </ul>
            <p>Un predicato $P(x)$ non è una proposizione finché non sostituiamo $x$ con una costante, ottenendo vero o falso (es. se $P(x)$ è "$x > 3$", allora $P(4)$ è vera e $P(2)$ è falsa).</p>
            <p>Si utilizzano inoltre i quantificatori:</p>
            <ul>
                <li>Universale ($\\forall x$): "per ogni x", la proprietà vale per tutti gli elementi del dominio;</li>
                <li>Esistenziale ($\\exists x$): "esiste un x", la proprietà vale per almeno un elemento.</li>
            </ul>
            <p>I quantificatori possono essere innestati, e in tal caso <b>l'ordine è fondamentale</b>. La logica dei predicati ci porta naturalmente al concetto di insieme.</p>

            <hr style="margin: 20px 0; border: 1px solid var(--glass-border);">

            <h4 style="color: var(--primary-color);">Macroarea 3 – Insiemi</h4>
            <p>Un insieme è una collezione non ordinata di oggetti distinti. L'ordine e la ripetizione non contano: $\\{a, b, c\\} = \\{c, b, b, a\\}$.</p>
            <p>Possiamo elencarli tra graffe o specificare una proprietà: $A = \\{x \\mid x \\text{ ha la proprietà } P\\}$. Questa notazione collega insiemi e predicati: l'insieme di verità di $P(x)$ su un dominio $D$ è $\\{x \\in D \\mid P(x)\\}$. Due insiemi speciali sono il vuoto ($\\emptyset$) e l'universale ($U$). Due insiemi sono uguali se $A = B \\iff \\forall x (x \\in A \\leftrightarrow x \\in B)$.</p>
            <p>Operazioni principali:</p>
            <ul>
                <li>Unione ($A \\cup B$): elementi in A oppure in B;</li>
                <li>Intersezione ($A \\cap B$): elementi in entrambi; (disgiunti se intersezione è vuota);</li>
                <li>Differenza ($A \\setminus B$): elementi in A ma non in B;</li>
                <li>Complemento ($\\overline{A}$): elementi di U non in A;</li>
                <li>Differenza simmetrica ($A \\oplus B$): elementi in A o in B, ma non in entrambi.</li>
            </ul>
            <p>Un concetto fondamentale è il <b>sottoinsieme</b>: $A \\subseteq B$ se $\\forall x (x \\in A \\rightarrow x \\in B)$. Per dimostrarlo si prende un arbitrario $x \\in A$ e si mostra che sta in $B$. Per confutarlo, basta un controesempio. Grazie al concetto di sottoinsieme possiamo collegarci alle stringhe e alla ricorsione.</p>

            <hr style="margin: 20px 0; border: 1px solid var(--glass-border);">

            <h4 style="color: var(--primary-color);">Macroarea 4 – Ricorsione</h4>
            <p>La ricorsione è la tecnica fondamentale per definire strutture complesse partendo da quelle più semplici. Una definizione ricorsiva è composta da:</p>
            <ul>
                <li><b>Passo base</b>: specifica gli elementi iniziali;</li>
                <li><b>Passo ricorsivo</b>: regola per costruire nuovi elementi da quelli già definiti.</li>
            </ul>
            <p>Ad esempio per i numeri dispari: $1 \\in A$ (base); se $x \\in A \\implies x + 2 \\in A$ (ricorsivo).</p>
            <p>La ricorsione è utilissima per le stringhe. Un alfabeto $\\Sigma$ è un insieme finito di elementi (es. binario $\{0,1\}$). L'insieme $\\Sigma^*$ di <b>tutte le stringhe</b> è definito ricorsivamente come:</p>
            <ul>
                <li>Base: $\\lambda \\in \\Sigma^*$ (stringa vuota);</li>
                <li>Ricorsivo: se $w \\in \\Sigma^*$ e $x \\in \\Sigma$, allora $wx \\in \\Sigma^*$.</li>
            </ul>
            <p>Da qui si derivano funzioni come la lunghezza: $|\\lambda| = 0$ e $|wx| = |w| + 1$.</p>
            <p>Quando definiamo un insieme ricorsivamente, dimostriamo le sue proprietà usando l'<b>Induzione Strutturale</b>. Basta dimostrare che la proprietà vale per gli elementi base, e che se vale per gli elementi vecchi, vale anche per i nuovi costruiti col passo ricorsivo.</p>
            <p>Esiste anche l'induzione matematica classica (su $\\mathbb{N}$), dimostrando $P(1)$ e poi $P(k) \\implies P(k+1)$. Ricorsione e induzione sono due facce della stessa medaglia: una definisce, l'altra dimostra. La massima espressione di ciò sono gli alberi.</p>

            <hr style="margin: 20px 0; border: 1px solid var(--glass-border);">

            <h4 style="color: var(--primary-color);">Macroarea 5 – Alberi</h4>
            <p>Gli alberi sono strutture dati gerarchiche che sfruttano ricorsione e induzione strutturale. Un <b>albero radicato</b> è formato da vertici (con uno speciale chiamato radice) e archi. I vertici diversi dalla radice hanno un unico genitore.</p>
            <p>L'insieme degli alberi radicati è definito ricorsivamente:</p>
            <ul>
                <li>Base: un singolo vertice (la radice) senza archi è un albero;</li>
                <li>Ricorsivo: presi più alberi radicati disgiunti, si costruisce un nuovo albero prendendo un nuovo vertice radice e collegandolo con un arco alle radici dei sottoalberi.</li>
            </ul>
            <p>Su questo si basano le definizioni ricorsive delle funzioni (valore base / valore ricorsivo):</p>
            <ul>
                <li>Numero di vertici (1 / 1 + somma vertici sottoalberi);</li>
                <li>Numero di archi (0 / numero sottoalberi + somma archi sottoalberi);</li>
                <li>Numero di foglie (1 / somma foglie sottoalberi);</li>
                <li>Nodi interni (0 / 1 + somma nodi interni sottoalberi);</li>
                <li>Altezza (0 / 1 + max altezza sottoalberi).</li>
            </ul>
            <p>Per induzione strutturale si dimostra il teorema fondamentale: <b>Il numero di vertici è uguale al numero di archi più 1</b>.</p>
            <p>Caso speciale sono gli <b>alberi binari</b> (max 2 figli). Distinguiamo:</p>
            <ul>
                <li>Albero Pieno: ogni nodo ha 0 o 2 figli;</li>
                <li>Albero Completo: è pieno e tutte le foglie sono alla stessa profondità.</li>
            </ul>
            <p>Teoremi (dimostrati sempre per induzione strutturale): in un albero binario non vuoto, il numero di foglie è uguale ai nodi pieni più 1. In un albero completo, foglie = $2^{\\text{altezza}}$ e vertici = $2^{\\text{altezza}+1}-1$.</p>
            <p><b>Conclusione:</b> Gli alberi sono l'esempio perfetto di come ricorsione e induzione strutturale lavorino insieme: la ricorsione definisce la struttura, l'induzione dimostra le proprietà. Questo conclude il mio percorso, dalla logica agli insiemi, per finire agli alberi.</p>
        `,
        examples: "",
        exercises: `
            <div style="background: #fdf2f8; padding: 15px; border-radius: 10px; border-left: 4px solid #db2777;">
                <p><b>Note per l'esposizione:</b></p>
                <ul>
                    <li><b>Durata stimata:</b> circa 3 minuti.</li>
                    <li><b>Punti chiave da ricordare:</b> definizione ricorsiva di albero radicato, funzioni (numero di vertici, archi, foglie, nodi interni, altezza), alberi binari, pieni e completi, teoremi principali.</li>
                    <li><b>Consiglio fondamentale:</b> All'orale <b>NON</b> dire "$|V|$" o "$|E|$". Pronuncia sempre le parole per esteso: "<i>numero di vertici</i>" invece di $|V|$, "<i>numero di archi</i>" invece di $|E|$, "<i>numero di foglie</i>" invece di $f(T)$, ecc.</li>
                </ul>
            </div>
        `
    }
];

// --- INIZIALIZZAZIONE DELLA PAGINA MMI ---
document.addEventListener('DOMContentLoaded', () => {
    // Chiama la funzione initPage definita nel file script.js generale
    initPage(mmiCategories, mmiNotes, "MMI - Archivio di Gigi");
});