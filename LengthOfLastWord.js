var lengthOfLastWord = (s) => {
    var a=s.trim().split(' ')
    return (a[a.length-1]).length;}

/*
Another solution :

var lengthOfLastWord = (s) => {
    if(!s){return 0;}
    s=s.split(" ");
    for(var i=s.length-1;0<=i;i--){
    if((s[i])){ return s[i].length}}
    return 0;}

*/

/*
Given a string s consists of upper/lower-case alphabets and empty 
space characters ' ', return the length of last word (last word means 
the last appearing word if we loop from left to right) in the string.

If the last word does not exist, return 0.

Note: A word is defined as a maximal substring consisting of non-space 
characters only.

Example:

Input: "Hello World"
Output: 5

*/
