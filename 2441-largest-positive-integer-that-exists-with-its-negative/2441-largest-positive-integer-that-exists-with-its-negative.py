class Solution(object):
    def findMaxK(self, nums):
        srt=sorted(nums,reverse=True)
        for i in range(len(nums)):
            if srt[i] in nums and -srt[i] in nums:
                return srt[i]
        return -1