class Solution:
    def triangularSum(self, nums: List[int]) -> int:
            result=nums
            while len(result)>1:
                arr=[]
                for i in range(len(result)-1):
                    x=result[i]+result[i+1]
                    if x>=10:
                        arr.append(x-10)
                    else:
                        arr.append(x)
                result=arr
            return result[0]