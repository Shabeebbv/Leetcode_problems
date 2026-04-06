class Solution:
    def targetIndices(self, nums: List[int], target: int) -> List[int]:
     arr=[]
     x=sorted(nums)
     for i in range(len(nums)):
        if x[i]==target:
            arr.append(i)
     return arr