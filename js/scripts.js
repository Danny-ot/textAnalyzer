//Utility Logic 
function noSpacesAndWordAndText(text, word) {
    return ((text.trim().length === 0) || (word.trim().length === 0));
}

function noSpacesAndText(text) {
    return (text.trim().length === 0)
}

//Business Logic
function wordCount(text) {
    if (noSpacesAndText(text)) {
        return 0;
    };
    const textArray = text.split(" ");
    let wordCount = 0;
    textArray.forEach(element => {
        if (!Number(element)) {
            wordCount++;
        }

    });
    return wordCount;
}

function sentenceCount(sentence) {
    let sentenceCount = 0;
    if (noSpacesAndText(sentence)) {
        return 0;
    }
    const sentenceArray = sentence.split(".");
    sentenceArray.forEach(function (element) {
        sentenceCount++;
    })
    return sentenceCount;
}

function noOfWordOccurences(word, text) {
    if (noSpacesAndWordAndText(text, word)) {
        return 0;
    }
    let wordCount = 0;
    const textArray = text.split(" ");
    textArray.forEach(function (element) {
        if (element.toLowerCase().includes(word.toLowerCase())) {
            wordCount++
        }
    })

    return wordCount;
}

function threemostCommon(str) {
    let stringArray = str.split(" ");
    let result = "<p>";

    stringArray.forEach(function (element) {

        result += element.concat(":" + " " + noOfWordOccurences(element, str)) + "<br>";

    })
    return result + "</p>"
};


function boldedWordsPassage(word, text) {
    if (noSpacesAndWordAndText(word, text)) {
        return "";
    }
    let textPassage = "<p>";
    const textArray = text.split(" ");
    textArray.forEach(function (element, index) {
        if (element.toLowerCase().includes(word.toLowerCase())) {
            textPassage = textPassage.concat("<b>" + element + "</b>");
        } else {
            textPassage = textPassage.concat(element)
        }
        if (index !== (textArray.length - 1)) {
            textPassage = textPassage.concat(" ")
        }

    })
    return textPassage + "</p>"
}

