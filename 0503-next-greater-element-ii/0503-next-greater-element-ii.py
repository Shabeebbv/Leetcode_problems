class Solution:
    def nextGreaterElements(self, nums: List[int]) -> List[int]:
        x=[]
        for i in range(len(nums)):    
            for j in range(i,len(nums)):
                if nums[j]>nums[i]:
                    x.append(nums[j])
                    break
            if len(x)!=i+1:
                for k in range(len(nums)):
                    if nums[k]>nums[i]:
                        x.append(nums[k])
                        break
            if len(x)!=i+1:
                x.append(-1)
        return x