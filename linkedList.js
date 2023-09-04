class Node {
        constructor(data){
                this.head = data;
                this.next = null;
        }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(data) { //add method
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let currentPointer = this.head;
      while (currentPointer.next) {
        currentPointer = currentPointer.next;
      }
      currentPointer.next = newNode;
    }
    this.tail = newNode;
    this.size++;
  }

  find(data) { //find method
    let current = this.head;
    while (current) {
      if (current.head === data) {
        return current; // Return the node with the matching data
      }
      current = current.next;
    }
    return null; // Node with the specified data was not found
  }

  addInBtw(nodeDataToBeAdded, nodeDataToBeFetched){ //add node between another node method
        let nodeAddr = this.find(nodeDataToBeFetched);
        if(!nodeAddr){
              return null;  
        }else if (nodeAddr && !nodeAddr.next) {
          this.add(nodeDataToBeAdded);
        } else {
          let newNode = new Node(nodeDataToBeAdded);
          let node1 = nodeAddr;
          let node2 = nodeAddr.next;

          node1.next = newNode;
          newNode.next = node2;
          this.size++;
        }
  }

  remove(data){
    if(!this.head)
    return;
    
    let current = this.head;
    if(current.head === data){
      this.head = current.next;
      this.size--;
      return;
    }

    
    let prev = null;

    while(current){
      if(current.head === data){
        if(!current.next){ //for removing last element(tail)
          this.tail = prev;
          this.tail.next = null;
        }
        else
        prev.next = current.next;
        this.size--;
      }
      prev = current;
      current = current.next;
    }

  }
}

const linkedList = new LinkedList();
linkedList.add(150);
linkedList.add(200);
linkedList.add(300);
linkedList.add(750);
linkedList.remove(300);
// linkedList.addInBtw(750, 150);

console.log("linkedList", linkedList);