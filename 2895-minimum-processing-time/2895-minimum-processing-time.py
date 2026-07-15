class Solution:
    def minProcessingTime(self, processorTime: List[int], tasks: List[int]) -> int:
        result=0
        processorTime.sort()
        tasks.sort(reverse=True)
        for x in range(len(processorTime)):
            result=max(result,processorTime[x]+tasks[4*x])
        return result