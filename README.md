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