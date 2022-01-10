 # Application Details
### Application Author: [
    Name : Oladeji Daniel
    Github: Danny-ot
    PhoneNumber: 09021241205
    Email: oladejidaniel456@gmail.com
]

### Application Technology: [
    HTML
    CSS
    JAVASCRIPTS
    GIT
    Github
]

### Application Description
*This an application about text analyzing*

### Application Git Branches: [
    main(default branch)
]

### Application challenges : 
1. I had challenges when i was writing the function for the wordCount
2. I had challenges when i was creating the function for three most Commom Words
3. I had challenges when i was debugging my code
4. I had challenges when i was creating my user interface

### Application Github  Information : [
    Repository Name : textAnalyzer
    Remote URL : git remote add origin https://github.com/Danny-ot/textAnalyzer.git
]




Describe: wordCount()

Test : It should return 1 for just 1 word
code:
const text = "hello";
wordCount(text);
Expected Output: 1

Test : It should return 2 for two words
code:
const text = "hello there";
wordCount(text);
Expected Output: 2;

Test : It should return the number of words inputted
code:
const text = "hello hi this daniel";
wordCount(text);
Expected Output : 4;

Test : It should return 0 for an empty String
code:
const text = "";
wordCount(text);
Expected Output : 0;

Test : It should return 0 is the user inputs just spaces
code:
const text = "          ";
wordCount(text);
Expected Output : 0;

Test : It should not count number as a string
code:
const text = "You are 22 yrs old"
wordCount(text);
Expected Output : 4;



Describe: sentenceCount()

Test : It should be able to return 1 for a word 
code :
const word : "Hello"
sentenceCount(word);
Expected Output : 1;

Test : It should return 1 for an inputted sentence
code : 
const sentence : "Danny is the best";
sentenceCount(sentence);
Expected output : 1;

Test : It should be able to return the number of sentences inputted 
code :
const sentence : "Danny is the best. He is handsome";
sentenceCount(sentence);
Expected Output : 2

Test : It should return 0 for an empty string
code : 
const sentence : "";
sentenceCount(sentence);
Expected Output : 0

Test : It should return 0 if only spaces are inputted
code :
const sentence = "      " ;
sentenceCount(sentence);
Expected Output = 0;


Describe : noOfWordOccurences()

Test : It should return 0 for an empty string in the text
code :
const text = "";
const word = "red";
noOfWordOccurences(text , word);
Expected Output = 0;

Test : It should return 0 for an empty string in word
code :
const text = "red boy red";
const word = "";
noOfWordOccurences(text , word);
Expected Output = 0;

Test : It should return 1 occurence if the word and the text are the same
code :
const text = "red";
const word = "red";
noOfWordOccurences(text , word);
Expected Output = 1;

Test : It should return 0 occurence if the text and word are different
code : 
const text = "red";
const word = "blue";
noOfWordOccurences(text , word);
Expected Output = 0;

Test : It should return the number of occurences of a word in a text
code :
const text = "red red red blue red";
const word = "red";
noOfWordOccurences(text , word);
Expected Output = 4;

Test : It should return the number of occurences regardless of the case
code :
const text = "red Red red blue red";
const word = "RED";
noOfWordOccurences(text , word);
Expected Output = 4;

Test : It should return the number of occurences regardless of the punctuation
code :
const text = "red Red red! blue red";
const word = "RED";
noOfWordOccurences(text , word);
Expected Output = 4;


Describe : threeMostCommonWords()

Test : It should return zero if there are no words inputted or if there are only spaces inputted.
code :
const text : "  ";
threeMostCommonWords(text);
Expected Output = 0;

Test : It should be able to return the number of words in a text
code :
const text = "danny is a handsome guy";
threeMostCommonWords(text);
Expected Output = 5;

Test : It should be able to return the most commom word in the sentence
code :
const text = "red red red boy";
threeMostCommonWords(text);
Expected Output = red;

Test : It should be able to return the most commom word in the sentence with the number of occurences
code :
const text = "red red red boy";
threeMostCommonWords(text);
Expected Output = red : 3;

Describe: boldPassage()

Test: "It should return a non-matching word in a p tag."
Code:
const word = "hello";
const text = "yo";
boldPassage(word, text);
Expected Output: "<p>yo</p>"

Test: "It should return a matching word in a b tag."
Code:
const word = "hello";
const text = "hello";
boldPassage(word, text);
Expected Output: "<p><b>hello</b></p>"

Test: "It should wrap words that match in `b` tags but not words that don't."
Code:
const word = "hello";
const text = "hello there";
boldPassage(word, text);
Expected Output: "<p><b>hello</b> there</p>"

