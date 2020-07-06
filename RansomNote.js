let canConstruct = function(ransomNote, magazine) {
    let i=0;
    while(i<ransomNote.length){
    let index=magazine.indexOf(ransomNote[i]);
    (0<=index) ? (magazine=magazine.substring(0,index)+magazine.substring(index+1)) : i=-1;
    if(i==-1) return false;
    i++;}
    return true;};

/*

Given an arbitrary ransom note string and another string containing letters from all the magazines, 
write a function that will return true if the ransom note can be constructed from the magazines ; 
otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true

*/