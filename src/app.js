document.getElementById('runButton').addEventListener('click', function() {
    const jsCode = document.getElementById('jsInput').value;
    const outputDiv = document.getElementById('output');

    // Clear previous output
    outputDiv.textContent = '';

    try {
        // Definiere vorprogrammierte Funktionen
        function vorprogrammierteFunktion1() {
            return 'Vorprogrammierte Funktion 1 aufgerufen!';
        }

        function vorprogrammierteFunktion2(param) {
            return `Vorprogrammierte Funktion 2 aufgerufen mit Parameter: ${param}`;
        }

        // Evaluieren des eingegebenen Codes
        eval(jsCode);

        // Wenn kein Fehler auftritt und keine spezielle Ausgabe, dann:
        if (outputDiv.textContent === '') {
            outputDiv.textContent = 'Code ausgeführt, keine Fehler.';
        }
    } catch (error) {
        outputDiv.textContent = 'Fehler: ' + error.message;
    }
});
