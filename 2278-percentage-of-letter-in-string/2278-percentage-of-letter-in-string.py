class Solution:
    def percentageLetter(self, s: str, letter: str) -> int:
        length=len(s)
        count=0
        for x in s:
            if x==letter:
                count+=1
        return math.floor(count/length*100)

        