import Heap from "./MyHeap.js";

const heap = new Heap();

let nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];
nums.forEach((num) => heap.push(num));
console.log(heap);
console.log(heap.pop());
console.log(heap.pop());
console.log(heap.pop());
console.log(heap.pop());
