class Solution:
    def maxIceCream(self, costs: List[int], coins: int) -> int:
        x=sorted(costs)
        summ=0
        count=0
        for i in range(len(costs)):
            if x[0]>coins:
                return 0
            if summ<coins:
                summ+=x[i]
                if summ<=coins:
                    count+=1
        return count

        