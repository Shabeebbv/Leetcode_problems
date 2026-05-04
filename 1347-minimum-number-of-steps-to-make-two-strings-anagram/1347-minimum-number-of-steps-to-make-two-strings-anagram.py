class Solution:
    def minSteps(self, s: str, t: str) -> int:
        ct={}
        cs={}
        steps=0
        for i in range(len(s)):
            val=s[i]
            if val in cs:
                cs[val]+=1
            else:
                cs[val]=1
        for x in range(len(t)):
            val=t[x]
            if val in ct:
                ct[val]+=1
            else:
                ct[val]=1
        for w in ct:
            if w in cs:
                if ct[w]>cs[w]:
                    steps+=ct[w]-cs[w]
            else:
                steps+=ct[w]
        return steps