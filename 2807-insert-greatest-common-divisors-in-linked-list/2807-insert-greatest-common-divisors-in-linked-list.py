# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def insertGreatestCommonDivisors(self, head: Optional[ListNode]) -> Optional[ListNode]:
        current=head
        while current.next:
            x=gcd(current.val,current.next.val)
            new_node=ListNode(x)
            new_node.next=current.next
            current.next=new_node
            current=new_node.next
        return head