document.write("<div id='binaryWrapper' style='font-size: 36px;'>"); // Increased font size
var hebrewLetters = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ', 'ק', 'ר', 'ש', 'ת']; // Add more letters as needed
var lastSelectedIndex = -1;

for (var i = 0; i < 50000; i++) { // Increased the number of iterations for more letters
    var randomIndex = Math.floor(Math.random() * hebrewLetters.length);

    // Ensure consecutive letters are not the same
    while (randomIndex === lastSelectedIndex) {
        randomIndex = Math.floor(Math.random() * hebrewLetters.length);
    }

    lastSelectedIndex = randomIndex;
    var selectedLetter = hebrewLetters[randomIndex];

    if (Math.random() > 0.2) { // Increased the chance of highlighting
        document.write("<span class='digit binaryDigit' style='font-size: 36px;'>" + selectedLetter + "</span>"); // Increased font size
    } else {
        document.write("<span class='digit binaryDigitColored' style='font-size: 36px;'>" + selectedLetter + "</span>"); // Increased font size
    }
}
document.write("</div>");

var elements = document.getElementsByClassName("binaryDigitColored");
var staticElements = [];
for (var i = 0; i < elements.length; i++) {
    staticElements.push(elements[i]);
}

setInterval(function() {
    for (var i = 0; i < staticElements.length; i++) {
        if (Math.random() > 0.4) { // Increased the pulsing frequency
            staticElements[i].setAttribute("class", "binaryDigit");
        } else {
            var index = Math.floor(Math.random() * staticElements.length);
            staticElements[index].removeAttribute("class", "binaryDigit");
            staticElements[index].setAttribute("class", "binaryDigitColored");
        }
    }
}, 300);

