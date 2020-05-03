def namelist(names):
    a = ", ".join([i["name"] for i in names])[::-1].replace(",", "& ", 1)[::-1]
    return a

'''
Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the 
last two names, which should be separated by an ampersand.

Example:

namelist([ {'name': 'Bart'}, {'name': 'Lisa'}, {'name': 'Maggie'} ])
# returns 'Bart, Lisa & Maggie'

namelist([ {'name': 'Bart'}, {'name': 'Lisa'} ])
# returns 'Bart & Lisa'

namelist([ {'name': 'Bart'} ])
# returns 'Bart'

namelist([])
'''