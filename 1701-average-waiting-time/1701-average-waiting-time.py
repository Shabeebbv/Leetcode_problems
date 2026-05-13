class Solution:
    def averageWaitingTime(self, customers: List[List[int]]) -> float:
        result=0
        time_taken=0
        for i in customers:
            start=max(i[0],time_taken)
            cook=start+i[1]
            time_taken=cook
            finish=cook-i[0]
            print(finish)
            result+=finish
        return result/len(customers)