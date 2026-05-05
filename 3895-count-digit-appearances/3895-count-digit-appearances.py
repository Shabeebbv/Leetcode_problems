class Solution:
    def countDigitOccurrences(self, nums: list[int], digit: int) -> int:
        count=0
        d=str(digit)
        for i in range(len(nums)):
            x=list(str(nums[i]))
            for j in x:
                if j==d:
                    count+=1
        return count
