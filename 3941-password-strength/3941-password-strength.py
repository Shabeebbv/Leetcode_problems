class Solution:
    def passwordStrength(self, password: str) -> int:
        passs=set(password)
        result=0
        for x in passs:
            if x.islower():
                result+=1
            elif x.isupper():
                result+=2
            elif x.isdigit():
                result+=3
            else:
                result+=5
        return result