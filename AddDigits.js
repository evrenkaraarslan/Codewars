var addDigits = function(num) {
    while(9<num){
        let last=num%10;
        let rest=Math.floor(num/10);
        num=last+rest;
    }
    return num;
};

/*

Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

Example:

Input: 38
Output: 2 
Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
             Since 2 has only one digit, return it.

*/