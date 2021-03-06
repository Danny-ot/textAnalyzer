$(document).ready(function(){
    $("#form").submit(function(event){
        event.preventDefault();

        const textPassage = $("#text-passage").val();
        const word = $("#word").val();

        $("#text-words").text(wordCount(textPassage));
        $("#text-sentences").text(sentenceCount(textPassage))
        $(".word").text(word);
        $("#word-times").text(noOfWordOccurences(word , textPassage))
        $("#bold-pass").html(boldedWordsPassage(word , textPassage))
        $("#threeMostCommon").html(threemostCommon(textPassage))
        $(".ans-block").show();
    })
})