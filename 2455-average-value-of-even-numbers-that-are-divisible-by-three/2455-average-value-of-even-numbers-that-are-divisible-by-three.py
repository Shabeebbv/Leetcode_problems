class Solution:
    def averageValue(self, nums: List[int]) -> int:
        sum=0
        arr=[]
        for i in nums:
            if i%3==0 and i%2==0:
                sum+=i
                arr.append(i)
        if sum==0:
            return 0
        return sum//len(arr)