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
	}

	printList() {
		let temp = this.head;
		while (temp !== null) {
			console.log(temp.value);
			temp = temp.next;
		}
	}

	getHead() {
		if (this.head === null) {
			console.log('Head: null');
		} else {
			console.log('Head: ' + this.head.value);
		}
	}

	getTail() {
		if (this.tail === null) {
			console.log('Tail: null');
		} else {
			console.log('Tail: ' + this.tail.value);
		}
	}

	makeEmpty() {
		this.head = null;
		this.tail = null;
		this.length = 0;
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
	}

	findMiddleNode() {
		let slow = this.head;
		let fast = this.head;

		while (fast !== null && fast.next !== null) {
			slow = slow.next;
			fast = fast.next.next;
		}

		return slow;
	}
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.push(6);
myLinkedList.push(7);
myLinkedList.push(8);

console.log('Original list:');
myLinkedList.printList();

const middleNode = myLinkedList.findMiddleNode();
console.log(`\nMiddle node value: ${middleNode.value}`);
