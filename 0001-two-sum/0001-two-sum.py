class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        ar=set([])
        for x in range(len(nums)):
            if target-nums[x] in ar:
                return [x,nums.index(target-nums[x])]
            else:
                ar.add(nums[x])