class Solution:
    def countEven(self, num: int) -> int:
        count=0
        for x in range(1,num+1):
                digits = list(map(int, str(x)))
                if sum(digits)%2==0:
                    count+=1
        return count
        