class Solution:
    def sortVowels(self, s: str) -> str:
        res=''
        vowels='AEIOUaeiou'
        temp=[]
        for i in s:
            if i in vowels:
                temp.append(i)
        temp.sort()
        print(temp)
        count=0
        for j in s:
            if j in vowels:
                res+=temp[count]
                count+=1
            else:
                res+=j
        return res