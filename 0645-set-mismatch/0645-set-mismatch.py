class Solution:
    def findErrorNums(self, nums: List[int]) -> List[int]:
        x=sorted(nums)
        missing=None
        duplicate=None
        for i in range(len(nums)):
            if i<len(nums)-1:
                if x[i]==x[i+1]:
                    duplicate=x[i]
            if i+1 not in x:
                missing=i+1
        return [duplicate,missing]