// MathHelper Utilities

/**
 * Normalizes user input for algebra comparison.
 * - Removes spaces, commas, multiplication signs.
 * - Swaps number-letter order (y4 -> 4y).
 */
export function smartNormalize(str) {
    let s = str.toLowerCase();
    s = s.replace(/\s/g, '').replace(',', '.').replace(/\*/g, '');
    s = s.replace(/([a-zåäö])([0-9]+)/g, '$2$1'); // Fixa y4 -> 4y
    return s;
}

/**
 * Validates input against a list of correct answers.
 * Returns feedback HTML object { html: string, isCorrect: boolean }
 */
export function getValidationResult(input, answers) {
    const cleanInput = smartNormalize(input);
    const cleanAnswers = answers.map(a => smartNormalize(a));
    
    if (cleanAnswers.includes(cleanInput)) {
        let html = "<span class='correct'>✅ Rätt!</span>";
        if (input.match(/[a-z][0-9]/i)) {
            html += "<span class='tip'>Tips: Siffran först (4y)!</span>";
        }
        return { html, isCorrect: true };
    } else {
        return { 
            html: "<span class='wrong'>❌ Inte riktigt. Försök igen eller tryck på 💡!</span>", 
            isCorrect: false 
        };
    }
}

export function showHint(hintText) {
    const box = document.getElementById('hint-box');
    if (!box) return;
    box.innerHTML = hintText;
    box.style.display = "block";
}

export function resetUI(prefix) {
    document.getElementById(`${prefix}-input`).value = "";
    document.getElementById(`${prefix}-feedback`).innerHTML = "";
    const hBox = document.getElementById(`${prefix}-hint`) || document.getElementById('hint-box');
    if (hBox) hBox.style.display = "none";
    document.getElementById(`${prefix}-input`).focus();
}
