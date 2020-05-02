## Simple Pig Latin ##
def pig_it(text):
    a=text.split(" ")
    b=""
    c=""
    for i in a:
        b=i[:1]
        if b.isalnum()==True:
            c+=i[1:]+b+"ay"+" "
        else:
            c+=i+" "
    return print(c[:-1])

'''
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pig_it('Pig latin is cool') # igPay atinlay siay oolcay
pig_it('Hello world !')     # elloHay orldway !

'''