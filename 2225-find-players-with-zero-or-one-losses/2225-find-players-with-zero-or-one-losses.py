class Solution:
    def findWinners(self, matches: List[List[int]]) -> List[List[int]]:
        obj={}
        ans1=set()
        ans2=set()
        for x in range(len(matches)):
                val=matches[x]
                if val[1] in obj:
                    obj[val[1]]+=1
                else:
                    obj[val[1]]=1
        print(obj)
        for i in range(len(matches)):
            res=matches[i]
            for j in res:
                if j in obj: 
                    if obj[j]==1:
                        ans1.add(j)
                else:
                    ans2.add(j)
        return [sorted(ans2),sorted(ans1)]