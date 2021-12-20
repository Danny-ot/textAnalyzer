//Utility Logic 
function noSpacesAndWord(text, word){
    return ((text.trim().length === 0) || (word.trim().length === 0) );
}

//Business Logic
function wordCount(text) {
    if(noSpacesAndWord(text)){
        return 0 ;
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
    if (noSpacesAndWord(sentence)) {
        return 0;
    }
    const sentenceArray = sentence.split(".");
    sentenceArray.forEach(function (element) {
        sentenceCount++;
    })
    return sentenceCount;
}

function noOfWordOccurences(word , text){
    if(noSpacesAndWord(text , word)){
        return 0 ;
    }
}