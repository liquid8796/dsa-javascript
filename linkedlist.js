class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        if (this.length === 0) {
            this.head = new Node(value);
            this.tail = this.head;
            this.length = 1;
        } else {
        }
    }
}

let myLinkedList = new LinkedList(4);
console.log(myLinkedList);
