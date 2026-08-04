class Solution:
    def findMatrix(self, nums: list[int]) -> list[list[int]]:
        freq={}
        for x in nums:
            if x in freq:
                freq[x]+=1
            else:
                freq[x]=1
        result=[]
        while any(value > 0 for value in freq.values()):
                row=[]
                for key in freq.keys():
                    if freq[key]>0:
                    
                        row.append(key)
                        freq[key]-=1
                result.append(row)
        
        return result