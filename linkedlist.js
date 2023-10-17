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
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;

        return this;
    }

    pop(value) {
        if (!this.head) {
            return this;
        }

        const newNode = new Node(value);

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            const temp = this.head;
            const pre = null;

            while (!temp.next) {
                pre = temp;
                temp = temp.next;
            }
        }
        this.length--;

        return this;
    }
}

let myLinkedList = new LinkedList(7);
console.log(myLinkedList.push(4));
