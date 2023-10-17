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
        const newNode = new Node(value);

        if (!this.head) {
            this.head = new Node(value);
            this.tail = this.head;
            this.length = 1;
        } else {
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
    }
}

let myLinkedList = new LinkedList(4);
console.log(myLinkedList);
