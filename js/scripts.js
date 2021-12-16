function wordCount(text){
   const textArray = text.split(" ");
   let wordCount = 0;
   if(text.trim().length === 0 ){
       return wordCount;
   }
   textArray.forEach(element => {
       if(!Number(element)){
           wordCount ++;
       }
       
   });
   return wordCount;
}

function sentenceCount(sentence){
    return 1 ;
}