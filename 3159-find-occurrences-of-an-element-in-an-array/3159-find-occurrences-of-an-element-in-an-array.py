class Solution:
    def occurrencesOfElement(self, nums: List[int], queries: List[int], x: int) -> List[int]:
        result=[]
        w=[]
        for i in range(len(nums)):
            if nums[i]==x:
                w.append(i)
        z=len(w)
        for y in queries:
            if y<=z:
                result.append(w[y-1])
            else:
                result.append(-1)
        return result
        