class Solution:
    def isValid(self, s: str) -> bool:
        stack=[]
        pairs={')':'(',']':'[','}':'{'}
        for x in s:
            if x in '({[':
                stack.append(x)
            elif x in ')}]':
                if not stack:
                    return False
                if pairs[x]!=stack[-1]:
                        return False
                stack.pop()
        return len(stack)==0