class Solution:
    def uncommonFromSentences(self, s1: str, s2: str) -> List[str]:
        se1=s1.split()
        se2=s2.split()
        sentance=se1+se2
        count={}
        res=[]
        for x in range(len(sentance)):
            value=sentance[x]
            if value in count:
                count[value]+=1
            else:
                count[value]=1
        for key in count:
            if count[key]==1:
                res.append(key)
        return res

        