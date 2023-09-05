//Two pointer method 
//time complexity O(N) --> traversing entire list once
//space complexity O(1)

var detectCycle = function (head) {
  let slow = head;
  let fast = head;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
      fast = head; //after cycle is found, make fast pointer as head
      while (fast != slow) {
        slow = slow.next; //increase slow and fast by one
        fast = fast.next;
      }
      return slow;
    }
  }
  return null;
};
