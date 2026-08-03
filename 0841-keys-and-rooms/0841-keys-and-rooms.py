class Solution:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
        visited=set([0])
        stack=[0]
        while stack:
            current=stack.pop()
            for key in rooms[current]:
                if key not in visited:
                    stack.append(key)
                    visited.add(key)
        return len(visited) == len(rooms)