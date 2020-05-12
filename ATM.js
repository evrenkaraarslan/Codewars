function solve(n) {
    my_list=[500,200,100,50,20,10];
    var a=0;
    for(var i=0;i<my_list.length;i++){
     var b=Math.floor(n/my_list[i]);
     n=n-my_list[i]*b;
     a+=b;
     if (n===0){return a;}}
   if (n===0){return a;}
   else{ return -1;}}

/*
There is enough money available on ATM in nominal value
 10, 20, 50, 100, 200 and 500 dollars.

You are given money in nominal value of n with 
1<=n<=1500.

Try to find minimal number of notes that must be
 used to repay in dollars, or output -1 if it is
  impossible.

Good Luck!!!
*/