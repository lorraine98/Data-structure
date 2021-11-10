import LinkedList from "./MyLinkedList.js";

const linkedList = new LinkedList();

linkedList.pushBack(1);
linkedList.pushBack(2);
linkedList.pushBack(3);
linkedList.pushBack(4);
linkedList.pushFront(0);

linkedList.remove(linkedList.head.next.next.next);
linkedList.print();
