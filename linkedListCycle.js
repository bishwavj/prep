// Hash map approach --> takes huge space 
// time complexity O(N)
// space complexity O(N)
var hasCycle = function (head) {
  let current = head;
  let address = new Map();
  while (current) {
    if (address.has(current)) return true;
    else address.set(current);
    current = current.next;
  }
  return false;
};

//Floyd's cycle detection algo
//slow and fast pointer approach
// time complexity O(N)
// space complexity O(1)
var hasCycle = function (head) {
  let slow = head;
  let fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) return true;
  }
  return false;
};
