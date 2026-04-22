class Solution:
    def dominantIndex(self, nums: List[int]) -> int:
        x=sorted(nums)
        for i in range(len(nums)-1):
            if x[i]*2>x[-1]:
                return -1
        return nums.index(x[-1])