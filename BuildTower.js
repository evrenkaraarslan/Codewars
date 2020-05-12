function towerBuilder(nFloors) {
    my_list=[];
    var a=1;
    for(var i=1;i<nFloors;i++)
    { my_list.push(' '.repeat((nFloors*2-1-a)/2)+'*'.repeat(a)+' '.repeat((nFloors*2-1-a)/2));
      a+=2;
    }
      my_list.push('*'.repeat(a));
      return my_list;}
/*
##Build Tower##

Build Tower
Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

JavaScript: returns an Array;


for example, a tower of 3 floors looks like below

[
  '  *  ', 
  ' *** ', 
  '*****'
]
and a tower of 6 floors looks like below

[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]
*/