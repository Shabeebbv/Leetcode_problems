class Solution:
    def nextGreatestLetter(self, letters: List[str], target: str) -> str:
        alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
        x=0
        y=None
        for i in range(len(letters)):
            if alphabet.index(letters[i])>alphabet.index(target):
                x=alphabet.index(letters[i])
                if  y==None or alphabet.index(y)>x:
                    y=letters[i]
        if y is None:
            return letters[0]
        else:
            return y