//10-->16-->20

class List{
        constructor(data){
                this.head = {
                value : data,
                next : null
                }
                this.tail = this.head;
                this.length = 1;
        }
        appendNode(nodeData){
                let newNode = {
                        value: nodeData,
                        next: null
                };
                this.tail.next = newNode;
                this.tail = newNode;
                this.length +=1;
        }
}

let mylist = new List(20);
mylist.appendNode(40);
mylist.appendNode(50);
console.log(mylist);