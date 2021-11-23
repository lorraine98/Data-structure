import Heap from "./MyHeap.js";

const heap = new Heap();

let cnt = 20;
while (cnt--) {
  heap.push(Math.floor(Math.random() * 1000));
}

// let nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];
// nums.forEach((num) => heap.push(num));
console.log(heap);
while (heap.size()) {
  console.log(heap.pop());
}
// console.log(heap.pop());
// console.log(heap.pop());
// console.log(heap.pop());
