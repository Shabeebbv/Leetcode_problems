class Solution:
    def findKthPositive(self, arr: List[int], k: int) -> int:
        j=k
        for i in range(1,10000):
            if i not in arr:
                j-=1
                if j==0:
                    return i