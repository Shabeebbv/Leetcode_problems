class Solution(object):
    def doesAliceWin(self,s):
        vowels='aeiou'
        for i in range(len(s)):
            if s[i] in vowels:
                return True
        return False
        