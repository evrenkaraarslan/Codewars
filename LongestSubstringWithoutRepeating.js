var lengthOfLongestSubstring=(s)=> {
    var first=0;
    var newlen=1;
    for(var last=1;last <s.length;last++){
        var sub = s.slice(first, last);
        var i = sub.indexOf(s[last]);
        if (i!==-1){
            first = first + i + 1;}
        newlen = (last-first+1)> newlen ? (last-first+1) : newlen;}
        var a=(s.length>0) ? newlen :  0;
        return a;
};


/*

Given a string, find the length of the longest substring without 
repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a 
subsequence and not a substring.

*/