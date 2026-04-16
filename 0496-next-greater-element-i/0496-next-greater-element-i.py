class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        arr=[]
        for i in range(len(nums1)):
            x=nums2.index(nums1[i])
            print(x)
            for j in range(x+1,len(nums2)):
                if nums2[j]>nums1[i]:
                    arr.append(nums2[j])
                    break;
            else:
                    arr.append(-1)
        return arr