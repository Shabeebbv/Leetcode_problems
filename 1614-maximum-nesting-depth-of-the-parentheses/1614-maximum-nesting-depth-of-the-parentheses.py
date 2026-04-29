class Solution:
    def maxDepth(self, s: str) -> int:
        maxm=0
        now=0
        x=list(s)
        for i in range(len(x)):
            if x[i]=='(':
                now+=1
                if now>maxm:
                    maxm=now
            if x[i]==')':
                now-=1
        return maxm
