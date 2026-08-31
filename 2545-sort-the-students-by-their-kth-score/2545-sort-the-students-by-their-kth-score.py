class Solution:
    def sortTheStudents(self, score: List[List[int]], k: int) -> List[List[int]]:
        row=lambda x:x[k]
        y= score.sort(key=row,reverse=True)
        return score