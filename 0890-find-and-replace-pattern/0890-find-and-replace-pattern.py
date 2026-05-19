class Solution:
    def findAndReplacePattern(self, words: List[str], pattern: str) -> List[str]:
        result=[]
        seen={}
        count=0
        arr=[]
        for y in pattern:
            if y not in seen:
                seen[y]=count
                count+=1
            arr.append(seen[y])
        for x in words:
            xseen={}
            xcount=0
            xarr=[]
            value=x
            for z in value:
                if z not in xseen:
                    xseen[z]=xcount
                    xcount+=1
                xarr.append(xseen[z])
            if xarr==arr:
                result.append(x)
        return result