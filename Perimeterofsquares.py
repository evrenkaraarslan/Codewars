## Perimeter of squares in a rectangle
def perimeter(n):
 my_list=[1]
 c,d=1,0
 for i in range(1,n+1):
  my_list.append(c)
  c=my_list[i-1]+c
 for i in my_list:
  d+=i
 return d*4

'''
The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to 
see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80

The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n)
 and returns the total perimeter of all the squares.

perimeter(5)  should return 80
perimeter(7)  should return 216
'''