class Solution:
    def frequencySort(self, s: str) -> str:
        obj={}
        arr=[]
        ans=""
        for x in s:
            if x in obj:
                obj[x]+=1
            else:
                obj[x]=1
        for key,values in obj.items():
            arr.append(obj[key])
            # print(y)
        arr=sorted(arr,reverse=True)
        for freq in arr:
            for key, values in obj.items():
                if obj[key] == freq and key not in ans:
                    ans += key * freq
        return ans
            