function tokenisasi(value) {
    words = value.split(" ")
    wordmap = {}

    for (let i = 0; i < words.length; i++) {
        let currentWordCount = wordmap[words[i]];
        let count = currentWordCount ? currentWordCount : 0;
        wordmap[words[i]] = count + 1;
    }
    document.getElementById('falue').innerHTML = words.join("<br />");
    document.getElementById('falue_length').innerHTML = `Terdeteksi ada ${Object.keys(wordmap).length} kata.`;
}

document.getElementById('setring').addEventListener('keyup', event => {
    tokenisasi(event.target.value)
})