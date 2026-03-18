class Solution(object):
    def canBeEqual(self, target, arr):
        x=sorted(target)
        y=sorted(arr)
        return x==y

        