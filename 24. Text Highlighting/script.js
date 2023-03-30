
function sub() {
    const paragraph = document.getElementById("mainText");

    const words = paragraph.textContent.split(" ");

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (word.length > 8) {

            words[i] = '<span style="background-color: yellow">' + word + '</span>';
        }
    }

    const highlightedText = words.join(" ");

    paragraph.innerHTML = highlightedText;

}

