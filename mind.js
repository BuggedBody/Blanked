

function checkMe(){
    if (document.getElementById("keyInput").value === ": 8&=)5+ 93 ?95=+*:!9 +*)+ 93 1*:;* :u_= 8&=)5+ 6=39&=.") {
        alert("What happened");
        console.log(
            'chess is a game of stRategy and skill, having to think two steps ahead of yoUr opponent. i met her through it. it feLt wEiRd having someone just randomly come up to you and ask to be Friends so i thought two steps ahead.'
        )
        document.getElementById("result").textContent = 'Question';
    } else if (document.getElementById("keyInput").value === "Time") {
        document.getElementById("result").textContent = 'I thought about it and heard she had a crush on me. I didnt really take it seriously even thought it was a joke yk. Maybe if you experienced this youd also think so too';
    } else if (document.getElementById("keyInput").value === "*)*)*)") {
        document.getElementById("result").textContent = 'But it wasnt a joke, she confessed to me when we attended a concert at our school';
    } else {
        checkKey();
    }
}

function checkKey() {
    var key = document.getElementById("keyInput").value;
    const keyGuide = {
        'a': ')', 'b': '6', 'c': ';', 'd': '8', 'e': '=', 'f': '3',
        'g': '~', 'h': '*', 'i': ':', 'j': '2', 'k': '', 'l': '-',
        'm': '5', 'n': '!', 'o': '9', 'p': '0', 'q': '$', 'r': '&',
        's': '?', 't': '+', 'u': "'", 'v': '_', 'w': '1', 'x': '"',
        'y': '@', 'z': '0',
        'A': ')', 'B': '6', 'C': ';', 'D': '8', 'E': '=', 'F': '3',
        'G': '~', 'H': '*', 'I': ':', 'J': '2', 'K': '/', 'L': '-',
        'M': '5', 'N': '!', 'O': '9', 'P': '0', 'Q': '$', 'R': '&',
        'S': '?', 'T': '+', 'U': "'", 'V': '_', 'W': '1', 'X': '"',
        'Y': '@', 'Z': '0',
        ')': 'a', '6': 'b', ';': 'c', '8': 'd', '=': 'e', '3': 'f',
        '~': 'g', '*': 'h', ':': 'i', '2': 'j', '/': 'k', '-': 'l',
        '5': 'm', '!': 'n', '9': 'o', '0': 'p', '$': 'q', '&': 'r',
        '?': 's', '+': 't', "'": 'u', '_': 'v', '1': 'w', '"': 'x',
        '@': 'y', '0': 'z',
    };
    const TheHeartsSentence = key.replace(/./g, char => keyGuide[char] || char);
    document.getElementById("result").textContent = TheHeartsSentence;
}
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        checkMe();
    }
});