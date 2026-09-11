
def isPalindrome(x):
    if(x<0):
        return False

    xCopy = x
    rev = 0

    while(x>0):
        rem = x % 10
        rev = rev * 10 + rem
        x //= 10

    return xCopy == rev

print("palindrome is" ,isPalindrome(121))