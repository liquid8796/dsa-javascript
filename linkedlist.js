class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        if (this.length === 0) {
            this.head = new Node(value);
            this.tail = this.head;
            this.length = 1;
        } else {
            const newNode = new Node(value);
            this.tail.next = newNode;
            this.tail = new Node(value);
        }
    }
}

let myLinkedList = new LinkedList(4);
console.log(myLinkedList);
