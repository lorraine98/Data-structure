class Node {
  constructor(data) {
    this.next = this.prev = null;
    this.data = data;
  }
}

export default class LinkedList {
  constructor() {
    this.head = this.tail = new Node();
    this.size = 0;
  }

  pushFront(data) {
    this.pushAt(this.head, data);
  }

  pushBack(data) {
    this.pushAt(this.tail, data);
  }

  popFront() {
    return this.remove(this.head.next);
  }

  popBack() {
    return this.remove(this.tail);
  }

  pushAt(curNode, data) {
    const newNode = new Node(data);
    const nextNode = curNode.next;

    curNode.next = newNode;
    newNode.prev = curNode;
    newNode.next = nextNode;

    if (nextNode) {
      nextNode.prev = newNode;
    }
    if (curNode === this.tail) {
      this.tail = newNode;
    }
    this.size++;
  }

  remove(curNode) {
    const prevNode = curNode.prev;
    const nextNode = curNode.next;

    prevNode.next = nextNode;

    if (nextNode) {
      nextNode.prev = prevNode;
    }
    if (curNode === this.tail) {
      this.tail = prevNode;
    }
    this.size--;
  }

  clean() {
    while (this.size > 0) {
      this.popBack();
    }
  }

  print() {
    let curNode = this.head.next;
    while (curNode) {
      console.log(curNode);
      curNode = curNode.next;
    }
  }
}
