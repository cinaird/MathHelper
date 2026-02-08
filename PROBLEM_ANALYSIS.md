# 🧮 Analys: Algebraiska Uttryck & Målbild

## 1. Problemformulering (Matematiken)
Baserat på arbetsbladen (Bild 1 & 2) handlar kärnproblemet om att **översätta vardagliga situationer till matematiska uttryck**. Detta är grunden för all algebra och problemlösning.

Eleven måste behärska fyra huvudmoment:

### A. Pris & Antal (Multiplikation & Addition)
*   **Grund:** "Vad kostar x st bananer?" $\rightarrow$ $3x$
*   **Kombination:** "Vad kostar y äpplen och z apelsiner?" $\rightarrow$ $4y + 5z$
*   **Variabler som pris:** "En penna kostar x kr." $\rightarrow$ Priset är variabeln, inte antalet.

### B. Växel & Subtraktion (Det som blir kvar)
*   **Grund:** "Få tillbaka på 100 kr om du köper x bananer." $\rightarrow$ $100 - 3x$
*   **Komplex:** "Få tillbaka på 100 kr om du köper en penna (x) och tre sudd (y)." $\rightarrow$ $100 - x - 3y$ (eller $100 - (x + 3y)$)

### C. Längd & Förändring (Geometri)
*   **Minska:** "5 cm kortare än x." $\rightarrow$ $x - 5$
*   **Öka:** "7 cm längre än x." $\rightarrow$ $x + 7$
*   **Multiplicera:** "Dubbelt så lång som x." $\rightarrow$ $2x$
*   **Dividera:** "Hälften så lång som x." $\rightarrow$ $\frac{x}{2}$ (eller $0.5x$)

---

## 2. Pedagogiska Utmaningar
Vanliga fel som elever gör (och som appen bör fånga upp):
*   **Blandar ihop variabler:** Skriver $3y$ istället för $3x$.
*   **Glömmer operator:** Skriver $100 3x$ istället för $100 - 3x$.
*   **Fel ordning:** Skriver $x - 100$ istället för $100 - x$ vid växel.
*   **Additions-fällan:** Tror att "dubbelt" är $x + 2$ istället för $2x$.

---

## 3. Målbild för MathHelper (Spelet)

### Syfte
Att genom gamification mängdträna förmågan att **teckna uttryck** så att översättningen från svenska till mattespråk blir automatiserad.

### Spelmekanik & Progression
Appen ska vara uppdelad i "Stationer" som tränar specifika moment:

#### 🏪 Station 1: Kiosken (Handel)
*   **Fokus:** Pris, Antal, Växel.
*   **Scenario:** Kunder beställer varor. Spelaren är kassör.
*   **Exempel:** "Jag vill ha 5 bananer (x kr/st)." $\rightarrow$ Spelaren skriver $5x$.

#### 📏 Station 2: Snickarboa (Längd)
*   **Fokus:** Mer, Mindre, Dubbelt, Hälften.
*   **Scenario:** En bräda med längd $x$ kommer på bandet. Ordern säger "Kapa så den blir 5 cm kortare".
*   **Exempel:** Spelaren väljer verktyg ($-$) och värde ($5$) $\rightarrow$ $x - 5$.

### Tekniska Krav
*   **Input:** Flexibel textinmatning (ska klara både `3x` och `3*x`).
*   **Feedback:** Omedelbar visuell respons (rätt/fel). Vid fel ska det *rätta* svaret visas och förklaras kort ("Du drog av x från 100, men du ska dra 100 från x").
*   **Plattform:** Webb (Github Pages), mobilanpassad.

---

## 4. Nästa Steg
1.  Bygga **Menyn** för att välja station.
2.  Implementera **Snickarboa-motorn** (eftersom Kiosken redan finns i enkel form).
3.  Förfina **Input-logiken** (hantera `x/2` vs `0.5x`).
