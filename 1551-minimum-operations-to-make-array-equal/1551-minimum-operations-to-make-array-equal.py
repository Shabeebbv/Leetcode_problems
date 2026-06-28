class Solution:
    def minOperations(self, n: int) -> int:
        arr=[]
        for i in range(n):
            arr.append((i*2)+1)
        target=sum(arr)/n
        step=0
        for x in arr:
            step+=abs(target-x)
        return int(step/2)
            