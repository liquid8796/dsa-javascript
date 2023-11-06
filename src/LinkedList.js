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

	pop() {
		if (!this.head) {
			return undefined;
		}

		let temp = this.head;
		let pre = this.head;

		while (temp.next) {
			pre = temp;
			temp = temp.next;
		}

		this.tail = pre;
		this.tail.next = null;
		this.length--;

		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}

		return temp;
	}

	unshift(value) {
		const newNode = new Node(value);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;

		return this;
	}

	shift() {
		if (!this.head) {
			return undefined;
		}

		let temp = this.head;
		this.head = this.head.next;
		temp.next = null;
		this.length--;

		if (this.length === 0) {
			this.tail = null;
		}

		return temp;
	}

	get(index) {
		if (index < 0 || index >= this.length) {
			return undefined;
		}

		let temp = this.head;
		for (let i = 0; i < index; i++) {
			temp = temp.next;
		}

		return temp;
	}

	set(index, value) {
		let temp = this.get(index);

		if (temp) {
			temp.value = value;
			return true;
		}

		return false;
	}

	insert(index, value) {
		if (index === 0) {
			return this.unshift(value);
		}
		if (index === this.length) {
			return this.push(value);
		}
		if (index < 0 || index > this.length) {
			return false;
		}

		const newNode = new Node(value);
		const temp = this.get(index - 1);

		newNode.next = temp.next;
		temp.next = newNode;
		this.length++;

		return true;
	}

	remove(index) {
		if (index === 0) {
			return this.shift();
		}
		if (index === this.length - 1) {
			return this.pop();
		}
		if (index < 0 || index >= this.length) {
			return undefined;
		}

		const before = this.get(index - 1);
		const temp = before.next;
		before.next = temp.next;
		temp.next = null;
		this.length--;

		return temp;
	}

	// reverse() {
	// 	let temp = this.head;
	// 	this.head = this.tail;
	// 	this.tail = temp;
	// 	let next = temp.next;
	// 	let prev = null;

	// 	for (let i = 0; i < this.length; i++) {
	// 		next = temp.next;
	// 		temp.next = prev;
	// 		prev = temp;
	// 		temp = next;
	// 	}
	// }

	reverse() {
		let mid = this.head;
		console.log(`mid = ${mid}`);
		this.head = this.tail;
		console.log(`head = ${this.head}`);
		this.tail = mid;
		console.log(`tail = ${this.tail}`);
		let fast = mid.next;
		console.log(`fast = ${this.tail}`);
		let slow = null;

		for (let i = 0; i < this.length; i++) {
			fast = mid.next;
			mid.next = slow;
			slow = mid;
			mid = fast;
		}
	}
}

let myLinkedList = new LinkedList(11);
myLinkedList.push(3);
myLinkedList.push(23);
myLinkedList.push(7);
myLinkedList.reverse();

console.log(myLinkedList);
